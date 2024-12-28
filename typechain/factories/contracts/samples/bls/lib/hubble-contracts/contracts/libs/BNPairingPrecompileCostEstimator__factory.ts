/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  BNPairingPrecompileCostEstimator,
  BNPairingPrecompileCostEstimatorInterface,
} from "../../../../../../../../contracts/samples/bls/lib/hubble-contracts/contracts/libs/BNPairingPrecompileCostEstimator";

const _abi = [
  {
    inputs: [],
    name: "baseCost",
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
        name: "pairCount",
        type: "uint256",
      },
    ],
    name: "getGasCost",
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
    name: "perPairCost",
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
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061080b806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634e79f8ca146100515780639382255714610076578063c04062261461007f578063ebfd94b214610089575b600080fd5b61006461005f366004610750565b610092565b60405190815260200160405180910390f35b61006460005481565b6100876100b3565b005b61006460015481565b600080546001546100a39084610798565b6100ad91906107af565b92915050565b6100bb6100bd565b565b60006100c76100f5565b905060006100d36103c6565b90506100df82826107c2565b60018190556100ee90836107c2565b6000555050565b6000806040518060c0016040528060018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa81525090506101b1610732565b6000806107d05a6101c291906107c2565b90506107d05a1161025a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a206e6f7420656e6f756768206761732c2073696e676c65207061697200000060648201526084015b60405180910390fd5b60005a905060208460c087600886fa925060005a61027890836107c2565b905083610307576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a2073696e676c6520706169722063616c6c206973206661696c6564000000006064820152608401610251565b8451156103bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604360248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a2073696e676c6520706169722063616c6c20726573756c74206d757374206260648201527f6520300000000000000000000000000000000000000000000000000000000000608482015260a401610251565b9695505050505050565b60008060405180610180016040528060018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa815260200160018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f275dc4a288d1afb3cbb1ac09187524c7db36395df7be3b99e673b13a075a65ec81526020017f1d9befcd05a5323e6da4d435f3b617cdb3af83285c2df711ef39c01571827f9d8152509050610529610732565b6000806107d05a61053a91906107c2565b90506107d05a116105cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a206e6f7420656e6f756768206761732c20636f75706c6520706169720000006064820152608401610251565b60005a905060208461018087600886fa925060005a6105ec90836107c2565b90508361067b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a20636f75706c6520706169722063616c6c206973206661696c6564000000006064820152608401610251565b84516001146103bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604360248201527f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260448201527f3a20636f75706c6520706169722063616c6c20726573756c74206d757374206260648201527f6520310000000000000000000000000000000000000000000000000000000000608482015260a401610251565b60405180602001604052806001906020820280368337509192915050565b60006020828403121561076257600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176100ad576100ad610769565b808201808211156100ad576100ad610769565b818103818111156100ad576100ad61076956fea26469706673582212200906703d0e08d5258ae725285aba29755eaa3450ef568a90058474df65f1d40264736f6c63430008170033";

type BNPairingPrecompileCostEstimatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BNPairingPrecompileCostEstimatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BNPairingPrecompileCostEstimator__factory extends ContractFactory {
  constructor(...args: BNPairingPrecompileCostEstimatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BNPairingPrecompileCostEstimator> {
    return super.deploy(
      overrides || {}
    ) as Promise<BNPairingPrecompileCostEstimator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BNPairingPrecompileCostEstimator {
    return super.attach(address) as BNPairingPrecompileCostEstimator;
  }
  override connect(signer: Signer): BNPairingPrecompileCostEstimator__factory {
    return super.connect(signer) as BNPairingPrecompileCostEstimator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BNPairingPrecompileCostEstimatorInterface {
    return new utils.Interface(
      _abi
    ) as BNPairingPrecompileCostEstimatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BNPairingPrecompileCostEstimator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BNPairingPrecompileCostEstimator;
  }
}
