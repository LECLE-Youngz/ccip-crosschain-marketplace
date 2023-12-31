// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LuckyTokenCreated extends ethereum.Event {
  get params(): LuckyTokenCreated__Params {
    return new LuckyTokenCreated__Params(this);
  }
}

export class LuckyTokenCreated__Params {
  _event: LuckyTokenCreated;

  constructor(event: LuckyTokenCreated) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LuckyFactory extends ethereum.SmartContract {
  static bind(address: Address): LuckyFactory {
    return new LuckyFactory("LuckyFactory", address);
  }

  deployLuckyToken(
    subscriptionId: BigInt,
    baseURI: string,
    _premiumNFT: Address
  ): Address {
    let result = super.call(
      "deployLuckyToken",
      "deployLuckyToken(uint64,string,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromString(baseURI),
        ethereum.Value.fromAddress(_premiumNFT)
      ]
    );

    return result[0].toAddress();
  }

  try_deployLuckyToken(
    subscriptionId: BigInt,
    baseURI: string,
    _premiumNFT: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployLuckyToken",
      "deployLuckyToken(uint64,string,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromString(baseURI),
        ethereum.Value.fromAddress(_premiumNFT)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTotalCollection(): BigInt {
    let result = super.call(
      "getTotalCollection",
      "getTotalCollection():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalCollection(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalCollection",
      "getTotalCollection():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeployLuckyTokenCall extends ethereum.Call {
  get inputs(): DeployLuckyTokenCall__Inputs {
    return new DeployLuckyTokenCall__Inputs(this);
  }

  get outputs(): DeployLuckyTokenCall__Outputs {
    return new DeployLuckyTokenCall__Outputs(this);
  }
}

export class DeployLuckyTokenCall__Inputs {
  _call: DeployLuckyTokenCall;

  constructor(call: DeployLuckyTokenCall) {
    this._call = call;
  }

  get subscriptionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get baseURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _premiumNFT(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DeployLuckyTokenCall__Outputs {
  _call: DeployLuckyTokenCall;

  constructor(call: DeployLuckyTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
