import test from "node:test";
import assert from "node:assert/strict";
import { calculateKaratsubaStep, getKaratsubaSubproblems, getRecursiveMultiplicationCounts } from "../src/scripts/karatsuba.js";

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


test("compares recursive leaf counts under an explicit balanced model", () => {
  assert.deepEqual(getRecursiveMultiplicationCounts(1), {
    digitCount: 1, paddedDigits: 1, depth: 0, schoolbookLeaves: 1, karatsubaLeaves: 1,
  });
  assert.deepEqual(getRecursiveMultiplicationCounts(4), {
    digitCount: 4, paddedDigits: 4, depth: 2, schoolbookLeaves: 16, karatsubaLeaves: 9,
  });
  assert.deepEqual(getRecursiveMultiplicationCounts(18), {
    digitCount: 18, paddedDigits: 32, depth: 5, schoolbookLeaves: 1024, karatsubaLeaves: 243,
  });
});


test("uses the actual recursive operands, including the extra digit from a carry", () => {
  const step = calculateKaratsubaStep("9999", "1234");
  assert.deepEqual(getKaratsubaSubproblems(step), [
    { left: 99n, right: 12n, product: 1188n, digits: 2 },
    { left: 99n, right: 34n, product: 3366n, digits: 2 },
    { left: 198n, right: 46n, product: 9108n, digits: 3 },
  ]);
});

test("shows no child calls as soon as either operand fits in one digit", () => {
  assert.deepEqual(getKaratsubaSubproblems(calculateKaratsubaStep("0", "7")), []);
  assert.deepEqual(getKaratsubaSubproblems(calculateKaratsubaStep("9", "123456")), []);
  assert.deepEqual(getKaratsubaSubproblems(calculateKaratsubaStep("123456", "9")), []);
});
