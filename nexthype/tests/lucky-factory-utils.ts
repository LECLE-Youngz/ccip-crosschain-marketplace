import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { LuckyTokenCreated } from "../generated/LuckyFactory/LuckyFactory"

export function createLuckyTokenCreatedEvent(
  owner: Address,
  tokenAddress: Address
): LuckyTokenCreated {
  let luckyTokenCreatedEvent = changetype<LuckyTokenCreated>(newMockEvent())

  luckyTokenCreatedEvent.parameters = new Array()

  luckyTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  luckyTokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return luckyTokenCreatedEvent
}
