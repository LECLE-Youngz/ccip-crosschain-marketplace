import { MysteryEventCreated as MysteryEventCreatedEvent } from "../generated/MysteryFactory/MysteryFactory"
import { MysteryEventCreated } from "../generated/schema"

export function handleMysteryEventCreated(
  event: MysteryEventCreatedEvent
): void {
  let entity = new MysteryEventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
