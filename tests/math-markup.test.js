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
  assert.ok(lesson.includes("La page précédente, [consacrée au mécanisme de Karatsuba]"));
  assert.doesNotMatch(lesson, /&#92;boxed&#123;ad\+bc=/, "the algebraic identity is explained on the prerequisite page, not repeated here");
  assert.ok(lesson.includes("&#92;begin&#123;aligned&#125;"));
  assert.ok(lesson.includes("&#92;end&#123;aligned&#125;"));
});

test("classical multiplication complexity is consistently marked green", () => {
  const source = [
    "src/content/articles/karatsuba-multiplication.mdx",
    "src/content/articles/complexite-multiplication-karatsuba.mdx",
  ].map((path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")).join("\\n");
  const expectedGreenExpressions = [
    String.raw`au lieu de <span class="term-common">&#92;(\Theta(n^2)&#92;)</span> pour la`,
    String.raw`<span class="term-common">&#92;(&#92;Omega(n^2)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(&#92;Theta(n^2)&#92;)</span>`,
    String.raw`<span class="term-common">&#92;(O(n^2)&#92;)</span>`,
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

test("the proper-time integral keeps TeX bounds escaped for MDX", () => {
  const source = readFileSync(new URL("../src/content/articles/trois-voyageurs-deux-planetes.mdx", import.meta.url), "utf8");
  assert.ok(source.includes(String.raw`&#92;int_&#123;t_i&#125;^&#123;t_f&#125;`));
  assert.doesNotMatch(source, /&#92;int_\{/);
});


test("Karatsuba components use the canonical semantic palette, including fallbacks", () => {
  const growth = readFileSync(new URL("../src/components/KaratsubaGrowth.astro", import.meta.url), "utf8");
  const comparison = readFileSync(new URL("../src/components/KaratsubaComparison.astro", import.meta.url), "utf8");
  const explorer = readFileSync(new URL("../src/components/KaratsubaExplorer.astro", import.meta.url), "utf8");
  for (const [source, color] of [
    [growth, "#287a4b"], [growth, "#e8f2e9"], [growth, "#7651a6"], [growth, "#f0eaf7"],
    [comparison, "#287a4b"], [comparison, "#7651a6"],
    [explorer, "#287a4b"], [explorer, "#8b5a2b"], [explorer, "#7651a6"],
  ]) {
    assert.ok(source.includes(color), `Missing canonical color ${color}`);
  }
  assert.ok(explorer.includes('maxlength="18"'));
  assert.ok(explorer.includes('class={index === 2 ? "subproblem-aux" : "subproblem-common"}'));
  assert.ok(explorer.includes(".subproblem-common [data-call]"));
  assert.ok(explorer.includes(".subproblem-aux [data-call]"));
});

test("Karatsuba exercise corrections preserve the semantic product colors", () => {
  const article = readFileSync(new URL("../src/content/articles/karatsuba-multiplication.mdx", import.meta.url), "utf8");
  assert.ok(article.includes(String.raw`<span class="term-common">&#92;(ac=32&#92;)</span>`));
  assert.ok(article.includes(String.raw`<span class="term-common">&#92;(bd=21&#92;)</span>`));
  assert.ok(article.includes(String.raw`<span class="term-aux">&#92;((a+b)(c+d)=11\times11=121&#92;)</span>`));
  assert.ok(article.includes(String.raw`<span class="term-cross">&#92;(121-32-21=68&#92;)</span>`));
});

test("complexity article colors method-comparison tables and proves bounded termination explicitly", () => {
  const lesson = readFileSync(new URL("../src/content/articles/complexite-multiplication-karatsuba.mdx", import.meta.url), "utf8");
  assert.ok(lesson.includes('<span class="term-common">Appels classiques</span>'));
  assert.ok(lesson.includes('<span class="term-aux">Appels Karatsuba</span>'));
  assert.ok(lesson.includes("1 098 (par exemple 999 + 99)"));
  assert.ok(lesson.includes("donne 108, puis 18, puis 9"));
});


test("the Toom–Cook article preserves the Karatsuba palette in its historical bridge", () => {
  const article = readFileSync(new URL("../src/content/articles/multiplication-rapide-et-preuves-2026.mdx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
  const comparison = readFileSync(new URL("../src/components/MultiplicationRecurrenceComparison.astro", import.meta.url), "utf8");
  assert.ok(article.includes('className="karatsuba-color-scope"'));
  assert.ok(article.includes(String.raw`<span class="term-common">&#92;(u=12&#92;times56&#92;)</span>`));
  assert.ok(article.includes(String.raw`<span class="term-aux">&#92;(w=(12+34)(56+78)&#92;)</span>`));
  assert.ok(article.includes(String.raw`<span class="term-cross">&#92;(w-u-v&#92;)</span>`));
  assert.ok(styles.includes(":has(.karatsuba-color-scope) .karatsuba-color-scope .term-common"));
  assert.ok(comparison.includes("cost-row--karatsuba"));
  assert.ok(comparison.includes("cost-row--toom"));
  assert.ok(comparison.includes("var(--method-karatsuba,#52627a)"));
  assert.ok(comparison.includes("var(--method-toom,#006f6b)"));
});


test("the final two series articles retain the Karatsuba semantic palette", () => {
  const fft = readFileSync(new URL("../src/content/articles/multiplication-fft-convolution-2026.mdx", import.meta.url), "utf8");
  const frontier = readFileSync(new URL("../src/content/articles/frontiere-theorique-multiplication-entiere-2026.mdx", import.meta.url), "utf8");
  assert.ok(fft.includes('className="karatsuba-color-scope"'));
  assert.ok(fft.includes('<span className="term-aux">trois produits</span>'));
  assert.ok(fft.includes('<span className="term-common">quatre</span>'));
  assert.ok(frontier.includes('className="karatsuba-color-scope"'));
  assert.ok(frontier.includes(String.raw`<span className="term-aux">&#92;((a+b)(c+d)&#92;)</span>`));
  assert.ok(frontier.includes(String.raw`T(n)=n(1+&#92;log n)^&#123;1/2+o(1)&#125;`));
  assert.ok(frontier.includes("variable-count Weak ETH"));
  assert.ok(frontier.includes("lean/docs/109.md"));
  assert.ok(frontier.includes("readingTime: 11"));
});


test("the five multiplication articles expose a consistent method progression map", () => {
  const articles = [
    ["karatsuba-multiplication.mdx", "karatsuba"],
    ["complexite-multiplication-karatsuba.mdx", "karatsuba-analysis"],
    ["multiplication-rapide-et-preuves-2026.mdx", "toom"],
    ["multiplication-fft-convolution-2026.mdx", "fft"],
    ["frontiere-theorique-multiplication-entiere-2026.mdx", "frontier"],
  ];
  for (const [file, active] of articles) {
    const source = readFileSync(new URL(`../src/content/articles/${file}`, import.meta.url), "utf8");
    assert.ok(source.includes('import MultiplicationMethodMap from "../../components/MultiplicationMethodMap.astro";'), file);
    assert.ok(source.includes(`<MultiplicationMethodMap active="${active}" />`), file);
  }
});

test("algorithm-family colors remain separate from Karatsuba's algebraic-role colors", () => {
  const map = readFileSync(new URL("../src/components/MultiplicationMethodMap.astro", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
  const toom = readFileSync(new URL("../src/components/ToomCookExplorer.astro", import.meta.url), "utf8");
  const recurrence = readFileSync(new URL("../src/components/MultiplicationRecurrenceComparison.astro", import.meta.url), "utf8");
  const fft = readFileSync(new URL("../src/components/FFTConvolutionExplorer.astro", import.meta.url), "utf8");
  const ss = readFileSync(new URL("../src/components/SchonhageStrassenExplorer.astro", import.meta.url), "utf8");
  const butterfly = readFileSync(new URL("../src/components/FFTButterflyDiagram.astro", import.meta.url), "utf8");

  for (const token of ["method-karatsuba", "method-karatsuba-analysis", "method-toom", "method-fft", "method-ss", "method-frontier"]) {
    assert.ok(map.includes(token), `Missing progression step: ${token}`);
  }
  assert.ok(map.includes("distinctes du vert, brun et violet"));
  assert.ok(styles.includes("--method-karatsuba: #52627a"));
  assert.ok(styles.includes("--method-toom: #006f6b"));
  assert.ok(styles.includes("--method-fft: #3568a8"));
  assert.ok(styles.includes("--method-ss: #925400"));
  assert.ok(styles.includes("--term-common: #287a4b"));
  assert.ok(styles.includes("--term-cross: #8b5a2b"));
  assert.ok(styles.includes("--term-aux: #7651a6"));

  assert.ok(toom.includes("var(--method-toom,#006f6b)"));
  assert.ok(recurrence.includes("cost-row--karatsuba"));
  assert.ok(recurrence.includes("cost-row--toom"));
  assert.ok(recurrence.includes("var(--method-toom,#006f6b)"));
  assert.ok(fft.includes("var(--method-fft,#3568a8)"));
  assert.ok(ss.includes("var(--method-ss,#925400)"));
  assert.ok(butterfly.includes("#3568a8"));
  assert.doesNotMatch(butterfly, /#bd4b32/);
});

test("method-label colors meet WCAG AA contrast against their pastel backgrounds", () => {
  const luminance = (hex) => {
    const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const ratio = (foreground, background) => {
    const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
    return (values[0] + 0.05) / (values[1] + 0.05);
  };
  const pairs = [
    ["#52627a", "#edf0f4"],
    ["#006f6b", "#e5f2f0"],
    ["#3568a8", "#eaf0f8"],
    ["#925400", "#f7eee1"],
  ];
  for (const [foreground, background] of pairs) {
    assert.ok(ratio(foreground, background) >= 4.5, `${foreground} on ${background} fails WCAG AA`);
  }
});
