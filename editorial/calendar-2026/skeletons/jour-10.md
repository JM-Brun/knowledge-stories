---
title: "Pourquoi le même pas est-il trop grand dans une direction et trop petit dans l’autre ?"
day: 10
calendar: "2026"
status: "skeleton"
readingTimeTarget: "10–16 min"
canonicalConcept: "Descente de gradient (`gradient-descent`) — concept canonique draft à relire"
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

# Jour 10 — Pourquoi le même pas est-il trop grand dans une direction et trop petit dans l’autre ?

## 1. Promesse et question

**Question directrice :** Pourquoi un taux d'apprentissage stable dans une direction peut-il être trop lent dans une autre, ou faire diverger l'algorithme ?

**Objectif observable :** Relier les facteurs de contraction aux valeurs propres de la courbure, calculer la borne de stabilité du pas et expliquer pourquoi un mauvais conditionnement ralentit la convergence.

**Durée cible :** 10–16 minutes.

À la fin, le lecteur doit être capable de reformuler le problème, d'effectuer le raisonnement annoncé, d'en reconnaître les hypothèses et d'identifier au moins une limite. La promesse ne sera considérée comme tenue que si l'activité finale vérifie effectivement cette capacité.

## 2. Situation d'entrée et fil narratif

**Scène d'ouverture :** Une vallée est très étroite dans une direction et très longue dans l'autre. Un pas assez grand pour avancer vite dans la direction plate peut faire osciller ou diverger dans la direction raide.

**Tension à maintenir :** faire évoluer une question concrète vers une explication conceptuelle. Ne pas commencer par une définition encyclopédique. Le récit doit apporter une situation, une décision ou une surprise ; il ne remplace pas l'explication.

**Déroulé narratif provisoire :** Comprendre le cas 1D ; passer à une vallée quadratique anisotrope ; relier le pas aux valeurs propres ; observer zigzag et lenteur ; introduire le conditionnement et les limites des garanties.

**Question de relance :** quelle observation ou quel calcul pourrait faire changer l'intuition initiale du lecteur ?

## 3. Carte de couverture conceptuelle

**Concept pivot :** Descente de gradient (`gradient-descent`) — concept canonique draft à relire.

**Notions à couvrir :** fonction objectif, dérivée/gradient, taux d'apprentissage, convexité locale, conditionnement, convergence.

À compléter lors de la revue canonique :
- **Prérequis à rappeler :** identifier ceux qui sont réellement indispensables et les expliquer brièvement dans l'article.
- **Distinctions à rendre explicites :** préciser les confusions voisines qui changeraient le raisonnement.
- **Approfondissements à signaler seulement :** éviter de transformer l'article en chapitre encyclopédique.
- **Statut de la connaissance :** vérifier le contenu et le statut du concept dans Wiki Knowledge ; un concept draft n'est pas une référence validée.

Le futur article devra définir chaque notion centrale, expliquer son mécanisme, préciser ses hypothèses et limites, puis la faire travailler dans un exemple. Il ne doit pas simplement énumérer les concepts.

## 4. Expérience, démonstration ou preuve

**Dispositif proposé :** Simuler les itérations sur f(x)=x² pour plusieurs valeurs de η, avec tableau des positions et visualisation de la trajectoire.

### Démonstration centrale — une vallée aux courbures très différentes

Conserver la parabole 1D comme amorce très courte, puis faire porter l'enquête sur une fonction quadratique en deux dimensions :

$$
f(x,y)=\frac12(x^2+100y^2).
$$

Le gradient et la Hessienne sont :

$$
\nabla f(x,y)=
\begin{pmatrix}x\\100y\end{pmatrix},
\qquad
H=
\begin{pmatrix}1&0\\0&100\end{pmatrix}.
$$

La vallée est plate selon $x$ (courbure 1) et raide selon $y$ (courbure 100). La descente de gradient à pas constant suit :

$$
x_{t+1}=(1-\eta)x_t,
\qquad
y_{t+1}=(1-100\eta)y_t.
$$

En partant de $(x_0,y_0)=(1,1)$, choisir $\eta=0{,}015$ :

| Itération | $x_t$ | $y_t$ | $f(x_t,y_t)$ |
|---:|---:|---:|---:|
| 0 | 1 | 1 | 50,5 |
| 1 | 0,985 | −0,5 | 12,985 |
| 2 | 0,970 | 0,25 | 3,596 |
| 3 | 0,956 | −0,125 | 1,238 |
| 4 | 0,941 | 0,0625 | 0,638 |

La coordonnée raide alterne de signe et est divisée par deux à chaque étape. La coordonnée plate ne diminue que de 1,5 % par étape. Le pas est donc assez petit pour rester stable dans la direction raide, mais le progrès est lent dans la direction plate.

Si l'on augmente à $\eta=0{,}025$, alors :

$$
1-\eta=0{,}975,
\qquad
1-100\eta=-1{,}5.
$$

La direction plate continue de se contracter très lentement, mais la direction raide diverge. Le premier pas fait passer l'objectif de 50,5 à environ 112,98.

**Découverte :** il n'existe pas ici de taux scalaire qui soit à la fois assez grand pour accélérer fortement la direction plate et assez petit pour stabiliser la direction raide. Le problème n'est pas seulement de choisir « un bon pas » ; il vient de la géométrie de la fonction.

### La borne de stabilité et le conditionnement

Pour une quadratique convexe $f(w)=\frac12 w^\top H w$, avec $H$ symétrique définie positive, la mise à jour s'écrit :

$$
w_{t+1}=(I-\eta H)w_t.
$$

Dans la base propre de $H$, chaque direction propre de valeur propre $\lambda_i$ est multipliée à chaque étape par $1-\eta\lambda_i$. La convergence de toutes les directions exige :

$$
|1-\eta\lambda_i|<1
\quad\text{pour toutes les valeurs propres,}
$$

soit :

$$
0<\eta<\frac{2}{\lambda_{\max}(H)}.
$$

Ici, $\lambda_{\min}=1$, $\lambda_{\max}=100$ et le nombre de conditionnement vaut :

$$
\kappa(H)=\frac{\lambda_{\max}}{\lambda_{\min}}=100.
$$

Un grand nombre de conditionnement signifie que les courbures sont très différentes. Le pas est contraint par la direction la plus raide, alors que la convergence est lente dans les directions plates.

Ne pas présenter cette borne comme une garantie générale pour toute fonction. Elle s'applique à la quadratique convexe considérée ; les garanties sur des fonctions non quadratiques exigent des hypothèses précises de convexité et de régularité du gradient.

**Matériel à préparer :**
- données ou paramètres explicitement documentés ;
- calculs reproductibles et vérifiés indépendamment ;
- représentation visuelle seulement si elle rend un mécanisme ou un contraste plus intelligible ;
- légende, unités, texte alternatif et équivalent textuel pour toute figure.

**Résultat attendu :** à préciser après exécution. Ne pas annoncer un résultat avant de l'avoir calculé ou observé.

## 5. Angle distinctif — contribution de cette journée

**Piège central à désamorcer :** Un gradient non nul n'assure pas la convergence ; un taux plus grand n'est pas toujours plus rapide ; le comportement dépend de la fonction et de son échelle.

**Question éditoriale à résoudre avant rédaction :**
1. Comment les ressources de référence expliquent-elles généralement le sujet ?
2. Quelle hypothèse implicite, confusion, limite ou conséquence reste peu visible ?
3. Qu'apporte précisément cette enquête au lecteur ?
4. Quel exemple ou dispositif lui permet de découvrir cet apport ?
5. Quelle question de transfert permet de vérifier qu'il l'a compris ?

L'apport peut être une reconstruction pédagogique, une démonstration, un contre-exemple ou une connexion rigoureuse. Ne pas fabriquer une originalité scientifique.

## 6. Transfert vers la pratique

Optimisation numérique, estimation de paramètres, ajustement statistique et recherche opérationnelle.

Le texte final devra expliciter une situation de travail, l'erreur plausible, la méthode ou le diagnostic pertinent, la conséquence sur l'analyse ou la décision, puis une limite de validité. Le transfert ne doit pas être une simple liste d'applications.

## 7. Vérification des acquis

**Activité proposée — prédire avant de calculer :**

1. Pour la vallée $f(x,y)=\frac12(x^2+100y^2)$ et $\eta=0{,}015$, expliquer pourquoi une coordonnée alterne alors que l'autre décroît lentement.
2. Calculer la borne de stabilité lorsque la plus grande valeur propre passe de 100 à 200.
3. Expliquer pourquoi réduire le pas global peut stabiliser l'algorithme tout en ralentissant les directions déjà plates.

La correction doit distinguer direction de descente locale, diminution effective de l'objectif et convergence asymptotique. Ne pas généraliser les seuils obtenus sur une quadratique à toute fonction.

Prévoir 2 à 4 questions graduées :
1. compréhension ou calcul direct ;
2. prédiction de l'effet d'une modification ;
3. transfert à un autre contexte ;
4. éventuellement, identification d'une hypothèse insuffisante.

La correction doit détailler le raisonnement, les conventions et les endroits où une hypothèse intervient.

## 8. Connexions

J07 (géométrie des prédicteurs et stabilité des paramètres), J09 (fonction objectif), J11 (régularisation).

Ces renvois servent à comparer ou prolonger des idées. Ils ne doivent pas devenir des prérequis cachés ; l'article reste compréhensible sans ouvrir les autres journées.

## 9. Sources à vérifier

Référence d'optimisation à sélectionner ; vérifier les conditions exactes de convergence de l'exemple.

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
