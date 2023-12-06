import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ERC721TokenCreated } from "../generated/GenFactory/GenFactory"

export function createERC721TokenCreatedEvent(
  owner: Address,
  tokenAddress: Address
): ERC721TokenCreated {
  let erc721TokenCreatedEvent = changetype<ERC721TokenCreated>(newMockEvent())

  erc721TokenCreatedEvent.parameters = new Array()

  erc721TokenCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  erc721TokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return erc721TokenCreatedEvent
}
