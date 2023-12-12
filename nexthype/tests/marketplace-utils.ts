import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemBought,
  ItemCanceled,
  ItemListed,
  PromptBought
} from "../generated/Marketplace/Marketplace"

export function createItemBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  nftPrice: BigInt,
  promptPrice: BigInt
): ItemBought {
  let itemBoughtEvent = changetype<ItemBought>(newMockEvent())

  itemBoughtEvent.parameters = new Array()

  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftPrice",
      ethereum.Value.fromUnsignedBigInt(nftPrice)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "promptPrice",
      ethereum.Value.fromUnsignedBigInt(promptPrice)
    )
  )

  return itemBoughtEvent
}

export function createItemCanceledEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): ItemCanceled {
  let itemCanceledEvent = changetype<ItemCanceled>(newMockEvent())

  itemCanceledEvent.parameters = new Array()

  itemCanceledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemCanceledEvent
}

export function createItemListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  nftPrice: BigInt,
  promptPrice: BigInt
): ItemListed {
  let itemListedEvent = changetype<ItemListed>(newMockEvent())

  itemListedEvent.parameters = new Array()

  itemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftPrice",
      ethereum.Value.fromUnsignedBigInt(nftPrice)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "promptPrice",
      ethereum.Value.fromUnsignedBigInt(promptPrice)
    )
  )

  return itemListedEvent
}

export function createPromptBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  nftPrice: BigInt,
  promptPrice: BigInt
): PromptBought {
  let promptBoughtEvent = changetype<PromptBought>(newMockEvent())

  promptBoughtEvent.parameters = new Array()

  promptBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  promptBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  promptBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  promptBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftPrice",
      ethereum.Value.fromUnsignedBigInt(nftPrice)
    )
  )
  promptBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "promptPrice",
      ethereum.Value.fromUnsignedBigInt(promptPrice)
    )
  )

  return promptBoughtEvent
}
