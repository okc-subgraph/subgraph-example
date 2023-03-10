// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get _newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ApproveProxyChanged extends ethereum.Event {
  get params(): ApproveProxyChanged__Params {
    return new ApproveProxyChanged__Params(this);
  }
}

export class ApproveProxyChanged__Params {
  _event: ApproveProxyChanged;

  constructor(event: ApproveProxyChanged) {
    this._event = event;
  }

  get _approveProxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get toToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fromTokenAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get toTokenAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get gasFeeAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get srcChainId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get errInfo(): string {
    return this._event.parameters[7].value.toString();
  }

  get ext(): Array<Bytes> {
    return this._event.parameters[8].value.toBytesArray();
  }
}

export class DexRouterChanged extends ethereum.Event {
  get params(): DexRouterChanged__Params {
    return new DexRouterChanged__Params(this);
  }
}

export class DexRouterChanged__Params {
  _event: DexRouterChanged;

  constructor(event: DexRouterChanged) {
    this._event = event;
  }

  get _dexRouter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FeeToChanged extends ethereum.Event {
  get params(): FeeToChanged__Params {
    return new FeeToChanged__Params(this);
  }
}

export class FeeToChanged__Params {
  _event: FeeToChanged;

  constructor(event: FeeToChanged) {
    this._event = event;
  }

  get _feeTo(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GasTokenReceived extends ethereum.Event {
  get params(): GasTokenReceived__Params {
    return new GasTokenReceived__Params(this);
  }
}

export class GasTokenReceived__Params {
  _event: GasTokenReceived;

  constructor(event: GasTokenReceived) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get srcChainId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ext(): Array<Bytes> {
    return this._event.parameters[3].value.toBytesArray();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class LogBridgeTo extends ethereum.Event {
  get params(): LogBridgeTo__Params {
    return new LogBridgeTo__Params(this);
  }
}

export class LogBridgeTo__Params {
  _event: LogBridgeTo;

  constructor(event: LogBridgeTo) {
    this._event = event;
  }

  get _adaptorId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _receiveFee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get ext(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }
}

export class LogSwapAndBridgeTo extends ethereum.Event {
  get params(): LogSwapAndBridgeTo__Params {
    return new LogSwapAndBridgeTo__Params(this);
  }
}

export class LogSwapAndBridgeTo__Params {
  _event: LogSwapAndBridgeTo;

  constructor(event: LogSwapAndBridgeTo) {
    this._event = event;
  }

  get _adaptorId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _fromToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _fromAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _toToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get _toAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _receiveFee(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get ext(): Array<Bytes> {
    return this._event.parameters[8].value.toBytesArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class XBridge__payerReceiverResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class XBridge__thresholdConfigResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class XBridge extends ethereum.SmartContract {
  static bind(address: Address): XBridge {
    return new XBridge("XBridge", address);
  }

  adaptorInfo(param0: BigInt): Address {
    let result = super.call("adaptorInfo", "adaptorInfo(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_adaptorInfo(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "adaptorInfo",
      "adaptorInfo(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  approveProxy(): Address {
    let result = super.call("approveProxy", "approveProxy():(address)", []);

    return result[0].toAddress();
  }

  try_approveProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("approveProxy", "approveProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dexRouter(): Address {
    let result = super.call("dexRouter", "dexRouter():(address)", []);

    return result[0].toAddress();
  }

  try_dexRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall("dexRouter", "dexRouter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeTo(): Address {
    let result = super.call("feeTo", "feeTo():(address)", []);

    return result[0].toAddress();
  }

  try_feeTo(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeTo", "feeTo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mpc(param0: Address): boolean {
    let result = super.call("mpc", "mpc(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_mpc(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("mpc", "mpc(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paidTx(param0: BigInt, param1: Bytes): boolean {
    let result = super.call("paidTx", "paidTx(uint256,bytes32):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromFixedBytes(param1)
    ]);

    return result[0].toBoolean();
  }

  try_paidTx(param0: BigInt, param1: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("paidTx", "paidTx(uint256,bytes32):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromFixedBytes(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  payer(): Address {
    let result = super.call("payer", "payer():(address)", []);

    return result[0].toAddress();
  }

  try_payer(): ethereum.CallResult<Address> {
    let result = super.tryCall("payer", "payer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  payerReceiver(): XBridge__payerReceiverResult {
    let result = super.call(
      "payerReceiver",
      "payerReceiver():(address,address)",
      []
    );

    return new XBridge__payerReceiverResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_payerReceiver(): ethereum.CallResult<XBridge__payerReceiverResult> {
    let result = super.tryCall(
      "payerReceiver",
      "payerReceiver():(address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XBridge__payerReceiverResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  proxies(param0: Address): boolean {
    let result = super.call("proxies", "proxies(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_proxies(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("proxies", "proxies(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  receiveGasTx(param0: BigInt, param1: Bytes): boolean {
    let result = super.call(
      "receiveGasTx",
      "receiveGasTx(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_receiveGasTx(
    param0: BigInt,
    param1: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "receiveGasTx",
      "receiveGasTx(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  receiver(): Address {
    let result = super.call("receiver", "receiver():(address)", []);

    return result[0].toAddress();
  }

  try_receiver(): ethereum.CallResult<Address> {
    let result = super.tryCall("receiver", "receiver():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sysAddressConfig(param0: BigInt): Address {
    let result = super.call(
      "sysAddressConfig",
      "sysAddressConfig(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_sysAddressConfig(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sysAddressConfig",
      "sysAddressConfig(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sysRatio(param0: BigInt): BigInt {
    let result = super.call("sysRatio", "sysRatio(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_sysRatio(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("sysRatio", "sysRatio(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  thresholdConfig(param0: Address): XBridge__thresholdConfigResult {
    let result = super.call(
      "thresholdConfig",
      "thresholdConfig(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new XBridge__thresholdConfigResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_thresholdConfig(
    param0: Address
  ): ethereum.CallResult<XBridge__thresholdConfigResult> {
    let result = super.tryCall(
      "thresholdConfig",
      "thresholdConfig(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XBridge__thresholdConfigResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }
}

export class BridgeToV2Call extends ethereum.Call {
  get inputs(): BridgeToV2Call__Inputs {
    return new BridgeToV2Call__Inputs(this);
  }

  get outputs(): BridgeToV2Call__Outputs {
    return new BridgeToV2Call__Outputs(this);
  }
}

export class BridgeToV2Call__Inputs {
  _call: BridgeToV2Call;

  constructor(call: BridgeToV2Call) {
    this._call = call;
  }

  get _request(): BridgeToV2Call_requestStruct {
    return this._call.inputValues[0].value.toTuple() as BridgeToV2Call_requestStruct;
  }
}

export class BridgeToV2Call__Outputs {
  _call: BridgeToV2Call;

  constructor(call: BridgeToV2Call) {
    this._call = call;
  }
}

export class BridgeToV2Call_requestStruct extends ethereum.Tuple {
  get adaptorId(): BigInt {
    return this[0].toBigInt();
  }

  get to(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get toChainId(): BigInt {
    return this[3].toBigInt();
  }

  get amount(): BigInt {
    return this[4].toBigInt();
  }

  get data(): Bytes {
    return this[5].toBytes();
  }

  get extData(): Bytes {
    return this[6].toBytes();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ReceiveGasTokenCall extends ethereum.Call {
  get inputs(): ReceiveGasTokenCall__Inputs {
    return new ReceiveGasTokenCall__Inputs(this);
  }

  get outputs(): ReceiveGasTokenCall__Outputs {
    return new ReceiveGasTokenCall__Outputs(this);
  }
}

export class ReceiveGasTokenCall__Inputs {
  _call: ReceiveGasTokenCall;

  constructor(call: ReceiveGasTokenCall) {
    this._call = call;
  }

  get _request(): ReceiveGasTokenCall_requestStruct {
    return this._call.inputValues[0].value.toTuple() as ReceiveGasTokenCall_requestStruct;
  }
}

export class ReceiveGasTokenCall__Outputs {
  _call: ReceiveGasTokenCall;

  constructor(call: ReceiveGasTokenCall) {
    this._call = call;
  }
}

export class ReceiveGasTokenCall_requestStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get srcChainId(): BigInt {
    return this[2].toBigInt();
  }

  get srcTxHash(): Bytes {
    return this[3].toBytes();
  }

  get extData(): Bytes {
    return this[4].toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAdaptorsCall extends ethereum.Call {
  get inputs(): SetAdaptorsCall__Inputs {
    return new SetAdaptorsCall__Inputs(this);
  }

  get outputs(): SetAdaptorsCall__Outputs {
    return new SetAdaptorsCall__Outputs(this);
  }
}

export class SetAdaptorsCall__Inputs {
  _call: SetAdaptorsCall;

  constructor(call: SetAdaptorsCall) {
    this._call = call;
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _adaptors(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class SetAdaptorsCall__Outputs {
  _call: SetAdaptorsCall;

  constructor(call: SetAdaptorsCall) {
    this._call = call;
  }
}

export class SetAdminCall extends ethereum.Call {
  get inputs(): SetAdminCall__Inputs {
    return new SetAdminCall__Inputs(this);
  }

  get outputs(): SetAdminCall__Outputs {
    return new SetAdminCall__Outputs(this);
  }
}

export class SetAdminCall__Inputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }

  get _newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAdminCall__Outputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }
}

export class SetApproveProxyCall extends ethereum.Call {
  get inputs(): SetApproveProxyCall__Inputs {
    return new SetApproveProxyCall__Inputs(this);
  }

  get outputs(): SetApproveProxyCall__Outputs {
    return new SetApproveProxyCall__Outputs(this);
  }
}

export class SetApproveProxyCall__Inputs {
  _call: SetApproveProxyCall;

  constructor(call: SetApproveProxyCall) {
    this._call = call;
  }

  get _newApproveProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetApproveProxyCall__Outputs {
  _call: SetApproveProxyCall;

  constructor(call: SetApproveProxyCall) {
    this._call = call;
  }
}

export class SetDexRouterCall extends ethereum.Call {
  get inputs(): SetDexRouterCall__Inputs {
    return new SetDexRouterCall__Inputs(this);
  }

  get outputs(): SetDexRouterCall__Outputs {
    return new SetDexRouterCall__Outputs(this);
  }
}

export class SetDexRouterCall__Inputs {
  _call: SetDexRouterCall;

  constructor(call: SetDexRouterCall) {
    this._call = call;
  }

  get _newDexRouter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDexRouterCall__Outputs {
  _call: SetDexRouterCall;

  constructor(call: SetDexRouterCall) {
    this._call = call;
  }
}

export class SetFeeToCall extends ethereum.Call {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get _newFeeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetMpcCall extends ethereum.Call {
  get inputs(): SetMpcCall__Inputs {
    return new SetMpcCall__Inputs(this);
  }

  get outputs(): SetMpcCall__Outputs {
    return new SetMpcCall__Outputs(this);
  }
}

export class SetMpcCall__Inputs {
  _call: SetMpcCall;

  constructor(call: SetMpcCall) {
    this._call = call;
  }

  get _mpcList(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _v(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }
}

export class SetMpcCall__Outputs {
  _call: SetMpcCall;

  constructor(call: SetMpcCall) {
    this._call = call;
  }
}

export class SetProxiesCall extends ethereum.Call {
  get inputs(): SetProxiesCall__Inputs {
    return new SetProxiesCall__Inputs(this);
  }

  get outputs(): SetProxiesCall__Outputs {
    return new SetProxiesCall__Outputs(this);
  }
}

export class SetProxiesCall__Inputs {
  _call: SetProxiesCall;

  constructor(call: SetProxiesCall) {
    this._call = call;
  }

  get proxiesList(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }
}

export class SetProxiesCall__Outputs {
  _call: SetProxiesCall;

  constructor(call: SetProxiesCall) {
    this._call = call;
  }
}

export class SetSysAddressConfigCall extends ethereum.Call {
  get inputs(): SetSysAddressConfigCall__Inputs {
    return new SetSysAddressConfigCall__Inputs(this);
  }

  get outputs(): SetSysAddressConfigCall__Outputs {
    return new SetSysAddressConfigCall__Outputs(this);
  }
}

export class SetSysAddressConfigCall__Inputs {
  _call: SetSysAddressConfigCall;

  constructor(call: SetSysAddressConfigCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _v(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetSysAddressConfigCall__Outputs {
  _call: SetSysAddressConfigCall;

  constructor(call: SetSysAddressConfigCall) {
    this._call = call;
  }
}

export class SetSysRatioCall extends ethereum.Call {
  get inputs(): SetSysRatioCall__Inputs {
    return new SetSysRatioCall__Inputs(this);
  }

  get outputs(): SetSysRatioCall__Outputs {
    return new SetSysRatioCall__Outputs(this);
  }
}

export class SetSysRatioCall__Inputs {
  _call: SetSysRatioCall;

  constructor(call: SetSysRatioCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _v(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetSysRatioCall__Outputs {
  _call: SetSysRatioCall;

  constructor(call: SetSysRatioCall) {
    this._call = call;
  }
}

export class SwapBridgeToV2Call extends ethereum.Call {
  get inputs(): SwapBridgeToV2Call__Inputs {
    return new SwapBridgeToV2Call__Inputs(this);
  }

  get outputs(): SwapBridgeToV2Call__Outputs {
    return new SwapBridgeToV2Call__Outputs(this);
  }
}

export class SwapBridgeToV2Call__Inputs {
  _call: SwapBridgeToV2Call;

  constructor(call: SwapBridgeToV2Call) {
    this._call = call;
  }

  get _request(): SwapBridgeToV2Call_requestStruct {
    return this._call.inputValues[0].value.toTuple() as SwapBridgeToV2Call_requestStruct;
  }
}

export class SwapBridgeToV2Call__Outputs {
  _call: SwapBridgeToV2Call;

  constructor(call: SwapBridgeToV2Call) {
    this._call = call;
  }
}

export class SwapBridgeToV2Call_requestStruct extends ethereum.Tuple {
  get fromToken(): Address {
    return this[0].toAddress();
  }

  get toToken(): Address {
    return this[1].toAddress();
  }

  get to(): Address {
    return this[2].toAddress();
  }

  get adaptorId(): BigInt {
    return this[3].toBigInt();
  }

  get toChainId(): BigInt {
    return this[4].toBigInt();
  }

  get fromTokenAmount(): BigInt {
    return this[5].toBigInt();
  }

  get toTokenMinAmount(): BigInt {
    return this[6].toBigInt();
  }

  get toChainToTokenMinAmount(): BigInt {
    return this[7].toBigInt();
  }

  get data(): Bytes {
    return this[8].toBytes();
  }

  get dexData(): Bytes {
    return this[9].toBytes();
  }

  get extData(): Bytes {
    return this[10].toBytes();
  }
}

export class SwapBridgeToWithPermitCall extends ethereum.Call {
  get inputs(): SwapBridgeToWithPermitCall__Inputs {
    return new SwapBridgeToWithPermitCall__Inputs(this);
  }

  get outputs(): SwapBridgeToWithPermitCall__Outputs {
    return new SwapBridgeToWithPermitCall__Outputs(this);
  }
}

export class SwapBridgeToWithPermitCall__Inputs {
  _call: SwapBridgeToWithPermitCall;

  constructor(call: SwapBridgeToWithPermitCall) {
    this._call = call;
  }

  get _request(): SwapBridgeToWithPermitCall_requestStruct {
    return this._call.inputValues[0].value.toTuple() as SwapBridgeToWithPermitCall_requestStruct;
  }

  get _signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SwapBridgeToWithPermitCall__Outputs {
  _call: SwapBridgeToWithPermitCall;

  constructor(call: SwapBridgeToWithPermitCall) {
    this._call = call;
  }
}

export class SwapBridgeToWithPermitCall_requestStruct extends ethereum.Tuple {
  get fromToken(): Address {
    return this[0].toAddress();
  }

  get toToken(): Address {
    return this[1].toAddress();
  }

  get to(): Address {
    return this[2].toAddress();
  }

  get adaptorId(): BigInt {
    return this[3].toBigInt();
  }

  get toChainId(): BigInt {
    return this[4].toBigInt();
  }

  get fromTokenAmount(): BigInt {
    return this[5].toBigInt();
  }

  get toTokenMinAmount(): BigInt {
    return this[6].toBigInt();
  }

  get toChainToTokenMinAmount(): BigInt {
    return this[7].toBigInt();
  }

  get data(): Bytes {
    return this[8].toBytes();
  }

  get dexData(): Bytes {
    return this[9].toBytes();
  }

  get extData(): Bytes {
    return this[10].toBytes();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
