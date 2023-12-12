// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./LuckyNFT.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

contract LuckyTreasury is Ownable, AutomationCompatibleInterface {
    // Chainlink Forwarder Address
    address public s_forwarderAddress;
    address public nexthype;
    LuckyNFT public luckyNFT;

    /// @notice map subscribers to token rewarded status
    mapping(address => bool) public s_subscriberToRewardStatus;
    uint256 immutable luckyPoint;
    uint256 immutable tokenReward;

    constructor(address _luckyNFT, address _net, uint256 _luckyPoint, uint256 _tokenReward)
    {
        luckyNFT = LuckyNFT(_luckyNFT);
        nexthype = _net;
        luckyPoint = _luckyPoint;
        tokenReward = _tokenReward;
        transferOwnership(tx.origin);
    }
    
    IERC20 erc20 = IERC20(nexthype);

    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = false;
        for (uint256 i = 0; i < luckyNFT._nextTokenId(); i++) {
            if (luckyNFT.s_tokenIdToFortune(i) >= luckyPoint) {
                if (s_subscriberToRewardStatus[luckyNFT.ownerOf(luckyNFT.s_tokenIdToFortune(i))])
                {
                    upkeepNeeded = false;
                } else upkeepNeeded = true;
            }
        }
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
        return (upkeepNeeded, "");
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        require(
            msg.sender == s_forwarderAddress,
            "This address does not have permission to call performUpkeep"
        );
        for (uint256 i = 0; i < luckyNFT._nextTokenId(); i++) {
            if (luckyNFT.s_tokenIdToFortune(i) >= luckyPoint) {
                erc20.transfer(luckyNFT.ownerOf(luckyNFT.s_tokenIdToFortune(i)), tokenReward);
                s_subscriberToRewardStatus[luckyNFT.ownerOf(luckyNFT.s_tokenIdToFortune(i))] = true;
            }
        }
    }

    /// @notice Set the address that `performUpkeep` is called from
    /// @dev Only callable by the owner
    /// @param forwarderAddress the address to set
    function setForwarderAddress(address forwarderAddress) external onlyOwner {
        s_forwarderAddress = forwarderAddress;
    }
}