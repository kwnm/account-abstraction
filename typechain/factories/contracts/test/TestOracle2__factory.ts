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
  TestOracle2,
  TestOracle2Interface,
} from "../../../contracts/test/TestOracle2";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161023d38038061023d83398101604081905261002f9161004d565b6000919091556001805460ff191660ff909216919091179055610083565b6000806040838503121561006057600080fd5b82519150602083015160ff8116811461007857600080fd5b809150509250929050565b6101ab806100926000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a035b1fe11610050578063a035b1fe146100ca578063f7a30806146100e1578063feaf968c146100f457600080fd5b8063313ce5671461006c5780637a1395aa14610086575b600080fd5b60015460405160ff90911681526020015b60405180910390f35b6100c8610094366004610132565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055565b005b6100d360005481565b60405190815260200161007d565b6100c86100ef36600461015c565b600055565b600054604080516804000000000000247a808252602082019390935263642a887b91810191909152426060820152608081019190915260a00161007d565b60006020828403121561014457600080fd5b813560ff8116811461015557600080fd5b9392505050565b60006020828403121561016e57600080fd5b503591905056fea26469706673582212207b0a9aeeee16b3797e0e20ccbd6279e7e1a31b3bb29c73d3c9b3b581668cfc9a64736f6c63430008170033";

type TestOracle2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestOracle2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestOracle2__factory extends ContractFactory {
  constructor(...args: TestOracle2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestOracle2> {
    return super.deploy(
      _price,
      _decimals,
      overrides || {}
    ) as Promise<TestOracle2>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, _decimals, overrides || {});
  }
  override attach(address: string): TestOracle2 {
    return super.attach(address) as TestOracle2;
  }
  override connect(signer: Signer): TestOracle2__factory {
    return super.connect(signer) as TestOracle2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestOracle2Interface {
    return new utils.Interface(_abi) as TestOracle2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestOracle2 {
    return new Contract(address, _abi, signerOrProvider) as TestOracle2;
  }
}
