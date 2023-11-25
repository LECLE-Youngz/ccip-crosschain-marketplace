import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { PremiumNFT, PremiumNFT__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`deploy-premium`, `Deploys PremiumNFT.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy PremiumNFT smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const myNft: PremiumNFT = await hre.ethers.deployContract("PremiumNFT", ['https://ipfs.io/ipfs/QmYuKY45Aq87LeL1R5dhb1hqHLp6ZFbJaCP8jxqKM1MX6y/babe_ruth_1.json', ["100000000000000000", "200000000000000000", "500000000000000000"]]);
        await myNft.waitForDeployment();

        spinner.stop();
        console.log(`✅ PremiumNFT contract deployed at address ${myNft.target} on the ${hre.network.name} blockchain`)
    })