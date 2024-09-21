/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Hook {
  export type JobStruct = {
    jobId: BigNumberish;
    name: string;
    description: string;
    amount: BigNumberish;
    metadata: string;
    contractor: AddressLike;
  };

  export type JobStructOutput = [
    jobId: bigint,
    name: string,
    description: string,
    amount: bigint,
    metadata: string,
    contractor: string
  ] & {
    jobId: bigint;
    name: string;
    description: string;
    amount: bigint;
    metadata: string;
    contractor: string;
  };
}

export interface HookInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createJob"
      | "createProject"
      | "deposit"
      | "emergencyWithdraw"
      | "finalizeJob"
      | "getJob"
      | "getProject"
      | "nextJobId"
      | "nextProjectId"
      | "nft"
      | "owner"
      | "projects"
      | "renounceOwnership"
      | "terminateProject"
      | "transferOwnership"
      | "usdc"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposit"
      | "JobCreated"
      | "OwnershipTransferred"
      | "ProjectCreated"
      | "ProjectTerminated"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createJob",
    values: [BigNumberish, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createProject",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeJob",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getJob",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProject",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nextJobId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextProjectId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "terminateProject",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;

  decodeFunctionResult(functionFragment: "createJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeJob",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getProject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextJobId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextProjectId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    user: AddressLike,
    projectId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, projectId: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    projectId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JobCreatedEvent {
  export type InputTuple = [
    projectId: BigNumberish,
    jobId: BigNumberish,
    name: string,
    description: string,
    amount: BigNumberish,
    metadata: string,
    contractor: AddressLike
  ];
  export type OutputTuple = [
    projectId: bigint,
    jobId: bigint,
    name: string,
    description: string,
    amount: bigint,
    metadata: string,
    contractor: string
  ];
  export interface OutputObject {
    projectId: bigint;
    jobId: bigint;
    name: string;
    description: string;
    amount: bigint;
    metadata: string;
    contractor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProjectCreatedEvent {
  export type InputTuple = [projectId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [projectId: bigint, amount: bigint];
  export interface OutputObject {
    projectId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProjectTerminatedEvent {
  export type InputTuple = [projectId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [projectId: bigint, amount: bigint];
  export interface OutputObject {
    projectId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    user: AddressLike,
    projectId: BigNumberish,
    amount: BigNumberish,
    reason: string
  ];
  export type OutputTuple = [
    user: string,
    projectId: bigint,
    amount: bigint,
    reason: string
  ];
  export interface OutputObject {
    user: string;
    projectId: bigint;
    amount: bigint;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Hook extends BaseContract {
  connect(runner?: ContractRunner | null): Hook;
  waitForDeployment(): Promise<this>;

  interface: HookInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createJob: TypedContractMethod<
    [
      _projectId: BigNumberish,
      _jobName: string,
      _jobDescription: string,
      _jobAmount: BigNumberish,
      _jobMetadata: string
    ],
    [void],
    "nonpayable"
  >;

  createProject: TypedContractMethod<
    [_description: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [projectId: BigNumberish, amount: BigNumberish],
    [void],
    "payable"
  >;

  emergencyWithdraw: TypedContractMethod<
    [projectId: BigNumberish, amount: BigNumberish, reason: string],
    [void],
    "nonpayable"
  >;

  finalizeJob: TypedContractMethod<
    [projectId: BigNumberish, jobId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getJob: TypedContractMethod<
    [_projectId: BigNumberish, _jobId: BigNumberish],
    [[bigint, string, string, bigint, string]],
    "view"
  >;

  getProject: TypedContractMethod<
    [_projectId: BigNumberish],
    [[bigint, string, string, bigint, Hook.JobStructOutput[]]],
    "view"
  >;

  nextJobId: TypedContractMethod<[], [bigint], "view">;

  nextProjectId: TypedContractMethod<[], [bigint], "view">;

  nft: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  projects: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        projectId: bigint;
        name: string;
        description: string;
        amount: bigint;
        action: bigint;
      }
    ],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  terminateProject: TypedContractMethod<
    [projectId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  usdc: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createJob"
  ): TypedContractMethod<
    [
      _projectId: BigNumberish,
      _jobName: string,
      _jobDescription: string,
      _jobAmount: BigNumberish,
      _jobMetadata: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createProject"
  ): TypedContractMethod<
    [_description: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [projectId: BigNumberish, amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<
    [projectId: BigNumberish, amount: BigNumberish, reason: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeJob"
  ): TypedContractMethod<
    [projectId: BigNumberish, jobId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getJob"
  ): TypedContractMethod<
    [_projectId: BigNumberish, _jobId: BigNumberish],
    [[bigint, string, string, bigint, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProject"
  ): TypedContractMethod<
    [_projectId: BigNumberish],
    [[bigint, string, string, bigint, Hook.JobStructOutput[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "nextJobId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextProjectId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nft"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "projects"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        projectId: bigint;
        name: string;
        description: string;
        amount: bigint;
        action: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "terminateProject"
  ): TypedContractMethod<[projectId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "usdc"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "JobCreated"
  ): TypedContractEvent<
    JobCreatedEvent.InputTuple,
    JobCreatedEvent.OutputTuple,
    JobCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ProjectCreated"
  ): TypedContractEvent<
    ProjectCreatedEvent.InputTuple,
    ProjectCreatedEvent.OutputTuple,
    ProjectCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProjectTerminated"
  ): TypedContractEvent<
    ProjectTerminatedEvent.InputTuple,
    ProjectTerminatedEvent.OutputTuple,
    ProjectTerminatedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "JobCreated(uint256,uint256,string,string,uint256,string,address)": TypedContractEvent<
      JobCreatedEvent.InputTuple,
      JobCreatedEvent.OutputTuple,
      JobCreatedEvent.OutputObject
    >;
    JobCreated: TypedContractEvent<
      JobCreatedEvent.InputTuple,
      JobCreatedEvent.OutputTuple,
      JobCreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ProjectCreated(uint256,uint256)": TypedContractEvent<
      ProjectCreatedEvent.InputTuple,
      ProjectCreatedEvent.OutputTuple,
      ProjectCreatedEvent.OutputObject
    >;
    ProjectCreated: TypedContractEvent<
      ProjectCreatedEvent.InputTuple,
      ProjectCreatedEvent.OutputTuple,
      ProjectCreatedEvent.OutputObject
    >;

    "ProjectTerminated(uint256,uint256)": TypedContractEvent<
      ProjectTerminatedEvent.InputTuple,
      ProjectTerminatedEvent.OutputTuple,
      ProjectTerminatedEvent.OutputObject
    >;
    ProjectTerminated: TypedContractEvent<
      ProjectTerminatedEvent.InputTuple,
      ProjectTerminatedEvent.OutputTuple,
      ProjectTerminatedEvent.OutputObject
    >;

    "Withdrawn(address,uint256,uint256,string)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
