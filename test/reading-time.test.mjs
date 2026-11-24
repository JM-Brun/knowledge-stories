import test from "node:test";
import assert from "node:assert/strict";
import { countReadableWords, estimateReadingTime, getReadingTime } from "../src/utils/reading-time.mjs";

test("excludes fenced code blocks from the reading estimate", () => {
  assert.equal(countReadableWords("Un deux trois\n```js\nconst x = 1;\n```"), 3);
});

test("counts prose and keeps a minimum reading time of one minute", () => {
  assert.equal(estimateReadingTime("Un texte court."), 1);
  assert.equal(estimateReadingTime(Array(181).fill("mot").join(" ")), 2);
});

test("uses explicit frontmatter reading time when available", () => {
  assert.equal(getReadingTime({ data: { readingTime: 7 }, body: "court" }), 7);
  assert.equal(getReadingTime({ data: {}, body: "court" }), 1);
});

test("rejects invalid reading speeds", () => {
  assert.throws(() => estimateReadingTime("texte", 0), RangeError);
});
