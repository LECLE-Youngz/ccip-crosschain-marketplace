import { ERC721TokenCreated as ERC721TokenCreatedEvent } from "../generated/GenFactory/GenFactory"
import { generativeNFT } from "../generated/templates"
import { ERC721TokenCreated } from "../generated/schema"

export function handleERC721TokenCreated(event: ERC721TokenCreatedEvent): void {
  let entity = new ERC721TokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  generativeNFT.create(event.params.tokenAddress)
  entity.owner = event.params.owner
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
