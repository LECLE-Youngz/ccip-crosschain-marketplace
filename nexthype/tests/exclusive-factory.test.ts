import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ExclusiveNFTCreated } from "../generated/schema"
import { ExclusiveNFTCreated as ExclusiveNFTCreatedEvent } from "../generated/ExclusiveFactory/ExclusiveFactory"
import { handleExclusiveNFTCreated } from "../src/exclusive-factory"
import { createExclusiveNFTCreatedEvent } from "./exclusive-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let unrevealURI = "Example string value"
    let premiumNFT = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newExclusiveNFTCreatedEvent = createExclusiveNFTCreatedEvent(
      owner,
      tokenAddress,
      unrevealURI,
      premiumNFT
    )
    handleExclusiveNFTCreated(newExclusiveNFTCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExclusiveNFTCreated created and stored", () => {
    assert.entityCount("ExclusiveNFTCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExclusiveNFTCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExclusiveNFTCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExclusiveNFTCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "unrevealURI",
      "Example string value"
    )
    assert.fieldEquals(
      "ExclusiveNFTCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "premiumNFT",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
