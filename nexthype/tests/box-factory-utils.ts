import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { MysteryBoxCreated } from "../generated/BoxFactory/BoxFactory"

export function createMysteryBoxCreatedEvent(
  owner: Address,
  tokenAddress: Address
): MysteryBoxCreated {
  let mysteryBoxCreatedEvent = changetype<MysteryBoxCreated>(newMockEvent())

  mysteryBoxCreatedEvent.parameters = new Array()

  mysteryBoxCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mysteryBoxCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return mysteryBoxCreatedEvent
}
