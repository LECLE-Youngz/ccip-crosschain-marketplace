// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Contract extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Contract", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Contract",
      [address.toHex()],
      context
    );
  }
}

export class PremiumNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("PremiumNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "PremiumNFT",
      [address.toHex()],
      context
    );
  }
}

export class ExclusiveNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ExclusiveNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ExclusiveNFT",
      [address.toHex()],
      context
    );
  }
}
