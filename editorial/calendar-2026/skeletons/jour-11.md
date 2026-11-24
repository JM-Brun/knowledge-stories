---
title: "Payer pour un modèle plus simple"
day: 11
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Régularisation et complexité du modèle (`regularization-and-model-complexity`) — concept général à créer"
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

# Jour 11 — Payer pour un modèle plus simple

## 1. Promesse et question

**Question directrice :** Pourquoi accepter une erreur d'entraînement supérieure peut-il améliorer les prédictions futures ?

**Objectif observable :** Interpréter un terme de pénalité et expliquer le compromis entre ajustement aux données et complexité.

**Durée cible :** 12–18 minutes.

À la fin, le lecteur doit être capable de reformuler le problème, d'effectuer le raisonnement annoncé, d'en reconnaître les hypothèses et d'identifier au moins une limite. La promesse ne sera considérée comme tenue que si l'activité finale vérifie effectivement cette capacité.

## 2. Situation d'entrée et fil narratif

**Scène d'ouverture :** Une courbe très flexible passe presque par tous les points, mais change fortement quand quelques observations bougent. Une courbe plus simple laisse davantage d'erreurs.

**Tension à maintenir :** faire évoluer une question concrète vers une explication conceptuelle. Ne pas commencer par une définition encyclopédique. Le récit doit apporter une situation, une décision ou une surprise ; il ne remplace pas l'explication.

**Déroulé narratif provisoire :** Comparer modèles flexibles et contraints ; ajouter une pénalité à l'objectif ; faire varier λ ; examiner coefficients et erreurs ; relier au protocole de validation.

**Question de relance :** quelle observation ou quel calcul pourrait faire changer l'intuition initiale du lecteur ?

## 3. Carte de couverture conceptuelle

**Concept pivot :** Régularisation et complexité du modèle (`regularization-and-model-complexity`) — concept général à créer.

**Notions à couvrir :** surapprentissage, pénalisation L1/L2, contrainte, complexité, sélection de modèle, généralisation, hyperparamètre λ.

À compléter lors de la revue canonique :
- **Prérequis à rappeler :** identifier ceux qui sont réellement indispensables et les expliquer brièvement dans l'article.
- **Distinctions à rendre explicites :** préciser les confusions voisines qui changeraient le raisonnement.
- **Approfondissements à signaler seulement :** éviter de transformer l'article en chapitre encyclopédique.
- **Statut de la connaissance :** vérifier le contenu et le statut du concept dans Wiki Knowledge ; un concept draft n'est pas une référence validée.

Le futur article devra définir chaque notion centrale, expliquer son mécanisme, préciser ses hypothèses et limites, puis la faire travailler dans un exemple. Il ne doit pas simplement énumérer les concepts.

## 4. Expérience, démonstration ou preuve

**Dispositif proposé :** Faire varier λ dans une régression jouet et comparer coefficients, erreur d'entraînement et validation, en gardant le même split.

**Matériel à préparer :**
- données ou paramètres explicitement documentés ;
- calculs reproductibles et vérifiés indépendamment ;
- représentation visuelle seulement si elle rend un mécanisme ou un contraste plus intelligible ;
- légende, unités, texte alternatif et équivalent textuel pour toute figure.

**Résultat attendu :** à préciser après exécution. Ne pas annoncer un résultat avant de l'avoir calculé ou observé.

## 5. Angle distinctif — contribution de cette journée

**Piège central à désamorcer :** Une pénalité ne rend pas automatiquement le modèle meilleur ; le choix de λ dépend de la validation et de l'échelle des variables.

**Question éditoriale à résoudre avant rédaction :**
1. Comment les ressources de référence expliquent-elles généralement le sujet ?
2. Quelle hypothèse implicite, confusion, limite ou conséquence reste peu visible ?
3. Qu'apporte précisément cette enquête au lecteur ?
4. Quel exemple ou dispositif lui permet de découvrir cet apport ?
5. Quelle question de transfert permet de vérifier qu'il l'a compris ?

L'apport peut être une reconstruction pédagogique, une démonstration, un contre-exemple ou une connexion rigoureuse. Ne pas fabriquer une originalité scientifique.

## 6. Transfert vers la pratique

Sélection de variables, modèles parcimonieux et contrôle de capacité dans des méthodes statistiques ou prédictives.

Le texte final devra expliciter une situation de travail, l'erreur plausible, la méthode ou le diagnostic pertinent, la conséquence sur l'analyse ou la décision, puis une limite de validité. Le transfert ne doit pas être une simple liste d'applications.

## 7. Vérification des acquis

**Activité proposée :** Prédire les effets d'une pénalité trop faible ou trop forte et expliquer pourquoi l'erreur d'entraînement seule ne suffit pas.

Prévoir 2 à 4 questions graduées :
1. compréhension ou calcul direct ;
2. prédiction de l'effet d'une modification ;
3. transfert à un autre contexte ;
4. éventuellement, identification d'une hypothèse insuffisante.

La correction doit détailler le raisonnement, les conventions et les endroits où une hypothèse intervient.

## 8. Connexions

J09 (risque), J10 (optimisation), J12 (biais-variance).

Ces renvois servent à comparer ou prolonger des idées. Ils ne doivent pas devenir des prérequis cachés ; l'article reste compréhensible sans ouvrir les autres journées.

## 9. Sources à vérifier

Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* ; vérifier sections et exemples.

Pour chaque référence retenue, relever l'édition/version, le chapitre ou passage utile, le type de source et les affirmations qu'elle soutient. Vérifier les sources primaires quand elles existent. Ne pas publier de lien vers un espace privé.

## 10. Plan d'article pressenti

1. Question concrète et enjeu.
2. Intuition construite à partir de la situation.
3. Définitions et distinctions nécessaires.
4. Mécanisme ou formalisation, avec notation explicitée.
5. Exemple calculé, expérience ou démonstration.
6. Limite ou contre-exemple.
7. Application à une situation de Data Science.
8. Questions et correction raisonnée.
9. Synthèse et références.

Les titres définitifs pourront varier pour servir la narration. Ne pas forcer du code si un calcul, un schéma ou un raisonnement est plus pertinent.

## 11. Critères de passage à l'article

- [ ] L'angle narratif est concret et ne masque pas la question scientifique.
- [ ] Le concept pivot est vérifié et les concepts centraux sont réellement expliqués.
- [ ] Les calculs, exemples et affirmations quantitatives sont vérifiés.
- [ ] Le piège conceptuel est désamorcé avec un contre-exemple ou une explication.
- [ ] Le transfert change effectivement une pratique ou une interprétation.
- [ ] La correction des exercices teste l'objectif annoncé.
- [ ] La durée est comprise entre 7 et 20 minutes sans remplissage.
- [ ] Le contenu est autonome, sourcé, accessible et sans dépendance à un dépôt privé.
