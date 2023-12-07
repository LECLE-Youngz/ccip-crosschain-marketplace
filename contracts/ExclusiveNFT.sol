// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";
import "./PremiumNFT.sol";
/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract ExclusiveNFT is ERC721URIStorage, Ownable, AutomationCompatibleInterface {
    uint256 public _nextTokenId;

    // Chainlink Forwarder Address
    address public s_forwarderAddress;
    PremiumNFT public premiumNFT;

    mapping(uint256 => string) internal s_tokenURIStorage;
    mapping(uint256 => bool) public s_isSold;
    uint256[] public keys;
    string public unrevealURI;

    constructor(string memory name, string memory symbol, string memory _unrevealURI, address _premiumNFT)
        ERC721(name, symbol) 
    {
        transferOwnership(tx.origin);
        unrevealURI = _unrevealURI;
        premiumNFT = PremiumNFT(_premiumNFT);
    }

    function safeMint(address _to, string memory _revealURI) public onlyOwner() {
        uint256 tokenId = _nextTokenId++;
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, unrevealURI);
        s_tokenURIStorage[tokenId] = _revealURI;
        s_isSold[tokenId] = false;
        keys.push(tokenId);
    }

    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = false;
        for (uint256 i = 0; i < keys.length; i++) {
            if (s_isSold[keys[i]] == true) {
                upkeepNeeded = true;
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
        for (uint256 i = 0; i < keys.length; i++) {
            if (s_isSold[keys[i]] == true) {
                _setTokenURI(keys[i], s_tokenURIStorage[keys[i]]);
                removeElementAtIndex(keys, i);
            }
        }
    }

    /// @notice Set the address that `performUpkeep` is called from
    /// @dev Only callable by the owner
    /// @param forwarderAddress the address to set
    function setForwarderAddress(address forwarderAddress) external onlyOwner {
        s_forwarderAddress = forwarderAddress;
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public override(ERC721) {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        _transfer(from, to, tokenId);
        s_isSold[tokenId] = true;
    }

    // Helper function
    function removeElementAtIndex(uint256[] storage array, uint256 index) internal {
        // remove an element from the array at a specific index
        if (index < array.length) {
            for (uint256 i = index; i < array.length - 1; i++) {
                array[i] = array[i + 1];
            }
            array.pop();
        }
    }

    function getTokenURI(uint256 tokenId) external view returns (string memory) {
        address caller = msg.sender;

        if (premiumNFT.balanceOf(caller) >= 1) {
            return s_tokenURIStorage[tokenId];
        } else {
            return unrevealURI;
        }
    }
}
