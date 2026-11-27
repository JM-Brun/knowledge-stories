import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const config = readFileSync(new URL("../calendar/_quarto.yml", import.meta.url), "utf8");
const styles = readFileSync(new URL("../calendar/styles.css", import.meta.url), "utf8");

test("calendar pages use Quarto's full page layout", () => {
  assert.match(config, /^    page-layout: full$/m);
});

test("calendar article content can use the viewport without widening prose indefinitely", () => {
  assert.match(styles, /#quarto-content main\.content\s*\{[^}]*width:\s*100%/s);
  assert.match(styles, /#quarto-content main\.content\s*\{[^}]*max-width:\s*96rem/s);
  assert.match(styles, /#quarto-content p,\s*#quarto-content li,\s*#quarto-content blockquote\s*\{[^}]*overflow-wrap:\s*anywhere/s);
});
