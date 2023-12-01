export const tokensQuery = `
query getNFT($address: String) {
  transfers(where: {to: $address}) {
    tokenId
  }
}
`

export const queryAllNfts = `
query getAllNFT {
  transfers(where: { from: "0x0000000000000000000000000000000000000000" }) {
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
