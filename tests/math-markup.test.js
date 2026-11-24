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
    assert.doesNotMatch(source, /\\[!,]/, `${path}: TeX spacing commands must survive Markdown escaping`);
    assert.doesNotMatch(source, /[\^_]\\left/, `${path}: malformed superscript/subscript grouping`);
  }
});

test("Karatsuba complexity exponents use explicit TeX grouping", () => {
  const source = readFileSync(new URL("../src/content/articles/karatsuba-multiplication.mdx", import.meta.url), "utf8");
  assert.match(source, /4\^&#123;10&#125;=1&#92;,048&#92;,576/);
  assert.match(source, /3\^&#123;10&#125;=59&#92;,049/);
  assert.match(source, /n\^&#123;\\log_2 3&#125;/);
  assert.match(source, /m_&#123;j\+1&#125;/);
});

test("classical multiplication complexity is consistently marked green", () => {
  const source = readFileSync(new URL("../src/content/articles/karatsuba-multiplication.mdx", import.meta.url), "utf8");
  const expectedGreenExpressions = [
    String.raw`au lieu de <span class="term-common">&#92;(\Theta(n^2)&#92;)</span> pour la`,
    String.raw`Le travail local au niveau &#92;(j&#92;) est <span class="term-common">&#92;(O(n&#92;,2^j)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(O(n^2)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(\Omega(n^2)&#92;)</span>`,
  ];
  for (const expression of expectedGreenExpressions) {
    assert.ok(source.includes(expression), `Missing green semantic class around: ${expression}`);
  }
});

test("Karatsuba visual comparisons follow the shared semantic palette", () => {
  const hero = readFileSync(new URL("../src/components/KaratsubaHero.astro", import.meta.url), "utf8");
  const explorer = readFileSync(new URL("../src/components/KaratsubaExplorer.astro", import.meta.url), "utf8");
  assert.ok(hero.includes(".hero-count span { color:#9cdbca; }"));
  assert.ok(hero.includes(".hero-count strong { color:#c6b3e6; }"));
  assert.ok(explorer.includes('class="comparison-classic"'));
  assert.ok(explorer.includes('class="comparison-karatsuba"'));
  assert.ok(explorer.includes(".comparison-classic .comparison-label, .comparison-classic strong { color: var(--term-common"));
  assert.ok(explorer.includes(".comparison-karatsuba .comparison-label, .comparison-karatsuba strong { color: var(--term-aux"));
});
