import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { NftMarketplace, NftMarketplace__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";
import { LINK_ADDRESSES, AGGREGATOR_ADDRESS, USDC_ADDRESS } from "./constants";

task(`deploy-marketplace`, `Deploys Marketplace.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        // const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;
        const linkAddress = taskArguments.link ? taskArguments.link : LINK_ADDRESSES[hre.network.name]
        const aggregatorAddr = AGGREGATOR_ADDRESS[hre.network.name];
        const usdcAddr = USDC_ADDRESS[hre.network.name]

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy Marketplace smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const nftMarketplace: NftMarketplace = await hre.ethers.deployContract("NftMarketplace", [linkAddress, aggregatorAddr, usdcAddr]);
        await nftMarketplace.waitForDeployment();

        spinner.stop();
        console.log(`✅ NftMarketplace contract deployed at address ${nftMarketplace.address} on the ${hre.network.name} blockchain`)

    })