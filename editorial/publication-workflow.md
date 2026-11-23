# Workflow de publication

## États
- **Proposed** : sujet proposé, pas encore qualifié.
- **Researching** : dossier documentaire en constitution.
- **Draft** : rédaction en cours ; conservée dans Git mais non générée sur le site.
- **Review** : version de travail générée dans l'atelier discret pour relecture ciblée.
- **Approved** : validation humaine explicite enregistrée.
- **Published** : article publié dans les parcours publics.
- **Needs update** : une source, donnée ou explication doit être réexaminée.

Le frontmatter `status: draft` reste invisible sur le site. Passer à `status: review` autorise la génération d'une page sous `/atelier/{slug}/`, sans lien depuis les pages publiques. Passer à `status: published` génère la page canonique sous `/articles/{slug}/` et l'intègre aux parcours publics. Le passage à `published` intervient après la revue et la validation explicite, jamais automatiquement à la fin d'une génération.

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
