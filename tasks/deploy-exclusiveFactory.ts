import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { ExclusiveNFTFactory, ExclusiveNFTFactory__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`deploy-exclusiveFactory`, `Deploys ExclusiveNFTFactory.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy ExclusiveNFTFactory smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();
        const Factory = await hre.ethers.getContractFactory('ExclusiveNFTFactory')

        const factory = await Factory.deploy()
        await factory.deployed()
        console.log('MysteryBox deployed to', factory.address, hre.network.name)

        spinner.stop();
        console.log(`✅ ExclusiveNFTFactory contract deployed at address ${factory.address} on the ${hre.network.name} blockchain`)

    
    })