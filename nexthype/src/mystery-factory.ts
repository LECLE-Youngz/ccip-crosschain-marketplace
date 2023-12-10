import { MysteryEventCreated as MysteryEventCreatedEvent } from "../generated/MysteryFactory/MysteryFactory"
import { MysteryEventCreated, EventCreated } from "../generated/schema"
import { MysteryEvent } from "../generated/templates"
export function handleMysteryEventCreated(
  event: MysteryEventCreatedEvent
): void {
  let entity = new MysteryEventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  MysteryEvent.create(event.params.tokenAddress)
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
