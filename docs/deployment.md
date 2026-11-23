# Déployer Knowledge Stories et le calendrier Quarto

Le dépôt publie un site Astro et un mini-site Quarto dans un seul artefact GitHub Pages :

- site éditorial : `https://jm-brun.github.io/knowledge-stories/`
- calendrier 2026 : `https://jm-brun.github.io/knowledge-stories/calendar/`

## Activation initiale

Dans GitHub, ouvrir **Settings → Pages → Build and deployment** et sélectionner **GitHub Actions** comme source. Le workflow `.github/workflows/pages.yml` gère ensuite le build et le déploiement.

## Pipeline

Le job de build :

1. installe Node.js 22 et les dépendances Astro ;
2. exécute `npm run check` ;
3. construit le site Astro dans `dist/` ;
4. installe Quarto 1.11.9 ;
5. rend le projet `calendar/` dans `dist/calendar/` ;
6. vérifie la présence des pages principales avant de téléverser l'artefact Pages.

Le job de déploiement publie cet artefact avec `actions/deploy-pages`. Les pull requests exécutent les contrôles de build, mais ne déploient pas le site.

## Rendu local

Prérequis : Node.js 22 et Quarto 1.11.9.

```bash
npm install
npm run check
npm run build
quarto render calendar
```

Le rendu Quarto utilise `calendar/_quarto.yml` et écrit dans `dist/calendar/`. Exécuter Astro avant Quarto : le build Astro recrée `dist/`.

## Périmètre éditorial

Le site public ne lit pas le dépôt privé Wiki Knowledge et ne synchronise pas ses métadonnées. Les pages Quarto publiées sont des contenus autonomes, explicitement sélectionnés et révisés. Le calendrier complet peut être conçu et suivi dans le dépôt de connaissance ; seules les journées validées sont rendues accessibles ici.
