import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    themes: z.array(z.string()).default([]),
    difficulty: z.enum(["introductory", "intermediate", "advanced"]),
    readingTime: z.number().positive().optional(),
    status: z.enum(["draft", "review", "published"]).default("draft"),
    featured: z.boolean().default(false),
    cover: z.enum(["karatsuba", "jumeaux"]).optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      kind: z.enum(["primary", "secondary", "data", "documentation"]),
      accessed: z.coerce.date().optional(),
    })).default([]),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
