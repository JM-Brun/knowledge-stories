const MAX_DIGITS = 18;

export function calculateKaratsubaStep(left, right) {
  const valid = (value) => typeof value === "string" && /^\d{1,18}$/.test(value);
  if (!valid(left) || !valid(right)) {
    throw new RangeError(`Karatsuba demo accepts positive integers with at most ${MAX_DIGITS} digits.`);
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
