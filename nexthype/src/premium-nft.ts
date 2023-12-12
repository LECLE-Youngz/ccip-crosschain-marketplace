import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PremiumMemberSubscribed as PremiumMemberSubscribedEvent,
  Transfer as TransferEvent
} from "../generated/PremiumNFT/PremiumNFT"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  PremiumMemberSubscribed,
  PremiumNFTTransfer,
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

export function handlePremiumMemberSubscribed(
  event: PremiumMemberSubscribedEvent
): void {
  let entity = new PremiumMemberSubscribed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.subscriber = event.params.subscriber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new PremiumNFTTransfer(
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
  
  nftEntity.save()
  entity.save()
}
