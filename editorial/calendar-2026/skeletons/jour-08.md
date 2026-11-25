---
title: "Retrouver le biais d'une pièce"
day: 8
calendar: "2026"
status: "skeleton"
readingTimeTarget: "10–15 min"
canonicalConcept: "Maximum de vraisemblance (`maximum-de-vraisemblance`, identifiant historique CONCEPT-001) — page canonique à harmoniser"
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

# Jour 08 — Retrouver le biais d'une pièce

## 1. Promesse et question

**Question directrice :** Quelle valeur de p rend une séquence de pile ou face la plus plausible ?

**Objectif observable :** Écrire la vraisemblance binomiale et retrouver l'estimateur du maximum de vraisemblance k/n.

**Durée cible :** 10–15 minutes.

À la fin, le lecteur doit être capable de reformuler le problème, d'effectuer le raisonnement annoncé, d'en reconnaître les hypothèses et d'identifier au moins une limite. La promesse ne sera considérée comme tenue que si l'activité finale vérifie effectivement cette capacité.

## 2. Situation d'entrée et fil narratif

**Scène d'ouverture :** Une pièce donne k piles en n lancers. Est-elle équilibrée, et quelle valeur de p décrit au mieux les observations ?

**Tension à maintenir :** faire évoluer une question concrète vers une explication conceptuelle. Ne pas commencer par une définition encyclopédique. Le récit doit apporter une situation, une décision ou une surprise ; il ne remplace pas l'explication.

**Déroulé narratif provisoire :** Définir le modèle ; écrire la probabilité de la séquence ; considérer cette expression comme fonction de p ; prendre le logarithme ; maximiser ; discuter l'incertitude.

**Question de relance :** quelle observation ou quel calcul pourrait faire changer l'intuition initiale du lecteur ?

## 3. Carte de couverture conceptuelle

**Concept pivot :** Maximum de vraisemblance (`maximum-de-vraisemblance`, identifiant historique CONCEPT-001) — page canonique à harmoniser.

**Notions à couvrir :** Bernoulli, loi binomiale, vraisemblance, log-vraisemblance, estimateur, indépendance, probabilité versus vraisemblance.

À compléter lors de la revue canonique :
- **Prérequis à rappeler :** identifier ceux qui sont réellement indispensables et les expliquer brièvement dans l'article.
- **Distinctions à rendre explicites :** préciser les confusions voisines qui changeraient le raisonnement.
- **Approfondissements à signaler seulement :** éviter de transformer l'article en chapitre encyclopédique.
- **Statut de la connaissance :** vérifier le contenu et le statut du concept dans Wiki Knowledge ; un concept draft n'est pas une référence validée.

Le futur article devra définir chaque notion centrale, expliquer son mécanisme, préciser ses hypothèses et limites, puis la faire travailler dans un exemple. Il ne doit pas simplement énumérer les concepts.

## 4. Expérience, démonstration ou preuve

**Dispositif proposé :** Tracer la log-vraisemblance pour plusieurs p et comparer le maximum à la fréquence observée. Ajouter un petit échantillon pour visualiser l'incertitude.

### Démonstration calculée à intégrer

Prendre une séquence de 10 lancers contenant 7 piles et 3 faces. Sous l'hypothèse de lancers indépendants et de probabilité constante p d'obtenir pile, la vraisemblance de cette séquence ordonnée est :

\[
L(p)=p^7(1-p)^3, \qquad 0\leq p\leq 1.
\]

Son logarithme est \(\ell(p)=7\log p+3\log(1-p)\). Pour \(0<p<1\),

\[
\ell'(p)=\frac{7}{p}-\frac{3}{1-p}=0
\quad\Longrightarrow\quad
\widehat p_{MV}=\frac{7}{10}=0{,}7.
\]

La dérivée seconde est strictement négative sur cet intervalle : le point critique est donc le maximum unique. Pour ce jeu de données, la vraisemblance en \(p=0{,}7\) est environ 2,28 fois celle en \(p=0{,}5\). Ce rapport compare deux valeurs de paramètre pour les données observées ; il ne signifie pas que « p = 0,7 a 2,28 fois plus de probabilité d'être vrai ».

Préciser que si l'on observe seulement le nombre de piles, la loi binomiale ajoute le facteur \(\binom{10}{7}\), indépendant de p : le maximum ne change pas. Traiter aussi les cas limites \(k=0\) et \(k=n\), où l'estimateur vaut respectivement 0 et 1.

### Ce que l'estimation ne dit pas

- \(\widehat p=0{,}7\) est une estimation ponctuelle, pas une preuve que la pièce est biaisée ni une mesure complète de l'incertitude.
- Avec seulement dix lancers, des valeurs assez éloignées de 0,7 restent compatibles avec les données ; toute conclusion sur un biais exige un protocole et une méthode d'incertitude (intervalle de confiance ou approche bayésienne, à distinguer).
- Le modèle suppose des lancers indépendants et une probabilité stable. Une pièce lancée avec une mécanique différente, ou une pièce qui change de comportement, ne respecte pas nécessairement ces hypothèses.
- Ne pas confondre maximiser la vraisemblance avec maximiser la probabilité du paramètre : cette dernière notion nécessite notamment un modèle bayésien et un a priori.

**Matériel à préparer :**
- données ou paramètres explicitement documentés ;
- calculs reproductibles et vérifiés indépendamment ;
- représentation visuelle seulement si elle rend un mécanisme ou un contraste plus intelligible ;
- légende, unités, texte alternatif et équivalent textuel pour toute figure.

**Résultat attendu :** à préciser après exécution. Ne pas annoncer un résultat avant de l'avoir calculé ou observé.

## 5. Angle distinctif — contribution de cette journée

**Piège central à désamorcer :** La vraisemblance n'est pas la probabilité du paramètre. L'estimation ponctuelle ne résume ni l'incertitude ni la qualité du modèle.

**Question éditoriale à résoudre avant rédaction :**
1. Comment les ressources de référence expliquent-elles généralement le sujet ?
2. Quelle hypothèse implicite, confusion, limite ou conséquence reste peu visible ?
3. Qu'apporte précisément cette enquête au lecteur ?
4. Quel exemple ou dispositif lui permet de découvrir cet apport ?
5. Quelle question de transfert permet de vérifier qu'il l'a compris ?

L'apport peut être une reconstruction pédagogique, une démonstration, un contre-exemple ou une connexion rigoureuse. Ne pas fabriquer une originalité scientifique.

## 6. Transfert vers la pratique

Estimation de paramètres, modèles probabilistes et apprentissage par minimisation d'une log-loss, sans basculer vers les architectures LLM.

Le texte final devra expliciter une situation de travail, l'erreur plausible, la méthode ou le diagnostic pertinent, la conséquence sur l'analyse ou la décision, puis une limite de validité. Le transfert ne doit pas être une simple liste d'applications.

## 7. Vérification des acquis

**Activité proposée — estimer sans surinterpréter :**

1. Une autre séquence de 8 lancers contient 6 piles. Écrire la vraisemblance et calculer l'estimateur du maximum de vraisemblance : \(\widehat p=6/8=0{,}75\).
2. Une séquence contient 8 piles sur 8. L'estimateur vaut 1. Est-ce une preuve que la pièce donne toujours pile ? Non : c'est le maximum dans le modèle sur cet échantillon ; l'incertitude reste importante.
3. Expliquer pourquoi le rapport de vraisemblance entre deux valeurs de p n'est pas une probabilité que l'une d'elles soit vraie. Pour parler de probabilité du paramètre, il faut spécifier un cadre bayésien et un a priori.

La correction doit distinguer calcul de l'estimateur, hypothèses du modèle et conclusion statistique. Ne pas demander un test de biais sans préciser le niveau, la règle de décision et le protocole.

Prévoir 2 à 4 questions graduées :
1. compréhension ou calcul direct ;
2. prédiction de l'effet d'une modification ;
3. transfert à un autre contexte ;
4. éventuellement, identification d'une hypothèse insuffisante.

La correction doit détailler le raisonnement, les conventions et les endroits où une hypothèse intervient.

## 8. Connexions

J05 (logarithmes et information), J07 (modèle paramétrique), J09 (objectif).

Ces renvois servent à comparer ou prolonger des idées. Ils ne doivent pas devenir des prérequis cachés ; l'article reste compréhensible sans ouvrir les autres journées.

## 9. Sources à vérifier

Références de probabilités/statistique mathématique à sélectionner ; vérifier la démonstration et les conventions.

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
