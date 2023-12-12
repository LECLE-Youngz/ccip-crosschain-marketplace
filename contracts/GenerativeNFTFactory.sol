// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./GenerativeNFT.sol";
/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract GenerativeNFTFactory {
    event ERC721TokenCreated(address owner, address tokenAddress);

    GenerativeNFT[] public tokens; //an array that contains different GenerativeNFT tokens deployed

    function deployGenerativeToken(string memory name, string memory symbol)
        public
        returns (address)
    {
        GenerativeNFT t = new GenerativeNFT(name, symbol);
        tokens.push(t);
        emit ERC721TokenCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalCollection() public view returns (uint amount) {
        return tokens.length;
    }

}
