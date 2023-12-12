// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MysteryBox.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MysteryBoxFactory {
    event MysteryBoxCreated(address owner, address tokenAddress);

    MysteryBox[] public events; //an array that contains different MysteryBox tokens deployed

    function deployMysteryBox(
        string memory name,
        string memory symbol,
        string memory unrevealedURI,
        uint256 maxSupply,
        uint256 maxMintPerUser,
        uint256 fee,
        bytes32 whitelistRoot,
        uint64 vrfSubscriptionId
    ) public returns (address) {
        MysteryBox t = new MysteryBox(
            name,
            symbol,
            unrevealedURI,
            maxSupply,
            maxMintPerUser,
            fee,
            whitelistRoot,
            vrfSubscriptionId
        );
        events.push(t);
        emit MysteryBoxCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalEvents() public view returns (uint amount) {
        return events.length;
    }
}
