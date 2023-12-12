// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuckyNFT is ERC721, VRFConsumerBaseV2, Ownable {
    /// @notice The keyhash for Chainlink VRF
    bytes32 private immutable i_vrfKeyHash;
    uint256 private constant ROLL_IN_PROGRESS = 101;

    /// @notice The Chainlink VRF Coordinator
    VRFCoordinatorV2Interface COORDINATOR;

    /// @notice The subscription ID for Chainlink VRF
    uint64 private immutable i_vrfSubscriptionId;

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus) public s_requests;
    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;

    // Chainlink VRF values
    uint32 callbackGasLimit = 400000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;

    //// LuckyNFT rule
    using Strings for uint256;
    string public s_baseURI;
    uint256 public _nextTokenId;
    mapping(uint256 => uint256) public s_tokenIdToFortune;
    /// @notice map subscribers to requestIds
    mapping(uint256 => address) public s_subscribers;
    // map vrf Fortune results to subscribers
    mapping(address => uint256) public s_results;
    address public premiumNFT;
    IERC721 nft;

    event LotteryRequestSent(uint256 requestId, address subscriber);
    event LotteryRequestFulfilled(
        uint256 requestId,
        address subscriber,
        uint256 tokenId,
        uint256 result
    );

    constructor(
        uint64 subscriptionId,
        string memory baseURI,
        address _premiumNFT
    )
        ERC721("LuckyNFT", "LTC")
        VRFConsumerBaseV2(0x2eD832Ba664535e5886b75D64C46EB9a228C2610)
    {
        // Hardcoded for Avalanche Fuji test network
        i_vrfKeyHash = 0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61;
        COORDINATOR = VRFCoordinatorV2Interface(
            0x2eD832Ba664535e5886b75D64C46EB9a228C2610
        );
        i_vrfSubscriptionId = subscriptionId;
        s_baseURI = baseURI;
        premiumNFT = _premiumNFT;
        nft = IERC721(_premiumNFT);
        transferOwnership(tx.origin);
    }

    function drawLottery(address caller) public returns (uint256 requestId) {
        require(s_results[caller] == 0, "Already drawed");
        require(
            nft.balanceOf(caller) > 0,
            "Sender haven't subscribed to creator"
        );

        // Will revert if subscription is not set and funded.
        requestId = COORDINATOR.requestRandomWords(
            i_vrfKeyHash,
            i_vrfSubscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );

        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;

        s_subscribers[requestId] = caller;
        s_results[caller] = ROLL_IN_PROGRESS;

        emit LotteryRequestSent(requestId, caller);
        return requestId;
    }

    /**
     * @notice Callback function used by VRF Coordinator to return the random number to this contract.
     *
     * @dev Some action on the contract state should be taken here, like storing the result.
     * @dev WARNING: take care to avoid having multiple VRF requests in flight if their order of arrival would result
     * in contract states with different outcomes. Otherwise miners or the VRF operator would could take advantage
     * by controlling the order.
     * @dev The VRF Coordinator will only send this function verified responses, and the parent VRFConsumerBaseV2
     * contract ensures that this method only receives randomness from the designated VRFCoordinator.
     *
     * @param requestId uint256
     * @param randomWords  uint256[] The random result returned by the oracle.
     */
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        uint256 d100Value = (randomWords[0] % 100) + 1;
        s_requests[requestId].fulfilled = true;
        s_requests[requestId].randomWords = randomWords;

        uint256 tokenId = _nextTokenId++;
        s_results[s_subscribers[requestId]] = d100Value;
        _safeMint(s_subscribers[requestId], tokenId);
        s_tokenIdToFortune[tokenId] = d100Value;
        emit LotteryRequestFulfilled(
            requestId,
            s_subscribers[requestId],
            tokenId,
            d100Value
        );
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getRequestStatus(
        uint256 _requestId
    ) external view returns (bool fulfilled, uint256[] memory randomWords) {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords);
    }

    function _baseURI() internal view override returns (string memory) {
        return s_baseURI;
    }

    // TODO: return Nexthype Metadata for LuckyNFT
    function tokenURI(
        uint256 tokenId
    ) public view virtual override(ERC721) returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString()))
                : "";
    }

    function getSubscribingStatus(address user) public view returns (uint256) {
        return nft.balanceOf(user);
    }
}
