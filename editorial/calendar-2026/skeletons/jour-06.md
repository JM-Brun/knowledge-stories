---
title: "Quand le résultat s'inverse en regardant les groupes"
day: 6
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Corrélation et causalité (`correlation-and-causation`) — concept canonique à relire"
---

# Squelette éditorial — calendrier 2026

Ce document est un **dossier de conception évolutif**, pas un article destiné à être publié tel quel. Il sera progressivement enrichi, puis converti en article autonome dans `calendar/days/jour-XX.qmd`. Le récit et les concepts doivent avancer ensemble : l'histoire ouvre une enquête, l'explication construit une connaissance réutilisable.

## Contrat de rédaction

- Cible : 7 à 20 minutes de lecture réelle ; enrichir par un raisonnement ou fusionner si le noyau reste inférieur à 7 minutes, hiérarchiser ou scinder au-delà de 20 minutes sans perte d'information.
- Le concept canonique est la source de vérité ; ne pas recopier sa page. Les liens internes ci-dessous sont des repères de travail, jamais une dépendance du futur article public.
- Knowledge Stories reste généraliste. Les exemples principaux sont non-LLM ; tokenisation, embeddings, attention/QKV, Transformers et génération autorégressive restent dans LLM Lab.
- Ne pas inventer de source, de chiffre, de statut de concept ou de résultat. Les références listées sont des pistes à vérifier avant rédaction.
- La progression du calendrier est éditoriale : les connexions ne sont pas automatiquement des prérequis.
- Chaque article doit rester autonome et expliquer les hypothèses, notations, unités, limites et implications pratiques.

## État

- [ ] Concept canonique et statut vérifiés dans Wiki Knowledge.
- [ ] Sources primaires et références vérifiées.
- [ ] Exemple, calcul ou expérience spécifiés et contrôlés.
- [ ] Angle distinctif et contribution pédagogique formulés.
- [ ] Article rédigé, durée mesurée, liens et accessibilité vérifiés.

---

# Jour 06 — Quand le résultat s'inverse en regardant les groupes

## 1. Promesse et question

**Question directrice :** Comment un traitement peut-il sembler moins efficace au total alors que son taux de réussite est supérieur dans chacun des groupes comparables ?

**Objectif observable :** Reconstituer une inversion de Simpson à partir d'un tableau de contingence, expliquer le rôle de la composition des groupes et distinguer association conditionnelle et effet causal.

**Durée cible :** 12–18 minutes.

L'article ne doit pas s'arrêter à la morale « corrélation n'est pas causalité ». Il doit montrer comment une agrégation change la comparaison, puis préciser quelles hypothèses seraient nécessaires pour interpréter les écarts comme des effets causaux.

## 2. Situation d'entrée et fil narratif

**Scène d'ouverture :** Deux traitements sont comparés dans une étude observationnelle. Le traitement A a un meilleur taux de réussite que B chez les patients à faible risque, et aussi chez les patients à haut risque. Pourtant, le taux global de réussite de B est nettement supérieur.

**Tension :** les trois résultats sont arithmétiquement compatibles. Le lecteur doit découvrir que les groupes n'ont pas la même composition : le traitement A a été administré beaucoup plus souvent aux patients à haut risque.

**Déroulé narratif :**
1. Présenter les taux globaux sans expliquer immédiatement l'inversion.
2. Décomposer les résultats par niveau de risque.
3. Reconstituer les dénominateurs et les poids qui produisent le taux agrégé.
4. Introduire un graphe causal minimal pour représenter l'indication du traitement et le pronostic.
5. Montrer pourquoi stratifier peut éclairer une comparaison, sans garantir à lui seul une conclusion causale.
6. Terminer par les hypothèses et les données nécessaires à une estimation défendable.

**Question de relance :** quel changement de composition suffirait à faire apparaître le traitement B meilleur au total, alors que A reste meilleur dans chaque strate ?

## 3. Carte de couverture conceptuelle

**Concept pivot :** paradoxe de Simpson, agrégation et stratification, reliés au concept canonique « Corrélation et causalité » (`correlation-and-causation`).

**Notions indispensables :**
- taux conditionnel et taux marginal ;
- composition d'un groupe et pondération par les effectifs ;
- variable de confusion et indication du traitement ;
- association observée $P(Y \mid X)$ et intervention $P(Y \mid do(X))$ ;
- échangeabilité conditionnelle, positivité et cohérence (consistency), uniquement dans la mesure nécessaire à l'exemple.

**Frontières à préserver :**
- J02 traite du mécanisme de sélection des unités et de la population représentée ; J06 traite de la composition des groupes comparés et de l'inversion sous agrégation.
- J17 traite du choix et de l'interprétation des métriques de classification ; J06 traite du raisonnement causal derrière une comparaison.
- Ne pas transformer J06 en catalogue de tous les biais causaux (collider, médiation, sélection, causalité inverse). Les signaler seulement si l'exemple l'exige.

## 4. Expérience centrale : reconstruire l'inversion

Utiliser un exemple numérique explicitement **construit pour l'article**, pas une étude empirique. Chaque ligne représente un groupe de patients ayant le même niveau de risque ; le résultat est une guérison.

| Niveau de risque | Traitement A | Traitement B |
|---|---:|---:|
| Faible risque | 9 guérisons / 10 (90 %) | 80 / 100 (80 %) |
| Haut risque | 1 guérison / 100 (1 %) | 0 / 10 (0 %) |
| **Ensemble** | **10 / 110 (9,1 %)** | **80 / 110 (72,7 %)** |

Dans chaque strate, A a un taux supérieur à B. Au total, B paraît très supérieur. L'inversion vient de la composition : A est administré surtout aux patients à haut risque, tandis que B l'est surtout aux patients à faible risque.

On peut neutraliser cette différence de composition en donnant le même poids aux deux strates. Avec une population de référence composée pour moitié de patients à faible risque et pour moitié de patients à haut risque, les taux standardisés sont :

$
A : \frac{90\%+1\%}{2}=45{,}5\%,\qquad
B : \frac{80\%+0\%}{2}=40\%.
$

La comparaison s'inverse à nouveau : A est meilleur sous cette composition commune. Ce calcul illustre la standardisation ; il n'identifie un effet causal que sous des hypothèses supplémentaires sur les variables d'ajustement et le mécanisme d'affectation du traitement.

**À faire démontrer dans le futur article :**
- calculer les taux à partir des numérateurs et dénominateurs, sans moyenner les pourcentages ;
- écrire le taux global comme une moyenne pondérée par les effectifs des strates ;
- identifier que les poids diffèrent entre A et B ;
- montrer qu'une comparaison à composition standardisée (mêmes poids de strates pour A et B) répond à une autre question que les taux bruts.

Ne pas présenter les taux construits comme des preuves de l'efficacité réelle d'un traitement. Leur rôle est de révéler le mécanisme arithmétique de l'inversion.

## 5. Graphe causal et interprétation

Construire un DAG minimal dans lequel le niveau de risque ($Z$ influence à la fois le choix du traitement $X$ et le résultat $Y$, tandis que le traitement peut lui aussi influencer $Y$ :

$
Z \rightarrow X,\qquad Z \rightarrow Y,\qquad X \rightarrow Y.
$

Expliquer que comparer les taux bruts mélange l'association entre traitement et résultat avec les différences de pronostic. Une comparaison conditionnelle sur (Z) peut réduire ce biais **si** (Z) suffit à rendre les groupes échangeables, si chaque traitement est possible dans chaque strate (positivité), et si le traitement et le résultat sont correctement définis et mesurés.

**Point critique :** le paradoxe de Simpson est une propriété de l'agrégation, pas une méthode permettant de découvrir automatiquement le bon effet causal. La stratification peut aussi être trompeuse si l'on ajuste sur un collider, un médiateur ou une variable mesurée après le traitement. Ne pas suggérer « contrôler toutes les variables » comme règle universelle.

## 6. Contribution pour un data scientist

Le lecteur doit repartir avec un diagnostic réutilisable pour les comparaisons de modèles, de traitements, de produits ou de populations :

- vérifier les dénominateurs et les unités d'analyse ;
- examiner les distributions des variables de risque dans chaque groupe ;
- distinguer taux conditionnels et taux agrégés ;
- choisir une population cible et des poids de standardisation explicites ;
- justifier le jeu de variables d'ajustement par un raisonnement causal, pas par une sélection automatique de colonnes.

Le transfert ne doit pas être une liste d'applications. Il faut montrer une comparaison réelle de groupes où le taux agrégé répond à une question différente de la comparaison à composition constante.

## 7. Limites et contre-exemples à expliciter

- Une inversion n'apparaît pas systématiquement : elle dépend des taux conditionnels et des poids.
- Le sens de l'association peut changer sans qu'un effet causal change de signe ; inversement, des associations conditionnelles ne suffisent pas à identifier un effet causal.
- Un facteur de stratification n'est pas nécessairement un confondeur ; son rôle dépend du mécanisme causal.
- Des groupes trop petits ou sans recouvrement rendent les comparaisons conditionnelles instables ou impossibles.
- La standardisation ne corrige que les différences prises en compte et repose sur les hypothèses du modèle causal.

## 8. Vérification des acquis

L'atelier séparé pourra demander au lecteur de :
1. recalculer les taux globaux à partir d'un tableau de numérateurs et dénominateurs ;
2. expliquer l'inversion par les poids des groupes ;
3. calculer une comparaison standardisée avec une population de référence donnée ;
4. identifier les hypothèses supplémentaires nécessaires pour parler d'effet causal.

La correction devra montrer les calculs et distinguer explicitement conclusion descriptive et conclusion causale.

## 9. Connexions

- J02 — sélection et population cible : qui entre dans les données ?
- J04 — covariance et dépendance : comment les variables varient-elles ensemble ?
- J17 — métriques de classification : que mesure un score agrégé ?

Ces renvois sont facultatifs. L'article doit définir lui-même les termes nécessaires.

## 10. Sources à vérifier

- Hernán & Robins, *Causal Inference: What If* : confounding, exchangeability, standardization et DAGs ; relever les chapitres et sections exacts.
- Simpson (1951), « The Interpretation of Interaction in Contingency Tables » : source historique du phénomène ; vérifier la référence bibliographique.
- Une référence pédagogique/statistique sur l'agrégation des taux et le paradoxe de Simpson, à sélectionner après comparaison avec les sources canoniques.

Pour chaque source retenue, noter l'édition/version, le localisateur exact et les affirmations soutenues. L'exemple numérique construit ne doit pas être attribué à une source externe.

## 11. Plan d'article pressenti

1. Deux traitements, deux groupes, une conclusion globale surprenante.
2. Calcul des taux par strate et au total.
3. Décomposition des taux globaux en moyennes pondérées.
4. Visualisation des compositions de groupes.
5. Graphe causal minimal et interprétation.
6. Standardisation et hypothèses d'identification.
7. Limites : variables non observées, positivité et mauvais ajustement.
8. Synthèse et renvois.

## 12. Critères de passage à l'article

- [ ] L'inversion est calculée à partir de données explicitement construites et vérifiables.
- [ ] Le rôle des dénominateurs et des poids est démontré, pas seulement affirmé.
- [ ] Le graphe causal distingue association et intervention.
- [ ] Les hypothèses d'identification sont énoncées et leurs limites discutées.
- [ ] Les frontières avec J02 et J17 sont respectées.
- [ ] L'intérêt professionnel est montré par une conséquence sur la comparaison ou la décision.
- [ ] Le futur article est autonome, sourcé, accessible et compris entre 7 et 20 minutes.
