export const seriesInfo = {
  "multiplication-karatsuba": {
    title: "Multiplier plus vite : de Karatsuba aux algorithmes rapides",
    question: "Comment réduire le nombre d'opérations, analyser le gain, puis comprendre les méthodes qui repoussent les limites ?",
    progression: "Le parcours recommandé va du mécanisme de Karatsuba à son analyse, puis aux généralisations par Toom–Cook et FFT. Le dernier article est un approfondissement théorique spécialisé et facultatif : il examine des résultats récents, leurs modèles de calcul et le statut de leurs preuves.",
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

export const formatReadingDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder === 0 ? `${hours} h` : `${hours} h ${remainder} min`;
};

const karatsubaSeriesRoles: Record<string, string> = {
  "karatsuba-multiplication": "Comprendre le mécanisme",
  "complexite-multiplication-karatsuba": "Analyser la complexité",
  "multiplication-rapide-et-preuves-2026": "Généraliser · Toom–Cook",
  "multiplication-fft-convolution-2026": "Changer d'échelle · FFT",
  "frontiere-theorique-multiplication-entiere-2026": "Approfondissement théorique · facultatif",
};

const twinSeriesRoles: Record<string, string> = {
  "composition-vitesses-relativite": "Préparation recommandée",
  "simultaneite-relativite-restreinte": "Parcours essentiel",
  "asymetrie-paradoxe-jumeaux": "Parcours essentiel",
  "temps-propre-paradoxe-jumeaux": "Parcours essentiel",
  "signaux-doppler-relativiste": "Complément",
  "trois-voyageurs-deux-planetes": "Extension",
};

export const getSeriesRoleLabel = (slug: string, order?: number): string =>
  karatsubaSeriesRoles[slug] ?? twinSeriesRoles[slug] ?? (order === 0 ? "Introduction" : `Étape ${order ?? "—"}`);
