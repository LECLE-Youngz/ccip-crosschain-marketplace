// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


error SubscriptionFeeNotMet(string subscriptionPlan, uint256 subscriptionFee);

contract PremiumNFT is ERC721URIStorage, ReentrancyGuard, Ownable {
    enum SUBSCRIPTION_PLAN {
        WEEK, 
        MONTH, 
        HALFYEAR
    }
    
    string public TOKEN_URI;
    uint256 internal tokenId;

    mapping(uint256 => uint256) tokenExpiredTime;
    mapping(SUBSCRIPTION_PLAN => uint256) subscriptionPlans;
    

    constructor(string memory token_uri, uint256[] memory subscriptionPrice) ERC721("PremiumNFT", "PSC") {
        TOKEN_URI = token_uri;
        subscriptionPlans[SUBSCRIPTION_PLAN.WEEK] = subscriptionPrice[0];
        subscriptionPlans[SUBSCRIPTION_PLAN.MONTH] = subscriptionPrice[1];
        subscriptionPlans[SUBSCRIPTION_PLAN.HALFYEAR] = subscriptionPrice[2];
    }

    /////////////////////
    // Main Functions //
    /////////////////////

    /*
     * @notice Method for subscribing Premium member
     * @param subscriptionPlan choose subscription plan 
     * It will affect the expiredTime, price of this Premium NFT
     */
    function subscribe(SUBSCRIPTION_PLAN subscriptionPlan) external payable nonReentrant {
        uint256 subscriptionFee = subscriptionPlans[subscriptionPlan];
        require(msg.value == subscriptionFee, "Subscription Fee is insufficient");

        // Currently NEXT-HYPE doesn't charge owner anything, but we might take 0.05% fee in the future
        (bool success, ) = payable(owner()).call{value: subscriptionFee}("");
        require(success, "Transfer failed");

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        // set expiredTime for this tokenId based on the subscriptionPlan 
        if (subscriptionPlan == SUBSCRIPTION_PLAN.WEEK) {
            tokenExpiredTime[tokenId] = block.timestamp + 1 weeks;
        } 
        else if (subscriptionPlan == SUBSCRIPTION_PLAN.MONTH) {
            tokenExpiredTime[tokenId] = block.timestamp + 4 weeks;
        }
        else tokenExpiredTime[tokenId] = block.timestamp + 26 weeks;
        unchecked {
            tokenId++;
        }
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getSubscriptionPlan(SUBSCRIPTION_PLAN subscriptionPlan) view external returns(uint256) {
        return subscriptionPlans[subscriptionPlan];
    }

    function getPremiumState(uint256 _tokenId) view external returns(uint256) {
        return tokenExpiredTime[_tokenId];
    }
}
