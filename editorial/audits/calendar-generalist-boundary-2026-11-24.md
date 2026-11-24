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
| 1 | Mesure, métrologie, biais, incertitude | Généraliste | Conserver. Réduire les ruptures de fil ; durée annoncée autour de 20 min, mais l'audit antérieur estime 20–25 min : resserrer pour respecter le plafond de 20 min sans supprimer les distinctions utiles. |
| 2 | Population, échantillonnage, sélection, transportabilité | Généraliste | Conserver. Les liens vers l'évaluation ML sont transversaux et ne constituent pas un doublon LLM. |
| 3 | Distributions, moyenne, variance, quartette d'Anscombe | Généraliste | Conserver. Rendre explicite la différence entre distribution empirique et loi. |
| 4 | Covariance, dépendance, variance d'une somme | Généraliste | Conserver. Harmoniser les conventions empiriques (n) et (n-1). |
| 5 | Entropie de Shannon, information mutuelle | Généraliste après correction | Le transfert vers les prochains tokens et la température de génération a été remplacé par des exemples de classification, contrôle qualité, sondage et apprentissage actif. |

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

## Durées et structure

La contrainte éditoriale est désormais **7 à 20 minutes par article** :
- moins de 7 minutes : fusionner avec un article proche ou apporter une expérience, une démonstration ou un transfert réellement utile ;
- 7 à 20 minutes : plage cible ;
- plus de 20 minutes : hiérarchiser, resserrer ou scinder sans perte d'information.

Le gabarit précédent indiquait 7–10 minutes, ce qui était trop restrictif et incohérent avec cette règle. Il a été corrigé dans cette branche. Le jour 1 est le premier candidat à une révision de longueur ; il ne faut pas réduire les autres journées par simple symétrie.

## État de réalisation et limites

- Correction du transfert LLM de J5 : effectuée dans la PR `knowledge-stories#109`.
- Titres des jours 21–24 dans l'index : corrigés dans la même PR.
- Gabarit éditorial : plage 7–20 min et test anti-doublon LLM ajoutés dans la même PR.
- Pages quotidiennes 6–24 : absentes du dépôt à la date de l'audit ; elles ne peuvent pas être considérées comme relues ou validées.
- Squelettes 1–24 : leur modélisation est dans `wiki-knowledge#165`, qui reste une PR distincte et non fusionnée.
- Aucun rendu navigateur, test clavier/mobile ou calcul indépendant n'est revendiqué par cet audit.

## Prochaines actions

1. Réviser J1 pour tenir dans 20 minutes au plus sans retirer de contenu conceptuel important.
2. Ajouter un mini-exemple numérique d'information mutuelle à J5 et vérifier le calcul.
3. Harmoniser les conventions (n) / (n-1) dans J4.
4. Créer les pages 6–24 à partir des squelettes, en appliquant le test anti-doublon dès la conception.
5. Vérifier les concepts canoniques dans Wiki Knowledge avant chaque création ou référence ; ne jamais créer un doublon de page pour un concept déjà traité dans LLM Lab ou dans le wiki général.
