import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { MysteryEventCreated } from "../generated/MysteryFactory/MysteryFactory"

export function createMysteryEventCreatedEvent(
  owner: Address,
  tokenAddress: Address
): MysteryEventCreated {
  let mysteryEventCreatedEvent = changetype<MysteryEventCreated>(newMockEvent())

  mysteryEventCreatedEvent.parameters = new Array()

  mysteryEventCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mysteryEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return mysteryEventCreatedEvent
}
