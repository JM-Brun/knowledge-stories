---
title: "Sept piles sur dix : est-ce assez pour conclure ?"
day: 8
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Maximum de vraisemblance (maximum-de-vraisemblance)"
---

# Squelette éditorial — calendrier 2026

Ce document est un **dossier de conception**, pas un article destiné à être publié tel quel. Il sera converti en article autonome dans \`calendar/days/jour-08.qmd\` après vérification des concepts, calculs et sources.

## Contrat de rédaction

- Cible : 7 à 20 minutes de lecture réelle ; viser 12–18 minutes.
- Knowledge Stories reste généraliste : exemples principaux non-LLM. Les mécanismes spécifiques aux LLM restent dans LLM Lab.
- Le futur article doit être autonome : définir les notations, expliciter les hypothèses, conventions, limites et implications.
- Les exercices détaillés restent dans l'atelier dédié ; l'article peut inclure une courte question de réflexion.
- Ne pas transformer cette journée en cours général sur tous les estimateurs ou tests.
- Distinguer estimation ponctuelle, vraisemblance, rapport de vraisemblance, p-value et probabilité bayésienne du paramètre.

## État

- [ ] Vérifier le concept canonique et son statut dans Wiki Knowledge.
- [ ] Vérifier les références et localisateurs.
- [ ] Reproduire indépendamment les calculs de vraisemblance et de test exact.
- [ ] Rédiger puis mesurer la durée réelle.
- [ ] Contrôler le build, le rendu responsive et l'accessibilité.

---

# Jour 08 — Sept piles sur dix : est-ce assez pour conclure ?

## 1. Décision éditoriale

**Décision : transformer l'exercice élémentaire « retrouver le biais d'une pièce » en enquête sur la différence entre estimer un paramètre et disposer de preuves contre une hypothèse.**

**Question directrice :** Si sept lancers sur dix donnent pile, que sait-on réellement du biais de la pièce ?

**Thèse à faire découvrir :** le maximum de vraisemblance donne ici une estimation ponctuelle de 0,7. Mais cette valeur ne suffit pas à conclure que la pièce est biaisée. Le même taux observé sur cent lancers fournit beaucoup plus d'information que sur dix lancers. L'estimation ponctuelle ne résume ni l'incertitude ni la force des éléments contre une hypothèse donnée.

**Intérêt pour un data scientist :** dans un modèle probabiliste, optimiser la vraisemblance fournit un estimateur, mais une décision exige de considérer la variabilité d'échantillonnage, le modèle supposé et la question posée. Cela évite de confondre « meilleur paramètre ajusté » et « hypothèse démontrée ».

**Objectif observable :** le lecteur doit savoir écrire et maximiser une vraisemblance binomiale, interpréter un rapport de vraisemblance simple, et expliquer pourquoi un même taux observé ne fournit pas le même niveau d'évidence selon la taille de l'échantillon.

**Durée cible :** 12–18 minutes.

## 2. Frontières avec les autres journées

- **J02** traite du mécanisme de sélection et de la population représentée. J08 suppose un modèle d'observation donné et examine l'incertitude due au nombre fini d'observations.
- **J05** traite de l'entropie et de l'information d'une distribution. J08 traite de la vraisemblance d'un modèle paramétrique pour des données observées ; les deux notions ne sont pas interchangeables.
- **J09** reliera les fonctions de perte à la quantité statistique estimée. J08 se limite à la vraisemblance et à l'inférence sur un paramètre.
- Ne pas développer la calibration (J18), les intervalles de performance (J19) ou la décision sous coûts (J24).

## 3. Situation d'entrée

Une pièce est lancée dix fois : sept piles, trois faces. Une équipe annonce : « La probabilité d'obtenir pile est 70 %, la pièce est donc biaisée. »

Le premier résultat est exact comme estimation du maximum de vraisemblance. La conclusion, elle, est trop rapide.

**Tension narrative :** comment la même estimation $\widehat p=0{,}7$ peut-elle être compatible avec une conclusion prudente sur dix lancers, mais constituer une preuve beaucoup plus forte sur cent lancers ?

## 4. Première étape — ce que maximise la vraisemblance

Poser le modèle : chaque lancer est une variable de Bernoulli indépendante, de probabilité constante $p$ d'obtenir pile. Pour $k$ piles sur $n$ lancers, la vraisemblance de la séquence observée (à l'ordre près) est :

$$
L(p)=p^k(1-p)^{n-k},\qquad 0\leq p\leq1.
$$

Pour $0<k<n$, la log-vraisemblance vaut :

$$
\ell(p)=k\log p+(n-k)\log(1-p).
$$

Sa dérivée est :

$$
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}.
$$

En annulant la dérivée :

$$
\widehat p_{\mathrm{MV}}=\frac{k}{n}.
$$

La dérivée seconde est négative sur l'intervalle intérieur, ce qui établit le maximum. Traiter séparément les cas limites $k=0$ et $k=n$, où le maximum se trouve respectivement en $p=0$ et $p=1$.

Préciser la distinction entre la vraisemblance d'une séquence ordonnée et la probabilité binomiale du nombre de piles : le facteur combinatoire $\binom nk$ ne dépend pas de $p$, donc il ne change pas l'estimateur.

## 5. Deux échantillons, même estimation, évidence différente

Comparer deux expériences :

| Expérience | Piles | Lancers | Fréquence observée | Estimation MV |
|---|---:|---:|---:|---:|
| A | 7 | 10 | 0,70 | 0,70 |
| B | 70 | 100 | 0,70 | 0,70 |

L'estimation ponctuelle est identique. Pourtant, l'incertitude d'échantillonnage est beaucoup plus faible dans la seconde expérience.

Pour rendre la différence tangible, comparer l'hypothèse nulle $H_0:p=0{,}5$ à la vraisemblance maximisée :

$$
\Lambda=\frac{L(\widehat p)}{L(0{,}5)}.
$$

Pour 7 piles sur 10 :

$$
\Lambda_{10}
=\frac{0{,}7^7\,0{,}3^3}{0{,}5^{10}}
\approx2{,}28.
$$

Pour 70 piles sur 100 :

$$
\Lambda_{100}
=\frac{0{,}7^{70}\,0{,}3^{30}}{0{,}5^{100}}
\approx3745.
$$

Le même taux observé favorise davantage la valeur ajustée par rapport à $p=0{,}5$ lorsque davantage de lancers ont été observés.

**Précaution d'interprétation :** ce rapport compare la vraisemblance maximisée à celle de l'hypothèse nulle. Il ne donne pas la probabilité que $p=0{,}7$ soit vrai, ni la probabilité que la pièce soit biaisée. La vraisemblance n'est pas une distribution de probabilité sur le paramètre.

## 6. Une vérification fréquentiste — le test binomial exact

Pour rendre la conclusion plus concrète, présenter un test bilatéral exact de :

$$
H_0:p=0{,}5
\qquad\text{contre}\qquad
H_1:p\neq0{,}5.
$$

Sous $H_0$, le nombre de piles suit une loi binomiale $\operatorname{Bin}(n,0{,}5)$. La p-value est la probabilité, sous l'hypothèse nulle, d'obtenir un résultat au moins aussi incompatible avec $H_0$ que celui observé, selon la définition bilatérale retenue.

Valeurs à vérifier avec une implémentation exacte et à documenter dans l'article :

| Données | p-value bilatérale exacte |
|---|---:|
| 7/10 | 0,34375 |
| 70/100 | environ $7{,}85\\times10^{-5}$ |

La conclusion change nettement : sept piles sur dix ne constituent pas une preuve forte contre l'équilibre dans un si petit échantillon ; soixante-dix sur cent constituent un résultat beaucoup plus difficile à expliquer sous $p=0{,}5$.

Ne jamais écrire que la p-value est la probabilité que $H_0$ soit vraie. Elle est calculée **en supposant** $H_0$ et dépend du test choisi. Ne pas confondre non-rejet de $H_0$ et preuve que la pièce est équilibrée.

## 7. Ce que l'exemple suppose — et ce qu'il ne démontre pas

Le modèle binomial repose sur trois hypothèses importantes :

- indépendance des lancers ;
- probabilité $p$ constante d'un lancer à l'autre ;
- protocole d'observation et définition de « pile » stables.

Si la pièce change de comportement, si les lancers sont dépendants ou si le dispositif de lancer introduit une structure, le modèle peut être inadéquat. Augmenter $n$ réduit l'incertitude sous le modèle ; cela ne répare pas un modèle faux.

La conclusion dépend aussi de la question : détecter un écart à 0,5, estimer précisément $p$, ou décider si un biais est suffisamment important pour avoir une conséquence pratique ne sont pas le même problème.

## 8. Transfert vers la pratique Data Science

Prendre une métrique de succès binaire : taux de clic, taux de conversion, taux de défaut ou proportion de prédictions correctes. Une proportion observée donne une estimation ponctuelle, mais la conclusion dépend aussi du nombre d'observations, du protocole et du modèle d'échantillonnage.

Le transfert doit montrer trois questions successives :
1. Quelle quantité cherche-t-on à estimer ?
2. Quelle vraisemblance et quelles hypothèses relient les données au paramètre ?
3. Quelle incertitude ou quel test faut-il pour répondre à la question de décision ?

Ne pas transformer le passage en cours général sur les tests A/B : l'exemple de la pièce reste le fil narratif, et l'application sert uniquement à transférer le raisonnement.

## 9. Vérification des acquis

Les exercices complets sont réservés à l'atelier. L'article peut se terminer par deux questions :

1. Pourquoi 7/10 et 70/100 donnent-ils la même estimation MV mais pas la même force d'évidence contre $p=0{,}5$ ?
2. Pourquoi un rapport de vraisemblance de 2,28 ne signifie-t-il pas qu'il y a 2,28 fois plus de chances que $p=0{,}7$ soit vrai ?

Les corrections doivent distinguer estimateur, vraisemblance, p-value et probabilité bayésienne.

## 10. Sources à vérifier

- Casella & Berger, *Statistical Inference* : vraisemblance, estimation du maximum de vraisemblance et tests du rapport de vraisemblance ; relever les chapitres et localisateurs exacts.
- Wasserman, *All of Statistics* : estimation, tests et modèle binomial ; vérifier les sections pertinentes.
- Une référence fiable sur le test binomial exact et la définition de la p-value ; relever la convention bilatérale utilisée.

Associer chaque source à une affirmation précise. Les chiffres de l'exemple doivent être reproduits par calcul, et non repris sans vérification.

## 11. Plan de l'article

1. Sept piles sur dix : l'estimation paraît simple, la conclusion ne l'est pas.
2. Écrire la vraisemblance et retrouver $k/n$.
3. Comparer 7/10 et 70/100 : même estimation, rapport de vraisemblance différent.
4. Interpréter un test binomial exact sans surinterpréter la p-value.
5. Examiner les hypothèses du modèle et transférer le raisonnement à un taux de succès.
6. Synthèse : estimer n'est pas conclure.

## 12. Critères de passage à l'article

- [ ] L'angle dépasse le calcul élémentaire de $k/n$ et la question d'inférence est clairement posée.
- [ ] Les vraisemblances, rapports et p-values sont reproduits indépendamment.
- [ ] La convention du test bilatéral exact est précisée.
- [ ] Vraisemblance, p-value et probabilité du paramètre ne sont jamais confondues.
- [ ] Les hypothèses binomiales et les limites de leur interprétation sont explicites.
- [ ] Le transfert DS est concret mais ne concurrence pas J02, J09, J18 ou J24.
- [ ] Les références sont vérifiées avec des localisateurs exacts.
- [ ] L'article est autonome, accessible et compris entre 7 et 20 minutes.
