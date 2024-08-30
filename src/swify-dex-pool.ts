import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  Burn,
  Collect as CollectPool,
  CollectProtocol,
  Flash,
  IncreaseObservationCardinalityNext,
  Initialize,
  Mint,
  SetFeeProtocol,
  Swap,
} from "../generated/SwifyDexPool/SwifyDexPool";

import {
  Burn as BurnEntity,
  CollectPool as CollectPoolEntity,
  CollectProtocol as CollectProtocolEntity,
  Flash as FlashEntity,
  IncreaseObservationCardinalityNext as IncreaseObservationCardinalityNextEntity,
  Initialize as InitializeEntity,
  Mint as MintEntity,
  SetFeeProtocol as SetFeeProtocolEntity,
  Swap as SwapEntity,
} from "../generated/schema";

// Handler for Burn event
export function handleBurn(event: Burn): void {
  let entity = new BurnEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.amount = event.params.amount;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for CollectPool event
export function handleCollectPool(event: CollectPool): void {
  let entity = new CollectPoolEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.recipient = event.params.recipient;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for CollectProtocol event
export function handleCollectProtocol(event: CollectProtocol): void {
  let entity = new CollectProtocolEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sender = event.params.sender;
  entity.recipient = event.params.recipient;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for Flash event
export function handleFlash(event: Flash): void {
  let entity = new FlashEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sender = event.params.sender;
  entity.recipient = event.params.recipient;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.paid0 = event.params.paid0;
  entity.paid1 = event.params.paid1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for IncreaseObservationCardinalityNext event
export function handleIncreaseObservationCardinalityNext(
  event: IncreaseObservationCardinalityNext,
): void {
  let entity = new IncreaseObservationCardinalityNextEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.observationCardinalityNextOld = BigInt.fromI32(
    event.params.observationCardinalityNextOld,
  );
  entity.observationCardinalityNextNew = BigInt.fromI32(
    event.params.observationCardinalityNextNew,
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for Initialize event
export function handleInitialize(event: Initialize): void {
  let entity = new InitializeEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sqrtPriceX96 = event.params.sqrtPriceX96;
  entity.tick = event.params.tick;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for Mint event
export function handleMint(event: Mint): void {
  let entity = new MintEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.sender = event.params.sender;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.amount = event.params.amount;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for SetFeeProtocol event
export function handleSetFeeProtocol(event: SetFeeProtocol): void {
  let entity = new SetFeeProtocolEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.feeProtocol0Old = BigInt.fromI32(event.params.feeProtocol0Old);
  entity.feeProtocol0New = BigInt.fromI32(event.params.feeProtocol0New);
  entity.feeProtocol1Old = BigInt.fromI32(event.params.feeProtocol1Old);
  entity.feeProtocol1New = BigInt.fromI32(event.params.feeProtocol1New);
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

// Handler for Swap event
export function handleSwap(event: Swap): void {
  let entity = new SwapEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sender = event.params.sender;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.recipient = event.params.recipient;
  entity.sqrtPriceX96 = event.params.sqrtPriceX96;
  entity.tick = event.params.tick;
  entity.liquidity = event.params.liquidity;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}
