// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {VRFCoordinatorV2Interface} from "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import {VRFConsumerBaseV2} from "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import {ERC721Psi, ERC721PsiMysteryBox} from "./ERC721Psi/ERC721PsiMysteryBox.sol";

/// @title MysteryBox
/// @author HackBG Team (https://hack.bg)
/// @notice NFT collection with random token distribution
/// @dev Using Chainlink VRF for randomness
contract MysteryBox is ERC721PsiMysteryBox, Ownable {
  /// @notice The maximum amount of tokens that can be minted
  uint256 private immutable i_maxSupply;

  /// @notice The maximum amount of tokens that can be minted per address
  uint256 private immutable i_maxMintPerUser;

  /// @notice The keyhash for Chainlink VRF
  bytes32 private immutable i_vrfKeyHash;

  /// @notice The address of Chainlink VRF Coordinator
  address private immutable i_vrfCoordinatorV2;

  /// @notice The subscription ID for Chainlink VRF
  uint64 private immutable i_vrfSubscriptionId;

  /// @notice The fee for minting one token
  uint256 private s_fee;

  /// @notice The base URI for tokens after it is revealed
  string private s_baseURI;

  /// @notice The URI for all tokens before reveal
  string private s_unrevealedURI;

  /// @notice The provenance hash of all images in the collection
  string private s_provenanceHash;

  /// @notice Whether the public mint is enabled
  bool private s_publicMint;

  /// @notice The root of the whitelist merkle tree
  bytes32 private s_whitelistRoot;

  /// @notice The amount of tokens minted per address
  mapping(address => uint256) private s_userAmountMinted;

  /// @notice The user is not allowed to mint
  error NotAllowed();

  /// @notice The user is not eligible for private mint
  error NotEligible();

  /// @notice The amount requested for mint is zero
  error ZeroAmount();

  /// @notice The value sent is insufficient for the mint
  error InsufficientValue();

  /// @notice The user has exceeded the limit of tokens per address
  error LimitPerUserExceeded();

  /// @notice The funds could not be withdrawn
  error FailedToWithdrawFunds();

  constructor(
    string memory name,
    string memory symbol,
    string memory unrevealedURI,
    uint256 maxSupply,
    uint256 maxMintPerUser,
    uint256 fee,
    bytes32 whitelistRoot,
    uint64 vrfSubscriptionId
  ) ERC721PsiMysteryBox(0x2eD832Ba664535e5886b75D64C46EB9a228C2610) ERC721Psi(name, symbol) {
    i_maxSupply = maxSupply;
    i_maxMintPerUser = maxMintPerUser;
    i_vrfKeyHash = 0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61;
    i_vrfCoordinatorV2 = 0x2eD832Ba664535e5886b75D64C46EB9a228C2610;
    i_vrfSubscriptionId = vrfSubscriptionId;
    s_fee = fee;
    s_whitelistRoot = whitelistRoot;
    s_unrevealedURI = unrevealedURI;
    transferOwnership(tx.origin);
  }

  function publicMint(uint256 amount) external payable {
    if (!s_publicMint) revert NotAllowed();

    _mintAmount(amount);
  }

  function privateMint(uint256 amount, bytes32[] calldata proof) external payable {
    bytes32 leaf = keccak256(abi.encodePacked(msg.sender));

    if (!MerkleProof.verify(proof, s_whitelistRoot, leaf)) revert NotEligible();

    _mintAmount(amount);
  }

  function _mintAmount(uint256 amount) internal {
    if (_revealed()) revert NotAllowed();

    if (amount == 0) revert ZeroAmount();

    if (msg.value < s_fee * amount) revert InsufficientValue();

    if (s_userAmountMinted[msg.sender] + amount > i_maxMintPerUser) revert LimitPerUserExceeded();

    s_userAmountMinted[msg.sender] += amount;

    _safeMint(msg.sender, amount);
  }

  function getFee() external view returns (uint256) {
    return s_fee;
  }

  function getWhitelistRoot() external view returns (bytes32) {
    return s_whitelistRoot;
  }

  function getProvenanceHash() external view returns (string memory) {
    return s_provenanceHash;
  }

  function getBaseURI() external view returns (string memory) {
    return s_baseURI;
  }

  function reveal() external onlyOwner {
    _reveal();
  }

  function setBaseURI(string memory newBaseURI) external onlyOwner {
    s_baseURI = newBaseURI;
  }

  /// @notice Enable or disable public mint
  /// @param publicMintEnabled True to enable public mint, false to disable
  function setPublicMint(bool publicMintEnabled) external onlyOwner {
    s_publicMint = publicMintEnabled;
  }

  function setWhitelistRoot(bytes32 whiteListRoot) external onlyOwner {
    s_whitelistRoot = whiteListRoot;
  }

  function setProvenanceHash(string memory provenanceHash) external onlyOwner {
    s_provenanceHash = provenanceHash;
  }

  function setMintFee(uint256 fee) external onlyOwner {
    s_fee = fee;
  }

  function withdraw() external onlyOwner {
    // solhint-disable-next-line avoid-low-level-calls
    (bool sent, ) = payable(owner()).call{value: address(this).balance}("");

    if (!sent) revert FailedToWithdrawFunds();
  }

  function _baseURI() internal view override returns (string memory) {
    return s_baseURI;
  }

  function _unrevealedURI() internal view override returns (string memory) {
    return s_unrevealedURI;
  }

  function _maxSupply() internal view override returns (uint256) {
    return i_maxSupply;
  }

  function _coordinator() internal view override returns (address) {
    return i_vrfCoordinatorV2;
  }

  function _keyHash() internal view override returns (bytes32) {
    return i_vrfKeyHash;
  }

  function _subscriptionId() internal view override returns (uint64) {
    return i_vrfSubscriptionId;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Psi) returns (bool) {
    return super.supportsInterface(interfaceId);
  }
}
