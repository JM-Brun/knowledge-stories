# Knowledge Stories

**Des idées complexes, expliquées avec clarté, rigueur et imagination.**

Knowledge Stories est un projet éditorial public : il transforme des sujets déjà étudiés dans les projets de recherche et d'expérimentation de son écosystème en articles autonomes, pédagogiques, documentés et visuellement soignés.

Le blog ne remplace pas les projets qui produisent les connaissances. Il en propose une mise en récit destinée aux lecteurs : comprendre une question précise, construire une intuition, examiner les mécanismes et les preuves, puis savoir ce qui reste incertain.

## Principes

- **Autonomie éditoriale.** Un article public se comprend sans accès aux dépôts privés ni connaissance préalable de leur organisation.
- **Traçabilité.** Les affirmations importantes renvoient à des sources identifiables ; les résultats, interprétations, hypothèses et opinions sont distingués.
- **Fidélité.** La simplification ne doit ni effacer les nuances ni transformer une hypothèse en fait établi.
- **Pédagogie progressive.** Partir d'une question et d'une intuition, puis construire les explications, exemples, démonstrations et limites.
- **Visualisation utile.** Schémas, graphiques, animations et interactions sont choisis pour améliorer la compréhension, pas pour décorer.
- **Validation humaine.** Un LLM peut assister la recherche, la rédaction et la vérification ; il ne valide pas seul un article et ne déclenche pas sa publication.
- **Publication explicite.** Aucun contenu provenant d'un dépôt privé n'est publié automatiquement. Les droits, données sensibles et informations confidentielles sont vérifiés avant toute réutilisation.

## Écosystème documentaire

Knowledge Stories peut s'appuyer, selon le sujet, sur :

| Projet | Contribution possible |
|---|---|
| [Society Lab](https://github.com/JM-Brun/society-lab) | Recherche documentaire, politiques publiques, économie, société, preuves et controverses |
| [LLM Lab](https://github.com/JM-Brun/llm-lab) | Mathématiques, informatique, IA, implémentations et expériences |
| Wiki Knowledge | Concepts, sources, relations et synthèses transversales (dépôt privé) |
| Career Knowledge (dépôt privé) | Uniquement des connaissances techniques génériques explicitement sélectionnées et validées ; aucune donnée de profil, candidature, recherche d'emploi, évaluation personnelle ou correspondance privée n'est publiable. |

Ces projets restent les propriétaires de leurs contenus canoniques. Knowledge Stories conserve ses propres textes publiables, références et décisions éditoriales. Les dépôts privés (Wiki Knowledge et Career Knowledge) ne sont jamais des sources publiques directement accessibles : seule une connaissance générique explicitement sélectionnée, vérifiée et autorisée peut être reformulée ici. Aucune donnée personnelle, de carrière ou de candidature n'est réutilisée. Les liens vers des dépôts privés ne doivent jamais apparaître dans les articles ni devenir des dépendances de lecture pour le public.

## Démarrer

Prérequis : Node.js 20.19+ ou 22.12+ et npm.

```bash
npm install
npm run dev
```

Commandes disponibles :

```bash
npm run dev       # serveur local
npm run build     # build de production
npm run preview   # prévisualisation du build
npm run check     # vérification Astro et TypeScript
```

## Organisation

- `src/content/articles/` : articles Markdown/MDX et leurs métadonnées.
- `src/content.config.ts` : schéma des collections.
- `src/components/` : composants éditoriaux réutilisables.
- `src/layouts/` : gabarits de pages.
- `src/pages/` : routes du site.
- `src/styles/` : système visuel.
- `editorial/` : charte, workflow, contrôles et modèle d'article.
- `docs/` : architecture et décisions techniques.

## État du projet

Le dépôt commence par ses fondations éditoriales et techniques. Les premiers articles pilotes seront ajoutés après constitution de dossiers documentaires vérifiés ; aucune synthèse issue d'un autre dépôt ne doit être recopiée sans réexamen des sources et des droits.

## Contribuer

Lire [CONTRIBUTING.md](CONTRIBUTING.md), [la charte éditoriale](editorial/editorial-charter.md) et [le workflow de publication](editorial/publication-workflow.md) avant de proposer un article.
