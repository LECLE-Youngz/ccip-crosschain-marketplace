// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./LuckyTreasury.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract TreasuryFactory {
    event LuckyTreasuryCreated(address owner, address tokenAddress);

    LuckyTreasury[] public events; //an array that contains different MysteryBox tokens deployed

    function deployLuckyTreasury(
        address _luckyNFT,
        address _net,
        uint256 _luckyPoint,
        uint256 _tokenReward
    ) public returns (address) {
        LuckyTreasury t = new LuckyTreasury(
            _luckyNFT,
            _net,
            _luckyPoint,
            _tokenReward
        );
        events.push(t);
        emit LuckyTreasuryCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalEvents() public view returns (uint amount) {
        return events.length;
    }
}
