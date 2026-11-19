import test from "node:test";
import assert from "node:assert/strict";
import { calculateKaratsubaStep } from "../src/scripts/karatsuba.js";

test("reproduces the article example", () => {
  const result = calculateKaratsubaStep("1234", "5678");
  assert.equal(result.product, 7006652n);
  assert.equal(result.cross, 2840n);
  assert.equal(result.p, 672n);
  assert.equal(result.q, 2652n);
});

test("handles unequal lengths and a zero high block", () => {
  const result = calculateKaratsubaStep("9", "123456");
  assert.equal(result.product, 1111104n);
  assert.equal(result.product, 9n * 123456n);
});

test("handles zero and one-digit values", () => {
  assert.equal(calculateKaratsubaStep("0", "7").product, 0n);
  assert.equal(calculateKaratsubaStep("8", "9").product, 72n);
});

test("supports the full 18-digit input limit exactly", () => {
  const x = "999999999999999999";
  const y = "888888888888888888";
  assert.equal(calculateKaratsubaStep(x, y).product, BigInt(x) * BigInt(y));
});

test("rejects invalid input", () => {
  assert.throws(() => calculateKaratsubaStep("-2", "4"), /non-negative integers/);
  assert.throws(() => calculateKaratsubaStep("1234567890123456789", "1"), /18 digits/);
});
