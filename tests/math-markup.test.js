import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const articlePaths = [
  "src/content/articles/karatsuba-multiplication.mdx",
  "src/content/articles/multiplication-rapide-et-preuves-2026.mdx",
];

test("MathJax delimiters survive MDX parsing", () => {
  for (const path of articlePaths) {
    const source = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
    assert.equal((source.match(/&#92;\(/g) ?? []).length, (source.match(/&#92;\)/g) ?? []).length, `${path}: inline delimiters must be balanced`);
    assert.equal((source.match(/&#92;\[/g) ?? []).length, (source.match(/&#92;\]/g) ?? []).length, `${path}: display delimiters must be balanced`);
    assert.doesNotMatch(source, /\\[()[\]]/, `${path}: raw TeX delimiters are consumed as Markdown escapes`);
    assert.doesNotMatch(source, /[\^_]\\left/, `${path}: malformed superscript/subscript grouping`);
  }
});

test("Karatsuba complexity exponents use explicit TeX grouping", () => {
  const source = readFileSync(new URL("../src/content/articles/karatsuba-multiplication.mdx", import.meta.url), "utf8");
  assert.match(source, /4\^&#123;10&#125;=1\\,048\\,576/);
  assert.match(source, /3\^&#123;10&#125;=59\\,049/);
  assert.match(source, /n\^&#123;\\log_2 3&#125;/);
  assert.match(source, /m_&#123;j\+1&#125;/);
});
