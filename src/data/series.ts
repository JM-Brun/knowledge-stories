export const seriesInfo = {
  "multiplication-karatsuba": {
    title: "Multiplier plus vite : de Karatsuba aux algorithmes rapides",
    question: "Comment réduire le nombre d'opérations, analyser le gain, puis comprendre les méthodes qui repoussent les limites ?",
    domain: "mathematics",
    accent: "maths",
  },
  "paradoxe-des-jumeaux": {
    title: "Le paradoxe des jumeaux : comparer deux temps vécus",
    question: "De l'addition classique des vitesses au temps propre : construire pas à pas le raisonnement qui lève le paradoxe.",
    domain: "physics",
    accent: "physics",
  },
} as const;

export type SeriesId = keyof typeof seriesInfo;
