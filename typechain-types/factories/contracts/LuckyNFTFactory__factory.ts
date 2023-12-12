/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LuckyNFTFactory,
  LuckyNFTFactoryInterface,
} from "../../contracts/LuckyNFTFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "LuckyTokenCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_premiumNFT",
        type: "address",
      },
    ],
    name: "deployLuckyToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalCollection",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "contract LuckyNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612a4b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063459dcbc3146100465780634f64b2be1461005c578063fee6019614610087575b600080fd5b6000546040519081526020015b60405180910390f35b61006f61006a3660046101a9565b61009a565b6040516001600160a01b039091168152602001610053565b61006f6100953660046101f4565b6100c4565b600081815481106100aa57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000808484846040516100d69061019c565b6100e2939291906102cf565b604051809103906000f0801580156100fe573d6000803e3d6000fd5b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040805133815260208101929092529192507f08f8ddc58da0990451da09ad3f6e8dcf4b845ecb4a6f67e8c877af65db3b1cf5910160405180910390a1949350505050565b6126d68061034083390190565b6000602082840312156101bb57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b03811681146101ef57600080fd5b919050565b60008060006060848603121561020957600080fd5b833567ffffffffffffffff808216821461022257600080fd5b9093506020850135908082111561023857600080fd5b818601915086601f83011261024c57600080fd5b81358181111561025e5761025e6101c2565b604051601f8201601f19908116603f01168101908382118183101715610286576102866101c2565b8160405282815289602084870101111561029f57600080fd5b8260208601602083013760006020848301015280965050505050506102c6604085016101d8565b90509250925092565b67ffffffffffffffff8416815260006020606081840152845180606085015260005b8181101561030d578681018301518582016080015282016102f1565b506000608082860101526080601f19601f830116850101925050506001600160a01b038316604083015294935050505056fe60e0604052600b80546001600160501b0319166601000300061a801790553480156200002a57600080fd5b50604051620026d6380380620026d68339810160408190526200004d91620002d8565b732ed832ba664535e5886b75d64c46eb9a228c261060405180604001604052806008815260200167131d58dade53919560c21b815250604051806040016040528060038152602001624c544360e81b8152508160009081620000b0919062000465565b506001620000bf828262000465565b5050506001600160a01b0316608052620000d9336200017e565b7f354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f6160a052600780546001600160a01b031916732ed832ba664535e5886b75d64c46eb9a228c26101790556001600160401b03831660c052600c6200013e838262000465565b50601180546001600160a01b0383166001600160a01b031991821681179092556012805490911690911790556200017532620001d0565b50505062000531565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6006546001600160a01b03163314620002305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620002975760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000227565b620002a2816200017e565b50565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002d357600080fd5b919050565b600080600060608486031215620002ee57600080fd5b83516001600160401b0380821682146200030757600080fd5b60208681015192955091818111156200031f57600080fd5b8601601f810188136200033157600080fd5b805182811115620003465762000346620002a5565b604051601f8201601f19908116603f01168101908482118183101715620003715762000371620002a5565b816040528281528a868486010111156200038a57600080fd5b600094505b82851015620003ae57838501860151818601870152938501936200038f565b6000868483010152809750505050505050620003cd60408501620002bb565b90509250925092565b600181811c90821680620003eb57607f821691505b6020821081036200040c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046057600081815260208120601f850160051c810160208610156200043b5750805b601f850160051c820191505b818110156200045c5782815560010162000447565b5050505b505050565b81516001600160401b03811115620004815762000481620002a5565b6200049981620004928454620003d6565b8462000412565b602080601f831160018114620004d15760008415620004b85750858301515b600019600386901b1c1916600185901b1785556200045c565b600085815260208120601f198616915b828110156200050257888601518255948401946001909101908401620004e1565b5085821015620005215787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05161216e620005686000396000610f2c01526000610efd0152600081816107560152610798015261216e6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638796ba8c11610104578063c4c97c4e116100a2578063e985e9c511610071578063e985e9c51461042f578063edc183c61461046b578063f2fde38b1461047e578063fc2a88c31461049157600080fd5b8063c4c97c4e146103c8578063c87b56dd146103e8578063d8a4676f146103fb578063e262ca7c1461041c57600080fd5b8063a168fa89116100de578063a168fa891461033f578063a22cb46514610382578063a3ed931a14610395578063b88d4fde146103b557600080fd5b80638796ba8c146103135780638da5cb5b1461032657806395d89b411461033757600080fd5b80634a60f6201161017157806365935e1b1161014b57806365935e1b146102c757806370a08231146102cf578063715018a6146102e2578063843a36fe146102ea57600080fd5b80634a60f6201461028a5780635a601985146102a15780636352211e146102b457600080fd5b8063095ea7b3116101ad578063095ea7b31461023c5780631fe543e31461025157806323b872dd1461026457806342842e0e1461027757600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611c06565b61049a565b60405190151581526020015b60405180910390f35b6102046104ec565b6040516101f39190611c73565b61022461021f366004611c86565b61057e565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611cbb565b610618565b005b61024f61025f366004611d2c565b61074b565b61024f610272366004611dde565b6107d3565b61024f610285366004611dde565b61084e565b610293600d5481565b6040519081526020016101f3565b601154610224906001600160a01b031681565b6102246102c2366004611c86565b610869565b6102046108e0565b6102936102dd366004611e1a565b61096e565b61024f6109f5565b6102246102f8366004611c86565b600f602052600090815260409020546001600160a01b031681565b610293610321366004611c86565b610a5b565b6006546001600160a01b0316610224565b610204610a7c565b61036b61034d366004611c86565b60086020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016101f3565b61024f610390366004611e35565b610a8b565b6102936103a3366004611c86565b600e6020526000908152604090205481565b61024f6103c3366004611e71565b610b4f565b6102936103d6366004611e1a565b60106020526000908152604090205481565b6102046103f6366004611c86565b610bd1565b61040e610409366004611c86565b610cba565b6040516101f3929190611f31565b61029361042a366004611e1a565b610dba565b6101e761043d366004611f81565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610293610479366004611e1a565b6110ff565b61024f61048c366004611e1a565b61116e565b610293600a5481565b60006001600160e01b031982166380ac58cd60e01b14806104cb57506001600160e01b03198216635b5e139f60e01b145b806104e657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546104fb90611fb4565b80601f016020809104026020016040519081016040528092919081815260200182805461052790611fb4565b80156105745780601f1061054957610100808354040283529160200191610574565b820191906000526020600020905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105fc5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061062382610869565b9050806001600160a01b0316836001600160a01b0316036106905760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105f3565b336001600160a01b03821614806106ca57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b61073c5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105f3565b6107468383611239565b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107c55760405163073e64fd60e21b81523360048201526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660248201526044016105f3565b6107cf82826112a7565b5050565b6107dd33826113db565b6108435760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b60648201526084016105f3565b6107468383836114d2565b61074683838360405180602001604052806000815250610b4f565b6000818152600260205260408120546001600160a01b0316806104e65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105f3565b600c80546108ed90611fb4565b80601f016020809104026020016040519081016040528092919081815260200182805461091990611fb4565b80156109665780601f1061093b57610100808354040283529160200191610966565b820191906000526020600020905b81548152906001019060200180831161094957829003601f168201915b505050505081565b60006001600160a01b0382166109d95760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105f3565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610a4f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f3565b610a596000611672565b565b60098181548110610a6b57600080fd5b600091825260209091200154905081565b6060600180546104fb90611fb4565b336001600160a01b03831603610ae35760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105f3565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610b5933836113db565b610bbf5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b60648201526084016105f3565b610bcb848484846116c4565b50505050565b6000818152600260205260409020546060906001600160a01b0316610c5e5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016105f3565b6000610c68611742565b90506000815111610c885760405180602001604052806000815250610cb3565b80610c9284611751565b604051602001610ca3929190611fee565b6040516020818303038152906040525b9392505050565b600081815260086020526040812054606090610100900460ff16610d205760405162461bcd60e51b815260206004820152601160248201527f72657175657374206e6f7420666f756e6400000000000000000000000000000060448201526064016105f3565b60008381526008602090815260408083208151606081018352815460ff8082161515835261010090910416151581850152600182018054845181870281018701865281815292959394860193830182828015610d9b57602002820191906000526020600020905b815481526020019060010190808311610d87575b5050505050815250509050806000015181604001519250925050915091565b6001600160a01b03811660009081526010602052604081205415610e205760405162461bcd60e51b815260206004820152600e60248201527f416c72656164792064726177656400000000000000000000000000000000000060448201526064016105f3565b6012546040516370a0823160e01b81526001600160a01b03848116600483015260009216906370a0823190602401602060405180830381865afa158015610e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8f919061201d565b11610ee85760405162461bcd60e51b8152602060048201526024808201527f53656e64657220686176656e2774207375627363726962656420746f2063726560448201526330ba37b960e11b60648201526084016105f3565b600754600b546040516305d3b1d360e41b81527f0000000000000000000000000000000000000000000000000000000000000000600482015267ffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166024820152640100000000820461ffff16604482015263ffffffff8083166064830152660100000000000090920490911660848201526001600160a01b0390911690635d3b1d309060a4016020604051808303816000875af1158015610fb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fda919061201d565b6040805160608101825260008082526001602080840182815285518481528083018752858701908152878552600883529590932084518154945161ffff1990951690151561ff0019161761010094151594909402939093178355935180519596509294919361104f9391850192910190611b90565b505060098054600181019091557f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0182905550600a8190556000818152600f6020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558084526010835292819020606590558051848152918201929092527f03ac09620be00cc6aad517b68f64df0f781078cbb29ef5bbb4940efd168b5ce7910160405180910390a1919050565b6012546040516370a0823160e01b81526001600160a01b03838116600483015260009216906370a0823190602401602060405180830381865afa15801561114a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e6919061201d565b6006546001600160a01b031633146111c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f3565b6001600160a01b03811661122d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105f3565b61123681611672565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061126e82610869565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006064826000815181106112be576112be612036565b60200260200101516112d09190612062565b6112db90600161208c565b6000848152600860209081526040909120805460ff191660019081178255855193945061130d93910191850190611b90565b50600d80546000918261131f8361209f565b909155506000858152600f6020818152604080842080546001600160a01b0390811686526010845291852088905593899052919052905491925061136491168261186a565b6000818152600e60209081526040808320859055868352600f8252918290205482518781526001600160a01b0390911691810191909152908101829052606081018390527fbcc124cbe97b4b5f5704c871869ca70bfe02849ea9719ee83411238aeb6feed79060800160405180910390a150505050565b6000818152600260205260408120546001600160a01b03166114545760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105f3565b600061145f83610869565b9050806001600160a01b0316846001600160a01b0316148061149a5750836001600160a01b031661148f8461057e565b6001600160a01b0316145b806114ca57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166114e582610869565b6001600160a01b03161461154d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105f3565b6001600160a01b0382166115af5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105f3565b6115ba600082611239565b6001600160a01b03831660009081526003602052604081208054600192906115e39084906120b8565b90915550506001600160a01b038216600090815260036020526040812080546001929061161190849061208c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6116cf8484846114d2565b6116db84848484611884565b610bcb5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105f3565b6060600c80546104fb90611fb4565b6060816000036117785750506040805180820190915260018152600360fc1b602082015290565b8160005b81156117a2578061178c8161209f565b915061179b9050600a836120cb565b915061177c565b60008167ffffffffffffffff8111156117bd576117bd611ce5565b6040519080825280601f01601f1916602001820160405280156117e7576020820181803683370190505b5090505b84156114ca576117fc6001836120b8565b9150611809600a86612062565b61181490603061208c565b60f81b81838151811061182957611829612036565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611863600a866120cb565b94506117eb565b6107cf8282604051806020016040528060008152506119d0565b60006001600160a01b0384163b156119c557604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906118c89033908990889088906004016120df565b6020604051808303816000875af1925050508015611903575060408051601f3d908101601f191682019092526119009181019061211b565b60015b6119ab573d808015611931576040519150601f19603f3d011682016040523d82523d6000602084013e611936565b606091505b5080516000036119a35760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105f3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506114ca565b506001949350505050565b6119da8383611a4e565b6119e76000848484611884565b6107465760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105f3565b6001600160a01b038216611aa45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105f3565b6000818152600260205260409020546001600160a01b031615611b095760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105f3565b6001600160a01b0382166000908152600360205260408120805460019290611b3290849061208c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054828255906000526020600020908101928215611bcb579160200282015b82811115611bcb578251825591602001919060010190611bb0565b50611bd7929150611bdb565b5090565b5b80821115611bd75760008155600101611bdc565b6001600160e01b03198116811461123657600080fd5b600060208284031215611c1857600080fd5b8135610cb381611bf0565b60005b83811015611c3e578181015183820152602001611c26565b50506000910152565b60008151808452611c5f816020860160208601611c23565b601f01601f19169290920160200192915050565b602081526000610cb36020830184611c47565b600060208284031215611c9857600080fd5b5035919050565b80356001600160a01b0381168114611cb657600080fd5b919050565b60008060408385031215611cce57600080fd5b611cd783611c9f565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d2457611d24611ce5565b604052919050565b60008060408385031215611d3f57600080fd5b8235915060208084013567ffffffffffffffff80821115611d5f57600080fd5b818601915086601f830112611d7357600080fd5b813581811115611d8557611d85611ce5565b8060051b9150611d96848301611cfb565b8181529183018401918481019089841115611db057600080fd5b938501935b83851015611dce57843582529385019390850190611db5565b8096505050505050509250929050565b600080600060608486031215611df357600080fd5b611dfc84611c9f565b9250611e0a60208501611c9f565b9150604084013590509250925092565b600060208284031215611e2c57600080fd5b610cb382611c9f565b60008060408385031215611e4857600080fd5b611e5183611c9f565b915060208301358015158114611e6657600080fd5b809150509250929050565b60008060008060808587031215611e8757600080fd5b611e9085611c9f565b93506020611e9f818701611c9f565b935060408601359250606086013567ffffffffffffffff80821115611ec357600080fd5b818801915088601f830112611ed757600080fd5b813581811115611ee957611ee9611ce5565b611efb601f8201601f19168501611cfb565b91508082528984828501011115611f1157600080fd5b808484018584013760008482840101525080935050505092959194509250565b60006040820184151583526020604081850152818551808452606086019150828701935060005b81811015611f7457845183529383019391830191600101611f58565b5090979650505050505050565b60008060408385031215611f9457600080fd5b611f9d83611c9f565b9150611fab60208401611c9f565b90509250929050565b600181811c90821680611fc857607f821691505b602082108103611fe857634e487b7160e01b600052602260045260246000fd5b50919050565b60008351612000818460208801611c23565b835190830190612014818360208801611c23565b01949350505050565b60006020828403121561202f57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826120715761207161204c565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156104e6576104e6612076565b6000600182016120b1576120b1612076565b5060010190565b818103818111156104e6576104e6612076565b6000826120da576120da61204c565b500490565b60006001600160a01b038087168352808616602084015250836040830152608060608301526121116080830184611c47565b9695505050505050565b60006020828403121561212d57600080fd5b8151610cb381611bf056fea26469706673582212208309aa58cc596a9f5472bd8f210b917f9541fd3b020e4635b95f1cbfcc64b32464736f6c63430008130033a2646970667358221220b255de269c9ebf94e2f060c969fef9c2cb35a47a74d8dce55f9a1dbcedaf8d7564736f6c63430008130033";

type LuckyNFTFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LuckyNFTFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LuckyNFTFactory__factory extends ContractFactory {
  constructor(...args: LuckyNFTFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LuckyNFTFactory> {
    return super.deploy(overrides || {}) as Promise<LuckyNFTFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LuckyNFTFactory {
    return super.attach(address) as LuckyNFTFactory;
  }
  override connect(signer: Signer): LuckyNFTFactory__factory {
    return super.connect(signer) as LuckyNFTFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LuckyNFTFactoryInterface {
    return new utils.Interface(_abi) as LuckyNFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LuckyNFTFactory {
    return new Contract(address, _abi, signerOrProvider) as LuckyNFTFactory;
  }
}
