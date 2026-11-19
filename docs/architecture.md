# Architecture

## Choix de départ
Le site utilise Astro et ses collections de contenu Markdown/MDX. Ce choix sépare les contenus éditoriaux des composants d'interface, permet de générer des pages statiques rapides et garde la possibilité d'ajouter des îlots interactifs uniquement lorsqu'ils sont utiles.

Le périmètre initial reste léger : pas de CMS, pas de base de données, pas de backend, pas de dépendance à un service externe pour construire le site.

## Couches
- **Contenu** : articles MD/MDX dans `src/content/articles/`, validés par un schéma typé.
- **Présentation** : layouts et composants Astro.
- **Styles** : système visuel éditorial dans `src/styles/`.
- **Règles éditoriales** : charte, modèle, workflow et instructions d'agents.
- **Publication** : build statique déployable sur GitHub Pages.

## Frontmatter et publication
Le schéma de collection impose les champs essentiels et contraint les niveaux de difficulté et les statuts. Seuls les articles avec `status: published` sont rendus dans les routes publiques. Les brouillons et contenus en revue restent dans Git mais ne sont pas générés comme pages.

## Chemins et déploiement
Le dépôt est prévu pour GitHub Pages à l'adresse `https://jm-brun.github.io/knowledge-stories/`. Le paramètre `base` Astro doit rester cohérent avec le nom du dépôt. Les liens internes de navigation doivent respecter ce préfixe.

## Évolutions possibles
Table des matières, composants de diagrammes et visualisations, recherche locale, collections thématiques, tests de liens et d'accessibilité, métadonnées SEO, flux RSS et sitemap. Ces évolutions seront ajoutées en fonction de besoins observés, sans complexifier le socle avant les premiers articles pilotes.
