/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Nexthype,
  NexthypeInterface,
} from "../../../contracts/NexthypeToken.sol/Nexthype";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b50604051806040016040528060088152602001674e6578746879706560c01b815250604051806040016040528060048152602001631dd3915560e21b8152508160039081620000619190620002a1565b506004620000708282620002a1565b5050506200008d62000087620000ba60201b60201c565b620000be565b620000b433620000a06012600a62000482565b620000ae906127106200049a565b62000110565b620004ca565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200016b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200017f9190620004b4565b90915550506001600160a01b03821660009081526020819052604081208054839290620001ae908490620004b4565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200022857607f821691505b6020821081036200024957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001f857600081815260208120601f850160051c81016020861015620002785750805b601f850160051c820191505b81811015620002995782815560010162000284565b505050505050565b81516001600160401b03811115620002bd57620002bd620001fd565b620002d581620002ce845462000213565b846200024f565b602080601f8311600181146200030d5760008415620002f45750858301515b600019600386901b1c1916600185901b17855562000299565b600085815260208120601f198616915b828110156200033e578886015182559484019460019091019084016200031d565b50858210156200035d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003c4578160001904821115620003a857620003a86200036d565b80851615620003b657918102915b93841c939080029062000388565b509250929050565b600082620003dd575060016200047c565b81620003ec575060006200047c565b8160018114620004055760028114620004105762000430565b60019150506200047c565b60ff8411156200042457620004246200036d565b50506001821b6200047c565b5060208310610133831016604e8410600b841016171562000455575081810a6200047c565b62000461838362000383565b80600019048211156200047857620004786200036d565b0290505b92915050565b60006200049360ff841683620003cc565b9392505050565b80820281158282048414176200047c576200047c6200036d565b808201808211156200047c576200047c6200036d565b610c2680620004da6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146101eb578063a9059cbb146101fe578063dd62ed3e14610211578063f2fde38b1461024a57600080fd5b806370a0823114610197578063715018a6146101c05780638da5cb5b146101c857806395d89b41146101e357600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461016f57806340c10f191461018257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261025d565b60405161010f9190610a70565b60405180910390f35b61012b610126366004610ada565b6102ef565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610b04565b610306565b6040516012815260200161010f565b61012b61017d366004610ada565b6103b5565b610195610190366004610ada565b6103f1565b005b61013f6101a5366004610b40565b6001600160a01b031660009081526020819052604090205490565b610195610459565b6005546040516001600160a01b03909116815260200161010f565b6101026104bf565b61012b6101f9366004610ada565b6104ce565b61012b61020c366004610ada565b610567565b61013f61021f366004610b62565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610195610258366004610b40565b610574565b60606003805461026c90610b95565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610b95565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b5050505050905090565b60006102fc33848461063f565b5060015b92915050565b6000610313848484610763565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561039d5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103aa853385840361063f565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102fc9185906103ec908690610bcf565b61063f565b6005546001600160a01b0316331461044b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610394565b6104558282610932565b5050565b6005546001600160a01b031633146104b35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610394565b6104bd6000610a11565b565b60606004805461026c90610b95565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610394565b61055d338585840361063f565b5060019392505050565b60006102fc338484610763565b6005546001600160a01b031633146105ce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610394565b6001600160a01b0381166106335760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610394565b61063c81610a11565b50565b6001600160a01b0383166106a15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610394565b6001600160a01b0382166107025760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610394565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166107c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610394565b6001600160a01b0382166108295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610394565b6001600160a01b038316600090815260208190526040902054818110156108a15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610394565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108d8908490610bcf565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161092491815260200190565b60405180910390a350505050565b6001600160a01b0382166109885760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610394565b806002600082825461099a9190610bcf565b90915550506001600160a01b038216600090815260208190526040812080548392906109c7908490610bcf565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b81811015610a9d57858101830151858201604001528201610a81565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610ad557600080fd5b919050565b60008060408385031215610aed57600080fd5b610af683610abe565b946020939093013593505050565b600080600060608486031215610b1957600080fd5b610b2284610abe565b9250610b3060208501610abe565b9150604084013590509250925092565b600060208284031215610b5257600080fd5b610b5b82610abe565b9392505050565b60008060408385031215610b7557600080fd5b610b7e83610abe565b9150610b8c60208401610abe565b90509250929050565b600181811c90821680610ba957607f821691505b602082108103610bc957634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561030057634e487b7160e01b600052601160045260246000fdfea2646970667358221220c85723bf2708a86e3fddb6232bd099992b5c36d29b9e5732fa7df1cd5c7a355064736f6c63430008130033";

type NexthypeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NexthypeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Nexthype__factory extends ContractFactory {
  constructor(...args: NexthypeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Nexthype> {
    return super.deploy(overrides || {}) as Promise<Nexthype>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Nexthype {
    return super.attach(address) as Nexthype;
  }
  override connect(signer: Signer): Nexthype__factory {
    return super.connect(signer) as Nexthype__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NexthypeInterface {
    return new utils.Interface(_abi) as NexthypeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Nexthype {
    return new Contract(address, _abi, signerOrProvider) as Nexthype;
  }
}