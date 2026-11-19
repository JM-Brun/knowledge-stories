/**
 * Computes one exact Karatsuba split in base 10.
 * This is the algebraic split only; it does not recursively multiply sub-blocks.
 */
export function calculateKaratsubaSplit(x, y) {
  const left = BigInt(x);
  const right = BigInt(y);
  if (left < 0n || right < 0n) {
    throw new RangeError("Karatsuba operands must be non-negative integers.");
  }

  const digits = Math.max(left.toString().length, right.toString().length);
  const splitDigits = Math.ceil(digits / 2);
  const base = 10n ** BigInt(splitDigits);
  const a = left / base;
  const b = left % base;
  const c = right / base;
  const d = right % base;

  const highProduct = a * c;
  const lowProduct = b * d;
  const sumProduct = (a + b) * (c + d);
  const crossTerm = sumProduct - highProduct - lowProduct;
  const product = highProduct * base * base + crossTerm * base + lowProduct;

  return {
    splitDigits,
    base,
    a,
    b,
    c,
    d,
    highProduct,
    lowProduct,
    sumProduct,
    crossTerm,
    product,
    verified: product === left * right,
  };
}
