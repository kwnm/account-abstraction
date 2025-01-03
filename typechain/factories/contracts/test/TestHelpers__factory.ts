/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestHelpers,
  TestHelpersInterface,
} from "../../../contracts/test/TestHelpers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "sigFailed",
        type: "bool",
      },
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
    ],
    name: "packValidationData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "validAfter",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "validUntil",
            type: "uint48",
          },
        ],
        internalType: "struct ValidationData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "packValidationDataStruct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    name: "parseValidationData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "validAfter",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "validUntil",
            type: "uint48",
          },
        ],
        internalType: "struct ValidationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610381806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806324d3cde614610046578063a4b2282e1461006c578063b059e2fa146100c7575b600080fd5b61005961005436600461023a565b6100da565b6040519081526020015b60405180910390f35b61007f61007a3660046102e8565b61012e565b60408051825173ffffffffffffffffffffffffffffffffffffffff16815260208084015165ffffffffffff908116918301919091529282015190921690820152606001610063565b6100596100d5366004610301565b610154565b600061012882600060d0826020015165ffffffffffff16901b60a0836040015165ffffffffffff16901b836000015173ffffffffffffffffffffffffffffffffffffffff1617179050919050565b92915050565b604080516060810182526000808252602082018190529181019190915261012882610169565b60006101618484846101e7565b949350505050565b60408051606081018252600080825260208201819052918101919091528160a081901c65ffffffffffff81166000036101a5575065ffffffffffff5b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff909316835260d09490941c602083015265ffffffffffff16928101929092525090565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b8561020f576000610212565b60015b60ff161717949350505050565b803565ffffffffffff8116811461023557600080fd5b919050565b60006060828403121561024c57600080fd5b6040516060810181811067ffffffffffffffff82111715610296577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604052823573ffffffffffffffffffffffffffffffffffffffff811681146102bd57600080fd5b81526102cb6020840161021f565b60208201526102dc6040840161021f565b60408201529392505050565b6000602082840312156102fa57600080fd5b5035919050565b60008060006060848603121561031657600080fd5b8335801515811461032657600080fd5b92506103346020850161021f565b91506103426040850161021f565b9050925092509256fea264697066735822122034f813fd67bd8f06da58775f7a17cb644f2c49b50de9068b08110f51fe9aa7e764736f6c63430008170033";

type TestHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestHelpers__factory extends ContractFactory {
  constructor(...args: TestHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestHelpers> {
    return super.deploy(overrides || {}) as Promise<TestHelpers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestHelpers {
    return super.attach(address) as TestHelpers;
  }
  override connect(signer: Signer): TestHelpers__factory {
    return super.connect(signer) as TestHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHelpersInterface {
    return new utils.Interface(_abi) as TestHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHelpers {
    return new Contract(address, _abi, signerOrProvider) as TestHelpers;
  }
}
