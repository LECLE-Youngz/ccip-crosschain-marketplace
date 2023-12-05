import { PremiumTokenCreated as PremiumTokenCreatedEvent } from "../generated/Contract/Contract"
import { PremiumTokenCreated } from "../generated/schema"
import { PremiumNFT } from "../generated/templates"


export function handlePremiumTokenCreated(
  event: PremiumTokenCreatedEvent
): void {
  let entity = new PremiumTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  PremiumNFT.create(event.params.tokenAddress)
  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
