---
title: "Audit des temps de lecture et des parcours de l’atelier"
date: 2026-11-24
status: editorial-audit
scope: "src/content/articles/*"
---

# Audit des temps de lecture et des parcours de l’atelier

## Périmètre et méthode

Audit des 15 articles présents dans `src/content/articles/` sur `main`, le 24 novembre 2026. Les durées sont celles déclarées dans le frontmatter `readingTime`. Le contrôle de volume est une approximation du nombre de mots du corps MDX, après retrait du frontmatter et des blocs de code clôturés ; il ne mesure ni le temps passé sur les figures, ni les interactions, ni la difficulté des démonstrations.

**Limite importante :** le nombre de mots ne suffit pas à calculer un temps de lecture fiable pour des articles scientifiques. Les formules, tableaux, schémas, exemples à suivre et exercices ralentissent la lecture. Les écarts ci-dessous sont donc des signaux de relecture, pas des erreurs à corriger automatiquement.

## Synthèse du catalogue

| Groupe | Articles | Durée cumulée déclarée |
|---|---:|---:|
| Multiplier plus vite : de Karatsuba aux algorithmes rapides | 5 | 61 min |
| Le paradoxe des jumeaux : comparer deux temps vécus | 7 | 58 min |
| Articles hors série | 3 | 33 min |
| **Total** | **15** | **152 min** |

Les durées cumulées décrivent la somme des articles du groupe, pas une durée de lecture continue garantie. Elles excluent les articles simplement reliés et les approfondissements externes.

## Contrôle indicatif des temps déclarés

Les volumes ci-dessous sont arrondis et servent uniquement à repérer les valeurs à vérifier en relecture.

| Article | Mots approx. | Durée déclarée | Signal |
|---|---:|---:|---|
| Karatsuba, trois produits au lieu de quatre | 1 659 | 14 min | Vérifier la prise en compte de l'exemple interactif et des exercices |
| Calculer la complexité de la multiplication de Karatsuba | 2 598 | 16 min | Cohérent pour un texte mathématique dense |
| Après Karatsuba : Toom–Cook et interpolation | 1 451 | 10 min | Cohérent |
| De Toom–Cook à la FFT : accélérer la multiplication par convolution | 1 996 | 12 min | Cohérent |
| La frontière théorique de la multiplication entière | 1 147 | 9 min | Vérifier le temps nécessaire pour comparer les preuves et modèles |
| Le paradoxe des jumeaux, chacun à sa montre | 905 | 7 min | Cohérent pour une introduction avec parcours |
| De l'addition classique des vitesses à la relativité | 665 | 7 min | Durée élevée au regard du volume ; probablement justifiée par les équations, à confirmer |
| La simultanéité en relativité restreinte | 636 | 9 min | À vérifier : formalisme et schémas peuvent expliquer l'écart |
| Le paradoxe des jumeaux : où se trouve l'asymétrie ? | 789 | 9 min | À vérifier en lecture réelle |
| Ce que les jumeaux voient : lumière et effet Doppler relativiste | 626 | 8 min | À vérifier en lecture réelle |
| Le temps propre : ce que mesure une montre | 683 | 9 min | À vérifier en lecture réelle |
| Trois voyageurs, deux planètes | 956 | 9 min | Cohérent |
| Arbres de récursion : compter le travail à chaque niveau | 2 402 | 11 min | À vérifier : durée plutôt courte pour le volume, même si le contenu peut être didactique |
| Auditer une variable mesurée avant de l'utiliser en machine learning | 1 728 | 10 min | Cohérent |
| L’inertie a-t-elle besoin des étoiles ? | 1 848 | 12 min | Cohérent |

Tous les articles disposent déjà d'une valeur `readingTime`. Le fallback automatique ajouté à l'atelier est donc une protection pour les futurs articles et les contenus sans métadonnée, pas un remplacement des estimations éditoriales existantes.

## Cohérence des séries

### Multiplication rapide

Ordre actuel :
1. Karatsuba : intuition, mécanisme et premier exemple.
2. Complexité de Karatsuba : récurrence et coût.
3. Toom–Cook : généralisation par évaluation et interpolation.
4. FFT : convolution et multiplication exacte.
5. Frontière théorique : résultats récents, modèles de calcul et niveaux de preuve.

**Évaluation :** progression cohérente, du mécanisme concret vers les familles d'algorithmes puis les résultats théoriques. Le saut de difficulté entre l'introduction et les articles avancés est réel mais logique si la série annonce explicitement une progression vers l'approfondissement.

**Point à clarifier :** « Arbres de récursion : compter le travail à chaque niveau » est un article autonome de 11 minutes, relié à l'analyse de complexité mais exclu des 61 minutes de la série. Le présenter comme prérequis facultatif ou complément méthodologique, sans l'intégrer artificiellement à la série, paraît préférable.

### Paradoxe des jumeaux

Ordre actuel :
1. Addition classique des vitesses.
2. Simultanéité et notion de « maintenant ».
3. Asymétrie des trajectoires et référentiels.
4. Signaux lumineux et effet Doppler.
5. Temps propre et comparaison des horloges.
6. Généralisation à plusieurs voyageurs.

**Évaluation :** le plan du dossier introductif reprend explicitement ces six étapes ; la correspondance entre introduction et articles est bonne. L'ordre distingue correctement la datation à distance, l'observation par signaux et la durée propre.

**Point de vigilance :** l'article sur l'inertie et le principe de Mach est un approfondissement distinct, non inclus dans les 58 minutes. Il doit rester présenté comme tel, afin de ne pas laisser penser qu'il est nécessaire pour résoudre le paradoxe élémentaire.

## Cohérence du modèle de contenu

Le schéma Astro impose déjà :
- un domaine et une discipline cohérents ;
- exactement deux labels par article ;
- une appartenance à une série et un ordre renseignés ensemble ;
- un domaine compatible avec la série.

Il ne contrôle toutefois pas encore :
- l'unicité de `seriesOrder` au sein d'une série ;
- l'absence de trous dans la séquence ;
- l'existence des identifiants de `relatedArticles` ;
- l'existence d'un article cible dans les liens de série ;
- la cohérence entre le titre et la question directrice de la série, actuellement définis dans les pages Astro.

## Travail restant — plan d'exécution

Les changements d'affichage et la centralisation des métadonnées sont intégrés dans `main` via la PR [#113](https://github.com/JM-Brun/knowledge-stories/pull/113). Le travail restant porte sur la fiabilité des relations, la qualité pédagogique des parcours et la validation des estimations.

### P1 — Fiabiliser les métadonnées et les liens

**P1.1 — Valider les séquences de série**
- Contrôler qu'un `seriesOrder` n'est jamais dupliqué dans une même série.
- Contrôler que les positions sont continues et commencent à la convention retenue (actuellement 0 pour l'introduction).
- Signaler les séries déclarées mais ne contenant qu'un seul article, sans imposer artificiellement une série aux articles autonomes.
- Produire des erreurs explicites indiquant la série et les articles concernés.

**Critère d'acceptation :** le build ou une commande de validation dédiée échoue sur une séquence invalide et passe sur le catalogue actuel.

**P1.2 — Vérifier les références entre articles**
- Vérifier chaque slug de `relatedArticles` contre les identifiants réellement présents.
- Vérifier les cibles des liens de navigation et les références de série.
- Éviter les faux positifs liés aux contenus volontairement externes ou aux liens absolus.

**Critère d'acceptation :** aucun lien interne cassé dans les relations déclarées ; les erreurs indiquent le fichier source et la cible absente.

### P2 — Renforcer la valeur pédagogique des séries

**P2.1 — Expliciter les acquis visés**
- Ajouter pour chaque série un résultat d'apprentissage formulé en termes observables (« À la fin du parcours, vous saurez… »).
- Vérifier que chaque étape contribue explicitement à cet objectif.
- Distinguer l'objectif global de la simple question directrice déjà présente.

**P2.2 — Rendre visibles les prérequis et les extensions**
- Présenter « Arbres de récursion » comme complément/prérequis facultatif à l'analyse de complexité de Karatsuba, sans l'inclure dans les 61 minutes.
- Présenter l'article sur l'inertie et le principe de Mach comme approfondissement facultatif, sans l'inclure dans les 58 minutes du paradoxe des jumeaux.
- Indiquer clairement si un complément est nécessaire, recommandé ou simplement connexe.

**Critère d'acceptation :** un lecteur peut déterminer avant de commencer ce qu'il apprendra, ce qu'il doit déjà connaître et ce qui est optionnel.

### P2 — Vérifier les temps de lecture

Effectuer une lecture chronométrée des articles signalés dans le tableau, en particulier les articles courts et mathématiquement denses du paradoxe des jumeaux ainsi que l'article sur les arbres de récursion.

Protocole :
1. Partir du rendu publié, pas uniquement du fichier MDX.
2. Lire à un rythme normal en suivant les équations, figures, exemples et interactions nécessaires à la compréhension.
3. Noter séparément le temps de lecture linéaire et, si pertinent, le temps nécessaire pour réaliser les exercices ou manipulations.
4. Comparer à `readingTime` et ajuster manuellement uniquement si l'écart est significatif et reproductible.

**Critère d'acceptation :** chaque durée révisée correspond à une observation documentée ; aucune valeur n'est modifiée sur la seule base d'un ratio mots/minute.

### P3 — Vérifier le rendu et maintenir le système

- Contrôler sur le site publié que les temps individuels et cumulés sont visibles, lisibles et non redondants sur mobile et desktop.
- Vérifier les cas limites : article sans `readingTime`, article autonome, série d'un seul article, durée exactement égale à 60 minutes et durée supérieure à une heure.
- Confirmer que les durées cumulées excluent explicitement les compléments facultatifs et les liens connexes.
- À chaque ajout ou déplacement d'article, contrôler l'ordre de série, les relations et les durées cumulées.

**Critère d'acceptation :** la navigation reste compréhensible sur mobile et desktop et les cas limites sont couverts par des tests ou une vérification reproductible.

## État des actions

- [x] Temps de lecture visible sur les cartes et les pages d'article.
- [x] Durée cumulée visible sur les séries, avec format heures/minutes au-delà de 60 minutes.
- [x] Durée par étape visible dans la navigation de série.
- [x] Métadonnées communes des séries centralisées dans `src/data/series.ts`.
- [ ] Validation automatique de l'unicité et de la continuité de `seriesOrder`.
- [ ] Validation des références `relatedArticles` et des cibles de navigation.
- [ ] Ajout d'objectifs d'apprentissage observables aux deux séries.
- [ ] Qualification explicite des prérequis et approfondissements facultatifs.
- [ ] Lecture chronométrée et éventuelle révision des estimations signalées.
- [ ] Vérification visuelle du site publié sur mobile et desktop, y compris les cas limites.

## Décision éditoriale

Ne pas fusionner ni découper d'article sur la seule base du nombre de mots. Les durées déclarées restent la source éditoriale prioritaire ; le calcul automatique est un filet de sécurité pour les contenus qui n'ont pas de durée explicite. La priorité est de fiabiliser les métadonnées, puis de rendre les objectifs et les extensions pédagogiques explicites, avant de modifier la structure des séries.
## Décision

Ne pas fusionner ni découper d'article sur la seule base du nombre de mots. La priorité est de vérifier les durées par une lecture chronométrée, puis d'améliorer les indications de prérequis et d'objectifs des deux séries. Le catalogue actuel est structurellement cohérent ; les améliorations les plus utiles concernent la transparence des parcours et la validation automatique des relations.
