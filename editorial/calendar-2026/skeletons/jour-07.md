---
title: "Une droite peut-elle apprendre ?"
day: 7
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Régression linéaire — à vérifier dans Wiki Knowledge"
---

# Squelette éditorial — calendrier 2026

Ce document est un **dossier de conception**, pas un article destiné à être publié tel quel. Il sera converti en article autonome dans `calendar/days/jour-07.qmd` après vérification des concepts, des calculs et des sources.

## Contrat de rédaction

- Cible : 7 à 20 minutes de lecture réelle ; viser 12–18 minutes.
- Knowledge Stories reste généraliste : exemples principaux non-LLM. Les mécanismes propres aux Transformers et aux LLM restent dans LLM Lab.
- Le futur article doit être autonome : définir les notations, expliciter les hypothèses, unités, limites et implications.
- Les exercices détaillés restent dans l'atelier dédié ; l'article peut inclure une courte question de réflexion.
- Ne pas transformer cette journée en tutoriel de régression, ni en catalogue de diagnostics.
- Ne pas présenter une association statistique comme une explication causale.

## État

- [ ] Vérifier le concept canonique et son statut dans Wiki Knowledge.
- [ ] Vérifier les références et localisateurs.
- [ ] Reproduire indépendamment les calculs de l'exemple.
- [ ] Rédiger puis mesurer la durée réelle.
- [ ] Contrôler le build, le rendu responsive et l'accessibilité.

---

# Jour 07 — Une droite peut-elle apprendre ?

## 1. Décision éditoriale

**Décision : transformer la promesse générique sur l'apprentissage d'une droite en enquête sur la portée réelle d'un ajustement.**

**Question directrice :** Quand une droite est-elle une bonne approximation des données, et quand son ajustement nous donne-t-il une confiance que les données ne justifient pas ?

**Thèse à faire découvrir :** les moindres carrés trouvent la meilleure droite *selon un critère précis et dans l'échantillon observé*. Ils ne garantissent ni que la relation est linéaire, ni que les résidus sont sans structure, ni que la droite explique un mécanisme, ni que ses prédictions restent fiables hors de la zone observée.

**Intérêt pour un data scientist :** une régression peut être mathématiquement optimale et néanmoins être un mauvais modèle pour l'usage visé. Comprendre ce décalage évite d'interpréter un coefficient comme une vérité, d'extrapoler sans support ou de confondre ajustement et explication.

**Objectif observable :** le lecteur doit savoir expliquer ce que minimise une régression aux moindres carrés, interpréter un résidu, repérer le rôle d'un point à fort levier et formuler au moins une limite de l'ajustement.

**Durée cible :** 12–18 minutes.

## 2. Frontière avec les autres journées

- **J03** montre que plusieurs jeux de données peuvent partager des résumés statistiques et une droite tout en ayant des géométries différentes. J07 part de la droite ajustée et demande ce que signifie réellement « meilleur ajustement » et ce que ses diagnostics autorisent à conclure.
- **J06** traite de confusion, stratification et identification causale. J07 ne doit pas devenir un second article sur les DAG ou le paradoxe de Simpson. Il rappelle seulement qu'un coefficient de régression n'est pas, à lui seul, un effet causal.
- **J09** traitera de la quantité statistique ciblée par différentes fonctions de perte. J07 se limite aux moindres carrés et à la portée de leur ajustement.
- **J15** traitera de la population et du protocole d'évaluation. J07 peut signaler l'extrapolation, sans développer l'évaluation hors distribution.

## 3. Situation d'entrée

Une équipe dispose de cinq mesures et ajuste une droite pour prédire une grandeur continue. La pente semble raisonnable et la somme des carrés des résidus est faible. Une sixième mesure arrive, très éloignée des précédentes sur l'axe des entrées ; elle déplace fortement la pente.

**Tension narrative :** le calcul n'a pas échoué. Il a correctement optimisé son critère. C'est l'interprétation « la droite a appris la relation » qui devient trop forte.

La question qui guide l'article : qu'est-ce qui, dans le critère et dans la géométrie des données, rend ce déplacement possible ?

## 4. Expérience centrale — un point change-t-il la droite ?

Utiliser explicitement un jeu synthétique, conçu pour isoler l'effet d'un point à fort levier :

| Observation | x | y |
|---|---:|---:|
| 1 | 1 | 2 |
| 2 | 2 | 3 |
| 3 | 3 | 5 |
| 4 | 4 | 4 |
| 5 | 5 | 6 |

Pour ces cinq points, la droite des moindres carrés est :

$$
\widehat y = 1{,}3 + 0{,}9x
$$

Les résidus (observé moins prédit) sont :

$$
(-0{,}2; -0{,}1; 1; -0{,}9; 0{,}2)
$$

La somme des carrés des résidus vaut 1,9.

Ajouter le point synthétique $(x,y)=(12,5)$ conduit à :

$$
\widehat y \approx 3{,}209 + 0{,}213x
$$

La pente passe d'environ 0,9 à 0,213. Le point est éloigné dans la direction de $x$ et contribue fortement à la géométrie de l'ajustement.

**À démontrer dans l'article :**
- calculer la pente et l'intercept à partir de $S_{xx}$ et $S_{xy}$ ;
- distinguer résidu élevé et levier élevé : ce sont deux propriétés différentes ;
- expliquer pourquoi un point à fort levier n'est influent que s'il modifie effectivement l'ajustement ;
- visualiser les deux droites sur les mêmes axes et montrer les données avant/après ;
- rappeler que l'exemple est construit pour illustrer un mécanisme, pas pour représenter une fréquence empirique.

Ne pas affirmer qu'un point extrême doit être supprimé. Il peut être une erreur, une observation valide rare, un changement de régime ou le signal que le modèle est mal spécifié. La décision dépend du processus de données et de la question scientifique.

## 5. Le mécanisme mathématique

Introduire le modèle ajusté :

$$
\widehat y_i = \widehat\beta_0 + \widehat\beta_1x_i
$$

et le résidu :

$$
e_i=y_i-\widehat y_i.
$$

Les moindres carrés choisissent les paramètres qui minimisent :

$$
\operatorname{RSS}(\beta_0,\beta_1)
=\sum_i(y_i-\beta_0-\beta_1x_i)^2.
$$

Pour une régression simple avec intercept et variabilité non nulle de $x$ :

$$
\widehat\beta_1=
\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}
{\sum_i(x_i-\bar x)^2},
\qquad
\widehat\beta_0=\bar y-\widehat\beta_1\bar x.
$$

L'article doit expliquer le rôle de la distance à la moyenne de $x$ dans le numérateur et le dénominateur : les observations éloignées en $x$ peuvent peser fortement sur la pente. Éviter une dérivation longue des équations normales ; une dérivation courte ou une interprétation géométrique suffit.

Préciser que « meilleure droite » signifie minimisatrice de la somme des carrés sur les observations et dans la famille de fonctions considérée. Ce n'est pas une propriété absolue de la droite.

## 6. Diagnostiquer sans ritualiser

Organiser les diagnostics autour de trois questions, pas comme une checklist exhaustive :

1. **Les résidus gardent-ils une structure ?** Un motif courbe suggère que la relation moyenne n'est peut-être pas bien représentée par une droite ; une dispersion qui varie avec $x$ signale une hétéroscédasticité possible.
2. **Un point gouverne-t-il l'ajustement ?** Distinguer levier (position dans l'espace des prédicteurs), résidu (écart vertical) et influence (effet sur les paramètres ou prédictions lorsqu'on retire l'observation).
3. **Où la droite est-elle utilisée ?** Une prédiction dans la plage observée n'a pas le même statut qu'une extrapolation. Le modèle ne fournit pas, par son seul ajustement, de garantie sur un régime jamais observé.

Les résidus doivent être lus comme des diagnostics conditionnels au modèle ajusté, pas comme des observations directes des erreurs latentes. Les motifs peuvent aussi provenir de variables omises, de dépendances, d'une mesure imparfaite ou d'un changement de population.

## 7. Ce que la droite n'apprend pas

Faire apparaître quatre distinctions, sans ouvrir quatre nouveaux chapitres :

- **Ajustement vs mécanisme :** une pente décrit une relation dans les données et dépend du contexte ; elle n'identifie pas un effet causal sans hypothèses supplémentaires.
- **Résidus vs erreurs :** les résidus sont calculés après ajustement ; ils ne sont pas les erreurs aléatoires théoriques du modèle.
- **Interpolation vs extrapolation :** le fait qu'une droite résume la plage observée ne justifie pas son prolongement indéfini.
- **Prédiction moyenne vs prédiction individuelle :** une droite peut viser une moyenne conditionnelle ; elle ne prédit pas exactement chaque réalisation bruitée.

Pour les hypothèses, rester précis : la linéarité concerne la forme de la moyenne conditionnelle dans le modèle ; l'homoscédasticité et l'indépendance jouent notamment dans les propriétés d'inférence usuelles ; la normalité des erreurs n'est pas nécessaire pour calculer les coefficients OLS. Ne pas réciter « les quatre hypothèses de la régression » sans préciser l'usage concerné.

## 8. Transfert vers la pratique Data Science

Prendre un cas de prédiction d'une consommation, d'une latence ou d'un rendement en fonction d'une variable continue. Montrer le raisonnement :

- définir la grandeur cible et les unités ;
- ajuster la baseline linéaire ;
- examiner les résidus et les observations influentes ;
- vérifier la plage de support des prédicteurs ;
- décider si la droite est une baseline utile, si une transformation ou une autre famille est justifiée, ou si les données ne permettent pas de trancher.

Le transfert doit aboutir à une décision concrète : conserver la droite comme baseline interprétable, changer de forme fonctionnelle, collecter des observations dans une région mal couverte ou limiter explicitement le domaine d'utilisation.

## 9. Vérification des acquis

Les exercices complets sont réservés à l'atelier. La page peut se terminer par deux questions courtes :

1. Pourquoi un point très éloigné en $x$ peut-il modifier fortement la pente même si son résidu n'est pas le plus grand ?
2. Si les résidus dessinent une courbe, quelle affirmation devient douteuse : « les moindres carrés ont été calculés correctement » ou « une droite décrit suffisamment la relation moyenne » ?

Les corrections doivent distinguer le calcul de l'adéquation du modèle.

## 10. Sources à vérifier

- James, Witten, Hastie, Tibshirani et Taylor, *An Introduction to Statistical Learning*, édition disponible : sections sur régression linéaire, résidus et observations influentes ; relever les pages/sections exactes.
- Weisberg, *Applied Linear Regression*, pour levier, influence et diagnostic ; vérifier l'édition et les localisateurs.
- NIST/SEMATECH e-Handbook of Statistical Methods, sections sur les diagnostics de régression ; vérifier les pages exactes et leur adéquation.

Retenir les sources réellement mobilisées, et associer chaque source à une affirmation. Ajouter une source primaire seulement si elle soutient une affirmation historique ou théorique précise.

## 11. Plan de l'article

1. Une droite ajuste les cinq points — puis un point déplace la pente.
2. Ce que les moindres carrés minimisent exactement.
3. Pourquoi les points éloignés en $x$ peuvent peser sur la pente.
4. Résidus, levier et influence : trois notions à ne pas confondre.
5. Lire les motifs des résidus et reconnaître l'extrapolation.
6. Ce que l'ajustement autorise — et ce qu'il n'autorise pas — à conclure.
7. Transfert Data Science, synthèse et références.

## 12. Critères de passage à l'article

- [ ] L'angle est distinct de J03 (résumés/Anscombe) et J06 (causalité).
- [ ] Les coefficients, résidus et RSS sont reproduits indépendamment.
- [ ] Le point ajouté est correctement décrit comme point à fort levier et son influence est quantifiée.
- [ ] La figure utilise des axes cohérents et distingue données initiales / point ajouté.
- [ ] Les notions résidu, levier et influence ne sont pas confondues.
- [ ] Les hypothèses sont reliées à leurs conséquences précises ; pas de liste rituelle.
- [ ] Le transfert aboutit à une décision de modélisation défendable.
- [ ] Les références sont vérifiées avec des localisateurs exacts.
- [ ] L'article est autonome, accessible et compris entre 7 et 20 minutes.
