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
query getAllNFT($address: String, $collectionAddr: String) {
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

// In progress
export const queryCollOwnerAndBuyers = `
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

