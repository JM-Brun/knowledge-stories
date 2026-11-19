import test from "node:test";
import assert from "node:assert/strict";
import { calculateKaratsubaSplit } from "../src/lib/karatsuba.js";

test("reproduces the article's 1234 × 5678 example", () => {
  const result = calculateKaratsubaSplit(1234n, 5678n);
  assert.equal(result.highProduct, 672n);
  assert.equal(result.lowProduct, 2652n);
  assert.equal(result.sumProduct, 6164n);
  assert.equal(result.crossTerm, 2840n);
  assert.equal(result.product, 7006652n);
  assert.equal(result.verified, true);
});

test("handles operands with different digit counts", () => {
  assert.equal(calculateKaratsubaSplit(9n, 123456n).product, 1111104n);
});

test("handles zero and one-digit operands", () => {
  assert.equal(calculateKaratsubaSplit(0n, 999n).product, 0n);
  assert.equal(calculateKaratsubaSplit(7n, 8n).product, 56n);
});

test("handles 40-digit operands exactly with BigInt", () => {
  const x = 1234567890123456789012345678901234567890n;
  const y = 9876543210987654321098765432109876543210n;
  const result = calculateKaratsubaSplit(x, y);
  assert.equal(result.product, x * y);
  assert.equal(result.verified, true);
});

test("rejects negative operands", () => {
  assert.throws(() => calculateKaratsubaSplit(-1n, 2n), RangeError);
});
