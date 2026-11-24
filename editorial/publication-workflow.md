# Workflow de publication

## Maturité éditoriale et statut de génération

Le workflow de travail peut suivre les étapes suivantes :
- **Proposed** : sujet proposé, pas encore qualifié.
- **Researching** : dossier documentaire en constitution.
- **Drafting** : rédaction en cours.
- **In review** : relecture éditoriale et scientifique.
- **Approved** : validation humaine explicite enregistrée.
- **Published** : article publié dans les parcours publics.
- **Needs update** : une source, donnée ou explication doit être réexaminée.

Ces étapes décrivent la maturité du travail. Elles ne sont pas toutes des valeurs du frontmatter : le schéma du site expose uniquement le statut de génération `draft`, `review` ou `published`.
- `status: draft` : le contenu est conservé dans Git mais n'est pas généré sur le site.
- `status: review` : une page est générée sous `/atelier/{slug}/` pour relecture, sans lien depuis les pages publiques.
- `status: published` : la page canonique est générée sous `/articles/{slug}/` et intégrée aux parcours publics.

Le passage à `published` exige une validation humaine explicite préalable ; il ne découle jamais automatiquement de la fin d'une génération. `Approved` est donc une décision de validation, pas un statut de génération supplémentaire. `Needs update` est un signal de maintenance qui peut concerner un article publié comme un article en relecture.

Le modèle, les critères pédagogiques et la feuille de route propres à l'Atelier sont décrits dans [le modèle éditorial de l'Atelier](atelier-editorial-model.md).

## Utiliser l'atelier de relecture
1. Rédiger l'article avec `status: draft`.
2. Vérifier sources, droits, confidentialité et autonomie éditoriale.
3. Passer à `status: review` pour demander une relecture via l'URL `https://jm-brun.github.io/knowledge-stories/atelier/{slug}/`.
4. Recueillir les retours hors de la page (issue ou revue dédiée) et réviser le contenu.
5. Après validation humaine explicite, passer à `status: published`.

L'index `/atelier/` est volontairement absent de la navigation principale, de l'accueil et des archives. Il sert de table de travail, pas de catalogue public. Les pages de l'atelier portent une directive robots `noindex, nofollow, noarchive`. Cela réduit leur découverte accidentelle mais ne protège pas leur accès : une URL partagée suffit à les consulter sur GitHub Pages. Ne jamais y déposer de contenu confidentiel ou non autorisé.

## Dossier de préparation
Pour chaque sujet, constituer un dossier interne avec : question éditoriale et public ; inventaire des connaissances réutilisables ; sources primaires et secondaires ; registre des affirmations et preuves ; désaccords, incertitudes et limites ; droits et conditions de réutilisation ; plan pédagogique et proposition de médias.

Ne pas committer de matériau privé ou sensible dans le dépôt public. Les notes internes contenant des liens vers des dépôts privés restent hors de ce dépôt.

## Gates de revue

### Exactitude
- Les affirmations centrales sont-elles sourcées ?
- Les sources soutiennent-elles vraiment les formulations ?
- Les chiffres, calculs, unités et dates sont-ils corrects ?
- Les résultats sont-ils présentés dans leur périmètre ?

### Pédagogie
- La question et la promesse sont-elles claires ?
- Les prérequis sont-ils explicités ?
- Chaque section fait-elle progresser la compréhension ?
- Les exemples et visualisations aident-ils réellement ?

### Intégrité
- Faits, résultats, interprétations et hypothèses sont-ils distingués ?
- Les controverses et limites importantes sont-elles conservées ?
- Le texte évite-t-il les raccourcis trompeurs ?

### Publication
- L'article est-il autonome et publiable ?
- Les licences et droits sont-ils vérifiés ?
- Aucun contenu privé ou sensible n'est-il exposé ?
- Les liens, métadonnées, alternatives textuelles et affichages mobiles sont-ils contrôlés ?
- La validation humaine explicite est-elle enregistrée ?

## Après publication
Conserver date de publication et de révision. Réexaminer les articles lorsque les sources évoluent, lorsqu'une erreur est signalée ou lorsqu'un changement de contexte rend une formulation trompeuse. Documenter les corrections substantielles.
