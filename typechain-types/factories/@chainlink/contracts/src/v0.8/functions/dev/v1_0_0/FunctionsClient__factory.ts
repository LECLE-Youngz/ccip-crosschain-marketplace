/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  FunctionsClient,
  FunctionsClientInterface,
} from "../../../../../../../../@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient";

const _abi = [
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FunctionsClient__factory {
  static readonly abi = _abi;
  static createInterface(): FunctionsClientInterface {
    return new utils.Interface(_abi) as FunctionsClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionsClient {
    return new Contract(address, _abi, signerOrProvider) as FunctionsClient;
  }
}
