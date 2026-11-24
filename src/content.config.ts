import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    domain: z.enum(["mathematics", "computing", "physics"]),
    discipline: z.enum(["Mathématiques", "Informatique", "Physique", "Sciences sociales", "Sciences de la vie", "Sciences de l’ingénieur", "Autres"]).default("Autres"),
    labels: z.array(z.string().trim().min(1)).length(2),
    tags: z.array(z.string()).default([]),
    themes: z.array(z.string().trim().min(1)).min(1),
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
    series: z.enum(["multiplication-karatsuba", "paradoxe-des-jumeaux"]).optional(),
    seriesOrder: z.number().int().nonnegative().optional(),
    relatedArticles: z.array(z.string()).default([]),
  }).superRefine((data, context) => {
    const disciplineByDomain = { mathematics: "Mathématiques", computing: "Informatique", physics: "Physique" } as const;
    if (data.discipline !== disciplineByDomain[data.domain]) {
      context.addIssue({ code: "custom", path: ["discipline"], message: `La discipline doit correspondre au domaine ${data.domain}.` });
    }
    if ((data.series === undefined) !== (data.seriesOrder === undefined)) {
      context.addIssue({ code: "custom", path: ["series"], message: "Une appartenance à une série et son ordre doivent être renseignés ensemble." });
    }
    const domainBySeries = { "multiplication-karatsuba": "mathematics", "paradoxe-des-jumeaux": "physics" } as const;
    if (data.series && data.domain !== domainBySeries[data.series]) {
      context.addIssue({ code: "custom", path: ["domain"], message: `La série ${data.series} appartient au domaine ${domainBySeries[data.series]}.` });
    }
  }),
});

export const collections = { articles };
