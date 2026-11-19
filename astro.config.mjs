import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jm-brun.github.io",
  base: "/knowledge-stories",
  integrations: [mdx()],
});
