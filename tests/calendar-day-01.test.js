import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const day = readFileSync(new URL("../calendar/days/jour-01.qmd", import.meta.url), "utf8");

test("Jour 1 uses Pandoc-native math delimiters", () => {
  assert.equal(day.includes("\\("), false, "single-backslash inline TeX delimiters are consumed by Pandoc");
  assert.equal(day.includes("\\["), false, "single-backslash display TeX delimiters are consumed by Pandoc");
  const displayDelimiters = day.match(/^\\$\\$$/gm) ?? [];
  assert.ok(displayDelimiters.length > 0, "display equations must use $$ blocks");
  assert.equal(displayDelimiters.length % 2, 0, "display math delimiters must be paired");
  const dollarCount = (day.match(/\\$/g) ?? []).length;
  assert.equal((dollarCount - displayDelimiters.length * 2) % 2, 0, "inline math delimiters must be paired");
});

test("nested HTML fragments are not indented into Markdown code blocks", () => {
  assert.doesNotMatch(day, /^ {2,}<\\/?(?:div|figure|p|span|li|ul|ol)\\b/m);
});

test("Day 1 diagrams preserve SVG viewBox in external assets", () => {
  assert.doesNotMatch(day, /<svg\\b/i, "SVG markup must not pass through Pandoc's HTML serializer");
  for (const file of ["jour-01-plan-initial.svg", "jour-01-plan-croise.svg"]) {
    const svg = readFileSync(new URL(`../calendar/images/${file}`, import.meta.url), "utf8");
    assert.match(svg, /viewBox="/, `${file}: case-sensitive viewBox attribute is required`);
    assert.doesNotMatch(svg, /viewbox="/, `${file}: lowercase viewbox is invalid SVG`);
  }
});
