---
title: "Le modèle optimise ce qu'on lui demande"
day: 9
calendar: "2026"
status: "skeleton"
readingTimeTarget: "12–18 min"
canonicalConcept: "Risque empirique et fonctions de perte (`empirical-risk-and-loss-functions`) — concept général à créer"
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

# Jour 09 — Le modèle optimise ce qu'on lui demande

## 1. Promesse et question

**Question directrice :** Comment le choix de la fonction de perte détermine-t-il ce que le modèle apprend à privilégier ?

**Objectif observable :** Distinguer erreur par exemple, fonction de perte et objectif moyen ; anticiper l'effet d'un changement de perte.

**Durée cible :** 12–18 minutes.

À la fin, le lecteur doit être capable de reformuler le problème, d'effectuer le raisonnement annoncé, d'en reconnaître les hypothèses et d'identifier au moins une limite. La promesse ne sera considérée comme tenue que si l'activité finale vérifie effectivement cette capacité.

## 2. Situation d'entrée et fil narratif

**Scène d'ouverture :** Deux modèles sont évalués sur les mêmes erreurs, mais l'un est jugé avec l'erreur absolue et l'autre avec l'erreur quadratique. Lequel est « meilleur » ?

**Tension à maintenir :** faire évoluer une question concrète vers une explication conceptuelle. Ne pas commencer par une définition encyclopédique. Le récit doit apporter une situation, une décision ou une surprise ; il ne remplace pas l'explication.

**Déroulé narratif provisoire :** Prédictions et erreurs ; attribuer un coût à chaque erreur ; agréger les pertes ; comparer L1/L2 et coûts asymétriques ; distinguer échantillon et population.

**Question de relance :** quelle observation ou quel calcul pourrait faire changer l'intuition initiale du lecteur ?

## 3. Carte de couverture conceptuelle

**Concept pivot :** Risque empirique et fonctions de perte (`empirical-risk-and-loss-functions`) — concept général à créer.

**Notions à couvrir :** perte individuelle, risque empirique, risque populationnel, agrégation, pondération, coût métier, L1 et L2.

À compléter lors de la revue canonique :
- **Prérequis à rappeler :** identifier ceux qui sont réellement indispensables et les expliquer brièvement dans l'article.
- **Distinctions à rendre explicites :** préciser les confusions voisines qui changeraient le raisonnement.
- **Approfondissements à signaler seulement :** éviter de transformer l'article en chapitre encyclopédique.
- **Statut de la connaissance :** vérifier le contenu et le statut du concept dans Wiki Knowledge ; un concept draft n'est pas une référence validée.

Le futur article devra définir chaque notion centrale, expliquer son mécanisme, préciser ses hypothèses et limites, puis la faire travailler dans un exemple. Il ne doit pas simplement énumérer les concepts.

## 4. Expérience, démonstration ou preuve

**Dispositif proposé :** Sur un petit jeu contenant une valeur extrême, calculer les pertes absolues et quadratiques de deux prédicteurs constants et comparer leurs minimisateurs.

### Exemple numérique à intégrer

Considérer les cinq valeurs \(0,0,0,0,10\) et un prédicteur constant \(a\).

Pour la perte quadratique, le risque empirique est proportionnel à
\[
R_2(a)=\frac{1}{5}\sum_{i=1}^{5}(y_i-a)^2.
\]
Son minimiseur est la moyenne, soit \(a=2\). La somme des carrés vaut alors 80 (risque moyen 16). Pour la perte absolue,
\[
R_1(a)=\frac{1}{5}\sum_{i=1}^{5}|y_i-a|,
\]
un minimiseur est la médiane, soit \(a=0\), et la somme des erreurs absolues vaut 10 (risque moyen 2).

Ce contraste ne signifie pas qu'une perte est universellement meilleure : les deux objectifs répondent à des préférences différentes. La perte quadratique pénalise fortement les grands écarts ; la perte absolue est moins sensible à la valeur extrême. Il faut comparer les prédicteurs sous une même unité de coût avant de conclure.

### De l'objectif observé à la décision

Faire expliciter quatre niveaux qui sont souvent confondus :

1. **Résidu / erreur** : écart entre une observation et une prédiction.
2. **Perte** : transformation de cet écart en coût, selon une convention choisie.
3. **Risque empirique** : moyenne (éventuellement pondérée) des pertes sur l'échantillon d'entraînement.
4. **Risque populationnel** : espérance de la perte sur la population ou le processus futur visé.

Le minimum du risque empirique n'assure pas le minimum du risque futur. Le choix de la perte encode une préférence, mais la généralisation dépend aussi de l'échantillonnage, de la capacité du modèle, de la procédure d'entraînement et du décalage entre entraînement et déploiement.

Pour le transfert, prendre un exemple de coûts asymétriques (détection d'une panne, tri de défauts) et demander quelle erreur coûte le plus cher. Distinguer alors la perte d'entraînement, le seuil de décision et la métrique d'évaluation : modifier l'un ne revient pas automatiquement à modifier les deux autres.

**Matériel à préparer :**
- données ou paramètres explicitement documentés ;
- calculs reproductibles et vérifiés indépendamment ;
- représentation visuelle seulement si elle rend un mécanisme ou un contraste plus intelligible ;
- légende, unités, texte alternatif et équivalent textuel pour toute figure.

**Résultat attendu :** à préciser après exécution. Ne pas annoncer un résultat avant de l'avoir calculé ou observé.

## 5. Angle distinctif — contribution de cette journée

**Piège central à désamorcer :** Optimiser une métrique ne garantit pas d'optimiser la décision utile ; minimiser le risque empirique ne garantit pas le risque futur.

**Question éditoriale à résoudre avant rédaction :**
1. Comment les ressources de référence expliquent-elles généralement le sujet ?
2. Quelle hypothèse implicite, confusion, limite ou conséquence reste peu visible ?
3. Qu'apporte précisément cette enquête au lecteur ?
4. Quel exemple ou dispositif lui permet de découvrir cet apport ?
5. Quelle question de transfert permet de vérifier qu'il l'a compris ?

L'apport peut être une reconstruction pédagogique, une démonstration, un contre-exemple ou une connexion rigoureuse. Ne pas fabriquer une originalité scientifique.

## 6. Transfert vers la pratique

Classification déséquilibrée, coûts métier, choix d'un indicateur opérationnel et arbitrage entre faux positifs/faux négatifs.

Le texte final devra expliciter une situation de travail, l'erreur plausible, la méthode ou le diagnostic pertinent, la conséquence sur l'analyse ou la décision, puis une limite de validité. Le transfert ne doit pas être une simple liste d'applications.

## 7. Vérification des acquis

**Activité proposée — relier la perte à la décision :**

1. Reprendre \(0,0,0,0,10\) et vérifier que la moyenne minimise la somme des carrés tandis que la médiane minimise la somme des valeurs absolues.
2. Dans un système d'alerte de panne, expliquer pourquoi une perte qui traite de la même façon faux négatifs et faux positifs peut être inadéquate si leurs coûts diffèrent fortement.
3. Distinguer trois leviers : changer la perte d'entraînement, déplacer le seuil de décision, changer la métrique de compte rendu. Dans quel cas chacun modifie-t-il réellement le comportement ou seulement son évaluation ?

La correction doit éviter la réponse simpliste « prendre toujours la perte qui pénalise le plus l'erreur coûteuse » : préciser la cible, la distribution, la calibration éventuelle et la règle de décision.

Prévoir 2 à 4 questions graduées :
1. compréhension ou calcul direct ;
2. prédiction de l'effet d'une modification ;
3. transfert à un autre contexte ;
4. éventuellement, identification d'une hypothèse insuffisante.

La correction doit détailler le raisonnement, les conventions et les endroits où une hypothèse intervient.

## 8. Connexions

J07 (moindres carrés), J08 (log-vraisemblance), J10 (optimisation), J17 (métriques).

Ces renvois servent à comparer ou prolonger des idées. Ils ne doivent pas devenir des prérequis cachés ; l'article reste compréhensible sans ouvrir les autres journées.

## 9. Sources à vérifier

Shalev-Shwartz & Ben-David ; vérifier le passage exact sur risque empirique et distinguer les formulations.

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
