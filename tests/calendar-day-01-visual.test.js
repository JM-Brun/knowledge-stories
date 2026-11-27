import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { calculateObservedContrast } from "../calendar/scripts/jour-01-interactive.js";

const article = readFileSync(new URL("../calendar/days/jour-01.qmd", import.meta.url), "utf8");
const styles = readFileSync(new URL("../calendar/styles.css", import.meta.url), "utf8");
const scene = readFileSync(new URL("../calendar/images/jour-01-scene.svg", import.meta.url), "utf8");
const initial = readFileSync(new URL("../calendar/images/jour-01-plan-initial.svg", import.meta.url), "utf8");
const crossed = readFileSync(new URL("../calendar/images/jour-01-plan-croise.svg", import.meta.url), "utf8");
const comparison = readFileSync(new URL("../calendar/images/jour-01-comparaison-reference.svg", import.meta.url), "utf8");

test("two different attributions can produce the same observed contrast", () => {
  assert.equal(calculateObservedContrast(0.5, -1), -0.5);
  assert.equal(calculateObservedContrast(-0.5, 0), -0.5);
});

test("the interactive experiment exposes accessible controls and presets", () => {
  assert.match(article, /data-measurement-lab/);
  assert.match(article, /data-building-effect/);
  assert.match(article, /data-sensor-effect/);
  assert.match(article, /data-preset="-0.5,0"/);
  assert.match(article, /type="module" src="\.\.\/scripts\/jour-01-interactive\.js"/);
});

test("the story route and its four destinations are present", () => {
  for (const id of ["premier-signal", "verification-capteurs", "confusion-effets", "plan-croise"]) {
    assert.match(article, new RegExp(`\\{#${id}\\}`));
    assert.match(article, new RegExp(`href="#${id}"`));
  }
});

test("editorial SVGs keep explicit, accessible viewBoxes and titles", () => {
  for (const svg of [scene, initial, crossed, comparison]) {
    assert.match(svg, /viewBox="0 0 /);
    assert.match(svg, /<title/);
    assert.match(svg, /<desc/);
  }
});

test("the reference-comparison plot shows the shared reference and six readings", () => {
  assert.match(article, /jour-01-comparaison-reference\.svg/);
  assert.match(comparison, /RÉF\. 20,00 °C/);
  assert.match(comparison, /19,9/);
  assert.match(comparison, /18,9/);
});

test("the contrast grid remains two columns at tablet and mobile widths", () => {
  assert.match(styles, /@media\(max-width:900px\)[\s\S]*?\.contrast-grid\s*\{\s*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
});


test("article prose and visual blocks share one responsive reading measure", () => {
  assert.match(styles, /--article-reading-measure:\s*84ch/);
  assert.match(styles, /main\.content\s*>\s*:where\([\s\S]*?figure[\s\S]*?var\(--article-reading-measure\)/);
  assert.match(styles, /main\.content\s+:where\(p,\s*li,\s*blockquote\)[\s\S]*?max-width:\s*var\(--article-reading-measure\)/);
  assert.match(styles, /@media\s*\(max-width:\s*700px\)[\s\S]*?--article-reading-measure:\s*100%/);
});
