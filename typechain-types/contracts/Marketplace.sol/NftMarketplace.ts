/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace NftMarketplace {
  export type ListingStruct = {
    nftPrice: BigNumberish;
    promptPrice: BigNumberish;
    seller: AddressLike;
  };

  export type ListingStructOutput = [
    nftPrice: bigint,
    promptPrice: bigint,
    seller: string
  ] & { nftPrice: bigint; promptPrice: bigint; seller: string };
}

export interface NftMarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyItem"
      | "buyPrompt"
      | "cancelListing"
      | "getChainlinkDataFeedLatestAnswer"
      | "getListPromptBuyers"
      | "getListing"
      | "getPromptPrice"
      | "getTokenPrice"
      | "listItem"
      | "roundToMillion"
      | "updateListing"
      | "updatePromptPrice"
      | "usdc"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ItemBought"
      | "ItemCanceled"
      | "ItemListed"
      | "PromptBought"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "buyItem",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPrompt",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelListing",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainlinkDataFeedLatestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getListPromptBuyers",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPromptPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "roundToMillion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePromptPrice",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPrompt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChainlinkDataFeedLatestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getListPromptBuyers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPromptPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roundToMillion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePromptPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
}

export namespace ItemBoughtEvent {
  export type InputTuple = [
    buyer: AddressLike,
    nftAddress: AddressLike,
    tokenId: BigNumberish,
    nftPrice: BigNumberish,
    promptPrice: BigNumberish
  ];
  export type OutputTuple = [
    buyer: string,
    nftAddress: string,
    tokenId: bigint,
    nftPrice: bigint,
    promptPrice: bigint
  ];
  export interface OutputObject {
    buyer: string;
    nftAddress: string;
    tokenId: bigint;
    nftPrice: bigint;
    promptPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ItemCanceledEvent {
  export type InputTuple = [
    seller: AddressLike,
    nftAddress: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [
    seller: string,
    nftAddress: string,
    tokenId: bigint
  ];
  export interface OutputObject {
    seller: string;
    nftAddress: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ItemListedEvent {
  export type InputTuple = [
    seller: AddressLike,
    nftAddress: AddressLike,
    tokenId: BigNumberish,
    nftPrice: BigNumberish,
    promptPrice: BigNumberish
  ];
  export type OutputTuple = [
    seller: string,
    nftAddress: string,
    tokenId: bigint,
    nftPrice: bigint,
    promptPrice: bigint
  ];
  export interface OutputObject {
    seller: string;
    nftAddress: string;
    tokenId: bigint;
    nftPrice: bigint;
    promptPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PromptBoughtEvent {
  export type InputTuple = [
    buyer: AddressLike,
    nftAddress: AddressLike,
    tokenId: BigNumberish,
    nftPrice: BigNumberish,
    promptPrice: BigNumberish
  ];
  export type OutputTuple = [
    buyer: string,
    nftAddress: string,
    tokenId: bigint,
    nftPrice: bigint,
    promptPrice: bigint
  ];
  export interface OutputObject {
    buyer: string;
    nftAddress: string;
    tokenId: bigint;
    nftPrice: bigint;
    promptPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NftMarketplace extends BaseContract {
  connect(runner?: ContractRunner | null): NftMarketplace;
  waitForDeployment(): Promise<this>;

  interface: NftMarketplaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  buyItem: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish, tokenAmount: BigNumberish],
    [void],
    "payable"
  >;

  buyPrompt: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish, tokenAmount: BigNumberish],
    [void],
    "payable"
  >;

  cancelListing: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getChainlinkDataFeedLatestAnswer: TypedContractMethod<[], [bigint], "view">;

  getListPromptBuyers: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [string[]],
    "view"
  >;

  getListing: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [NftMarketplace.ListingStructOutput],
    "view"
  >;

  getPromptPrice: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getTokenPrice: TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  listItem: TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      nftPrice: BigNumberish,
      promptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  roundToMillion: TypedContractMethod<[input: BigNumberish], [bigint], "view">;

  updateListing: TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      newNFTPrice: BigNumberish,
      newPromptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updatePromptPrice: TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      newPromptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  usdc: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyItem"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish, tokenAmount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "buyPrompt"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish, tokenAmount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "cancelListing"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getChainlinkDataFeedLatestAnswer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getListPromptBuyers"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getListing"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [NftMarketplace.ListingStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPromptPrice"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenPrice"
  ): TypedContractMethod<
    [nftAddress: AddressLike, tokenId: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "listItem"
  ): TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      nftPrice: BigNumberish,
      promptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "roundToMillion"
  ): TypedContractMethod<[input: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "updateListing"
  ): TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      newNFTPrice: BigNumberish,
      newPromptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePromptPrice"
  ): TypedContractMethod<
    [
      nftAddress: AddressLike,
      tokenId: BigNumberish,
      newPromptPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "usdc"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ItemBought"
  ): TypedContractEvent<
    ItemBoughtEvent.InputTuple,
    ItemBoughtEvent.OutputTuple,
    ItemBoughtEvent.OutputObject
  >;
  getEvent(
    key: "ItemCanceled"
  ): TypedContractEvent<
    ItemCanceledEvent.InputTuple,
    ItemCanceledEvent.OutputTuple,
    ItemCanceledEvent.OutputObject
  >;
  getEvent(
    key: "ItemListed"
  ): TypedContractEvent<
    ItemListedEvent.InputTuple,
    ItemListedEvent.OutputTuple,
    ItemListedEvent.OutputObject
  >;
  getEvent(
    key: "PromptBought"
  ): TypedContractEvent<
    PromptBoughtEvent.InputTuple,
    PromptBoughtEvent.OutputTuple,
    PromptBoughtEvent.OutputObject
  >;

  filters: {
    "ItemBought(address,address,uint256,uint256,uint256)": TypedContractEvent<
      ItemBoughtEvent.InputTuple,
      ItemBoughtEvent.OutputTuple,
      ItemBoughtEvent.OutputObject
    >;
    ItemBought: TypedContractEvent<
      ItemBoughtEvent.InputTuple,
      ItemBoughtEvent.OutputTuple,
      ItemBoughtEvent.OutputObject
    >;

    "ItemCanceled(address,address,uint256)": TypedContractEvent<
      ItemCanceledEvent.InputTuple,
      ItemCanceledEvent.OutputTuple,
      ItemCanceledEvent.OutputObject
    >;
    ItemCanceled: TypedContractEvent<
      ItemCanceledEvent.InputTuple,
      ItemCanceledEvent.OutputTuple,
      ItemCanceledEvent.OutputObject
    >;

    "ItemListed(address,address,uint256,uint256,uint256)": TypedContractEvent<
      ItemListedEvent.InputTuple,
      ItemListedEvent.OutputTuple,
      ItemListedEvent.OutputObject
    >;
    ItemListed: TypedContractEvent<
      ItemListedEvent.InputTuple,
      ItemListedEvent.OutputTuple,
      ItemListedEvent.OutputObject
    >;

    "PromptBought(address,address,uint256,uint256,uint256)": TypedContractEvent<
      PromptBoughtEvent.InputTuple,
      PromptBoughtEvent.OutputTuple,
      PromptBoughtEvent.OutputObject
    >;
    PromptBought: TypedContractEvent<
      PromptBoughtEvent.InputTuple,
      PromptBoughtEvent.OutputTuple,
      PromptBoughtEvent.OutputObject
    >;
  };
}
