# Modèle conceptuel — Knowledge Stories

## Positionnement dans l'écosystème

Knowledge Stories est une **couche de médiation éditoriale**. Wiki Knowledge reste le système de référence pour organiser les connaissances, concepts, sources, affirmations, preuves, synthèses et relations. Knowledge Stories transforme une sélection qualifiée de ces connaissances en récits autonomes destinés à un lectorat externe.

Il ne faut donc ni recopier le graphe de connaissances dans le site, ni faire dépendre le rendu public du dépôt Wiki Knowledge (privé).

## Projection de la taxonomie Wiki Knowledge

Le frontmatter Astro porte une projection éditoriale minimale de la taxonomie de `wiki/TAXONOMY.yml` :

| Champ Stories | Correspondance | Règle |
|---|---|---|
| `domain` | Identifiant d'un domaine : `mathematics`, `computing` ou `physics` | Obligatoire ; un domaine principal par article |
| `discipline` | Libellé lisible du domaine | Conservé pour l'affichage ; doit correspondre à `domain` |
| `themes[0]` | Thème principal, aligné sur le sous-domaine pertinent | Obligatoire ; détermine le groupe dans l'Atelier |
| `themes[1...]` | Thèmes secondaires | Contexte complémentaire ; ne duplique pas l'article dans l'index |
| `labels` | Deux notions saillantes choisies pour le lecteur | Exactement deux ; affichées sur les cartes et les pages |
| `tags` | Indexation transversale | Plus fine et plus libre que les labels |

Cette projection n'exporte aucun identifiant de concept, chemin privé, graphe ou contenu du wiki. Les labels sont des libellés éditoriaux, pas des identifiants canoniques. Un article n'apparaît qu'une fois dans l'Atelier : sous son domaine et son thème principal.

Les valeurs de domaine sont contrôlées par le schéma de contenu et doivent rester synchronisées avec la taxonomie du wiki. Les thèmes restent des intitulés lisibles ; ils ne prétendent pas reproduire toute la hiérarchie conceptuelle.

## Correspondance des objets

| Objet conceptuel | Rôle dans Wiki Knowledge | Projection éditoriale dans Knowledge Stories |
|---|---|---|
| Concept | Nœud stable du graphe, défini et relié à d'autres concepts | Sujet, catégorie et tags d'un article |
| Source | Ressource bibliographique ou documentaire qualifiée | Référence publique citée dans le frontmatter |
| Affirmation | Proposition explicite à vérifier | Énoncé formulé dans le récit |
| Preuve | Élément soutenant, limitant ou réfutant une affirmation | Citation, donnée, calcul, démonstration ou résultat présenté au lecteur |
| Synthèse | Mise en relation de plusieurs sources et affirmations | Dossier documentaire et plan de rédaction, conservés hors du site lorsqu'ils sont internes |
| Parcours / relation | Dépendances, prérequis et liens entre concepts | Progression narrative, liens vers d'autres articles publiés |
| Article | Pas nécessairement un objet canonique du graphe | Objet éditorial autonome, avec son propre cycle de vie |
| Revue | Évaluation de la qualité et des limites d'une connaissance | Retours factuels, scientifiques, pédagogiques, visuels et juridiques |
| Publication | Décision de diffusion d'un contenu validé | Passage explicite à `status: published` |

## Relations à préserver

- Un article **traite** un ou plusieurs concepts.
- Un article **s'appuie sur** des sources et des affirmations vérifiables.
- Une affirmation est **soutenue par**, **nuancée par** ou **contredite par** une preuve.
- Un article peut **prérequérir** ou **compléter** un autre article.
- Une version en revue **provient de** la rédaction ; une publication **succède à** une validation humaine.
- Une correction substantielle **met à jour** une publication sans effacer son historique éditorial.

Les identifiants et relations internes de Wiki Knowledge ne doivent pas être exposés automatiquement dans les métadonnées publiques. Conserver des identifiants stables côté wiki ; utiliser dans Knowledge Stories des slugs lisibles, des références publiques et une rédaction autonome.

## Cycle de vie éditorial

`Proposed → Researching → Draft → Review → Approved → Published → Needs update`

Ce cycle est un workflow éditorial, pas une ontologie concurrente du wiki. Les statuts Astro sont volontairement plus compacts :
- `draft` : non généré ;
- `review` : généré uniquement sous `/atelier/`, sans référencement ni navigation publique ;
- `published` : généré sous `/articles/` et intégré aux parcours lecteurs.

## Contrat de transfert depuis Wiki Knowledge

1. Utiliser Wiki Knowledge pour découvrir les concepts, relations, synthèses et sources candidates.
2. Remonter aux documents primaires et vérifier les affirmations dans leur contexte.
3. Sélectionner uniquement les connaissances génériques, publiables et pertinentes pour la question éditoriale.
4. Reconstruire le raisonnement pour le lecteur ; ne pas exporter le graphe ou ses métadonnées internes.
5. Citer les sources accessibles publiquement, vérifier droits et confidentialité.
6. Soumettre le texte à une revue explicite avant publication.

Le dépôt public ne doit contenir ni liens profonds vers Wiki Knowledge, ni données personnelles, ni identifiants internes permettant de reconstituer des espaces privés.
