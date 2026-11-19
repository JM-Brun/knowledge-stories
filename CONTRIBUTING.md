# Contribuer à Knowledge Stories

## Types de contributions
- Proposer un sujet précis et une question éditoriale.
- Constituer ou améliorer un dossier de sources.
- Rédiger ou relire un article.
- Concevoir une visualisation ou une démonstration.
- Améliorer l'accessibilité, les performances et l'expérience de lecture.
- Corriger une erreur factuelle ou un lien.

## Workflow
1. Ouvrir une issue décrivant le sujet, le public et la question à traiter.
2. Vérifier les travaux et sources disponibles ; établir un dossier documentaire autonome.
3. Définir le plan pédagogique et les prérequis.
4. Rédiger l'article dans `src/content/articles/` à partir de `editorial/article-template.md`.
5. Vérifier les affirmations, références, calculs, droits et limites.
6. Contrôler le rendu sur mobile et desktop, au clavier et avec un lecteur d'écran lorsque pertinent.
7. Exécuter `npm run check` et `npm run build`.
8. Soumettre une revue éditoriale humaine. La publication n'est jamais déclenchée par la seule génération d'un brouillon.

## Règles importantes
- Ne jamais inventer une source, une citation, un DOI, une mesure ou un résultat.
- Ne pas traiter un résumé secondaire comme substitut automatique à une source primaire.
- Distinguer les faits établis, résultats empiriques, interprétations, hypothèses et jugements de valeur.
- Indiquer les périodes, populations, unités, méthodes et limites qui conditionnent les résultats.
- Les visualisations de données doivent indiquer provenance, unités, transformations et éventuelles données manquantes.
- Les illustrations et extraits de code doivent avoir une provenance et une licence compatibles.
- Ne pas publier de contenu privé, de données personnelles, de secrets ou de fichiers bruts provenant d'un autre dépôt.
- Les liens vers des dépôts privés ne doivent pas apparaître dans les pages publiques.
- Préférer des identifiants lisibles et stables fondés sur le sujet ; éviter les identifiants séquentiels opaques.

## Qualité
Un article est prêt lorsque son angle est clair, son raisonnement est compréhensible, ses affirmations importantes sont sourcées, ses limites sont visibles, ses médias sont utiles et accessibles, et son build passe. Le passage des contrôles techniques ne constitue pas à lui seul une validation scientifique ou pédagogique.
