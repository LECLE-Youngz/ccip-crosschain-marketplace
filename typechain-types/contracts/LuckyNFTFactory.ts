/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LuckyNFTFactoryInterface extends utils.Interface {
  functions: {
    "deployLuckyToken(uint64,string,address)": FunctionFragment;
    "getTotalCollection()": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deployLuckyToken" | "getTotalCollection" | "tokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployLuckyToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalCollection",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployLuckyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;

  events: {
    "LuckyTokenCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LuckyTokenCreated"): EventFragment;
}

export interface LuckyTokenCreatedEventObject {
  owner: string;
  tokenAddress: string;
}
export type LuckyTokenCreatedEvent = TypedEvent<
  [string, string],
  LuckyTokenCreatedEventObject
>;

export type LuckyTokenCreatedEventFilter =
  TypedEventFilter<LuckyTokenCreatedEvent>;

export interface LuckyNFTFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LuckyNFTFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployLuckyToken(
      subscriptionId: PromiseOrValue<BigNumberish>,
      baseURI: PromiseOrValue<string>,
      _premiumNFT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTotalCollection(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  deployLuckyToken(
    subscriptionId: PromiseOrValue<BigNumberish>,
    baseURI: PromiseOrValue<string>,
    _premiumNFT: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTotalCollection(overrides?: CallOverrides): Promise<BigNumber>;

  tokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    deployLuckyToken(
      subscriptionId: PromiseOrValue<BigNumberish>,
      baseURI: PromiseOrValue<string>,
      _premiumNFT: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTotalCollection(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "LuckyTokenCreated(address,address)"(
      owner?: null,
      tokenAddress?: null
    ): LuckyTokenCreatedEventFilter;
    LuckyTokenCreated(
      owner?: null,
      tokenAddress?: null
    ): LuckyTokenCreatedEventFilter;
  };

  estimateGas: {
    deployLuckyToken(
      subscriptionId: PromiseOrValue<BigNumberish>,
      baseURI: PromiseOrValue<string>,
      _premiumNFT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTotalCollection(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployLuckyToken(
      subscriptionId: PromiseOrValue<BigNumberish>,
      baseURI: PromiseOrValue<string>,
      _premiumNFT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTotalCollection(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
