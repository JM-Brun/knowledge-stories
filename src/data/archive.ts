export type ArchiveStory = {
  title: string;
  description: string;
  href: string;
  year: number;
  calendar: string;
  day: number;
  status: "published";
  themes: string[];
  tags: string[];
};

/**
 * Editorial index for Quarto calendar stories.
 * Keep this catalogue in sync when a day becomes public; it is the bridge
 * between Quarto's independent build and Astro's cross-edition archive.
 */
export const calendarStories: ArchiveStory[] = [
  {
    title: "Une mesure précise peut-elle être fausse ?",
    description: "Distinguer répétabilité, justesse et biais à partir de deux capteurs.",
    href: "calendar/days/jour-01.html",
    year: 2026,
    calendar: "Data Science & Machine Learning",
    day: 1,
    status: "published",
    themes: ["Mesure et qualité des données", "Statistiques et incertitude"],
    tags: ["mesure", "biais", "répétabilité", "justesse"],
  },
  {
    title: "50 000 réponses valent-elles mieux que 1 000 ?",
    description: "Comprendre pourquoi la taille d'un échantillon ne corrige pas un biais de sélection.",
    href: "calendar/days/jour-02.html",
    year: 2026,
    calendar: "Data Science & Machine Learning",
    day: 2,
    status: "published",
    themes: ["Échantillonnage et représentativité", "Mesure et qualité des données"],
    tags: ["échantillonnage", "représentativité", "biais de sélection"],
  },
  {
    title: "Trois distributions, une même moyenne",
    description: "Voir pourquoi une moyenne ne suffit pas à décrire une distribution.",
    href: "calendar/days/jour-03.html",
    year: 2026,
    calendar: "Data Science & Machine Learning",
    day: 3,
    status: "published",
    themes: ["Statistiques et incertitude"],
    tags: ["distribution", "moyenne", "dispersion"],
  },
  {
    title: "Quand la covariance change-t-elle la variance d'une somme ?",
    description: "Relier dépendance entre variables et variabilité d'une somme.",
    href: "calendar/days/jour-04.html",
    year: 2026,
    calendar: "Data Science & Machine Learning",
    day: 4,
    status: "published",
    themes: ["Statistiques et incertitude", "Dépendance et relations"],
    tags: ["variance", "covariance", "corrélation"],
  },
  {
    title: "Quelle distribution est la plus incertaine ?",
    description: "Comparer des distributions à l'aide d'une mesure d'incertitude.",
    href: "calendar/days/jour-05.html",
    year: 2026,
    calendar: "Data Science & Machine Learning",
    day: 5,
    status: "published",
    themes: ["Statistiques et incertitude", "Information et entropie"],
    tags: ["incertitude", "entropie", "distribution"],
  },
];
