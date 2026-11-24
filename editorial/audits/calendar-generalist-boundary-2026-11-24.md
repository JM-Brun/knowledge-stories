# Audit de la frontière éditoriale — calendrier 2026

Date : 24 novembre 2026  
Périmètre : calendrier public de `knowledge-stories`, gabarit éditorial et squelettes canoniques préparés dans `wiki-knowledge`.

## Décision éditoriale

Knowledge Stories est un projet généraliste de statistiques, mathématiques appliquées, data science et machine learning transversal. Il ne doit pas être conçu comme un second parcours d'introduction aux LLM.

- **Knowledge Stories** : enquêtes narratives, expériences, explications et transferts autour de concepts utiles au-delà d'une architecture particulière.
- **Wiki Knowledge** : définitions canoniques, hypothèses, démonstrations, limites et relations entre concepts ; une page générale peut être référencée depuis plusieurs projets.
- **LLM Lab** : parcours spécialisé sur les modèles de langue, leurs représentations, architectures, entraînement et évaluation.

Un chevauchement est légitime lorsqu'il porte sur une fondation mathématique ou statistique générale (probabilités, entropie, optimisation, validation, incertitude). Dans Knowledge Stories, l'exemple central doit alors être non-LLM. Les mécanismes spécifiques aux modèles de langue restent dans LLM Lab.

## État du calendrier public

Le dépôt contient actuellement cinq pages quotidiennes rédigées (`jour-01.qmd` à `jour-05.qmd`). Les jours 6 à 24 sont représentés dans l'index et les squelettes de conception, mais ne sont pas encore des pages quotidiennes publiées dans ce dépôt. Il faut donc distinguer l'audit des articles existants de celui des futurs squelettes.

### Jours 1 à 5 — pages existantes

| Jour | Noyau | Verdict | Action |
|---|---|---|---|
| 1 | Mesure, métrologie, biais, incertitude | Généraliste | Conserver intégralement. Le texte lisible compte environ 3 744 mots, soit environ 19 min à 200 mots/min ; l'annonce d'environ 20 min est cohérente. Aucune coupe justifiée. |
| 2 | Population, échantillonnage, sélection, transportabilité | Généraliste | Conserver. Les liens vers l'évaluation ML sont transversaux et ne constituent pas un doublon LLM. |
| 3 | Distributions, moyenne, variance, quartette d'Anscombe | Généraliste | Conserver sans modification : la page distingue déjà explicitement série observée, distribution empirique et loi de probabilité (section dédiée). |
| 4 | Covariance, dépendance, variance d'une somme | Généraliste | Ajout effectué dans la PR #110 : formule développée pour les agrégats pondérés et distinction entre moments empiriques avec diviseur n et estimateurs corrigés avec n−1. |
| 5 | Entropie de Shannon, information mutuelle | Généraliste après correction | Transfert généraliste conservé ; PR #110 ajoute un exemple numérique d'information mutuelle (0,531 bit) et corrige la propriété de non-négativité. |

### Jours 6 à 20 — squelettes

La revue des squelettes ne révèle pas de journée qui doive enseigner une architecture ou un mécanisme spécifique aux LLM. Les usages du ML cités (données d'entraînement, diversité des erreurs d'ensembles, arbres, gradient boosting, validation, métriques, benchmarks, ablations) sont des exemples transversaux et restent dans le périmètre.

| Jours | Notions | Évaluation |
|---|---|---|
| 6 | Corrélation et causalité | Fondement général ; exemples de politiques publiques et expérimentation pertinents. |
| 7–10 | Régression, vraisemblance, risque empirique, optimisation | Socle mathématique et statistique général. |
| 11–14 | Régularisation, biais-variance, arbres, gradient boosting | ML classique ; aucun besoin de développer des réseaux neuronaux ou des LLM. |
| 15–19 | Validation, fuite, métriques, calibration, inférence | Compétences transversales d'évaluation et d'incertitude. |
| 20 | Baselines et ablations | À maintenir comme conception expérimentale générale ; ne pas utiliser la page spécialisée d'évaluation LLM comme référence canonique. |

### Jours 21 à 24 — nouvelle orientation

Les intitulés de l'index et les squelettes de la PR `wiki-knowledge#165` ont été recentrés sur :
- réduction de dimension et ACP ;
- apprentissage non supervisé et clustering ;
- séries temporelles et validation chronologique ;
- théorie de la décision et décision sous incertitude.

Ces thèmes sont suffisamment riches pour terminer le calendrier sans détour par les Transformers ou la génération de texte.

## Vérification de la durée — journée 1

Le comptage du texte lisible de `jour-01.qmd`, en excluant les SVG, balises et code technique, donne environ 3 744 mots. À 200 mots/minute, cela représente environ 19 minutes, auxquelles s'ajoutent les pauses de lecture des figures et des équations. L'annonce « environ 20 minutes » est donc cohérente. L'estimation antérieure de 20–25 minutes était trop pessimiste ; aucune coupe n'est justifiée. Les sections sur la référence, la traçabilité, le mesurande et la propagation des erreurs sont conservées.

## Durées et structure

La contrainte éditoriale est désormais **7 à 20 minutes par article** :
- moins de 7 minutes : fusionner avec un article proche ou apporter une expérience, une démonstration ou un transfert réellement utile ;
- 7 à 20 minutes : plage cible ;
- plus de 20 minutes : hiérarchiser, resserrer ou scinder sans perte d'information.

Le gabarit précédent indiquait 7–10 minutes, ce qui était trop restrictif et incohérent avec cette règle. Il a été corrigé et intégré à main par la PR #109. La durée de chaque article doit être estimée à partir du texte réellement lu, en tenant compte de la densité mathématique et des figures, et non du nombre brut de mots du fichier.

## État de réalisation et limites

- PR `knowledge-stories#109` : fusionnée dans `main` ; transfert LLM de J5 remplacé, intitulés J21–J24 recentrés et gabarit 7–20 min avec test anti-doublon intégrés.
- PR `knowledge-stories#110` : ouverte en brouillon ; ajouts J4/J5 et mise à jour du présent audit.
- Pages quotidiennes 6–24 : absentes du dépôt à la date de l'audit ; elles ne peuvent pas être considérées comme relues ou validées.
- Squelettes 1–24 : leur modélisation est dans `wiki-knowledge#165`, qui reste une PR distincte et non fusionnée.
- Les formules ajoutées en J4 et l'exemple d'information mutuelle de J5 ont été vérifiés analytiquement ; aucun script de calcul indépendant n'a été exécuté.
- Aucun rendu Quarto, test clavier/mobile ou contrôle visuel desktop/mobile n'est revendiqué. Les workflows GitHub de la PR #110 sont ignorés parce que la PR est en brouillon ; ils ne constituent pas une validation réussie.

## Prochaines actions

1. Produire les pages 6–24 à partir des squelettes validés, en conservant le périmètre généraliste et le test anti-doublon.
2. Vérifier les concepts canoniques dans Wiki Knowledge avant chaque création ou référence ; ne pas dupliquer les pages existantes du wiki ou les concepts spécialisés de LLM Lab.
3. Faire passer la PR #110 en revue non brouillon lorsque les changements seront prêts, afin de déclencher les workflows de validation et de rendu.
