/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { NFT, NFTInterface } from "../../contracts/NFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
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
        name: "data",
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
  "0x608060405234801561001057600080fd5b50336040518060400160405280600881526020017f536e6170747572650000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f534e415000000000000000000000000000000000000000000000000000000000815250816000908161008d9190610c7d565b50806001908161009d9190610c7d565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101125760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101099190610d90565b60405180910390fd5b6101218161013860201b60201c565b506101333360016101fe60201b60201c565b610dfe565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102705760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016102679190610d90565b60405180910390fd5b6000610284838360006102fd60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146102f85760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016102ef9190610d90565b60405180910390fd5b505050565b60008061030f8461052960201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146103575761035681848661056660201b60201c565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146103ee5761039f60008560008061063060201b60201c565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610471576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61057783838361080160201b60201c565b61062b57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105ec57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016105e39190610dba565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401610622929190610dd5565b60405180910390fd5b505050565b80806106695750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156107a957600061067f846108ce60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156106ea57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156107035750610701818461095c60201b60201c565b155b1561074557826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161073c9190610d90565b60405180910390fd5b81156107a757838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156108c557508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610880575061087f848461095c60201b60201c565b5b806108c457508273ffffffffffffffffffffffffffffffffffffffff166108ac836109f060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000806108e08361052960201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361095357826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161094a9190610dba565b60405180910390fd5b80915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610aae57607f821691505b602082108103610ac157610ac0610a67565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610b297fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610aec565b610b338683610aec565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610b7a610b75610b7084610b4b565b610b55565b610b4b565b9050919050565b6000819050919050565b610b9483610b5f565b610ba8610ba082610b81565b848454610af9565b825550505050565b600090565b610bbd610bb0565b610bc8818484610b8b565b505050565b5b81811015610bec57610be1600082610bb5565b600181019050610bce565b5050565b601f821115610c3157610c0281610ac7565b610c0b84610adc565b81016020851015610c1a578190505b610c2e610c2685610adc565b830182610bcd565b50505b505050565b600082821c905092915050565b6000610c5460001984600802610c36565b1980831691505092915050565b6000610c6d8383610c43565b9150826002028217905092915050565b610c8682610a2d565b67ffffffffffffffff811115610c9f57610c9e610a38565b5b610ca98254610a96565b610cb4828285610bf0565b600060209050601f831160018114610ce75760008415610cd5578287015190505b610cdf8582610c61565b865550610d47565b601f198416610cf586610ac7565b60005b82811015610d1d57848901518255600182019150602085019450602081019050610cf8565b86831015610d3a5784890151610d36601f891682610c43565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d7a82610d4f565b9050919050565b610d8a81610d6f565b82525050565b6000602082019050610da56000830184610d81565b92915050565b610db481610b4b565b82525050565b6000602082019050610dcf6000830184610dab565b92915050565b6000604082019050610dea6000830185610d81565b610df76020830184610dab565b9392505050565b61203880610e0d6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b806370a082311461022e578063715018a61461025e5780638da5cb5b1461026857806395d89b41146102865761010b565b806323b872dd116100de57806323b872dd146101aa57806340c10f19146101c657806342842e0e146101e25780636352211e146101fe5761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611882565b610358565b60405161013791906118ca565b60405180910390f35b61014861043a565b6040516101559190611975565b60405180910390f35b610178600480360381019061017391906119cd565b6104cc565b6040516101859190611a3b565b60405180910390f35b6101a860048036038101906101a39190611a82565b6104e8565b005b6101c460048036038101906101bf9190611ac2565b6104fe565b005b6101e060048036038101906101db9190611a82565b610600565b005b6101fc60048036038101906101f79190611ac2565b610616565b005b610218600480360381019061021391906119cd565b610636565b6040516102259190611a3b565b60405180910390f35b61024860048036038101906102439190611b15565b610648565b6040516102559190611b51565b60405180910390f35b610266610702565b005b610270610716565b60405161027d9190611a3b565b60405180910390f35b61028e610740565b60405161029b9190611975565b60405180910390f35b6102be60048036038101906102b99190611b98565b6107d2565b005b6102da60048036038101906102d59190611d0d565b6107e8565b005b6102f660048036038101906102f191906119cd565b610805565b6040516103039190611975565b60405180910390f35b61032660048036038101906103219190611d90565b61086e565b60405161033391906118ca565b60405180910390f35b61035660048036038101906103519190611b15565b610902565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610988565b5b9050919050565b60606000805461044990611dff565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611dff565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d7826109f2565b506104e182610a7a565b9050919050565b6104fa82826104f5610ab7565b610abf565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105705760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105679190611a3b565b60405180910390fd5b6000610584838361057f610ab7565b610ad1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105fa578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105f193929190611e30565b60405180910390fd5b50505050565b610608610ceb565b6106128282610d72565b5050565b610631838383604051806020016040528060008152506107e8565b505050565b6000610641826109f2565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106bb5760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106b29190611a3b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61070a610ceb565b6107146000610e6b565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461074f90611dff565b80601f016020809104026020016040519081016040528092919081815260200182805461077b90611dff565b80156107c85780601f1061079d576101008083540402835291602001916107c8565b820191906000526020600020905b8154815290600101906020018083116107ab57829003601f168201915b5050505050905090565b6107e46107dd610ab7565b8383610f31565b5050565b6107f38484846104fe565b6107ff848484846110a0565b50505050565b6060610810826109f2565b50600061081b611257565b9050600081511161083b5760405180602001604052806000815250610866565b806108458461126e565b604051602001610856929190611ea3565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61090a610ceb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361097c5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109739190611a3b565b60405180910390fd5b61098581610e6b565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000806109fe8361133c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a7157826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610a689190611b51565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610acc8383836001611379565b505050565b600080610add8461133c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610b1f57610b1e81848661153e565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610bb057610b61600085600080611379565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610c33576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610cf3610ab7565b73ffffffffffffffffffffffffffffffffffffffff16610d11610716565b73ffffffffffffffffffffffffffffffffffffffff1614610d7057610d34610ab7565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610d679190611a3b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610de45760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610ddb9190611a3b565b60405180910390fd5b6000610df283836000610ad1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e665760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401610e5d9190611a3b565b60405180910390fd5b505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610f999190611a3b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161109391906118ca565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611251578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026110e4610ab7565b8685856040518563ffffffff1660e01b81526004016111069493929190611f1c565b6020604051808303816000875af192505050801561114257506040513d601f19601f8201168201806040525081019061113f9190611f7d565b60015b6111c6573d8060008114611172576040519150601f19603f3d011682016040523d82523d6000602084013e611177565b606091505b5060008151036111be57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016111b59190611a3b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461124f57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112469190611a3b565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b60606000600161127d84611602565b01905060008167ffffffffffffffff81111561129c5761129b611be2565b5b6040519080825280601f01601f1916602001820160405280156112ce5781602001600182028036833780820191505090505b509050600082602001820190505b600115611331578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161132557611324611faa565b5b049450600085036112dc575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806113b25750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156114e65760006113c2846109f2565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561142d57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611440575061143e818461086e565b155b1561148257826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016114799190611a3b565b60405180910390fd5b81156114e457838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611549838383611755565b6115fd57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115be57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115b59190611b51565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016115f4929190611fd9565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611660577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161165657611655611faa565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061169d576d04ee2d6d415b85acef8100000000838161169357611692611faa565b5b0492506020810190505b662386f26fc1000083106116cc57662386f26fc1000083816116c2576116c1611faa565b5b0492506010810190505b6305f5e10083106116f5576305f5e10083816116eb576116ea611faa565b5b0492506008810190505b612710831061171a5761271083816117105761170f611faa565b5b0492506004810190505b6064831061173d576064838161173357611732611faa565b5b0492506002810190505b600a831061174c576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561180d57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117ce57506117cd848461086e565b5b8061180c57508273ffffffffffffffffffffffffffffffffffffffff166117f483610a7a565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61185f8161182a565b811461186a57600080fd5b50565b60008135905061187c81611856565b92915050565b60006020828403121561189857611897611820565b5b60006118a68482850161186d565b91505092915050565b60008115159050919050565b6118c4816118af565b82525050565b60006020820190506118df60008301846118bb565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561191f578082015181840152602081019050611904565b60008484015250505050565b6000601f19601f8301169050919050565b6000611947826118e5565b61195181856118f0565b9350611961818560208601611901565b61196a8161192b565b840191505092915050565b6000602082019050818103600083015261198f818461193c565b905092915050565b6000819050919050565b6119aa81611997565b81146119b557600080fd5b50565b6000813590506119c7816119a1565b92915050565b6000602082840312156119e3576119e2611820565b5b60006119f1848285016119b8565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a25826119fa565b9050919050565b611a3581611a1a565b82525050565b6000602082019050611a506000830184611a2c565b92915050565b611a5f81611a1a565b8114611a6a57600080fd5b50565b600081359050611a7c81611a56565b92915050565b60008060408385031215611a9957611a98611820565b5b6000611aa785828601611a6d565b9250506020611ab8858286016119b8565b9150509250929050565b600080600060608486031215611adb57611ada611820565b5b6000611ae986828701611a6d565b9350506020611afa86828701611a6d565b9250506040611b0b868287016119b8565b9150509250925092565b600060208284031215611b2b57611b2a611820565b5b6000611b3984828501611a6d565b91505092915050565b611b4b81611997565b82525050565b6000602082019050611b666000830184611b42565b92915050565b611b75816118af565b8114611b8057600080fd5b50565b600081359050611b9281611b6c565b92915050565b60008060408385031215611baf57611bae611820565b5b6000611bbd85828601611a6d565b9250506020611bce85828601611b83565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c1a8261192b565b810181811067ffffffffffffffff82111715611c3957611c38611be2565b5b80604052505050565b6000611c4c611816565b9050611c588282611c11565b919050565b600067ffffffffffffffff821115611c7857611c77611be2565b5b611c818261192b565b9050602081019050919050565b82818337600083830152505050565b6000611cb0611cab84611c5d565b611c42565b905082815260208101848484011115611ccc57611ccb611bdd565b5b611cd7848285611c8e565b509392505050565b600082601f830112611cf457611cf3611bd8565b5b8135611d04848260208601611c9d565b91505092915050565b60008060008060808587031215611d2757611d26611820565b5b6000611d3587828801611a6d565b9450506020611d4687828801611a6d565b9350506040611d57878288016119b8565b925050606085013567ffffffffffffffff811115611d7857611d77611825565b5b611d8487828801611cdf565b91505092959194509250565b60008060408385031215611da757611da6611820565b5b6000611db585828601611a6d565b9250506020611dc685828601611a6d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e1757607f821691505b602082108103611e2a57611e29611dd0565b5b50919050565b6000606082019050611e456000830186611a2c565b611e526020830185611b42565b611e5f6040830184611a2c565b949350505050565b600081905092915050565b6000611e7d826118e5565b611e878185611e67565b9350611e97818560208601611901565b80840191505092915050565b6000611eaf8285611e72565b9150611ebb8284611e72565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611eee82611ec7565b611ef88185611ed2565b9350611f08818560208601611901565b611f118161192b565b840191505092915050565b6000608082019050611f316000830187611a2c565b611f3e6020830186611a2c565b611f4b6040830185611b42565b8181036060830152611f5d8184611ee3565b905095945050505050565b600081519050611f7781611856565b92915050565b600060208284031215611f9357611f92611820565b5b6000611fa184828501611f68565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050611fee6000830185611a2c565b611ffb6020830184611b42565b939250505056fea264697066735822122032461f2c6988bfe5e820535bcecbbd871e4bc32d8f86f3a43cd272fa5a6081d764736f6c634300081b0033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFT__factory {
    return super.connect(runner) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new Interface(_abi) as NFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFT {
    return new Contract(address, _abi, runner) as unknown as NFT;
  }
}
