import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { LuckyTreasuryCreated } from "../generated/TreasuryFactory/TreasuryFactory"

export function createLuckyTreasuryCreatedEvent(
  owner: Address,
  tokenAddress: Address
): LuckyTreasuryCreated {
  let luckyTreasuryCreatedEvent = changetype<LuckyTreasuryCreated>(
    newMockEvent()
  )

  luckyTreasuryCreatedEvent.parameters = new Array()

  luckyTreasuryCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  luckyTreasuryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return luckyTreasuryCreatedEvent
}
