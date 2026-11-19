# Déployer Knowledge Stories sur GitHub Pages

Le site est configuré pour être publié à l'adresse :

`https://jm-brun.github.io/knowledge-stories/`

## Activation initiale

Dans le dépôt GitHub :

1. Ouvrir **Settings → Pages**.
2. Dans **Build and deployment**, sélectionner **GitHub Actions** comme source.
3. Vérifier que les GitHub Actions sont autorisées pour le dépôt.
4. Lancer le workflow **Build and deploy Knowledge Stories** depuis l'onglet Actions, ou pousser un commit sur `main`.

Le workflow `.github/workflows/pages.yml` installe les dépendances, exécute `npm run check`, construit le site et déploie le contenu de `dist/`.

## Modifications ultérieures

- Les pull requests exécutent le workflow de qualité `.github/workflows/ci.yml`.
- Les commits sur `main` déclenchent la construction et le déploiement.
- Les brouillons et articles en revue restent exclus du site : seuls les contenus dont le frontmatter contient `status: published` sont générés.

## Vérifications

Si le déploiement échoue, examiner les étapes Install dependencies, Check, Build et Deploy dans l'exécution GitHub Actions. Une erreur de configuration Pages se corrige dans Settings → Pages ; une erreur Astro doit être corrigée dans le code plutôt que contournée.
