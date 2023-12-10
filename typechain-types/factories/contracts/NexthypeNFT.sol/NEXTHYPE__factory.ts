/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NEXTHYPE,
  NEXTHYPEInterface,
} from "../../../contracts/NexthypeNFT.sol/NEXTHYPE";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060088152602001674e4558544859504560c01b8152506040518060400160405280600381526020016213915560ea1b81525081600090816200006091906200018d565b5060016200006f82826200018d565b5050506200008c620000866200009260201b60201c565b62000096565b62000259565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011357607f821691505b6020821081036200013457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018857600081815260208120601f850160051c81016020861015620001635750805b601f850160051c820191505b8181101562000184578281556001016200016f565b5050505b505050565b81516001600160401b03811115620001a957620001a9620000e8565b620001c181620001ba8454620000fe565b846200013a565b602080601f831160018114620001f95760008415620001e05750858301515b600019600386901b1c1916600185901b17855562000184565b600085815260208120601f198616915b828110156200022a5788860151825594840194600190910190840162000209565b5085821015620002495787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611aa180620002696000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb4651461022a578063b88d4fde1461023d578063c87b56dd14610250578063e985e9c514610263578063f2fde38b1461029f57600080fd5b806370a08231146101f6578063715018a6146102095780638da5cb5b1461021157806395d89b411461022257600080fd5b806323b872dd116100e957806323b872dd146101985780633d0673d4146101ab57806342842e0e146101bd5780636352211e146101d0578063695850fb146101e357600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e6101293660046114fc565b6102b2565b60405190151581526020015b60405180910390f35b61014b610304565b60405161013a9190611569565b61016b61016636600461157c565b610396565b6040516001600160a01b03909116815260200161013a565b6101966101913660046115b1565b610430565b005b6101966101a63660046115db565b610563565b6008545b60405190815260200161013a565b6101966101cb3660046115db565b6105de565b61016b6101de36600461157c565b6105f9565b6101966101f13660046116a3565b610670565b6101af6102043660046116ec565b61069f565b610196610726565b6007546001600160a01b031661016b565b61014b61078c565b610196610238366004611707565b61079b565b61019661024b366004611743565b61085f565b61014b61025e36600461157c565b6108e1565b61012e6102713660046117bf565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101966102ad3660046116ec565b610a73565b60006001600160e01b031982166380ac58cd60e01b14806102e357506001600160e01b03198216635b5e139f60e01b145b806102fe57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610313906117f2565b80601f016020809104026020016040519081016040528092919081815260200182805461033f906117f2565b801561038c5780601f106103615761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161036f57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104145760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061043b826105f9565b9050806001600160a01b0316836001600160a01b0316036104a85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161040b565b336001600160a01b03821614806104e257506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6105545760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161040b565b61055e8383610b3e565b505050565b61056d3382610bac565b6105d35760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606482015260840161040b565b61055e838383610c9f565b61055e8383836040518060200160405280600081525061085f565b6000818152600260205260408120546001600160a01b0316806102fe5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161040b565b600880546000918261068183611842565b9091555090506106913382610e3f565b61069b8183610e59565b5050565b60006001600160a01b03821661070a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161040b565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b031633146107805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040b565b61078a6000610efb565b565b606060018054610313906117f2565b336001600160a01b038316036107f35760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161040b565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108693383610bac565b6108cf5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606482015260840161040b565b6108db84848484610f4d565b50505050565b6000818152600260205260409020546060906001600160a01b031661096e5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000606482015260840161040b565b60008281526006602052604081208054610987906117f2565b80601f01602080910402602001604051908101604052809291908181526020018280546109b3906117f2565b8015610a005780601f106109d557610100808354040283529160200191610a00565b820191906000526020600020905b8154815290600101906020018083116109e357829003601f168201915b505050505090506000610a1e60408051602081019091526000815290565b90508051600003610a30575092915050565b815115610a62578082604051602001610a4a92919061185b565b60405160208183030381529060405292505050919050565b610a6b84610fcb565b949350505050565b6007546001600160a01b03163314610acd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040b565b6001600160a01b038116610b325760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161040b565b610b3b81610efb565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b73826105f9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610c255760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161040b565b6000610c30836105f9565b9050806001600160a01b0316846001600160a01b03161480610c6b5750836001600160a01b0316610c6084610396565b6001600160a01b0316145b80610a6b57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610a6b565b826001600160a01b0316610cb2826105f9565b6001600160a01b031614610d1a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161040b565b6001600160a01b038216610d7c5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161040b565b610d87600082610b3e565b6001600160a01b0383166000908152600360205260408120805460019290610db090849061188a565b90915550506001600160a01b0382166000908152600360205260408120805460019290610dde90849061189d565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61069b8282604051806020016040528060008152506110c1565b6000828152600260205260409020546001600160a01b0316610ee35760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161040b565b600082815260066020526040902061055e82826118fe565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610f58848484610c9f565b610f648484848461113f565b6108db5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040b565b6000818152600260205260409020546060906001600160a01b03166110585760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161040b565b600061106f60408051602081019091526000815290565b9050600081511161108f57604051806020016040528060008152506110ba565b806110998461128b565b6040516020016110aa92919061185b565b6040516020818303038152906040525b9392505050565b6110cb83836113a4565b6110d8600084848461113f565b61055e5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040b565b60006001600160a01b0384163b1561128057604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906111839033908990889088906004016119be565b6020604051808303816000875af19250505080156111be575060408051601f3d908101601f191682019092526111bb918101906119fa565b60015b611266573d8080156111ec576040519150601f19603f3d011682016040523d82523d6000602084013e6111f1565b606091505b50805160000361125e5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040b565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a6b565b506001949350505050565b6060816000036112b25750506040805180820190915260018152600360fc1b602082015290565b8160005b81156112dc57806112c681611842565b91506112d59050600a83611a2d565b91506112b6565b60008167ffffffffffffffff8111156112f7576112f7611617565b6040519080825280601f01601f191660200182016040528015611321576020820181803683370190505b5090505b8415610a6b5761133660018361188a565b9150611343600a86611a41565b61134e90603061189d565b60f81b81838151811061136357611363611a55565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061139d600a86611a2d565b9450611325565b6001600160a01b0382166113fa5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161040b565b6000818152600260205260409020546001600160a01b03161561145f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161040b565b6001600160a01b038216600090815260036020526040812080546001929061148890849061189d565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610b3b57600080fd5b60006020828403121561150e57600080fd5b81356110ba816114e6565b60005b8381101561153457818101518382015260200161151c565b50506000910152565b60008151808452611555816020860160208601611519565b601f01601f19169290920160200192915050565b6020815260006110ba602083018461153d565b60006020828403121561158e57600080fd5b5035919050565b80356001600160a01b03811681146115ac57600080fd5b919050565b600080604083850312156115c457600080fd5b6115cd83611595565b946020939093013593505050565b6000806000606084860312156115f057600080fd5b6115f984611595565b925061160760208501611595565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561164857611648611617565b604051601f8501601f19908116603f0116810190828211818310171561167057611670611617565b8160405280935085815286868601111561168957600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156116b557600080fd5b813567ffffffffffffffff8111156116cc57600080fd5b8201601f810184136116dd57600080fd5b610a6b8482356020840161162d565b6000602082840312156116fe57600080fd5b6110ba82611595565b6000806040838503121561171a57600080fd5b61172383611595565b91506020830135801515811461173857600080fd5b809150509250929050565b6000806000806080858703121561175957600080fd5b61176285611595565b935061177060208601611595565b925060408501359150606085013567ffffffffffffffff81111561179357600080fd5b8501601f810187136117a457600080fd5b6117b38782356020840161162d565b91505092959194509250565b600080604083850312156117d257600080fd5b6117db83611595565b91506117e960208401611595565b90509250929050565b600181811c9082168061180657607f821691505b60208210810361182657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000600182016118545761185461182c565b5060010190565b6000835161186d818460208801611519565b835190830190611881818360208801611519565b01949350505050565b818103818111156102fe576102fe61182c565b808201808211156102fe576102fe61182c565b601f82111561055e57600081815260208120601f850160051c810160208610156118d75750805b601f850160051c820191505b818110156118f6578281556001016118e3565b505050505050565b815167ffffffffffffffff81111561191857611918611617565b61192c8161192684546117f2565b846118b0565b602080601f83116001811461196157600084156119495750858301515b600019600386901b1c1916600185901b1785556118f6565b600085815260208120601f198616915b8281101561199057888601518255948401946001909101908401611971565b50858210156119ae5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001600160a01b038087168352808616602084015250836040830152608060608301526119f0608083018461153d565b9695505050505050565b600060208284031215611a0c57600080fd5b81516110ba816114e6565b634e487b7160e01b600052601260045260246000fd5b600082611a3c57611a3c611a17565b500490565b600082611a5057611a50611a17565b500690565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220bb6d1f3ae40ad99bc8d2a6a319f1350455532dc8a1a06b86898b55073eb5902f64736f6c63430008130033";

type NEXTHYPEConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NEXTHYPEConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NEXTHYPE__factory extends ContractFactory {
  constructor(...args: NEXTHYPEConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NEXTHYPE> {
    return super.deploy(overrides || {}) as Promise<NEXTHYPE>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NEXTHYPE {
    return super.attach(address) as NEXTHYPE;
  }
  override connect(signer: Signer): NEXTHYPE__factory {
    return super.connect(signer) as NEXTHYPE__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NEXTHYPEInterface {
    return new utils.Interface(_abi) as NEXTHYPEInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NEXTHYPE {
    return new Contract(address, _abi, signerOrProvider) as NEXTHYPE;
  }
}
