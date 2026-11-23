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

## Cycle de vie et exposition
Le champ `status` porte l'état éditorial, sans le confondre avec la visibilité technique :

| Statut | Page générée ? | Découvrable depuis le site ? | Usage |
|---|---:|---:|---|
| `draft` | Non | Non | Rédaction interne, non publiée |
| `review` | Oui, sous `/atelier/` | Non, sauf accès direct à l'URL de l'atelier | Relecture éditoriale ciblée |
| `published` | Oui, sous `/articles/` | Oui | Publication publique validée |

La page d'accueil, les listes d'articles, les articles à la une et les parcours publics ne sélectionnent que `published`. Les contenus `review` disposent d'une page d'index discrète à `/atelier/`, non liée depuis la navigation, et de pages individuelles à `/atelier/{slug}/`. Toutes ces pages portent `noindex, nofollow, noarchive`. Les contenus `draft` ne sont jamais générés.

Le mode atelier est une **discrétion de navigation et d'indexation**, pas un contrôle d'accès : GitHub Pages sert des fichiers publics. Toute personne disposant de l'URL peut lire une page de relecture. Ne jamais y placer de données personnelles, secrets, contenus sous embargo ou matériaux dont la publication n'est pas autorisée. Pour une confidentialité réelle, utiliser un environnement privé distinct.

## Chemins et déploiement
Le dépôt est prévu pour GitHub Pages à l'adresse `https://jm-brun.github.io/knowledge-stories/`. Le paramètre `base` Astro doit rester cohérent avec le nom du dépôt. Les liens internes de navigation doivent respecter ce préfixe.

## Évolutions possibles
Table des matières, composants de diagrammes et visualisations, recherche locale, collections thématiques, tests de liens et d'accessibilité, métadonnées SEO, flux RSS et sitemap. Ces évolutions seront ajoutées en fonction de besoins observés, sans complexifier le socle avant les premiers articles pilotes.
