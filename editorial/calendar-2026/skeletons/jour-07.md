---
title: "Deux variables, une même information : que valent leurs coefficients ?"
day: 7
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Régression linéaire multiple et multicolinéarité — à vérifier dans Wiki Knowledge"
---

# Squelette éditorial — calendrier 2026

Ce document est un **dossier de conception**, pas un article destiné à être publié tel quel. Il sera converti en article autonome dans \`calendar/days/jour-07.qmd\` après vérification des concepts, des calculs et des sources.

## Contrat de rédaction

- Cible : 7 à 20 minutes de lecture réelle ; viser 12–18 minutes.
- Knowledge Stories reste généraliste : exemples principaux non-LLM. Les mécanismes propres aux Transformers et aux LLM restent dans LLM Lab.
- Le futur article doit être autonome : définir les notations, expliciter les hypothèses, unités, limites et implications.
- Les exercices détaillés restent dans l'atelier dédié ; l'article peut inclure une courte question de réflexion.
- Ne pas transformer cette journée en tutoriel de régression multiple ni en catalogue de diagnostics.
- Ne pas confondre instabilité des coefficients, qualité prédictive et identification causale.

## État

- [ ] Vérifier le concept canonique et son statut dans Wiki Knowledge.
- [ ] Vérifier les références et localisateurs.
- [ ] Reproduire indépendamment les calculs de l'exemple.
- [ ] Rédiger puis mesurer la durée réelle.
- [ ] Contrôler le build, le rendu responsive et l'accessibilité.

---

# Jour 07 — Deux variables, une même information : que valent leurs coefficients ?

## 1. Décision éditoriale

**Décision : transformer l'introduction générique à la régression en enquête sur la multicolinéarité et l'interprétation des coefficients.**

**Question directrice :** Comment un modèle peut-il produire des prédictions presque inchangées alors que les coefficients associés à ses variables deviennent très grands, opposés et instables ?

**Thèse à faire découvrir :** lorsque deux prédicteurs portent presque la même information, le modèle peut identifier assez bien leur contribution combinée aux prédictions, sans pouvoir attribuer de façon fiable une contribution individuelle à chacun. Un bon ajustement ne garantit donc pas que chaque coefficient raconte une histoire stable.

**Intérêt pour un data scientist :** les jeux de données réels contiennent souvent des variables redondantes : mesures proches, indicateurs dérivés, variables saisonnières, métriques de taille et de volume, caractéristiques fortement corrélées. Interpréter séparément leurs coefficients peut conduire à des conclusions fragiles alors que les prédictions semblent robustes.

**Objectif observable :** le lecteur doit pouvoir expliquer la non-identifiabilité en cas de colinéarité parfaite, reconnaître le problème de quasi-colinéarité, et distinguer stabilité prédictive et stabilité des paramètres.

**Durée cible :** 12–18 minutes.

## 2. Frontières avec les autres journées

- **J03** montre que des jeux de données différents peuvent partager les mêmes résumés et la même droite. J07 examine une autre perte d'information : plusieurs coefficients peuvent représenter presque la même direction dans l'espace des prédicteurs.
- **J06** traite de confusion, stratification et identification causale. J07 traite de l'identifiabilité numérique et de l'interprétation des paramètres d'un modèle ; il ne prétend pas identifier un effet causal.
- **J09** examinera la quantité statistique visée par une fonction de perte. J07 se concentre sur la redondance entre prédicteurs dans un modèle linéaire.
- **J11** traitera la régularisation et le compromis biais-variance. J07 peut signaler que la régularisation stabilise parfois les coefficients, mais ne doit pas développer L1/L2 ni leurs géométries.

## 3. Situation d'entrée

Une équipe construit un modèle de consommation à partir de deux variables : la surface d'un logement et une mesure de volume qui lui est presque proportionnelle. Le modèle prédit correctement la consommation. Pourtant, selon la version des données, le coefficient de la surface devient très positif et celui du volume très négatif, ou l'inverse.

**Tension narrative :** les prédictions n'ont presque pas changé, mais l'interprétation des variables s'est renversée. Le modèle n'est pas nécessairement mauvais pour prédire ; c'est l'attribution individuelle des coefficients qui est devenue fragile.

La question qui guide l'article : quelle information les données contiennent-elles réellement pour séparer les contributions de deux variables presque redondantes ?

## 4. Première expérience — colinéarité parfaite

Considérer le modèle :

$$
\widehat y_i = \beta_0+\beta_1x_{i1}+\beta_2x_{i2}.
$$

Si les deux prédicteurs sont exactement identiques, $x_{i2}=x_{i1}$, alors :

$$
\widehat y_i=\beta_0+(\beta_1+\beta_2)x_{i1}.
$$

Les données peuvent déterminer la somme $\beta_1+\beta_2$, mais pas les deux coefficients séparément. Les couples $(\beta_1,\beta_2)=(5,0)$, $(3,2)$ ou $(10,-5)$ donnent exactement les mêmes prédictions si leur somme vaut 5.

**Découverte :** le problème n'est pas que l'algorithme n'a pas trouvé la bonne solution. Il n'existe pas une unique attribution des coefficients compatible avec ces données. La matrice de conception n'a pas le rang nécessaire pour identifier séparément les paramètres.

Ne pas s'arrêter à « les variables sont corrélées » : la corrélation parfaite crée une dépendance linéaire exacte entre les colonnes du modèle ; la quasi-colinéarité rend l'identification numériquement fragile sans la rendre strictement impossible.

## 5. Deuxième expérience — presque la même information

Construire un exemple synthétique reproductible avec huit observations :

$$
x_1=(0,1,2,3,4,5,6,7)
$$

et une petite perturbation :

$$
z=(-0{,}3;0{,}2;0{,}1;-0{,}2;0{,}25;-0{,}15;0{,}3;-0{,}2).
$$

Définir un second prédicteur presque identique au premier :

$$
x_2=x_1+\delta z.
$$

La cible est :

$$
y=5x_1+\varepsilon,
$$

avec :

$$
\varepsilon=(0{,}1;-0{,}2;0{,}15;-0{,}1;0{,}05;0{,}2;-0{,}15;-0{,}05).
$$

Ajuster le même modèle linéaire avec constante pour deux valeurs de $\delta$ :

| Écart entre les prédicteurs | Corrélation entre $x_1$ et $x_2$ | Coefficient de $x_1$ | Coefficient de $x_2$ | RSS |
|---|---:|---:|---:|---:|
| $\delta=0{,}05$ | 0,9999884 | 9,344 | −4,348 | 0,1301 |
| $\delta=0{,}005$ | 0,9999999 | 48,475 | −43,478 | 0,1301 |

Les prédictions ajustées sont identiques à l'arrondi près dans les deux cas, de même que la somme des carrés des résidus. Pourtant, les coefficients individuels deviennent beaucoup plus grands et opposés lorsque les deux colonnes se rapprochent.

**À faire dans l'article :**
- fournir les données ou le code de génération de manière reproductible ;
- calculer les coefficients par moindres carrés et vérifier la corrélation ;
- afficher les prédictions et les coefficients sur deux panneaux distincts ;
- montrer que les deux variables sont presque interchangeables dans les données disponibles ;
- expliquer que la somme des coefficients reste proche de la contribution combinée attendue, tandis que leur attribution séparée est instable.

Le résultat ne doit pas être présenté comme une propriété universelle de tous les modèles corrélés. Il illustre une géométrie précise de la matrice de conception. Vérifier les arrondis et les chiffres sur l'implémentation retenue avant rédaction.

## 6. Le mécanisme géométrique

Présenter les colonnes de la matrice de conception comme des directions dans l'espace des observations. Si deux colonnes sont presque parallèles, de nombreuses combinaisons de coefficients produisent des vecteurs de prédiction très proches.

La régression ajuste la combinaison linéaire :

$$
\widehat y = X\widehat\beta,
$$

mais la stabilité de $\widehat\beta$ dépend de la géométrie de $X^\top X$. Lorsque cette matrice est mal conditionnée, de petites perturbations des données peuvent provoquer de grands changements des coefficients.

Expliquer visuellement :
- colinéarité parfaite : une direction est redondante, la solution n'est pas unique ;
- quasi-colinéarité : la solution numérique peut être unique, mais très sensible ;
- prédictions : la combinaison $X\widehat\beta$ peut rester stable alors que les coordonnées de $\widehat\beta$ varient fortement.

Éviter de faire de la norme matricielle ou du nombre de conditionnement un détour mathématique. Une visualisation de deux colonnes presque parallèles et une explication du système de coordonnées suffisent ; les indicateurs numériques peuvent être donnés en complément.

## 7. Que peut-on diagnostiquer et que peut-on faire ?

Structurer les diagnostics autour de trois questions :

1. **Les variables portent-elles une information redondante ?** Examiner les relations entre prédicteurs, les définitions métier et les transformations utilisées. Une matrice de corrélation est un indice, pas un diagnostic complet : une dépendance linéaire peut impliquer plusieurs variables et ne pas se réduire à une paire fortement corrélée.
2. **Quelle quantité est instable ?** Comparer coefficients, erreurs standards et prédictions sous de petites perturbations ou sur des rééchantillonnages. Une forte instabilité des coefficients ne signifie pas automatiquement une forte instabilité prédictive.
3. **Quelle interprétation cherche-t-on ?** Pour prédire, la redondance peut être tolérable si les performances hors échantillon sont stables. Pour attribuer une contribution à chaque variable, elle pose un problème substantiel.

Pistes à présenter brièvement, sans en faire une recette universelle :
- retirer ou regrouper des variables seulement si cela a un sens scientifique et métier ;
- choisir une représentation plus pertinente des variables redondantes ;
- collecter des observations où les prédicteurs varient indépendamment, si le protocole le permet ;
- utiliser une régularisation lorsque l'objectif et les hypothèses le justifient, en signalant que les coefficients obtenus dépendent alors de la pénalisation.

Ne pas recommander de supprimer automatiquement une variable parce que sa corrélation avec une autre est élevée. La décision dépend de l'objectif, de la connaissance du domaine et du protocole de collecte.

## 8. Ce que les coefficients ne disent pas

- Un coefficient de régression multiple décrit une variation conditionnelle au modèle et aux autres prédicteurs inclus ; son interprétation dépend de l'échelle et de la spécification.
- Des coefficients instables ne prouvent pas que les variables sont inutiles pour prédire.
- Des coefficients stables ne prouvent pas une interprétation causale.
- La régularisation peut stabiliser une solution, mais elle ne crée pas d'information absente des données ; elle introduit un choix supplémentaire.

Cette section doit rester courte. La causalité appartient à J06 ; la géométrie de la régularisation sera développée en J11.

## 9. Transfert vers la pratique Data Science

Prendre un cas de variables presque redondantes : surface et volume, chiffre d'affaires et nombre de transactions, mesures issues de deux capteurs voisins, ou variables agrégées et leurs composantes.

Montrer le raisonnement :
- établir pourquoi les variables sont proches (définition, processus de collecte, corrélation) ;
- comparer un modèle avec un seul prédicteur et un modèle avec les deux ;
- examiner la stabilité des coefficients sous perturbation ou rééchantillonnage ;
- examiner séparément la stabilité des prédictions sur la population cible ;
- décider si l'objectif est prédictif, descriptif ou explicatif avant d'interpréter les paramètres.

Le transfert doit aboutir à une décision : conserver les deux variables pour la prédiction, reformuler les caractéristiques, obtenir de nouvelles données, ou renoncer à attribuer une contribution individuelle.

## 10. Vérification des acquis

Les exercices complets sont réservés à l'atelier. L'article peut se terminer par deux questions :

1. Si $x_2=x_1$, quelle combinaison de $\beta_1$ et $\beta_2$ les données peuvent-elles identifier ?
2. Pourquoi une forte variation des coefficients peut-elle coexister avec des prédictions presque inchangées ?

Les réponses doivent distinguer rang, conditionnement, coefficients et valeurs prédites.

## 11. Sources à vérifier

- James, Witten, Hastie, Tibshirani et Taylor, *An Introduction to Statistical Learning*, édition disponible : sections sur régression multiple et colinéarité ; relever les localisateurs exacts.
- Weisberg, *Applied Linear Regression*, pour la géométrie de la régression et les diagnostics de colinéarité ; vérifier l'édition et les sections.
- Belsley, Kuh et Welsch, *Regression Diagnostics: Identifying Influential Data and Sources of Collinearity*, pour la colinéarité et le conditionnement ; vérifier les chapitres pertinents.

Associer chaque source à une affirmation précise. Ne pas citer un ouvrage simplement parce qu'il traite de régression.

## 12. Plan de l'article

1. Deux variables presque identiques, deux coefficients qui se contredisent.
2. Colinéarité parfaite : une infinité de coefficients, une même prédiction.
3. Quasi-colinéarité : expérience numérique et stabilité des prédictions.
4. La géométrie des colonnes explique l'instabilité.
5. Diagnostiquer selon l'objectif : prédire ou interpréter.
6. Limites, décisions pratiques et synthèse.

## 13. Critères de passage à l'article

- [ ] L'angle est distinct de J03 (résumés/Anscombe), J06 (causalité), J09 (fonction de perte) et J11 (régularisation).
- [ ] Les résultats numériques sont reproduits indépendamment et les données synthétiques sont fournies.
- [ ] La colinéarité parfaite et la quasi-colinéarité sont clairement distinguées.
- [ ] La stabilité des coefficients et celle des prédictions ne sont jamais confondues.
- [ ] Les diagnostics et remèdes sont présentés comme dépendants de l'objectif, pas comme recettes automatiques.
- [ ] Le transfert conduit à une décision concrète pour un data scientist.
- [ ] Les références sont vérifiées avec des localisateurs exacts.
- [ ] L'article est autonome, accessible et compris entre 7 et 20 minutes.
