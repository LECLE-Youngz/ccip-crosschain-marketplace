export const tokensQuery = `
query getNFT($address: String, $collectionAddr: String) {
  transfers(where: {to: $address, contract: $collectionAddr}) {
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

export const queryAllCollection = `
query getAllCollection {
    erc721TokenCreateds {
        tokenAddress
    }
  }
`;
