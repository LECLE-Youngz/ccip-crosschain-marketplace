// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ExclusiveNFT.sol";
/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract ExclusiveNFTFactory {
    event ExclusiveNFTCreated(address owner, address tokenAddress, string unrevealURI, address premiumNFT);

    ExclusiveNFT[] public tokens; //an array that contains different GenerativeNFT tokens deployed

    function deployExclusiveToken(string memory name, string memory symbol, string memory unrevealURI, address premiumNFT)
        public
        returns (address)
    {
        ExclusiveNFT t = new ExclusiveNFT(name, symbol, unrevealURI, premiumNFT);
        tokens.push(t);
        emit ExclusiveNFTCreated(msg.sender, address(t), unrevealURI, premiumNFT);
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalCollection() public view returns (uint amount) {
        return tokens.length;
    }

}
