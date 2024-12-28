/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BLSSignatureAggregator,
  BLSSignatureAggregatorInterface,
} from "../../../../contracts/samples/bls/BLSSignatureAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BLS_DOMAIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "N",
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
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatedSignature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getTrailingPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getUserOpHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getUserOpPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "userOpToMessage",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "sigForUserOp",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611cdd380380611cdd83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611c44610099600039600081816101e8015281816102e40152610c260152611c446000f3fe6080604052600436106100bb5760003560e01c80639b2004b511610074578063b7620eb41161004e578063b7620eb41461022f578063c9e525df1461024f578063d4fedb4d1461028357600080fd5b80639b2004b514610189578063ae574a43146101b6578063b0d691fe146101d657600080fd5b8063062a422b116100a5578063062a422b1461011c57806322cdde4c146101495780632dd811331461016957600080fd5b80629d9250146100c05780630396cb6014610107575b600080fd5b3480156100cc57600080fd5b506100f47fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b81565b6040519081526020015b60405180910390f35b61011a6101153660046112c9565b6102b0565b005b34801561012857600080fd5b5061013c6101373660046112ef565b61035a565b6040516100fe919061138f565b34801561015557600080fd5b506100f46101643660046115e7565b6104c2565b34801561017557600080fd5b5061011a610184366004611668565b6104e9565b34801561019557600080fd5b506101a96101a43660046115e7565b6107c6565b6040516100fe91906116ff565b3480156101c257600080fd5b5061013c6101d1366004611730565b610867565b3480156101e257600080fd5b5061020a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561023b57600080fd5b506101a961024a366004611772565b6109c5565b34801561025b57600080fd5b506100f47f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4781565b34801561028f57600080fd5b506102a361029e3660046115e7565b610abd565b6040516100fe91906117a7565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b15801561033e57600080fd5b505af1158015610352573d6000803e3d6000fd5b505050505050565b6060600061036c6101008401846117cf565b8101906103799190611834565b905060006103896101a485611894565b905060006103a761039986611894565b6103a284610adf565b610b0f565b6040517febbdac9100000000000000000000000000000000000000000000000000000000815290915073__$b745eded4b1aee1100521038d570dd85f1$__9063ebbdac91906103fe908690869086906004016118ec565b602060405180830381865af415801561041b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043f9190611915565b6104aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f424c533a2077726f6e672073696700000000000000000000000000000000000060448201526064015b60405180910390fd5b50506040805160208101909152600081529392505050565b6000806104d66104d1846107c6565b610adf565b90506104e28382610be7565b9392505050565b60408114610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f424c533a20696e76616c6964207369676e61747572650000000000000000000060448201526064016104a1565b600061056182840184611834565b90508360008167ffffffffffffffff81111561057f5761057f6113a2565b6040519080825280602002602001820160405280156105b857816020015b6105a561128d565b81526020019060019003908161059d5790505b50905060008267ffffffffffffffff8111156105d6576105d66113a2565b60405190808252806020026020018201604052801561060f57816020015b6105fc6112ab565b8152602001906001900390816105f45790505b50905060005b838110156106c057600089898381811061063157610631611937565b90506020028101906106439190611966565b61064c90611894565b9050610657816107c6565b84838151811061066957610669611937565b602002602001018190525061069a816103a286858151811061068d5761068d611937565b6020026020010151610adf565b8383815181106106ac576106ac611937565b602090810291909101015250600101610615565b506040517f9141376300000000000000000000000000000000000000000000000000000000815273__$b745eded4b1aee1100521038d570dd85f1$__90639141376390610715908790869086906004016119a4565b602060405180830381865af4158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190611915565b6107bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f424c533a2076616c69646174655369676e617475726573206661696c6564000060448201526064016104a1565b5050505050505050565b6107ce61128d565b60408201518051156107ea576107e3816109c5565b9150610861565b826000015173ffffffffffffffffffffffffffffffffffffffff1663e02afbae61c3506040518263ffffffff1660e01b81526004016080604051808303818786fa15801561083c573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906104e29190611a48565b50919050565b606060008267ffffffffffffffff811115610884576108846113a2565b6040519080825280602002602001820160405280156108c957816020015b60408051808201909152600080825260208201528152602001906001900390816108a25790505b50905060005b815181101561095b576000808686848181106108ed576108ed611937565b90506020028101906108ff9190611966565b61090e906101008101906117cf565b81019061091b9190611abb565b9150915060405180604001604052808381526020018281525084848151811061094657610946611937565b602090810291909101015250506001016108cf565b506000610988827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610c6c565b80516020808301516040519394506109ab93909101918252602082015260400190565b604051602081830303815290604052925050505b92915050565b6109cd61128d565b815160808111610a39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6461746120746f6f2073686f727420666f72207369670000000000000000000060448201526064016104a1565b9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa081015182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc081015160208301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810151604083015251606082015290565b610ac56112ab565b6000610ad36104d1846107c6565b90506104e28382610b0f565b600081604051602001610af291906116ff565b604051602081830303815290604052805190602001209050919050565b610b176112ab565b6000610b238484610be7565b905073__$b745eded4b1aee1100521038d570dd85f1$__63a850a9097fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b83604051602001610b7391815260200190565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610b9f929190611add565b6040805180830381865af4158015610bbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdf9190611af6565b949350505050565b6000610bf283610d4d565b604080516020810192909252810183905230606082015246608082015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660a082015260c00160405160208183030381529060405280519060200120905092915050565b6040805180820190915260008082526020820152600083600081518110610c9557610c95611937565b6020026020010151600001519050600084600081518110610cb857610cb8611937565b602090810291909101810151015190506001805b8651811015610d2e57610d1f8484848a8581518110610ced57610ced611937565b6020026020010151600001518b8681518110610d0b57610d0b611937565b60200260200101516020015160018c610ddc565b91955093509150600101610ccc565b50610d3b83838388611129565b90855260208501525091949350505050565b805160208083015160408085015180519084012060608087015180519086012060808089015160a0808b015160c0808d015160e0808f01518051908e01208b5173ffffffffffffffffffffffffffffffffffffffff909f169d8f019d909d52998d019a909a52958b01969096529189019290925287015285015283015261010082015260009061012001610af2565b6000808089158015610dec575088155b15610dfe57508591508490508361111c565b86158015610e0a575085155b15610e1c57508891508790508661111c565b610e2461128d565b8480610e3257610e32611b4b565b898a0981528480610e4557610e45611b4b565b81518a0960208201528480610e5c57610e5c611b4b565b86870960408201528480610e7257610e72611b4b565b6040820151870960608201526040805160808101909152808680610e9857610e98611b4b565b60408401518e0981526020018680610eb257610eb2611b4b565b60608401518d0981526020018680610ecc57610ecc611b4b565b83518b0981526020018680610ee357610ee3611b4b565b60208401518a09905260408101518151919250141580610f0b57506060810151602082015114155b610f71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e7374656164000060448201526064016104a1565b610f7961128d565b8580610f8757610f87611b4b565b8251610f939088611ba9565b60408401510881528580610fa957610fa9611b4b565b6020830151610fb89088611ba9565b60608401510860208201528580610fd157610fd1611b4b565b8151800960408201528580610fe857610fe8611b4b565b815160408301510960608201526000868061100557611005611b4b565b60608301516110149089611ba9565b888061102257611022611b4b565b60208501518009089050868061103a5761103a611b4b565b878061104857611048611b4b565b888061105657611056611b4b565b604085015186510960020961106b9089611ba9565b820890506000878061107f5761107f611b4b565b888061108d5761108d611b4b565b611097848b611ba9565b8a806110a5576110a5611b4b565b604087015188510908602085015109905087806110c4576110c4611b4b565b88806110d2576110d2611b4b565b60608501516020870151096110e7908a611ba9565b82089050600088806110fb576110fb611b4b565b898061110957611109611b4b565b8b8f098551099297509095509093505050505b9750975097945050505050565b60008060006111388585611198565b90506000848061114a5761114a611b4b565b82830990506000858061115f5761115f611b4b565b828a0990506000868061117457611174611b4b565b878061118257611182611b4b565b8486098a09919a91995090975050505050505050565b600082158015906111a95750818314155b80156111b457508115155b61121a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964206e756d62657200000000000000000000000000000000000060448201526064016104a1565b6000600183825b8615611282576112318783611bbc565b905082868061124257611242611b4b565b878061125057611250611b4b565b85840961125d9089611ba9565b860890945092508661126f8183611bf7565b6112799084611ba9565b97509150611221565b509195945050505050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b6000602082840312156112db57600080fd5b813563ffffffff811681146104e257600080fd5b60006020828403121561130157600080fd5b813567ffffffffffffffff81111561131857600080fd5b820161012081850312156104e257600080fd5b6000815180845260005b8181101561135157602081850181015186830182015201611335565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006104e2602083018461132b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156113f5576113f56113a2565b60405290565b6040805190810167ffffffffffffffff811182821017156113f5576113f56113a2565b803573ffffffffffffffffffffffffffffffffffffffff8116811461144257600080fd5b919050565b600082601f83011261145857600080fd5b813567ffffffffffffffff80821115611473576114736113a2565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156114b9576114b96113a2565b816040528381528660208588010111156114d257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000610120828403121561150557600080fd5b61150d6113d1565b90506115188261141e565b815260208201356020820152604082013567ffffffffffffffff8082111561153f57600080fd5b61154b85838601611447565b6040840152606084013591508082111561156457600080fd5b61157085838601611447565b60608401526080840135608084015260a084013560a084015260c084013560c084015260e08401359150808211156115a757600080fd5b6115b385838601611447565b60e0840152610100915081840135818111156115ce57600080fd5b6115da86828701611447565b8385015250505092915050565b6000602082840312156115f957600080fd5b813567ffffffffffffffff81111561161057600080fd5b610bdf848285016114f2565b60008083601f84011261162e57600080fd5b50813567ffffffffffffffff81111561164657600080fd5b6020830191508360208260051b850101111561166157600080fd5b9250929050565b6000806000806040858703121561167e57600080fd5b843567ffffffffffffffff8082111561169657600080fd5b6116a28883890161161c565b909650945060208701359150808211156116bb57600080fd5b818701915087601f8301126116cf57600080fd5b8135818111156116de57600080fd5b8860208285010111156116f057600080fd5b95989497505060200194505050565b60808101818360005b6004811015611727578151835260209283019290910190600101611708565b50505092915050565b6000806020838503121561174357600080fd5b823567ffffffffffffffff81111561175a57600080fd5b6117668582860161161c565b90969095509350505050565b60006020828403121561178457600080fd5b813567ffffffffffffffff81111561179b57600080fd5b610bdf84828501611447565b60408101818360005b60028110156117275781518352602092830192909101906001016117b0565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261180457600080fd5b83018035915067ffffffffffffffff82111561181f57600080fd5b60200191503681900382131561166157600080fd5b60006040828403121561184657600080fd5b82601f83011261185557600080fd5b61185d6113fb565b80604084018581111561186f57600080fd5b845b81811015611889578035845260209384019301611871565b509095945050505050565b60006109bf36836114f2565b8060005b60028110156118c35781518452602093840193909101906001016118a4565b50505050565b8060005b60048110156118c35781518452602093840193909101906001016118cd565b61010081016118fb82866118a0565b61190860408301856118c9565b610bdf60c08301846118a0565b60006020828403121561192757600080fd5b815180151581146104e257600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee183360301811261199a57600080fd5b9190910192915050565b600060808083016119b584886118a0565b60406080604086015281875180845260a087019150602093506020890160005b828110156119f8576119e88483516118c9565b92860192908501906001016119d5565b50505085810360608701528651808252602091820194509087019060005b81811015611a3957611a298684516118a0565b9483019491840191600101611a16565b50939998505050505050505050565b600060808284031215611a5a57600080fd5b82601f830112611a6957600080fd5b6040516080810181811067ffffffffffffffff82111715611a8c57611a8c6113a2565b604052806080840185811115611aa157600080fd5b845b81811015611282578051835260209283019201611aa3565b60008060408385031215611ace57600080fd5b50508035926020909101359150565b828152604060208201526000610bdf604083018461132b565b600060408284031215611b0857600080fd5b82601f830112611b1757600080fd5b611b1f6113fb565b806040840185811115611b3157600080fd5b845b81811015611889578051845260209384019301611b33565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109bf576109bf611b7a565b600082611bf2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176109bf576109bf611b7a56fea2646970667358221220b40a32fecd275a424843e247aff97160d170c05c7511011658de5de48eac44e964736f6c63430008170033";

type BLSSignatureAggregatorConstructorParams =
  | [
      linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class BLSSignatureAggregator__factory extends ContractFactory {
  constructor(...args: BLSSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BLSSignatureAggregator__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b745eded4b1aee1100521038d570dd85f1\\$__", "g"),
      linkLibraryAddresses["contracts/samples/bls/lib/BLSOpen.sol:BLSOpen"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSSignatureAggregator> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<BLSSignatureAggregator>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): BLSSignatureAggregator {
    return super.attach(address) as BLSSignatureAggregator;
  }
  override connect(signer: Signer): BLSSignatureAggregator__factory {
    return super.connect(signer) as BLSSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSSignatureAggregatorInterface {
    return new utils.Interface(_abi) as BLSSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BLSSignatureAggregator;
  }
}

export interface BLSSignatureAggregatorLibraryAddresses {
  ["contracts/samples/bls/lib/BLSOpen.sol:BLSOpen"]: string;
}