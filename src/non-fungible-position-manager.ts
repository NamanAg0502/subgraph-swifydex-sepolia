import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  NonfungiblePositionManager,
  Approval,
  ApprovalForAll,
  IncreaseLiquidity,
  DecreaseLiquidity,
  Collect,
  Transfer,
} from "../generated/NonfungiblePositionManager/NonfungiblePositionManager";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  IncreaseLiquidity as IncreaseLiquidityEvent,
  DecreaseLiquidity as DecreaseLiquidityEvent,
  Collect as CollectEvent,
  Transfer as TransferEvent,
} from "../generated/schema";

export function handleApproval(event: Approval): void {
  let entity = new ApprovalEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAll): void {
  let entity = new ApprovalForAllEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void {
  let entity = new IncreaseLiquidityEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;
  entity.liquidity = event.params.liquidity;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDecreaseLiquidity(event: DecreaseLiquidity): void {
  let entity = new DecreaseLiquidityEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;
  entity.liquidity = event.params.liquidity;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCollect(event: Collect): void {
  let entity = new CollectEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;
  entity.recipient = event.params.recipient;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: Transfer): void {
  let entity = new TransferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;
  entity.from = event.params.from;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
