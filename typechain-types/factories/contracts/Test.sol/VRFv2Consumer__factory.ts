/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VRFv2Consumer,
  VRFv2ConsumerInterface,
} from "../../../contracts/Test.sol/VRFv2Consumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRequestStatus",
    outputs: [
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
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
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "requestIds",
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
    inputs: [],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "s_requests",
    outputs: [
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
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
  "0x60a06040527f474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c600655600780546001600160501b03191666020003000186a017905534801561004d57600080fd5b50604051610c29380380610c2983398101604081905261006c916101f9565b738103b0a8a00be2ddc778e6e7eaa21791cd36462560805233806000816100da5760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b038481169190911790915581161561010a5761010a81610150565b5050600380546001600160401b03909316600160a01b026001600160e01b031990931692909217738103b0a8a00be2ddc778e6e7eaa21791cd3646251790915550610229565b336001600160a01b038216036101a85760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016100d1565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60006020828403121561020b57600080fd5b81516001600160401b038116811461022257600080fd5b9392505050565b6080516109de61024b6000396000818161018901526101cb01526109de6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a168fa8911610066578063a168fa89146100f6578063d8a4676f14610139578063e0c862891461015a578063f2fde38b14610162578063fc2a88c31461017557600080fd5b80631fe543e31461009857806379ba5097146100ad5780638796ba8c146100b55780638da5cb5b146100db575b600080fd5b6100ab6100a6366004610805565b61017e565b005b6100ab61020b565b6100c86100c33660046108cf565b6102c9565b6040519081526020015b60405180910390f35b6000546040516001600160a01b0390911681526020016100d2565b6101226101043660046108cf565b60026020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016100d2565b61014c6101473660046108cf565b6102ea565b6040516100d2929190610923565b6100c86103de565b6100ab610170366004610946565b6105a3565b6100c860055481565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101fd5760405163073e64fd60e21b81523360048201526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660248201526044015b60405180910390fd5b61020782826105b7565b5050565b6001546001600160a01b031633146102655760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064016101f4565b600080543373ffffffffffffffffffffffffffffffffffffffff19808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b600481815481106102d957600080fd5b600091825260209091200154905081565b600081815260026020526040812054606090610100900460ff166103445760405162461bcd60e51b81526020600482015260116024820152701c995c5d595cdd081b9bdd08199bdd5b99607a1b60448201526064016101f4565b60008381526002602090815260408083208151606081018352815460ff80821615158352610100909104161515818501526001820180548451818702810187018652818152929593948601938301828280156103bf57602002820191906000526020600020905b8154815260200190600101908083116103ab575b5050505050815250509050806000015181604001519250925050915091565b60006103e861067d565b6003546006546007546040516305d3b1d360e41b81526004810192909252600160a01b830467ffffffffffffffff166024830152640100000000810461ffff16604483015263ffffffff808216606484015266010000000000009091041660848201526001600160a01b0390911690635d3b1d309060a4016020604051808303816000875af115801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a39190610976565b6040805160608101825260008082526001602080840182815285518481528083018752858701908152878552600283529590932084518154945161ffff1990951690151561ff00191617610100941515949094029390931783559351805195965092949193610518939185019291019061078f565b5050600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0182905550600581905560075460408051838152660100000000000090920463ffffffff1660208301527fcc58b13ad3eab50626c6a6300b1d139cd6ebb1688a7cced9461c2f7e762665ee910160405180910390a190565b6105ab61067d565b6105b4816106d9565b50565b600082815260026020526040902054610100900460ff1661060e5760405162461bcd60e51b81526020600482015260116024820152701c995c5d595cdd081b9bdd08199bdd5b99607a1b60448201526064016101f4565b6000828152600260209081526040909120805460ff191660019081178255835161063f93929091019184019061078f565b507ffe2e2d779dba245964d4e3ef9b994be63856fd568bf7d3ca9e224755cb1bd54d828260405161067192919061098f565b60405180910390a15050565b6000546001600160a01b031633146106d75760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016101f4565b565b336001600160a01b038216036107315760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016101f4565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b8280548282559060005260206000209081019282156107ca579160200282015b828111156107ca5782518255916020019190600101906107af565b506107d69291506107da565b5090565b5b808211156107d657600081556001016107db565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561081857600080fd5b8235915060208084013567ffffffffffffffff8082111561083857600080fd5b818601915086601f83011261084c57600080fd5b81358181111561085e5761085e6107ef565b8060051b604051601f19603f83011681018181108582111715610883576108836107ef565b6040529182528482019250838101850191898311156108a157600080fd5b938501935b828510156108bf578435845293850193928501926108a6565b8096505050505050509250929050565b6000602082840312156108e157600080fd5b5035919050565b600081518084526020808501945080840160005b83811015610918578151875295820195908201906001016108fc565b509495945050505050565b821515815260406020820152600061093e60408301846108e8565b949350505050565b60006020828403121561095857600080fd5b81356001600160a01b038116811461096f57600080fd5b9392505050565b60006020828403121561098857600080fd5b5051919050565b82815260406020820152600061093e60408301846108e856fea26469706673582212203a6509987425d3d05fdc12855a2020ed98c2fb569da320e0907e35047333c89264736f6c63430008130033";

type VRFv2ConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFv2ConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFv2Consumer__factory extends ContractFactory {
  constructor(...args: VRFv2ConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VRFv2Consumer> {
    return super.deploy(
      subscriptionId,
      overrides || {}
    ) as Promise<VRFv2Consumer>;
  }
  override getDeployTransaction(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(subscriptionId, overrides || {});
  }
  override attach(address: string): VRFv2Consumer {
    return super.attach(address) as VRFv2Consumer;
  }
  override connect(signer: Signer): VRFv2Consumer__factory {
    return super.connect(signer) as VRFv2Consumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFv2ConsumerInterface {
    return new utils.Interface(_abi) as VRFv2ConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFv2Consumer {
    return new Contract(address, _abi, signerOrProvider) as VRFv2Consumer;
  }
}
