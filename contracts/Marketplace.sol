// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

error NFTPriceNotMet(address nftAddress, uint256 tokenId, uint256 price, uint256 promptPrice);
error ItemNotForSale(address nftAddress, uint256 tokenId);
error NotListed(address nftAddress, uint256 tokenId);
error AlreadyListed(address nftAddress, uint256 tokenId);
error NoProceeds();
error NotOwner();
error NotApprovedForMarketplace();
error NFTPriceMustBeAboveZero();

// Prompt Error
error PromptIsNotBuyable(address nftAddress, uint256 tokenId, uint256 price, uint256 promptPrice);

contract NftMarketplace is ReentrancyGuard {
    // Chainlink DataFeed
    AggregatorV3Interface internal dataFeed;
    address immutable i_link;
    // Avalanche Fuji USDC contract address
    address public usdc;
    
    /**
     * Network: Avalanche Fuji Testnet
     * LINK: 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846
     * Aggregator: LINK/AVAX
     * Address: 0x79c91fd4F8b3DaBEe17d286EB11cEE4D83521775
     * USDC: 0x5425890298aed601595a70AB815c96711a31Bc65
     */
    constructor(address link, address aggregatorAddr, address usdcAddress) {
        dataFeed = AggregatorV3Interface(aggregatorAddr);
        i_link = link; 
        usdc = usdcAddress;
    }

    IERC20 erc20 = IERC20(usdc);

    struct Listing {
        uint256 nftPrice;
        uint256 promptPrice;
        address seller;
    }

    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 nftPrice,
        uint256 promptPrice
    );

    event ItemCanceled(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    event ItemBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 nftPrice,
        uint256 promptPrice
    );

    // Prompt Event
    event PromptBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 nftPrice,
        uint256 promptPrice
    );

    mapping(address => mapping(uint256 => Listing)) private s_listings;
    mapping(address => mapping(uint256 => address[])) private s_promptBuyers;

    modifier notListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.nftPrice > 0) {
            revert AlreadyListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.nftPrice <= 0) {
            revert NotListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isOwner(
        address nftAddress,
        uint256 tokenId,
        address spender
    ) {
        IERC721 nft = IERC721(nftAddress);
        address owner = nft.ownerOf(tokenId);
        if (spender != owner) {
            revert NotOwner();
        }
        _;
    }

    /////////////////////
    // Main Functions //
    /////////////////////
    /*
     * @notice Method for listing NFT
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param nftPrice sale price for each item
     * @param promptPrice prompt price for each item
     */
    function listItem(
        address nftAddress,
        uint256 tokenId,
        uint256 nftPrice,
        uint256 promptPrice
    )
        external
        notListed(nftAddress, tokenId)
        isOwner(nftAddress, tokenId, msg.sender)
    {
        if (nftPrice <= 0) {
            revert NFTPriceMustBeAboveZero();
        }
        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenId) != address(this)) {
            revert NotApprovedForMarketplace();
        }
        s_listings[nftAddress][tokenId] = Listing(
            nftPrice,
            promptPrice,
            msg.sender
        );
        emit ItemListed(msg.sender, nftAddress, tokenId, nftPrice, promptPrice);
    }

    /*
     * @notice Method for cancelling listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function cancelListing(
        address nftAddress,
        uint256 tokenId
    )
        external
        isOwner(nftAddress, tokenId, msg.sender)
        isListed(nftAddress, tokenId)
    {
        delete (s_listings[nftAddress][tokenId]);
        emit ItemCanceled(msg.sender, nftAddress, tokenId);
    }

    /*
     * @notice Method for buying listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function buyItem(
        address nftAddress,
        uint256 tokenId,
        uint256 tokenAmount
    ) external payable isListed(nftAddress, tokenId) nonReentrant {
        Listing memory listedItem = s_listings[nftAddress][tokenId];

        uint256 _tokenAmount = roundToMillion(uint256(getChainlinkDataFeedLatestAnswer())) * listedItem.nftPrice / (10**8);

        if (tokenAmount != 0) {
             require(
                tokenAmount == _tokenAmount,
                "NFT ERC20 Price not met"
            );

            _tokenAmount = tokenAmount / (10**12);
            erc20.transferFrom(msg.sender, listedItem.seller, _tokenAmount);
        } else {
            require(msg.value == listedItem.nftPrice, "NFT Price not met");
            (bool success, ) = payable(listedItem.seller).call{value: listedItem.nftPrice}("");
            require(success, "Transfer failed");
        }

        delete (s_listings[nftAddress][tokenId]);
        IERC721(nftAddress).safeTransferFrom(
            listedItem.seller,
            msg.sender,
            tokenId
        );
        emit ItemBought(
            msg.sender,
            nftAddress,
            tokenId,
            listedItem.nftPrice,
            listedItem.promptPrice
        );
    }

    /*
     * @notice Method for buying NFT prompt
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function buyPrompt(
        address nftAddress,
        uint256 tokenId,
        uint256 tokenAmount
    ) external payable nonReentrant {
        Listing memory listedItem = s_listings[nftAddress][tokenId];

        // Prompt must be buyable
        if (listedItem.promptPrice <= 0) {
            revert PromptIsNotBuyable(
                nftAddress,
                tokenId,
                listedItem.nftPrice,
                listedItem.promptPrice
            );
        }

        uint256 _tokenAmount = roundToMillion(uint256(getChainlinkDataFeedLatestAnswer())) * listedItem.promptPrice / (10**8);

        if (tokenAmount != 0) {
            require(
                tokenAmount == _tokenAmount,
                "NFT Prompt ERC20 Price not met"
            );

            _tokenAmount = tokenAmount / (10**12);
            erc20.transferFrom(msg.sender, listedItem.seller, _tokenAmount);
        } else {
            require(
                msg.value == listedItem.promptPrice,
                "NFT Prompt Price not met"
            );
            (bool success, ) = payable(listedItem.seller).call{value: listedItem.promptPrice}("");
            require(success, "Transfer failed");
        }

        // add Prompt buyer
        address[] storage promptBuyers = s_promptBuyers[nftAddress][tokenId];
        promptBuyers.push(msg.sender);
        s_promptBuyers[nftAddress][tokenId] = promptBuyers;

        emit PromptBought(
            msg.sender,
            nftAddress,
            tokenId,
            listedItem.nftPrice,
            listedItem.promptPrice
        );
    }

    /*
     * @notice Method for updating listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param newPrice Price in Wei of the item
     */
    function updateListing(
        address nftAddress,
        uint256 tokenId,
        uint256 newNFTPrice,
        uint256 newPromptPrice
    )
        external
        isListed(nftAddress, tokenId)
        nonReentrant
        isOwner(nftAddress, tokenId, msg.sender)
    {
        // Check the value of `newPrice` and revert if it's below zero
        if (newNFTPrice <= 0) {
            revert NFTPriceMustBeAboveZero();
        }

        s_listings[nftAddress][tokenId].nftPrice = newNFTPrice;
        s_listings[nftAddress][tokenId].promptPrice = newPromptPrice;
        emit ItemListed(
            msg.sender,
            nftAddress,
            tokenId,
            newNFTPrice,
            newPromptPrice
        );
    }

    /* TODO:
     * @notice Method for updating prompt price
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param newPrice Price in Wei of the item
     */
    function updatePromptPrice(
        address nftAddress,
        uint256 tokenId,
        uint256 newPromptPrice
    ) external nonReentrant isOwner(nftAddress, tokenId, msg.sender) {}

    /////////////////////
    // Getter Functions //
    /////////////////////

    function getListing(
        address nftAddress,
        uint256 tokenId
    ) external view returns (Listing memory) {
        return s_listings[nftAddress][tokenId];
    }

     function getListPromptBuyers(
        address nftAddress,
        uint256 tokenId
    ) external view returns (address[] memory) {
        return s_promptBuyers[nftAddress][tokenId];
    }

    /**
     * Returns the latest LINK to AVAX price answer.
     */
    function getChainlinkDataFeedLatestAnswer() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return answer;
    }

    function getTokenPrice(address nftAddress, uint256 tokenId) public view returns (uint256, uint256) {
        Listing memory listedItem = s_listings[nftAddress][tokenId];
        return (listedItem.nftPrice, roundToMillion(uint256(getChainlinkDataFeedLatestAnswer())) * listedItem.nftPrice / (10**8));
    }

    function getPromptPrice(address nftAddress, uint256 tokenId) public view returns (uint256, uint256) {
        Listing memory listedItem = s_listings[nftAddress][tokenId];
        return (listedItem.promptPrice, roundToMillion(uint256(getChainlinkDataFeedLatestAnswer())) * listedItem.promptPrice / (10**8));
    }

    function roundToMillion(uint256 input) public pure returns (uint256) {
        // Round to the nearest million
        uint256 roundedValue = (input + 500000) / 1000000 * 1000000;
        return roundedValue;
    }
    
}
