import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { NEXTHYPE, NEXTHYPE__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`deploy-nft`, `Deploys NEXTHYPE.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy NEXTHYPE NFT smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const nexthype: NEXTHYPE = await hre.ethers.deployContract("NEXTHYPE");
        await nexthype.waitForDeployment();

        spinner.stop();
        console.log(`✅ NEXTHYPE NFT contract deployed at address ${nexthype.address} on the ${hre.network.name} blockchain`)
    })