import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { any } from 'hardhat/internal/core/params/argumentTypes';
// import { SUBGRAPH_NAME } from "./constants";

const APIURL = 'https://api.studio.thegraph.com/query/59181/nexthype/v2.0.1'
// https://api.studio.thegraph.com/query/<ID>/<SUBGRAPH_NAME>/<VERSION>
// https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>

const tokensQuery = `
query getNFT($address: String) {
  transfers(where: {to: $address}) {
    tokenId
  }
}
`

interface Transfer {
  __typename: string;
  tokenId: string;
}

export async function queryNFTsByAddress(address: string): Promise<string[]> {
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

// tokenIdArray = data.transfers?.map((transfer: Transfer) => transfer.tokenId)) 
queryNFTsByAddress("0x0120BA1b38ba33Ce3537Acef506adb133fe729aD")