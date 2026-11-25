import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const articlePaths = [
  "src/content/articles/karatsuba-multiplication.mdx",
  "src/content/articles/complexite-multiplication-karatsuba.mdx",
  "src/content/articles/multiplication-rapide-et-preuves-2026.mdx",
  "src/content/articles/multiplication-fft-convolution-2026.mdx",
  "src/content/articles/frontiere-theorique-multiplication-entiere-2026.mdx",
  "src/content/articles/trois-voyageurs-deux-planetes.mdx",
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
  const article = readFileSync(new URL("../src/content/articles/karatsuba-multiplication.mdx", import.meta.url), "utf8");
  const lesson = readFileSync(new URL("../src/content/articles/complexite-multiplication-karatsuba.mdx", import.meta.url), "utf8");
  assert.match(article, /4\^&#123;10&#125;=1&#92;,048&#92;,576/);
  assert.match(article, /3\^&#123;10&#125;=59&#92;,049/);
  assert.ok(lesson.includes("n^&#123;&#92;log_2 3&#125;"));
  assert.ok(lesson.includes("m_&#123;j+1&#125;"));
});

test("classical multiplication complexity is consistently marked green", () => {
  const source = [
    "src/content/articles/karatsuba-multiplication.mdx",
    "src/content/articles/complexite-multiplication-karatsuba.mdx",
  ].map((path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")).join("\\n");
  const expectedGreenExpressions = [
    String.raw`au lieu de <span class="term-common">&#92;(\\Theta(n^2)&#92;)</span> pour la`,
    String.raw`<span class="term-common">&#92;(&#92;Omega(n^2)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(&#92;Theta(n^2)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(O(n^2)&#92;)</span>`,
  ];  for (const expression of expectedGreenExpressions) {
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

test("the proper-time integral keeps TeX bounds escaped for MDX", () => {
  const source = readFileSync(new URL("../src/content/articles/trois-voyageurs-deux-planetes.mdx", import.meta.url), "utf8");
  assert.ok(source.includes(String.raw`&#92;int_&#123;t_i&#125;^&#123;t_f&#125;`));
  assert.doesNotMatch(source, /&#92;int_\{/);
});
