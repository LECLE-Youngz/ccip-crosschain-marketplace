import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { tokensQuery, queryPromptBoughts } from './graphQuery'
import { Transfer } from './types'

// import { SUBGRAPH_NAME } from "./constants";

const APIURL = 'https://api.studio.thegraph.com/query/59181/nexthype/v2.9.0'

// Query NFTs Prompt by this NFT address and tokenId
export async function queryNFTsByAddress(address: string, collectionAddr: string): Promise<string[]> {
  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })
  
  var tokenIdArray : string[] = [];
  await client
    .query({
      query: gql(tokensQuery),
      variables: {
        address: address,
        collectionAddr: collectionAddr
      },
    })
    .then((data: object) => { 
      // TODO:
      // handle data here
      console.log(JSON.stringify(data, null, 2))
    })
    .catch((err: any) => {
      console.log('Error fetching data: ', err)
    })
  console.log(tokenIdArray)
  return tokenIdArray;
}

// Query all NFTs possessed by this address
export async function queryPromptBuyers(address: string, tokenId: string): Promise<string[]> {
  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })
  var tokenIdArray : string[] = [];
  await client
    .query({
      query: gql(queryPromptBoughts),
      variables: {
        address: address,
        tokenId: tokenId
      },
    })
    .then((data: object) => { 
      // TODO:
      // handle data here
      console.log(JSON.stringify(data, null, 2))
    })
    .catch((err: any) => {
      console.log('Error fetching data: ', err)
    })
  console.log(tokenIdArray)
  return tokenIdArray;
}

// queryNFTsByAddress("0x0120BA1b38ba33Ce3537Acef506adb133fe729aD", "0x0120BA1b38ba33Ce3537Acef506adb133fe729aD")
