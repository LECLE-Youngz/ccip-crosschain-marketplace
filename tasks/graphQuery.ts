export const tokensQuery = `
query getNFT($address: String, $collectionAddr: String) {
  transfersTo: transfers(where: {to: $address, contract: $collectionAddr}) {
    tokenId
  }
  transfersFrom: transfers(where: {from: $address, contract: $collectionAddr}) {
    tokenId
  }
}
`

export const queryAllNfts = `
query getAllNFT($collectionAddr: String) {
  transfers(where: { from: "0x0000000000000000000000000000000000000000", contract: $collectionAddr}) {
    tokenId
  }
}
`;

// promptAllower
export const queryPromptBoughts = `
query getPromptBoughts($address: String, $tokenId: String) {
    promptBoughts(where: {nftAddress: $address, tokenId: $tokenId}) {
        buyer
    }
    itemBoughts(where: {nftAddress: $address, tokenId: $tokenId}) {
        buyer
    }
    transfers(where: {from: "0x0000000000000000000000000000000000000000", contract: $address, tokenId: $tokenId}) {
        to
    }
  }
`;

// promptAllower
export const queryPromptBuyers = `
query queryPromptBuyers($address: String, $tokenId: String) {
    promptBoughts(where: {nftAddress: $address, tokenId: $tokenId}) {
        buyer
    }
  }
`;


    /////////////////////
    // Generative NFT //
    /////////////////////
export const queryAllCollection = `
query getAllCollection {
    erc721TokenCreateds {
        tokenAddress
    }
  }
`;

/* address = collectionAddress
   tokenId
   return: ownerAddres of that NFT 
*/
export const queryOwnerByIdNCollection = `
query getOwnerByIdNCollection($address: String, $tokenId: String) {
    transfers(where: {contract: $collectionAddr, tokenId: tokenId}
      orderDirection: desc) {
      to
    }
  }
`;

// query tat ca Coll va Id tu address, nho xu ly khi khong con giữ
export const queryAllCollectionByAddress = `
query getAllCollectionByAddress($address: String) {
    transfersTo: transfers(where: {to: $address}) {
        contract
        tokenId
    }

    transfersFrom: transfers(where: {from: $address}) {
        contract
        tokenId
    }
  }
`;

/* getCollectionByDeployer: 
input: deployer address
return: list Premium NFT
*/
// (bo vao address user => list Exclusive NFT)
export const getCollectionByDeployer = `
query getCollectionByDeployer($deployerAddr: String) {
  premiumNFTTransfers(where: {to: $deployerAddr}) {
    contract
    id
  }
}
`;

/* address = userAddress
   tokenId
   return: listPrompt allowed to that user
*/
export const queryPromptAllows = `
query getPromptBoughts($address: String) {
  promptBoughts(where: {buyer: $address}) {
    nftAddress
    tokenId
  }
  itemBoughts(where: {buyer: $address}) {
    nftAddress
    tokenId
  }
  transfers(where: {from: "0x0000000000000000000000000000000000000000", to: $address}) {
    contract
    tokenId
  }
  }
`;

    /////////////////////
    // Premium NFT //
    /////////////////////
/* getAllSubscriber: 
input: creator address
return: buyers (subscribers) of that NFT
*/
// bo vao address creator => danh sach nhung follower
export const getAllSubscriber = `
query getAllSubscriber($creatorAddr: String) {
  premiumMemberSubscribeds(where: {creator: $creatorAddr}) {
    subscriber
  }
}
`

/* getAllSubscriber: 
input: user (subscriber) address
return: list Premium NFT
*/
// bo vao address user => list Premium NFT
export const getAllSubscribing = `
query getAllSubscribing($userAddr: String) {
  premiumNFTTransfers(where: {to: $userAddr}) {
    contract
    id
  }
}
`

export const getCreatorStatus = `
query getCreatorStatus($address: String) {
  premiumTokenCreateds(where: {owner: $address}) {
    tokenAddress
  }
}
`

export const getVerified = `
query getVerified($seller: String, $buyer: String, $tokenId: String, $collection: String,) {
  itemBoughts(where: {nftAddress: $collection, tokenId: $tokenId, buyer: $buyer}) {
    nftPrice
  }
  itemListeds(where: {nftAddress: $collection, tokenId: $tokenId, seller: $seller}) {
    nftPrice
  }
}
`


    /////////////////////
    // Buy and Sell NFT/Prompt //
    /////////////////////


