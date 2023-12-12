// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./LuckyNFT.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract LuckyNFTFactory {
    event LuckyTokenCreated(address owner, address tokenAddress);

    LuckyNFT[] public tokens; //an array that contains different GenerativeNFT tokens deployed

    function deployLuckyToken(
        uint64 subscriptionId,
        string memory baseURI,
        address _premiumNFT
    ) public returns (address) {
        LuckyNFT t = new LuckyNFT(subscriptionId, baseURI, _premiumNFT);
        tokens.push(t);
        emit LuckyTokenCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalCollection() public view returns (uint amount) {
        return tokens.length;
    }
}
