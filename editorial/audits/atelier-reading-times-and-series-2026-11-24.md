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

## Recommandations priorisées

### P1 — À faire

1. Conserver les durées déclarées comme estimations éditoriales prioritaires ; ne pas les remplacer automatiquement par un ratio mots/minute.
2. Ajouter un contrôle de cohérence des séquences : ordre unique, continu, et série contenant au moins deux articles si elle est affichée comme parcours.
3. Vérifier les liens `relatedArticles` et les références de série contre les slugs réellement présents.
4. Distinguer visuellement la durée cumulée d'une série de la durée de chaque article, ce que l'atelier commence à faire.

### P2 — Amélioration éditoriale

1. Ajouter à chaque série une courte formulation « À la fin du parcours, vous saurez… ».
2. Identifier les prérequis facultatifs et les approfondissements qui ne sont pas comptés dans la durée du parcours.
3. Vérifier en lecture chronométrée les articles courts et denses signalés dans le tableau.
4. Afficher, si utile, une durée de parcours arrondie en heures/minutes lorsque le total dépasse 60 minutes (par exemple « environ 1 h »), tout en conservant le détail par article.

### P3 — Architecture

Les métadonnées existantes (titre, question directrice, domaine et accent visuel) sont désormais centralisées dans `src/data/series.ts`, partagé par l'index et les pages individuelles. Les objectifs, prérequis et compléments restent à ajouter à cette configuration lorsque leur rédaction éditoriale sera stabilisée.

## État des actions engagées

- [x] Temps de lecture visible sur les cartes et les pages d'article.
- [x] Durée cumulée visible sur les séries et formatée en heures/minutes au-delà de 60 minutes.
- [x] Métadonnées communes des séries centralisées dans `src/data/series.ts`.
- [ ] Contrôles automatiques d'unicité des ordres, de continuité et de validité des articles liés.
- [ ] Relecture chronométrée des articles courts et denses.

## Décision

Ne pas fusionner ni découper d'article sur la seule base du nombre de mots. La priorité est de vérifier les durées par une lecture chronométrée, puis d'améliorer les indications de prérequis et d'objectifs des deux séries. Le catalogue actuel est structurellement cohérent ; les améliorations les plus utiles concernent la transparence des parcours et la validation automatique des relations.
