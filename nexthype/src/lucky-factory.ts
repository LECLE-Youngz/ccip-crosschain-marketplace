import { LuckyTokenCreated as LuckyTokenCreatedEvent } from "../generated/LuckyFactory/LuckyFactory"
import { LuckyTokenCreated } from "../generated/schema"
import { LuckyNFT } from "../generated/templates"

export function handleLuckyTokenCreated(event: LuckyTokenCreatedEvent): void {
  let entity = new LuckyTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  LuckyNFT.create(event.params.tokenAddress)

  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
