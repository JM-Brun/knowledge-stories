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
- `src/styles/` : système visuel éditorial.
- `editorial/` : charte, workflow, contrôles et modèle d'article.
- `docs/` : architecture, intégration inter-projets et déploiement.

## Atelier de relecture (discret)

Les articles en cours de relecture peuvent être générés sous `/atelier/{slug}/` avec `status: review`. L'index `/atelier/` n'est pas relié à la navigation, à l'accueil ou aux archives. Les contenus `status: draft` ne sont pas générés ; seuls les contenus `status: published` apparaissent dans les parcours publics. L'atelier est non indexé, mais pas privé : une URL partagée permet d'y accéder. Voir [le workflow éditorial](editorial/publication-workflow.md).

## Calendrier Data Science & Machine Learning 2026

Les calendriers annuels sont regroupés dans une archive commune. Chaque édition est une page autonome qui réunit la présentation, les 24 cases, le fil conducteur facultatif et les accès directs aux journées :

- [Archives des calendriers](https://jm-brun.github.io/knowledge-stories/calendriers/)
- [Édition 2026 — Data Science & Machine Learning](https://jm-brun.github.io/knowledge-stories/calendar/)

Le site Astro et le projet Quarto sont construits ensemble par `.github/workflows/pages.yml`. Quarto génère le calendrier dans `dist/calendar/`, puis le même artefact est déployé sur GitHub Pages. Les cinq premières journées sont publiées ; les suivantes restent annoncées comme à paraître jusqu'à leur validation.

La conception du programme, les identifiants de concepts et les métadonnées éditoriales restent maintenus dans Wiki Knowledge. Le site public ne dépend pas du dépôt privé et ne synchronise pas automatiquement ses données.

## État du projet

Le dépôt commence par ses fondations éditoriales et techniques. Les premiers articles pilotes seront ajoutés après constitution de dossiers documentaires vérifiés ; aucune synthèse issue d'un autre dépôt ne doit être recopiée sans réexamen des sources et des droits.

## Déploiement

Le workflow GitHub Actions construit et déploie le site sur GitHub Pages à chaque mise à jour de `main`. Pour l'activation initiale, sélectionner **Settings → Pages → Build and deployment → Source → GitHub Actions**. Voir [le guide de déploiement](docs/deployment.md).

## Contribuer

Lire [CONTRIBUTING.md](CONTRIBUTING.md), [la charte éditoriale](editorial/editorial-charter.md), [le workflow de publication](editorial/publication-workflow.md) et le [contrat d'intégration inter-projets](docs/ecosystem-integration.md). Les premières pistes sont recensées dans [le backlog éditorial](editorial/pitch-backlog.md).
