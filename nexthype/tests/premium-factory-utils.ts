import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { PremiumTokenCreated } from "../generated/PremiumFactory/PremiumFactory"

export function createPremiumTokenCreatedEvent(
  owner: Address,
  tokenAddress: Address
): PremiumTokenCreated {
  let premiumTokenCreatedEvent = changetype<PremiumTokenCreated>(newMockEvent())

  premiumTokenCreatedEvent.parameters = new Array()

  premiumTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  premiumTokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return premiumTokenCreatedEvent
}
