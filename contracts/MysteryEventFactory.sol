// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MysteryDropEvent.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MysteryEventFactory {
    event MysteryEventCreated(address owner, address tokenAddress);

    MysteryDropEvent[] public events; //an array that contains different GenerativeNFT tokens deployed

    function deployMysteryEvent(
        string memory name,
        string memory symbol,
        string memory unrevealedURI,
        address premiumNFT,
        uint64 _nftPurchasedRequired,
        uint256 maxSupply,
        string memory baseURI,
        uint64 clSubscriptionId
    ) public returns (address) {
        MysteryDropEvent t = new MysteryDropEvent(name, symbol, unrevealedURI, premiumNFT, _nftPurchasedRequired, maxSupply, baseURI, clSubscriptionId);
        events.push(t);
        emit MysteryEventCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalEvents() public view returns (uint amount) {
        return events.length;
    }
}
