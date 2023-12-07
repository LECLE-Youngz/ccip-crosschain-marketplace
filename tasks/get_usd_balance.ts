import { ethers } from 'ethers';
import usdcABI from './usdcABI.json';
// Replace these values with your actual contract address and provider URL
const proxyContractAddress = '0x5425890298aed601595a70AB815c96711a31Bc65';

const providerUrl = "https://api.avax-test.network/ext/bc/C/rpc";

// Replace this with your private key
const privateKey = '65dfb67827dbacaf9ded101b60d01ab6ccd1b4bbdc90660279f35679b92b5669';

// ABI of the contract
// Connect to an Ethereum node
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Create a signer
const wallet = new ethers.Wallet(privateKey, provider);

// Create an instance of the proxy contract
const proxyContract = new ethers.Contract(proxyContractAddress, usdcABI, wallet);

// Example: Call the balanceOf function
async function getBalance(): Promise<void> {
  try {
    // Replace 'balanceOf' with the actual function name
    const account = '0x036e961F66074373eF8bd348e4f5f908b9b9d93a'; // Replace with the desired Ethereum address
    const balance = await proxyContract.balanceOf(account);
    console.log(`Balance of ${account}: ${balance.toString()}`);
  } catch (error) {
    console.error('Error calling the balanceOf function:');
  }
}

// Example usage
getBalance();
