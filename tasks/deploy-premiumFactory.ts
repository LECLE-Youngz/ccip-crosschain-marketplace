import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { PremiumFactory, PremiumFactory__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`deploy-premiumFactory`, `Deploys PremiumFactory.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy GenerativeNFTFactory smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const factory: PremiumFactory = await hre.ethers.deployContract("PremiumFactory");
        await factory.waitForDeployment();

        spinner.stop();
        console.log(`✅ PremiumFactory contract deployed at address ${factory.target} on the ${hre.network.name} blockchain`)
    })