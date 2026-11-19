# Benchmark éditorial — dépasser le billet de référence sur Karatsuba

## Objectif

Le billet de référence est :

https://djamchid.fr/blog/posts/2026-11-18-multiplication-karatsuba.html

Le but de Knowledge Stories n'est pas d'en reproduire l'apparence ni de produire une variante simplement plus longue. Il s'agit de concevoir une expérience d'apprentissage qui conserve ses qualités et apporte des gains observables en compréhension, en vérifiabilité, en accessibilité et en profondeur.

Ce document reprend les constats de l'analyse UX/pédagogique déjà menée dans le travail préparatoire. La page de référence n'ayant pas pu être relue directement par le navigateur de travail lors de cette itération, cette grille est un référentiel de travail à confronter à une nouvelle inspection visuelle complète avant toute conclusion définitive sur ses détails d'interface.

## Qualités à préserver

L'analyse préalable a identifié six principes forts :

1. **Une question initiale qui donne envie de comprendre.** Partir d'un problème précis, pas d'une définition encyclopédique.
2. **Une intuition concrète.** Faire manipuler mentalement un exemple avant de formaliser.
3. **Une démonstration progressive.** Rendre visibles les étapes et la raison de chaque transformation.
4. **Une manipulation interactive.** Permettre au lecteur d'essayer, de modifier et de vérifier, plutôt que d'être simple spectateur.
5. **Un recul sur le sujet.** Relier le mécanisme à la complexité, à ses applications et à son histoire.
6. **Une rigueur explicite.** Donner des sources, des limites, des hypothèses et les incertitudes du propos.

Les moyens visuels relevés comme pertinents sont les SVG, graphiques, simulateurs, code exécutable, comparaisons, frises chronologiques et encadrés dédiés aux idées reçues ou aux limites. Ils ne doivent être conservés ou ajoutés que s'ils rendent une relation ou un raisonnement plus intelligible.

## Conditions de non-régression

Les évolutions doivent préserver les acquis du projet et des analyses sources :

- aucune perte d'information, de source, de nuance, de controverse ou de limite ;
- chaque article reste autonome et sa provenance intellectuelle reste traçable en interne ;
- conserver un parcours pédagogique explicite en neuf étapes, sans imposer une structure artificielle si elle ne sert pas le sujet ;
- conserver navigation, fil d'Ariane, navigation clavier et responsive ;
- prévoir le bilinguisme sans mélanger les langues dans une même version ;
- les démonstrations et composants doivent réellement fonctionner, pas être de simples illustrations ;
- les informations essentielles restent compréhensibles sans interaction, sans couleur seule et sans animation ;
- toute modification de composants communs fait l'objet de tests de non-régression ;
- un agent ne peut ni valider seul les faits, ni publier seul un article.

## Axes d'amélioration proposés

### 1. Une compréhension mesurable, pas seulement une lecture agréable

- Donner au lecteur un objectif d'apprentissage explicite.
- Proposer des prédictions avant de révéler les étapes : « combien de multiplications ? », « quel terme manque ? ».
- Afficher les étapes avec un état courant et une explication de la justification.
- Proposer une vérification indépendante du résultat.
- Terminer par une question de transfert : le lecteur sait-il appliquer l'idée à d'autres nombres ou expliquer pourquoi elle fonctionne ?

### 2. Une visualisation calculée à partir des données

Créer une expérience Karatsuba qui calcule réellement ses valeurs à partir des opérandes choisis :
- découpage des deux nombres en blocs ;
- trois produits nécessaires ;
- reconstruction du terme croisé ;
- recomposition du résultat ;
- contrôle par multiplication de référence ;
- comparaison du nombre d'appels récursifs avec la méthode scolaire.

Le schéma SVG doit être produit à partir de l'état du calcul, pas dessiné pour un seul exemple. Le calcul et ses explications doivent rester disponibles sous forme textuelle.

### 3. Une meilleure distinction entre les niveaux de complexité

Ne pas confondre :
- nombre de multiplications de blocs dans le modèle récursif ;
- complexité arithmétique en fonction du nombre de chiffres ou de limbs ;
- complexité en bits dans un modèle de machine donné ;
- coût réel, seuils et performances sur matériel.

Une visualisation comparative doit nommer le modèle et ses hypothèses. Elle ne doit pas convertir une borne asymptotique en promesse de vitesse pratique.

### 4. Un récit historique et scientifique plus utile

Présenter Karatsuba comme une étape d'une histoire, et non comme l'algorithme final :
- multiplication scolaire ;
- Karatsuba–Ofman (1962) ;
- Toom–Cook ;
- Schönhage–Strassen ;
- Harvey–van der Hoeven (2021), borne O(n log n) dans le modèle multitape ;
- prépublication OpenAI de septembre 2026 revendiquant O(n(log n)^(1−κ)), avec κ = 2^−182, dans un modèle multitape à nombre fixe de rubans.

Pour le résultat 2026, conserver impérativement le statut de revendication d'une prépublication : la page de l'article OpenAI précise que les constantes et seuils sont extrêmement grands et que le résultat vise une borne de complexité en bits. L'avis de David Harvey du 20 octobre 2026 juge la revendication plausible mais précise qu'il n'a pas vérifié la plupart des détails. Ne pas présenter cette annonce comme un algorithme pratique, une preuve indépendante achevée ou une validation par revue scientifique. Ne pas confondre modèle multitape, circuits, RAM et matériel réel.

### 5. Une expérience éditoriale plus robuste

- Table des matières et fil d'Ariane qui situent le lecteur.
- Repères de progression discrets, non intrusifs.
- Glossaire contextuel pour les notions qui bloquent la lecture.
- Sources liées aux affirmations pertinentes, avec dates et nature des preuves.
- Version française et anglaise distinctes, avec contrôle de parité de contenu.
- Impression et lecture mobile sans perte d'information.
- Tests automatiques des exemples numériques, des liens, des composants et de l'accessibilité.

## Grille comparative de validation

Un futur audit côte à côte doit évaluer le billet de référence et Knowledge Stories sur une échelle documentée, sans attribuer de note subjective non justifiée.

| Dimension | Question de validation | Preuve attendue |
|---|---|---|
| Angle | La question donne-t-elle une raison de lire ? | Promesse et objectif identifiables |
| Progression | Chaque étape prépare-t-elle la suivante ? | Parcours explicite et transitions |
| Intuition | Le mécanisme devient-il concret avant l'abstraction ? | Exemple manipulable et expliqué |
| Démonstration | Peut-on vérifier chaque étape ? | Calculs testés et invariants visibles |
| Interactivité | Le lecteur agit-il sur le raisonnement ? | Composant fonctionnel, clavier compris |
| Complexité | Les modèles sont-ils distingués ? | Hypothèses, unités et bornes explicites |
| Contexte | Le résultat est-il replacé dans son histoire ? | Chronologie sourcée et statut des travaux |
| Rigueur | Les limites et incertitudes sont-elles visibles ? | Registre des affirmations et sources |
| Design | La mise en page sert-elle la compréhension ? | Hiérarchie, lisibilité, responsive |
| Accessibilité | Le contenu reste-t-il accessible à tous ? | Clavier, lecteurs d'écran, mouvement réduit |
| Autonomie | L'article se comprend-il sans ses projets sources ? | Références publiques et explications complètes |
| Fiabilité | Les exemples et composants résistent-ils aux cas limites ? | Tests automatisés et revue humaine |

## Avancement technique — 20 novembre 2026

Une première tranche d'interactivité a été implémentée sur la branche `feat/karatsuba-interactive-explorer` :

- composant Astro autonome avec saisie de deux entiers (jusqu'à 40 chiffres), découpage dynamique, calcul de (p), (q), (r), reconstruction du terme croisé et recomposition ;
- calcul exact fondé sur `BigInt`, extrait dans un module testable ;
- vérification indépendante du produit final ;
- tableau illustrant (4^d) contre (3^d), explicitement présenté comme un modèle de comptage et non comme une mesure de performance ;
- tests Node.js couvrant l'exemple de l'article, des longueurs différentes, zéro, les grands entiers et les entrées négatives ;
- exécution des tests ajoutée à la CI avant les contrôles Astro et le build.

Cette tranche ne constitue pas encore une multiplication Karatsuba récursive complète : elle expose et vérifie une étape de découpage. Le composant est conditionné à l'article Karatsuba ; l'article reste en brouillon et n'est donc pas publié. Les résultats de CI et le rendu navigateur restent à examiner avant toute fusion.

## Décision éditoriale actuelle

Le premier brouillon Karatsuba est une base de contenu, pas encore une réponse supérieure au billet de référence. Il lui manque notamment :
- une démonstration visuelle dynamique et manipulable ;
- une comparaison chiffrée qui distingue les modèles de coût ;
- une histoire des algorithmes jusqu'aux résultats récents, avec leur statut épistémique ;
- une vérification technique reproductible du site et de ses composants ;
- une comparaison directe, à refaire lorsque l'inspection complète de la page de référence sera possible.

Le succès ne sera déclaré que si les gains sont démontrés sur plusieurs dimensions, sans régression sur les qualités déjà présentes.
