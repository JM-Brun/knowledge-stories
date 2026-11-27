import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const day = readFileSync(new URL("../calendar/days/jour-01.qmd", import.meta.url), "utf8");
const exercise = readFileSync(new URL("../calendar/exercices/jour-01.qmd", import.meta.url), "utf8");
const calendarIndex = readFileSync(new URL("../calendar/index.qmd", import.meta.url), "utf8");

test("Jour 1 uses Pandoc-native math delimiters", () => {
  assert.equal(day.includes("\\("), false, "single-backslash inline TeX delimiters are consumed by Pandoc");
  assert.equal(day.includes("\\["), false, "single-backslash display TeX delimiters are consumed by Pandoc");
  const displayDelimiters = day.match(/^\$\$$/gm) ?? [];
  assert.ok(displayDelimiters.length > 0, "display equations must use $$ blocks");
  assert.equal(displayDelimiters.length % 2, 0, "display math delimiters must be paired");
  const dollarCount = (day.match(/\$/g) ?? []).length;
  assert.equal((dollarCount - displayDelimiters.length * 2) % 2, 0, "inline math delimiters must be paired");
});

test("nested HTML fragments are not indented into Markdown code blocks", () => {
  assert.doesNotMatch(day, /^ {2,}<\/?(?:div|figure|p|span|li|ul|ol)\b/m);
});

test("Day 1 diagrams preserve SVG viewBox in external assets", () => {
  assert.doesNotMatch(day, /<svg\b/i, "SVG markup must not pass through Pandoc's HTML serializer");
  for (const file of ["jour-01-plan-initial.svg", "jour-01-plan-croise.svg"]) {
    const svg = readFileSync(new URL("../calendar/images/" + file, import.meta.url), "utf8");
    assert.match(svg, /viewBox="/, file + ": case-sensitive viewBox attribute is required");
    assert.doesNotMatch(svg, /viewbox="/, file + ": lowercase viewbox is invalid SVG");
  }
});

test("the Day 1 exercise uses Pandoc-native inline math delimiters", () => {
  assert.equal(exercise.includes("\\("), false);
  assert.equal(exercise.includes("\\)"), false);
  assert.equal(exercise.includes("\\["), false);
  assert.equal(exercise.includes("\\]"), false);
  assert.match(exercise, /\$\(18/);
});

test("the exercise crossed plan preserves the initial diagonal observations", () => {
  assert.match(exercise, /\| A \| 20,4 °C \| 19,2 °C \|/);
  assert.match(exercise, /\| B \| 20,9 °C \| 19,7 °C \|/);
  assert.match(exercise, /19\{,\}7-20\{,\}4=-0\{,\}7=\+0\{,\}5-1\{,\}2/);
});

test("the calendar entry title matches the current Day 1 article title", () => {
  assert.match(day, /title: "Le modèle voit-il le bâtiment ou le capteur \?"/);
  assert.match(calendarIndex, /Le modèle voit-il le bâtiment ou le capteur \?/);
});
