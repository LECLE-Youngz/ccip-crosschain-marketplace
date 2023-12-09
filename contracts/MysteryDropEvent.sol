// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {VRFCoordinatorV2Interface} from "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import {VRFConsumerBaseV2} from "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import {ERC721Psi, ERC721PsiMysteryBox} from "./ERC721Psi/ERC721PsiMysteryBox.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @title MysteryDropEvent
/// based on MysteryBox.sol contract from @author HackBG Team (https://hack.bg)
/// @notice NFT collection with random token distribution, only for user who have bought minimum 5 NFTs from a specific Creator from NEXTHYPE
/// @dev Using Chainlink VRF for randomness
/// @dev Using Chainlink Function for verifying User's purchasing
contract MysteryDropEvent is
    ERC721PsiMysteryBox,
    ConfirmedOwner,
    FunctionsClient
{
    // Chainlink Function
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastError;

    uint32 gasLimit = 300000;

    // donID - Hardcoded for AvalancheFuji
    bytes32 donID =
        0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000;

    uint64 private immutable i_CLSubscriptionId;

    event MysteryNFTRequest(address subscriber, bytes32 requestId);
    event Response(bytes32 indexed requestId, bytes response, bytes err);

    // Chainlink VRF
    bytes32 private immutable i_vrfKeyHash;

    address private immutable i_vrfCoordinatorV2;

    uint64 private immutable i_vrfSubscriptionId;

    // MisteryEvent STATE
    uint256 private immutable i_maxSupply;
    /// @notice The base URI for tokens after it is revealed
    string private s_baseURI;
    /// @notice The Amount of NFTs required Subscriber to buy in order to participate in the MysteryDropEvent
    uint64 public nftPurchasedRequired;
    mapping(address => bytes32) public s_subscriberToRequestId;
    mapping(bytes32 => address) public s_requestIdToSubscriber;
    mapping(address => uint256) public s_subscriberToResponse;

    /// @notice The URI for all tokens before reveal
    string private s_unrevealedURI;

    /// @notice The provenance hash of all images in the collection
    string private s_provenanceHash;

    // Errors
    error UnexpectedRequestID(bytes32 requestId);

    error NotAllowed();

    error LimitPerUserExceeded();

    /* @note Hardcoded Chainlink Service for Avalanche Fuji network
       Chainlink Function router: 0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0
       Chainlink VRF CoordinatorV2: 0x2eD832Ba664535e5886b75D64C46EB9a228C2610
       Chainlink VRF KeyHash: 0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61
       Chainlink VRF is sponsored for the Creator by NEXTHYPE
    */
    constructor(
        string memory name,
        string memory symbol,
        string memory unrevealedURI,
        address premiumNFT,
        uint64 _nftPurchasedRequired,
        uint256 maxSupply,
        string memory baseURI,
        uint64 clSubscriptionId
    )
        FunctionsClient(0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0)
        ERC721PsiMysteryBox(0x2eD832Ba664535e5886b75D64C46EB9a228C2610)
        ERC721Psi(name, symbol)
        ConfirmedOwner(msg.sender)
    {
        i_maxSupply = maxSupply;
        i_vrfKeyHash = 0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61;
        s_unrevealedURI = unrevealedURI;
        i_CLSubscriptionId = clSubscriptionId;
        i_vrfCoordinatorV2 = 0x2eD832Ba664535e5886b75D64C46EB9a228C2610;
        // Chainlink VRF is sponsored for the Creator by NEXTHYPE
        i_vrfSubscriptionId = 814;
        nftPurchasedRequired = _nftPurchasedRequired;
        s_baseURI = baseURI;
        nft = IERC721(premiumNFT);
        transferOwnership(tx.origin);
    }

    IERC721 nft;

    string source =
        "const addressCreator = args[0]"
        "const addressBuyer = args[1]"
        "const checkNFTPurchasedRequest = await Functions.makeHttpRequest({"
        "url: `https://metadata-storage.azurewebsites.net/api/v1/socials/creator/${addressCreator}/buyer/${addressBuyer}`"
        "})"
        "if (checkNFTPurchasedRequest.error) {"
        "console.error(checkNFTPurchasedRequest.error)"
        "throw Error('Request failed')}"
        "const { data } = checkNFTPurchasedRequest"
        "const nftBought = data.numBuy"
        "return Functions.encodeUint256(nftBought)";

    // Chainlink Function
    function sendRequest(
        string[] memory args
    ) external returns (bytes32 requestId) {
        require(
            nft.balanceOf(msg.sender) > 0,
            "Sender haven't subscribed to creator"
        );

        // Subscriber can only call the Request once so they have to make sure they buy enough NFTs of that creator
        require(
            s_subscriberToRequestId[msg.sender] != 0,
            "The Subscriber's already requested Mystery minting"
        );

        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);

        if (args.length > 0) req.setArgs(args);

        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            i_CLSubscriptionId,
            gasLimit,
            donID
        );

        s_subscriberToRequestId[msg.sender] = s_lastRequestId;
        s_requestIdToSubscriber[s_lastRequestId] = msg.sender;
        emit MysteryNFTRequest(msg.sender, s_lastRequestId);
        return s_lastRequestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId);
        }
        s_lastError = err;
        if (bytesToUint(response) >= nftPurchasedRequired) {
            safeMint(s_requestIdToSubscriber[s_lastRequestId]);
            s_subscriberToResponse[s_requestIdToSubscriber[s_lastRequestId]] = bytesToUint(response);
        }
        else {
            s_subscriberToResponse[s_requestIdToSubscriber[s_lastRequestId]] = bytesToUint(response);
        }
        emit Response(requestId, response, s_lastError);
    }

    function safeMint(address subscriber) internal {
        if (_revealed()) revert NotAllowed();

        _safeMint(subscriber, 1);
    }

    /// @inheritdoc ERC721Psi
    function _baseURI() internal view override returns (string memory) {
        return s_baseURI;
    }

    /// @inheritdoc ERC721PsiMysteryBox
    function _unrevealedURI() internal view override returns (string memory) {
        return s_unrevealedURI;
    }

    /// @inheritdoc ERC721PsiMysteryBox
    function _maxSupply() internal view override returns (uint256) {
        return i_maxSupply;
    }

    /// @inheritdoc ERC721PsiMysteryBox
    function _coordinator() internal view override returns (address) {
        return i_vrfCoordinatorV2;
    }

    /// @inheritdoc ERC721PsiMysteryBox
    function _keyHash() internal view override returns (bytes32) {
        return i_vrfKeyHash;
    }

    /// @inheritdoc ERC721PsiMysteryBox
    function _subscriptionId() internal view override returns (uint64) {
        return i_vrfSubscriptionId;
    }

    function getProvenanceHash() external view returns (string memory) {
        return s_provenanceHash;
    }

    function getBaseURI() external view returns (string memory) {
        return s_baseURI;
    }

    function reveal() external onlyOwner {
        _reveal();
    }

    function bytesToUint(bytes memory data) public pure returns (uint256) {
        require(data.length == 32, "Invalid data length");

        uint256 result;
        assembly {
            result := mload(add(data, 0x20))
        }
        return result;
    }
}
