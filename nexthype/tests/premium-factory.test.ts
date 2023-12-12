import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { PremiumTokenCreated } from "../generated/schema"
import { PremiumTokenCreated as PremiumTokenCreatedEvent } from "../generated/PremiumFactory/PremiumFactory"
import { handlePremiumTokenCreated } from "../src/premium-factory"
import { createPremiumTokenCreatedEvent } from "./premium-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newPremiumTokenCreatedEvent = createPremiumTokenCreatedEvent(
      owner,
      tokenAddress
    )
    handlePremiumTokenCreated(newPremiumTokenCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PremiumTokenCreated created and stored", () => {
    assert.entityCount("PremiumTokenCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PremiumTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PremiumTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
