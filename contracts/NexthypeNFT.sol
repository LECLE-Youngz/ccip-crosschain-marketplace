// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract NEXTHYPE is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("NEXTHYPE", "NET")
    {}

    function safeMint(string memory _tokenURI) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(_msgSender(), tokenId);
        _setTokenURI(tokenId, _tokenURI);
    }

    function getTotal () view public returns(uint256) {
        return _nextTokenId;
    }
}
