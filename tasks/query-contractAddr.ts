import { ethers } from 'ethers';

const providerUrl = "https://api.avax-test.network/ext/bc/C/rpc";
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

const transactionHash = '0xb7a604669f88925ff071810c1d6a35f68e9f3701343e0cb40bf6c75e3decbfc8'; // Replace with your actual transaction hash

async function getContractAddress(): Promise<void> {
  try {
    const receipt = await provider.getTransactionReceipt(transactionHash);

    if (receipt) {
      if (receipt.status === 1) {
        // Transaction was successful
        const contractAddress = receipt.logs[0].address;
        console.log('Contract Address:', contractAddress);
      } else {
        console.error('Contract deployment failed. Transaction status: Reverted');
        console.log('Transaction Receipt:', receipt);
      }
    } else {
      console.log('Transaction receipt not found. Check if the transaction hash is valid.');
    }
  } catch (error) {
    console.error(error);
  }
}

getContractAddress();
