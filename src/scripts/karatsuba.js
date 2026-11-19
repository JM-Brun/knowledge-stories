const MAX_DIGITS = 18;

export function calculateKaratsubaStep(left, right) {
  const valid = (value) => typeof value === "string" && /^\d{1,18}$/.test(value);
  if (!valid(left) || !valid(right)) {
    throw new RangeError(`Karatsuba demo accepts non-negative integers with at most ${MAX_DIGITS} digits.`);
  }

  const x = BigInt(left);
  const y = BigInt(right);
  const digits = Math.max(left.length, right.length);
  const splitDigits = Math.floor(digits / 2);
  const base = 10n ** BigInt(splitDigits);
  const a = x / base;
  const b = x % base;
  const c = y / base;
  const d = y % base;
  const p = a * c;
  const q = b * d;
  const r = (a + b) * (c + d);
  const cross = r - p - q;
  const product = p * base * base + cross * base + q;

  if (product !== x * y) {
    throw new Error("Karatsuba reconstruction invariant failed.");
  }
  return { x, y, a, b, c, d, base, p, q, r, cross, product };
}


export function getRecursiveMultiplicationCounts(digitCount) {
  if (!Number.isInteger(digitCount) || digitCount < 1 || digitCount > MAX_DIGITS) {
    throw new RangeError(`Digit count must be an integer between 1 and ${MAX_DIGITS}.`);
  }
  const paddedDigits = 2 ** Math.ceil(Math.log2(digitCount));
  const depth = Math.log2(paddedDigits);
  return {
    digitCount,
    paddedDigits,
    depth,
    schoolbookLeaves: 4 ** depth,
    karatsubaLeaves: 3 ** depth,
  };
}
