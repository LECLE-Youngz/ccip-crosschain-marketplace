import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256'

// Define the function to generate the whitelist root
export function generateWhitelistRoot(whitelist: string[]): string {
  const merkleTree = new MerkleTree(whitelist, keccak256, {
    sortPairs: true,
    hashLeaves: true,
  });

  // Get and return the whitelist root in hexadecimal format
  return merkleTree.getHexRoot();
}

// Example usage:
// Replace with actual addresses
import whitelist from './data/whitelist.json'
const whitelistRoot = generateWhitelistRoot(whitelist);
console.log('Generated whitelist root', whitelistRoot);
