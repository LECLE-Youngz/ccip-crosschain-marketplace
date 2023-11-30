// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PremiumNFT.sol";
/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract PremiumFactory {
    event PremiumTokenCreated(address owner, address tokenAddress);

    PremiumNFT[] public tokens; //an array that contains different GenerativeNFT tokens deployed

    function deployGenerativeToken(string memory token_uri, uint256[] memory subscriptionPrice)
        public
        returns (address)
    {
        PremiumNFT t = new PremiumNFT(token_uri, subscriptionPrice);
        tokens.push(t);
        emit PremiumTokenCreated(msg.sender, address(t));
        return address(t);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getTotalPremiumCollection() public view returns (uint amount) {
        return tokens.length;
    }

}
