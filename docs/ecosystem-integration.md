# Intégration avec les projets de connaissance

Knowledge Stories est la couche éditoriale de l'écosystème. Il ne devient ni une copie de ses autres dépôts, ni un nouveau référentiel canonique de recherche.

## Rôles et frontières

| Projet | Rôle dans l'écosystème | Réutilisation dans Knowledge Stories |
|---|---|---|
| Society Lab (public) | Recherche documentaire et analyse des sujets de société, des politiques publiques et de l'économie | Repartir des sources, données et méthodes accessibles publiquement ; préserver les désaccords, les limites et les périmètres |
| LLM Lab (public) | Compréhension technique, implémentations, expériences et parcours pédagogiques autour des modèles de langage | Réutiliser les explications et exemples après vérification ; tester le code ; citer les papiers et documentations d'origine |
| Wiki Knowledge (privé) | Mémoire structurée, concepts, sources, relations et synthèses transversales | Utiliser comme index de découverte et de rapprochement ; retrouver les sources originales ; ne jamais en faire une dépendance publique |
| Career Knowledge (privé) | Espace privé de préparation professionnelle, de compétences et de suivi de carrière | Exclure les profils, candidatures, opportunités, évaluations personnelles et correspondances ; ne considérer que des connaissances techniques génériques explicitement sélectionnées et autorisées |

## Principe de transfert

Le transfert n'est jamais une copie automatique. Il suit la chaîne :

1. **Découverte** : identifier un sujet déjà étudié et les documents canoniques pertinents.
2. **Remontée aux preuves** : retrouver les sources originales, jeux de données, textes officiels, papiers, documentation ou code.
3. **Qualification** : vérifier actualité, pertinence, méthode, droits et limites.
4. **Reconstruction** : bâtir une explication originale et autonome pour le lectorat du blog.
5. **Traçabilité publique** : référencer les sources publiables directement dans l'article.
6. **Revue** : contrôler exactitude, raisonnement, pédagogie, accessibilité et confidentialité.
7. **Autorisation** : obtenir une validation humaine explicite avant de passer le statut à `published`.

## Ce qui doit rester hors du dépôt public

- Notes personnelles et données de profil ou de carrière.
- Historique de candidatures, offres suivies, évaluations et échanges privés.
- Contenus, graphes, identifiants internes ou métadonnées issus des dépôts privés.
- Documents bruts, données sous licence restrictive ou contenus tiers sans autorisation.
- Secrets, tokens, informations personnelles et détails non nécessaires à la compréhension publique.

Ne pas ajouter de lien profond vers une ressource privée dans un article, une page publique ou un exemple. Une référence interne peut être conservée dans le contexte de travail de l'agent, hors du dépôt public.

## Contrat de preuve

Une affirmation importante dans un article doit pouvoir être vérifiée à partir d'une source accessible au lecteur. Une synthèse d'un projet source peut aider à retrouver cette source, mais ne remplace pas la preuve originale. Les affirmations qui ne peuvent pas être vérifiées publiquement doivent être supprimées, reformulées comme hypothèses clairement signalées, ou accompagnées d'une explication explicite de leur limite.

## Autonomie éditoriale

Les articles possèdent leurs propres textes, exemples, illustrations et références. Ils ne nécessitent ni compte, ni clone, ni accès à un dépôt privé pour être compris. Les évolutions d'un projet source ne modifient pas silencieusement un article publié : elles déclenchent une revue éditoriale.
