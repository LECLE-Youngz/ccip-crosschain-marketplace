import { LuckyTreasuryCreated as LuckyTreasuryCreatedEvent } from "../generated/TreasuryFactory/TreasuryFactory"
import { LuckyTreasuryCreated } from "../generated/schema"
import { LuckyTreasury } from "../generated/templates"

export function handleLuckyTreasuryCreated(
  event: LuckyTreasuryCreatedEvent
): void {
  let entity = new LuckyTreasuryCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
    LuckyTreasury.create(event.params.tokenAddress)

  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
