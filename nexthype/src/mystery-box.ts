import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomnessRequest as RandomnessRequestEvent,
  Transfer as TransferEvent
} from "../generated/MysteryBox/MysteryBox"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  RandomnessRequest,
  MysteryBoxTransfer,
  EventTransfer,
  NFTTransfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRandomnessRequest(event: RandomnessRequestEvent): void {
  let entity = new RandomnessRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new MysteryBoxTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.contract = event.address
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let nftEntity = new NFTTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  nftEntity.from = event.params.from
  nftEntity.to = event.params.to
  nftEntity.tokenId = event.params.tokenId
  nftEntity.contract = event.address
  nftEntity.blockNumber = event.block.number
  nftEntity.blockTimestamp = event.block.timestamp
  nftEntity.transactionHash = event.transaction.hash

  let eventTransfer = new EventTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  eventTransfer.from = event.params.from
  eventTransfer.to = event.params.to
  eventTransfer.tokenId = event.params.tokenId
  eventTransfer.contract = event.address
  eventTransfer.blockNumber = event.block.number
  eventTransfer.blockTimestamp = event.block.timestamp
  eventTransfer.transactionHash = event.transaction.hash

  entity.save()
}
