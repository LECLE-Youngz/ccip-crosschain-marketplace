import { LuckyTokenCreated as LuckyTokenCreatedEvent } from "../generated/LuckyFactory/LuckyFactory"
import { LuckyTokenCreated, EventCreated } from "../generated/schema"
import { LuckyNFT } from "../generated/templates"

export function handleLuckyTokenCreated(event: LuckyTokenCreatedEvent): void {
  let entity = new LuckyTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  LuckyNFT.create(event.params.tokenAddress)
  let events = new EventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  events.owner = event.params.owner
  events.tokenAddress = event.params.tokenAddress

  events.blockNumber = event.block.number
  events.blockTimestamp = event.block.timestamp
  events.transactionHash = event.transaction.hash
  events.save()

  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
