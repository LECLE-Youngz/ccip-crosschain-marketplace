import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  LuckyNFTRequest,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RandomnessRequest,
  RequestFulfilled,
  RequestSent,
  Response,
  Transfer
} from "../generated/MysteryEvent/MysteryEvent"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createLuckyNFTRequestEvent(
  subscriber: Address,
  requestId: Bytes
): LuckyNFTRequest {
  let luckyNftRequestEvent = changetype<LuckyNFTRequest>(newMockEvent())

  luckyNftRequestEvent.parameters = new Array()

  luckyNftRequestEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  luckyNftRequestEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )

  return luckyNftRequestEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createRandomnessRequestEvent(
  requestId: BigInt
): RandomnessRequest {
  let randomnessRequestEvent = changetype<RandomnessRequest>(newMockEvent())

  randomnessRequestEvent.parameters = new Array()

  randomnessRequestEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return randomnessRequestEvent
}

export function createRequestFulfilledEvent(id: Bytes): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(id: Bytes): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestSentEvent
}

export function createResponseEvent(
  requestId: Bytes,
  response: Bytes,
  err: Bytes
): Response {
  let responseEvent = changetype<Response>(newMockEvent())

  responseEvent.parameters = new Array()

  responseEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  responseEvent.parameters.push(
    new ethereum.EventParam("response", ethereum.Value.fromBytes(response))
  )
  responseEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return responseEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
