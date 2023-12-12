import { ExclusiveNFTCreated as ExclusiveNFTCreatedEvent } from "../generated/ExclusiveFactory/ExclusiveFactory"
import { ExclusiveNFTCreated } from "../generated/schema"
import { ExclusiveNFT } from "../generated/templates"
export function handleExclusiveNFTCreated(
  event: ExclusiveNFTCreatedEvent
): void {
  let entity = new ExclusiveNFTCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  ExclusiveNFT.create(event.params.tokenAddress)
  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress
  entity.unrevealURI = event.params.unrevealURI
  entity.premiumNFT = event.params.premiumNFT

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
