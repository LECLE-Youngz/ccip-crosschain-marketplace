import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { tokensQuery, queryPromptBoughts, queryAllCollectionByAddress, getAllSubscriber } from './graphQuery'
import { Transfer } from './types'

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
    .then((data: any) => { 
      // handle data here
      console.log(JSON.stringify(data, null, 2));

      const minusResult: Transfer[] = 
      data.data.transfersTo && data.data.transfersFrom
        ? data.data.transfersTo.filter(
            (transferTo: Transfer) => !data.data.transfersFrom.some((transferFrom: Transfer) => transferFrom.tokenId === transferTo.tokenId)
          )
        : [];
    
    console.log("minusResult: ", minusResult);
      
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

// 
export async function queryAllCollectionNIds(address: string): Promise<string[]> {
  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })
  
  var tokenIdArray : string[] = [];
  await client
    .query({
      query: gql(queryAllCollectionByAddress),
      variables: {
        address: address,
      },
    })
    .then((data: any) => { 
      // handle data here
      console.log(JSON.stringify(data, null, 2));

      const minusResult: Transfer[] = 
      data.data.transfersTo && data.data.transfersFrom
      ? data.data.transfersTo.filter(
          (transferTo: Transfer) => !data.data.transfersFrom.some((transferFrom: Transfer) => transferFrom.tokenId.toLocaleLowerCase() === transferTo.tokenId.toLocaleLowerCase())
        )
      : [];

    console.log("minusResult: ", minusResult);      
    })
    .catch((err: any) => {
      console.log('Error fetching data: ', err)
    })
  return tokenIdArray;
}

// query Subscribers for PremiumNFT
export async function querySubscribers(premiumAddr: string): Promise<string[]> {
  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })
  
  var tokenIdArray : string[] = [];
  await client
    .query({
      query: gql(getAllSubscriber),
      variables: {
        premiumAddr: premiumAddr,
      },
    })
    .then((data: any) => { 
      // handle data here
      console.log(JSON.stringify(data, null, 2));

      const minusResult: Transfer[] = 
      data.data.transfersTo && data.data.transfersFrom
      ? data.data.transfersTo.filter(
          (transferTo: Transfer) => !data.data.transfersFrom.some((transferFrom: Transfer) => transferFrom.from.toLocaleLowerCase() === transferTo.to.toLocaleLowerCase())
        )
      : [];

    console.log("minusResult: ", minusResult);      
    })
    .catch((err: any) => {
      console.log('Error fetching data: ', err)
    })
  return tokenIdArray;
}

// querySubscribers("0xF579d4f36aa6ED63aEb325ee8a3A37eDDCAE01Cb")

// queryNFTsByAddress("0x036e961F66074373eF8bd348e4f5f908b9b9d93a","0xF579d4f36aa6ED63aEb325ee8a3A37eDDCAE01Cb")
