import { MysteryBoxCreated as MysteryBoxCreatedEvent } from "../generated/BoxFactory/BoxFactory"
import { MysteryBoxCreated, EventCreated } from "../generated/schema"
import { MysteryBox } from "../generated/templates"

export function handleMysteryBoxCreated(event: MysteryBoxCreatedEvent): void {
  let entity = new MysteryBoxCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  let events = new EventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  MysteryBox.create(event.params.tokenAddress)
  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
