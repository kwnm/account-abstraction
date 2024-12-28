/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TikTrixEscrowInterface extends utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "batchReturnDepositFee(uint256,uint256,uint256[])": FunctionFragment;
    "depositFee(uint256,uint256,uint256)": FunctionFragment;
    "deposits(uint256,uint256,uint256)": FunctionFragment;
    "getDepositFee(uint256,uint256,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantAdminRole(address)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "justemit()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "returnDepositFee(uint256,uint256,uint256)": FunctionFragment;
    "revokeAdminRole(address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "batchReturnDepositFee"
      | "depositFee"
      | "deposits"
      | "getDepositFee"
      | "getRoleAdmin"
      | "grantAdminRole"
      | "grantRole"
      | "hasRole"
      | "justemit"
      | "owner"
      | "renounceRole"
      | "returnDepositFee"
      | "revokeAdminRole"
      | "revokeRole"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchReturnDepositFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantAdminRole",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "justemit", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnDepositFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAdminRole",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchReturnDepositFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepositFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "justemit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnDepositFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "BatchDepositsReturned(uint256,uint256,uint256,uint256)": EventFragment;
    "CalledFrom(address)": EventFragment;
    "DepositMade(uint256,uint256,uint256,uint256)": EventFragment;
    "DepositReturned(uint256,uint256,uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchDepositsReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CalledFrom"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositMade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface BatchDepositsReturnedEventObject {
  baseDate: BigNumber;
  gameSeq: BigNumber;
  count: BigNumber;
  totalAmount: BigNumber;
}
export type BatchDepositsReturnedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  BatchDepositsReturnedEventObject
>;

export type BatchDepositsReturnedEventFilter =
  TypedEventFilter<BatchDepositsReturnedEvent>;

export interface CalledFromEventObject {
  sender: string;
}
export type CalledFromEvent = TypedEvent<[string], CalledFromEventObject>;

export type CalledFromEventFilter = TypedEventFilter<CalledFromEvent>;

export interface DepositMadeEventObject {
  baseDate: BigNumber;
  gameSeq: BigNumber;
  memberSeq: BigNumber;
  amount: BigNumber;
}
export type DepositMadeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  DepositMadeEventObject
>;

export type DepositMadeEventFilter = TypedEventFilter<DepositMadeEvent>;

export interface DepositReturnedEventObject {
  baseDate: BigNumber;
  gameSeq: BigNumber;
  memberSeq: BigNumber;
  amount: BigNumber;
}
export type DepositReturnedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  DepositReturnedEventObject
>;

export type DepositReturnedEventFilter = TypedEventFilter<DepositReturnedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TikTrixEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TikTrixEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    batchReturnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeqs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string] & {
        amount: BigNumber;
        isReturned: boolean;
        depositor: string;
      }
    >;

    getDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { amount: BigNumber; isReturned: boolean }
    >;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    justemit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      callerConfirmation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  batchReturnDepositFee(
    baseDate: PromiseOrValue<BigNumberish>,
    gameSeq: PromiseOrValue<BigNumberish>,
    memberSeqs: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFee(
    baseDate: PromiseOrValue<BigNumberish>,
    gameSeq: PromiseOrValue<BigNumberish>,
    memberSeq: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, string] & {
      amount: BigNumber;
      isReturned: boolean;
      depositor: string;
    }
  >;

  getDepositFee(
    baseDate: PromiseOrValue<BigNumberish>,
    gameSeq: PromiseOrValue<BigNumberish>,
    memberSeq: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { amount: BigNumber; isReturned: boolean }>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantAdminRole(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  justemit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    callerConfirmation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnDepositFee(
    baseDate: PromiseOrValue<BigNumberish>,
    gameSeq: PromiseOrValue<BigNumberish>,
    memberSeq: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeAdminRole(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    batchReturnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeqs: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    depositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string] & {
        amount: BigNumber;
        isReturned: boolean;
        depositor: string;
      }
    >;

    getDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { amount: BigNumber; isReturned: boolean }
    >;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantAdminRole(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    justemit(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      callerConfirmation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeAdminRole(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "BatchDepositsReturned(uint256,uint256,uint256,uint256)"(
      baseDate?: null,
      gameSeq?: null,
      count?: null,
      totalAmount?: null
    ): BatchDepositsReturnedEventFilter;
    BatchDepositsReturned(
      baseDate?: null,
      gameSeq?: null,
      count?: null,
      totalAmount?: null
    ): BatchDepositsReturnedEventFilter;

    "CalledFrom(address)"(sender?: null): CalledFromEventFilter;
    CalledFrom(sender?: null): CalledFromEventFilter;

    "DepositMade(uint256,uint256,uint256,uint256)"(
      baseDate?: null,
      gameSeq?: null,
      memberSeq?: null,
      amount?: null
    ): DepositMadeEventFilter;
    DepositMade(
      baseDate?: null,
      gameSeq?: null,
      memberSeq?: null,
      amount?: null
    ): DepositMadeEventFilter;

    "DepositReturned(uint256,uint256,uint256,uint256)"(
      baseDate?: null,
      gameSeq?: null,
      memberSeq?: null,
      amount?: null
    ): DepositReturnedEventFilter;
    DepositReturned(
      baseDate?: null,
      gameSeq?: null,
      memberSeq?: null,
      amount?: null
    ): DepositReturnedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    batchReturnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeqs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    justemit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      callerConfirmation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchReturnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeqs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    justemit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      callerConfirmation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnDepositFee(
      baseDate: PromiseOrValue<BigNumberish>,
      gameSeq: PromiseOrValue<BigNumberish>,
      memberSeq: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeAdminRole(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
