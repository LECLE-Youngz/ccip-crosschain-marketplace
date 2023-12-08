import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ExclusiveNFTCreated } from "../generated/ExclusiveFactory/ExclusiveFactory"

export function createExclusiveNFTCreatedEvent(
  owner: Address,
  tokenAddress: Address,
  unrevealURI: string,
  premiumNFT: Address
): ExclusiveNFTCreated {
  let exclusiveNftCreatedEvent = changetype<ExclusiveNFTCreated>(newMockEvent())

  exclusiveNftCreatedEvent.parameters = new Array()

  exclusiveNftCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  exclusiveNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  exclusiveNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "unrevealURI",
      ethereum.Value.fromString(unrevealURI)
    )
  )
  exclusiveNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "premiumNFT",
      ethereum.Value.fromAddress(premiumNFT)
    )
  )

  return exclusiveNftCreatedEvent
}
