import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { getProviderRpcUrl } from "./utils";
import { ethers } from "ethers";
import { NEXTHYPE, NEXTHYPE__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task('balance-of', 'Gets the balance of NEXTHYPE for provided address')
    .addParam(`myNft`, `The address of the NEXTHYPE smart contract`)
    .addParam(`blockchain`, `The blockchain where the NEXTHYPE smart contract was deployed`)
    .addParam(`owner`, `The address to check the balance of NEXTHYPEs`)
    .setAction(async (taskArguments: TaskArguments) => {
        const rpcProviderUrl = getProviderRpcUrl(taskArguments.blockchain);
        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);

        const spinner: Spinner = new Spinner();

        const nexthype: NEXTHYPE = NEXTHYPE__factory.connect(taskArguments.myNft, provider);

        console.log(`ℹ️  Attempting to check the balance of NEXTHYPEs (${taskArguments.myNft}) for the ${taskArguments.owner} account`);
        spinner.start();

        const balanceOf = await nexthype.balanceOf(taskArguments.owner);

        spinner.stop();
        console.log(`ℹ️  The balance of NEXTHYPEs of the ${taskArguments.owner} account is ${BigInt(balanceOf)}`);
    })