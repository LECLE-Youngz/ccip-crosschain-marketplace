import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  LotteryRequestFulfilled as LotteryRequestFulfilledEvent,
  LotteryRequestSent as LotteryRequestSentEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/LuckyNFT/LuckyNFT"
import {
  Approval,
  ApprovalForAll,
  LotteryRequestFulfilled,
  LotteryRequestSent,
  OwnershipTransferred,
  Transfer,
  NFTTransfer,
  EventTransfer
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

export function handleLotteryRequestFulfilled(
  event: LotteryRequestFulfilledEvent
): void {
  let entity = new LotteryRequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.subscriber = event.params.subscriber
  entity.tokenId = event.params.tokenId
  entity.result = event.params.result

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLotteryRequestSent(event: LotteryRequestSentEvent): void {
  let entity = new LotteryRequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.subscriber = event.params.subscriber

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

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
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
  
  eventTransfer.save()
  nftEntity.save()

  entity.save()
}
