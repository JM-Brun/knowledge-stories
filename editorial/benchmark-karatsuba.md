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

## Décision éditoriale actuelle

Le premier brouillon Karatsuba est une base de contenu, pas encore une réponse supérieure au billet de référence. Il lui manque notamment :
- une démonstration visuelle dynamique et manipulable ;
- une comparaison chiffrée qui distingue les modèles de coût ;
- une histoire des algorithmes jusqu'aux résultats récents, avec leur statut épistémique ;
- une vérification technique reproductible du site et de ses composants ;
- une comparaison directe, à refaire lorsque l'inspection complète de la page de référence sera possible.

Le succès ne sera déclaré que si les gains sont démontrés sur plusieurs dimensions, sans régression sur les qualités déjà présentes.


## État d'avancement — 20 novembre 2026

Une première tranche de l'expérience a été intégrée au brouillon :

- le composant `KaratsubaExplorer.astro` permet de modifier deux entiers naturels de 1 à 18 chiffres et recalcule le découpage, les trois produits, le terme croisé et la recomposition ;
- les calculs utilisent `BigInt`, et le module partagé `src/scripts/karatsuba.js` vérifie en interne que la reconstruction est identique au produit direct ;
- une alternative sans JavaScript est fournie dans l'article : l'exemple complet reste expliqué dans le texte ;
- des tests Node couvrent l'exemple publié, les longueurs inégales, zéro, les valeurs à 18 chiffres et les entrées invalides ;
- le workflow de qualité exécute désormais les tests, `astro check` et `astro build` sur chaque push.

**Validation technique observée :** sur le commit `15ec196e`, les tests unitaires, `astro check` et `astro build` ont tous réussi dans GitHub Actions. Le déploiement Pages a ensuite échoué avec une réponse 404 indiquant que GitHub Pages n'est pas encore activé pour le dépôt ; ce blocage de configuration ne remet pas en cause la réussite du build.

**Ce qui reste à faire avant de considérer l'expérience comme aboutie :**

- la comparaison récursive chiffrée est maintenant présente : profondeur, complétion à la puissance de deux et nombre de feuilles sont affichés ; le modèle est explicitement limité à des blocs d’un chiffre et ne prétend pas représenter les seuils d’une bibliothèque réelle ;
- le contrôle indépendant du produit est maintenant annoncé visiblement au lecteur ;
- auditer l'accessibilité réelle au clavier et avec lecteur d'écran, ainsi que le rendu mobile ;
- enrichir la comparaison des modèles de complexité et vérifier les transitions pédagogiques ;
- effectuer une inspection directe et côte à côte du billet de référence avant toute affirmation de supériorité ;
- obtenir une revue humaine des faits, des sources et des calculs.

Le statut éditorial de l'article reste **draft**. Aucune publication n'est autorisée par cette tranche.


## Mise à jour scientifique — 20 novembre 2026

Le récit historique du brouillon doit désormais intégrer un résultat postérieur au préprint OpenAI de septembre :

- Piaoyang Cui, Yiming Liu et David P. Woodruff ont publié le 13 novembre 2026 *A simpler algorithm for integer multiplication below n log n, with a formally verified proof*.
- Le papier annonce une borne O(n(log n)^(1−κ)) avec κ = 2^-46 pour le théorème formalisé ; le raisonnement écrit distingue une constante 2^-56 avec les constantes primitives initiales.
- Le dépôt [lockqueue/intmul](https://github.com/lockqueue/intmul) fournit les papiers, le développement Lean 4 et une implémentation de référence en arithmétique exacte. La formalisation revendique une preuve du résultat dans le modèle TM2 de Mathlib, sans utiliser les résultats OpenAI ou Harvey–van der Hoeven comme hypothèses/axiomes ; la base de confiance et les définitions de machine doivent être citées précisément.
- Le résultat doit être qualifié de **formellement vérifié en Lean 4**, et non simplement de « validé par la communauté » ou de « publié après revue par les pairs ». La vérification formelle contrôle le théorème encodé et ses hypothèses ; elle ne remplace pas l'examen du modèle, de l'énoncé ni la compréhension indépendante.
- La note de David Harvey du 20 octobre 2026 reste une source historique pertinente sur le préprint OpenAI de septembre. Elle est antérieure au papier Cui–Liu–Woodruff et ne doit pas être présentée comme une évaluation de ce travail ultérieur.
- Ne pas transformer la borne en promesse de performance pratique : la référence Python du dépôt est explicitement non optimisée et ne compte pas les mouvements de tête ; l'implémentation C/GMP compagnon porte sur le multiplicateur interne en O(n log n), pas sur l'algorithme principal sous-n log n.

**Conséquence éditoriale :** le passage sur les limites théoriques a été actualisé de manière additive. Il conserve la chronologie OpenAI → commentaire Harvey → formalisation Lean ultérieure, et distingue les modèles, les statuts de preuve et les implémentations.


## Lecture directe du billet et intégration dans l’atelier — 20 novembre 2026

Le billet de Djamchid Dalili a été ouvert et son volet de récursion examiné. Son parcours passe de la multiplication posée au découpage, puis au calcul interactif exact et à un arbre des appels à ouvrir à la demande. Un graphique présente le modèle de croissance et le texte explique séparément les seuils employés en pratique. Cette consultation a porté sur le contenu rendu et l’ouverture du volet.

| Observation dans le billet | Application dans Knowledge Stories |
| --- | --- |
| L’atelier permet d’ouvrir la récursion après avoir vu le calcul exact. | Un volet natif affiche les trois paires de blocs, leurs produits et la largeur de chaque sous-problème pour les opérandes saisis. L’exemple initial est rendu en HTML. |
| Le graphique et sa légende isolent les hypothèses du modèle de coût. | L’atelier rapproche l’appel des sommes, susceptible de gagner un chiffre, du décompte idéal des feuilles. |
| La récursion prolonge l’exemple de départ. | Un exercice de transfert demande de prévoir la taille du troisième appel pour 9 999 × 1 234 avant d’ouvrir la réponse et de vérifier dans l’atelier. |

L’exercice et la présentation sont des créations du projet. Le billet est crédité comme référence pédagogique. La revue humaine des faits et l’essai avec lecteur d’écran restent à faire.


## Du calcul à la stratégie algorithmique — 20 novembre 2026

Le billet de référence relie l’atelier à un modèle idéal de récursion, puis aux seuils pratiques. Le brouillon adopte cette transition avec un exemple de doublement (quatre à huit chiffres), une dérivation repliable du coût total et une lecture par polynômes qui explique le passage de Karatsuba à Toom–Cook. Il place les choix pratiques à la sortie de l’analyse de coût et garde les résultats de 2026 dans un approfondissement repliable.

| Affirmation | Vérification ou source |
| --- | --- |
| Le doublement multiplie le nombre idéal de feuilles par quatre ou trois. | Profondeurs 2 et 3, donc 16 → 64 et 9 → 27. Les tailles observées dans l’atelier peuvent différer à cause des retenues. |
| Le coût interne du niveau j est en O(n × (3/2)ʲ). | Trois fois plus d’appels, opérandes deux fois plus courts. La somme géométrique et les feuilles sont raccordées dans le texte, avec les [notes de l’Illinois](https://courses.grainger.illinois.edu/cs173/sp2026/AB/lecture-notes/karatsuba-recursion-tree.html) comme référence. |
| GNU MP utilise les différences signées dans Karatsuba et dispose de seuils par taille. | [Formule et gestion du signe](https://gmplib.org/manual/Karatsuba-Multiplication) et [chapitre des algorithmes de multiplication](https://gmplib.org/manual/Multiplication-Algorithms). Le texte ne donne aucune valeur de seuil universelle. |
| Cinq données d’évaluation suffisent pour trois blocs par opérande. | Le produit de deux polynômes de degré au plus 2 a un degré au plus 4. Le manuel GNU MP documente l’interpolation et ses coûts. |


## Comparaison du design éditorial — 20 novembre 2026

Le billet de référence rend l’idée visible dès l’ouverture, donne accès aux sections dans un sommaire et permet de charger des exemples dans l’atelier. Knowledge Stories reprend ces fonctions avec une mise en page propre au projet.

| Fonction | Choix dans Knowledge Stories |
| --- | --- |
| Donner à voir l’astuce | Une grille numérique à double entrée relie les quatre produits aux blocs de départ. Les deux termes croisés sont identifiés par un libellé et une couleur. La recomposition indique précisément d’où vient leur somme. |
| Orienter la lecture | Le sommaire suit les titres de niveau 2 compilés par Astro. Il reste visible sur le côté en lecture large et revient dans le flux sur écran étroit. Un lien d’ouverture mène directement à l’atelier. |
| Rendre les cas limites faciles à essayer | Trois boutons chargent le calcul de départ, l’exemple de retenue de l’exercice et deux opérandes de tailles inégales. Les volets repliables restent utilisables sans JavaScript et le calcul initial reste lisible. |
| Rendre le texte et les développements lisibles | La palette du projet structure le titre, les légendes et les volets. Les contrastes des légendes de l’atelier ont été renforcés après contrôle. |

L’aperçu local de l’article a été vérifié dans Chromium à 320, 390, 768 et 1 280 pixels, avec navigation au clavier, opérandes de 18 chiffres et volet de complexité ouvert. Les ancres et les trois boutons ont été exercés. La couverture, le sommaire et le résultat initial s’affichent sans JavaScript. Axe n’a détecté aucune violation dans le contenu de l’article aux largeurs de 320 et 1 280 pixels. Un essai avec lecteur d’écran et un test auprès de lecteurs restent à conduire pour évaluer la compréhension et comparer les deux articles.
