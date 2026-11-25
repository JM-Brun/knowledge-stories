---
title: "Feuille de route éditoriale — séries, calendrier et géométrie complexe de Minkowski"
date: 2026-11-25
status: "working-roadmap"
scope: "Séries Karatsuba et paradoxe des jumeaux, calendrier 2026, articles hors série"
---

# Feuille de route éditoriale — séries, calendrier et géométrie complexe de Minkowski

## 1. Objet et périmètre

Cette feuille de route rassemble le travail restant à partir de la lecture des articles et dossiers présents dans le dépôt au 25 novembre 2026. Elle complète les audits détaillés et transforme leurs constats en plan de travail.

Périmètre :
- les cinq articles de la série **Multiplier plus vite : de Karatsuba aux algorithmes rapides** ;
- les sept articles du dossier **Le paradoxe des jumeaux : comparer deux temps vécus** ;
- le guide général sur les arbres de récursion, l'article sur la frontière théorique de la multiplication et l'article appliqué à la mesure en ML ;
- les cinq journées du calendrier 2026 déjà rédigées ;
- les dix-neuf dossiers de conception des journées 6 à 24.

Les statuts distinguent :
- **présent** : le contenu existe et a été relu ;
- **commencé** : une modification est présente dans une branche ou une PR, sans validation éditoriale complète ;
- **à faire** : le travail n'est pas réalisé ;
- **à vérifier** : le texte existe, mais un contrôle ciblé reste nécessaire.

La PR #126 porte les premières modifications du dossier des jumeaux et le suivi de leur mise en œuvre. Une tâche mentionnée ici n'est pas réputée intégrée à main tant que la PR correspondante n'est pas fusionnée.

## 2. Vue d'ensemble

| Ensemble | État | Travail restant dominant | Priorité |
|---|---|---|---|
| Paradoxe des jumeaux | Fondations du temps propre et entrée commencées dans la PR #126 | Valider le parcours novice, harmoniser l'ordre des articles, compléter les représentations géométriques et les exercices | P0 |
| Karatsuba et multiplication rapide | Série déjà substantielle et cohérente | Balisage des niveaux dans FFT, hypothèses du modèle de complexité plus visibles, revalidation de l'état de l'art | P1 |
| Calendrier, jours 1–5 | Cinq articles rédigés ; audits disponibles | Corriger J1–J2 puis finaliser les améliorations J3–J5 | P0/P1 |
| Calendrier, jours 6–24 | Dix-neuf squelettes, aucun article correspondant encore rédigé | Vérifier concepts canoniques et sources, tester les récits, produire les articles | P0 de planification |
| Articles hors série | Trois articles autonomes | Réduire les chevauchements, compléter un exercice de validation ML et revalider les résultats contemporains | P1 |
| Accessibilité et temps de lecture | Audits textuels disponibles, tests réels non effectués | Mesures sur site rendu, clavier, lecteur d'écran, mobile et zoom | P2 transversal |

Ordre recommandé :
1. terminer la cohérence scientifique et pédagogique du dossier des jumeaux ;
2. corriger les points ciblés de Karatsuba/FFT et les journées 1–5 ;
3. produire les journées 6–24 en conservant une progression de connaissances ;
4. réaliser une campagne commune de tests sur les contenus rendus ;
5. décider, après les premiers ajouts locaux, si le pont entre nombres complexes et géométrie de Minkowski mérite un article autonome.

---

## 3. Série Karatsuba et multiplication rapide

### Parcours et rôle des articles

1. **Karatsuba, trois produits au lieu de quatre** — comprendre l'identité algébrique et le mécanisme récursif.
2. **Calculer la complexité de la multiplication de Karatsuba** — établir la récurrence et analyser le coût.
3. **Après Karatsuba : Toom–Cook et interpolation** — généraliser par évaluation-interpolation.
4. **De Toom–Cook à la FFT : accélérer la multiplication par convolution** — passer aux polynômes, à la convolution et aux transformées.
5. **La frontière théorique de la multiplication entière** — approfondissement sur les bornes et le statut des résultats récents.

Le guide **Arbres de récursion : compter le travail à chaque niveau** reste un complément méthodologique hors série. Il doit expliquer la méthode générale ; les articles de la série doivent l'appliquer au problème précis sans répéter tout le guide.

### Travail restant

#### P1 — Karatsuba et complexité

- [x] La portée de la borne \(\Theta(n^{\log_2 3})\) est précisée dans le modèle équilibré et pour des opérandes de tailles comparables.
- [ ] Dans l'article de complexité, faire apparaître plus tôt la distinction entre modèle récursif équilibré, tailles réelles des blocs et comportement de l'implémentation pédagogique.
- [ ] Ajouter un renvoi précoce vers la discussion détaillée des opérandes déséquilibrés et de l'arrêt anticipé, sans recopier la démonstration.
- [ ] Réduire les répétitions du guide des arbres de récursion dans l'article spécialisé, tout en conservant l'autonomie de chaque page.
- [ ] Vérifier que les coûts d'addition, les retenues et les tailles impaires restent visibles lorsque l'on passe de l'identité algébrique à l'algorithme concret.

#### P1 — Toom–Cook

- [x] La justification de l'exactitude des divisions par 2 et 3 dans l'interpolation Toom-3 est déjà présente ; la préserver.
- [ ] Rendre plus explicite la différence entre la variante de Karatsuba par différences et la généralisation Toom–Cook par évaluation-interpolation.
- [ ] Vérifier que le lecteur comprend pourquoi le degré du polynôme impose le nombre de points d'évaluation et comment l'interpolation reconstruit les coefficients.
- [ ] Maintenir la discussion des seuils pratiques : réduire le nombre de multiplications récursives n'implique pas automatiquement une meilleure performance à toute taille.

#### P1 — FFT, nombres complexes et exactitude

L'article FFT possède déjà une vraie profondeur algébrique : convolution linéaire et circulaire, racines de l'unité, DFT, FFT, NTT, corps finis et anneaux utilisés par Schönhage–Strassen. Le manque principal est un palier d'entrée sur la géométrie des nombres complexes et les racines de l'unité.

- [ ] Ajouter au début de la section sur la DFT une sous-section courte présentant le plan complexe comme \(\mathbb R^2\), \(z=a+ib\), le module, l'argument et la multiplication par un nombre de module 1 comme rotation.
- [ ] Construire visuellement les racines N-ièmes de l'unité comme des points régulièrement répartis sur le cercle unité ; expliquer pourquoi elles sont les facteurs de phase de la DFT.
- [ ] Relier cette image au calcul : une somme de contributions tournantes, puis les symétries exploitées par la FFT.
- [ ] Distinguer explicitement trois niveaux : DFT/FFT sur \(\mathbb C\) (souvent en flottants), NTT sur un corps fini, et transformées dans des anneaux adaptés à Schönhage–Strassen.
- [ ] Garder explicites les conditions algébriques d'existence des racines primitives, d'inversibilité de la longueur de transformée et d'orthogonalité. Ne pas transférer automatiquement une propriété de \(\mathbb C\) à un corps fini ou à un anneau.
- [ ] Ajouter un parcours essentiel et un approfondissement technique autour des sections sur les corps finis et les anneaux.
- [ ] Vérifier les explorateurs et diagrammes : les visuels doivent distinguer illustration géométrique, calcul flottant et calcul exact.

#### P1 — Frontière théorique

- [ ] Ajouter une voie de lecture courte pour comprendre la question et les résultats sans devoir maîtriser toutes les preuves.
- [ ] Conserver une voie approfondie qui distingue précisément modèles de calcul, énoncés, bornes, constantes et statuts de preuve.
- [ ] Revalider les sources primaires et les résultats contemporains à chaque mise à jour : version du manuscrit, hypothèses, modèle, publication ou prépublication, artefacts et formalisation.
- [ ] Ne pas présenter une formalisation Lean comme validation automatique de toutes les hypothèses du modèle ou de l'interprétation du résultat.

### Critères de clôture

Le lecteur peut expliquer le mécanisme de Karatsuba, reconstruire sa récurrence et identifier le modèle auquel s'applique la borne. Il comprend ce que Toom–Cook gagne et ce qu'il paie en échange. Il peut expliquer pourquoi la convolution devient un produit terme à terme dans le domaine transformé et pourquoi le choix du corps ou de l'anneau est décisif. Le niveau avancé de la frontière théorique est annoncé, sourcé et daté.

---

## 4. Dossier du paradoxe des jumeaux

### Architecture visée

Le dossier doit fonctionner comme un ensemble de points de vue reliés, et non comme sept chapitres obligatoires de difficulté uniforme :

- **Entrée** : paradoxe des jumeaux et scénario numérique.
- **Préparation facultative** : composition des vitesses et transformations de Lorentz.
- **Parcours essentiel** : simultanéité → asymétrie des trajectoires → temps propre.
- **Complément observationnel** : signaux reçus et effet Doppler.
- **Extension** : trois voyageurs et plusieurs événements de rencontre.
- **Approfondissement connexe** : inertie, référentiels et principe de Mach, sans en faire une condition de résolution du paradoxe.

### Travail restant

#### P0 — Ordre et navigation

- [ ] Aligner seriesOrder sur le rôle pédagogique annoncé. L'état examiné place encore le Doppler à l'ordre 4 et le temps propre à l'ordre 5, alors que le Doppler est présenté comme complément et le temps propre comme dernière étape essentielle.
- [ ] Vérifier les cartes, le bandeau précédent/suivant et la page d'entrée après réordonnancement : une seule séquence doit être présentée au lecteur.
- [ ] Distinguer durée indicative du parcours essentiel et durée de l'ensemble des compléments. Les 58 minutes actuelles additionnent des rôles différents ; l'audit pédagogique estime le parcours essentiel à environ 34 minutes, entrée comprise, mais les durées restent des estimations non chronométrées.
- [ ] Tester les transitions réelles entre la page d'entrée, la simultanéité, l'asymétrie et le temps propre ; retirer les répétitions qui n'apportent pas un nouvel angle, sans supprimer les rappels utiles.

#### P0 — Fondations physiques et mathématiques

- [x] Première passe sur l'entrée : définition de c, de l'année-lumière, du référentiel et du référentiel inertiel ; facteur de Lorentz introduit avant usage.
- [x] Première passe sur le temps propre : intervalle de Minkowski, convention de signature (- + + +), dérivation de dτ, intégration et preuve de maximalité dans le cadre plat.
- [ ] Faire relire la dérivation du temps propre par un lecteur de physique indépendant et contrôler le rendu de toutes les équations.
- [ ] Ajouter un diagramme d'espace-temps 1+1 qui construise progressivement événements, axes ct et x, cône de lumière, lignes d'univers et hyperboles d'intervalle constant.
- [ ] Relier le diagramme à l'intégrale du temps propre : montrer ce que la géométrie permet de lire et ce qu'elle ne permet pas de déduire sans calcul.
- [ ] Dans l'article sur la composition des vitesses, construire le passage des postulats de la relativité restreinte aux transformations de Lorentz ; distinguer ce qui est postulé, défini et dérivé.
- [ ] Dans l'article sur la simultanéité, définir les événements, la procédure de synchronisation d'Einstein et la convention de référentiel avant les équations ; préciser les hypothèses de propagation des signaux.
- [ ] Dans le Doppler, maintenir la distinction entre émission, réception et datation coordonnée ; expliciter les conventions de signe et les phases du scénario.
- [ ] Dans l'article sur trois voyageurs, vérifier chaque événement de rencontre et chaque portion de ligne d'univers ; conserver le contre-exemple où des phases différentes peuvent conduire au même âge final.

#### P1 — Apprentissage actif et nuances

- [ ] Ajouter des exercices gradués : lire un diagramme, déterminer le caractère temporel/spatial/nul d'une séparation, calculer un temps propre à vitesse constante puis variable, prédire la simultanéité terrestre avant et après le demi-tour.
- [ ] Faire distinguer systématiquement événement émis, événement reçu, événement simultané dans un référentiel et durée propre locale.
- [ ] Maintenir la distinction entre accélération propre, changement de référentiel et différence de temps propre ; ne pas réduire le résultat à « l'accélération ralentit le temps ».
- [ ] Contrôler que le principe de Mach reste un approfondissement historique et conceptuel, et non une explication requise de la solution standard.
- [ ] Réévaluer le rôle et la description de l'explorateur : son diagramme actuel ne représente pas à lui seul les axes complets des référentiels du voyageur.

#### P2 — Validation de l'expérience de lecture

- [ ] Vérifier les contrôles de l'explorateur au clavier et avec lecteur d'écran.
- [ ] Tester diagrammes et équations à 320, 375, 768 et 1280 px et au zoom 200 %.
- [ ] Vérifier alternatives textuelles, contraste, légendes, états actifs et fonctionnement dégradé.
- [ ] Chronométrer séparément le parcours essentiel, les compléments et les exercices.

### Critères de clôture

Un novice doit pouvoir reconstruire la question, les référentiels, la simultanéité et le temps propre sans prérequis caché. Un lecteur averti doit trouver la dérivation géométrique, les hypothèses de maximalité et les limites du modèle. Le résultat numérique ne doit jamais tenir lieu d'explication.

---

## 5. Calendrier 2026 — journées 1 à 24

Le calendrier forme une progression éditoriale, mais les journées doivent rester autonomes. Une connexion entre deux journées ne devient un prérequis que si le texte le dit et le construit.

### Jours 1–5 : articles déjà rédigés

| Jour | Sujet | Travail restant |
|---|---|---|
| 1 | Une mesure précise peut-elle être fausse ? | **P0.** Recentrer le fil narratif autour du mesurande et du processus de mesure ; hiérarchiser métrologie, incertitude, validité de construit, réactivité et propagation vers ML sans supprimer les distinctions. |
| 2 | 50 000 réponses valent-elles mieux que 1 000 ? | **P0.** Attacher aux pondérations et corrections leurs hypothèses : positivité/support, modèle de sélection, groupes absents, sélection non observée et distinction covariate shift / label shift / changement de relation conditionnelle. |
| 3 | Trois distributions, une même moyenne | **P1.** Expliciter ce que chaque résumé conserve ou perd ; distinguer série observée, distribution empirique et loi génératrice. |
| 4 | Quand la covariance change-t-elle la variance d'une somme ? | **P1.** Harmoniser diviseur n et n−1, estimateur empirique et variance de population ; conserver le fait que la formule de variance d'une somme ne suppose pas l'indépendance. Réduire les répétitions entre les deux sections sur les poids et la matrice de covariance. |
| 5 | Quelle distribution est la plus incertaine ? | **P1.** Vérifier numériquement le SVG d'entropie ; distinguer entropie prédictive et incertitude épistémique ; préserver les distinctions surprise / entropie / information mutuelle / causalité / calibration / entropie différentielle. L'exemple calculable d'information mutuelle est déjà présent et doit être conservé. |

Transitions à préserver :
- J1 → J2 : de la qualité de mesure à la sélection des unités observées ;
- J2 → J3 : de la population observée à ce que les résumés conservent ;
- J3 → J4 : des distributions marginales à la dépendance ;
- J4 → J5 : de la covariance à une mesure plus générale de dépendance, sans assimiler information mutuelle et covariance.

### Jours 6–14 : mécanismes statistiques et apprentissage supervisé

| Jour | Sujet du squelette | Vérification et travail de production |
|---|---|---|
| 6 | Corrélation n'est pas causalité | Construire un exemple avec confusion ou causalité inverse ; distinguer association, intervention et identification causale. Ne pas promettre qu'un ajustement statistique suffit à identifier un effet. |
| 7 | Une droite peut-elle apprendre ? | Introduire la régression linéaire depuis le modèle, les résidus et le critère d'ajustement ; distinguer interpolation, estimation et prédiction. Vérifier le statut du concept canonique à créer. |
| 8 | Retrouver le biais d'une pièce | Construire la vraisemblance et le maximum de vraisemblance sur un exemple binomial ; discuter taille d'échantillon, biais, incertitude et cas limites. Harmoniser la page canonique historique. |
| 9 | Le modèle optimise ce qu'on lui demande | Distinguer risque, risque empirique, fonction de perte et objectif d'optimisation ; montrer comment le choix de perte encode les coûts et les compromis. Vérifier la création du concept canonique. |
| 10 | Un pas trop grand fait rater la vallée | Construire le gradient et la mise à jour avant l'algorithme ; montrer le rôle du taux d'apprentissage, la convergence dans un cas simple et les limites en non-convexe. |
| 11 | Payer pour un modèle plus simple | Relier régularisation, pénalité, capacité et généralisation ; distinguer intuition du compromis et garanties sous hypothèses. Vérifier le concept canonique. |
| 12 | Un modèle stable vaut parfois mieux qu'un modèle précis | Construire biais-variance dans un cadre explicite ; distinguer décomposition théorique, erreur test et variabilité empirique d'un entraînement. Vérifier la page canonique draft. |
| 13 | Apprendre en posant des questions | Expliquer critères de séparation, impureté et surapprentissage ; distinguer arbre de décision comme modèle et procédure d'apprentissage. Vérifier le concept canonique draft. |
| 14 | Corriger ses erreurs, arbre après arbre | Montrer l'addition séquentielle de modèles et le rôle des résidus/gradients ; distinguer gradient boosting, bagging et forêt aléatoire. Vérifier le concept canonique draft. |

### Jours 15–20 : validation, calibration et expérimentation

| Jour | Sujet du squelette | Vérification et travail de production |
|---|---|---|
| 15 | Le test doit ressembler au futur | Construire population cible, protocole de validation et séparation temporelle/groupe ; distinguer généralisation i.i.d. et changement de domaine. |
| 16 | Le score parfait qui cache une fuite | Partager le concept canonique avec J15, mais traiter un mécanisme distinct de fuite ; faire un exemple reproductible où une information indisponible au moment de la prédiction gonfle artificiellement le score. Ne pas répéter J15. |
| 17 | 99 % d'accuracy : bon modèle ou mauvais problème ? | Distinguer accuracy, classe majoritaire, coûts d'erreur et choix de seuil ; vérifier que l'exemple chiffré est cohérent avec la prévalence. |
| 18 | Quand 80 % veut-il vraiment dire 80 % ? | Construire la calibration avec une interprétation fréquentiste ; distinguer calibration globale, par sous-groupe et résolution/discrimination. Partager le concept canonique avec J17 sans dupliquer son contenu. |
| 19 | Un gain de 0,3 point est-il réel ? | Définir estimateur, incertitude, comparaison appariée et multiplicité ; distinguer fluctuation d'échantillonnage, variation entre graines et effet réellement utile. |
| 20 | Qu'est-ce qui a vraiment amélioré le modèle ? | Construire une ablation contrôlée ; discuter confusions, interactions, coût de calcul et reproductibilité. Vérifier le concept canonique à créer. |

### Jours 21–24 : structure, non-supervisé, temps et décision

| Jour | Sujet du squelette | Vérification et travail de production |
|---|---|---|
| 21 | Peut-on simplifier des données sans perdre leur structure ? | Introduire réduction de dimension et ACP depuis centrage, covariance et valeurs propres ; distinguer variance préservée et information utile à une tâche. Vérifier le concept canonique. |
| 22 | Peut-on découvrir des groupes sans connaître les réponses ? | Distinguer clustering, géométrie de la représentation, choix de distance et validation ; montrer que des groupes algorithmiques ne sont pas automatiquement des catégories naturelles. |
| 23 | Pourquoi prévoir une série temporelle n'est pas prédire des lignes au hasard ? | Construire dépendance temporelle, fuite par le futur, validation chronologique et dérive ; distinguer prévision, interpolation et explication. |
| 24 | Une bonne prédiction conduit-elle à une bonne décision ? | Relier probabilités, fonctions d'utilité, coûts asymétriques et seuil de décision ; distinguer qualité prédictive et valeur décisionnelle. |

### Dépendances et cohérence du calendrier

- [ ] Vérifier les concepts canoniques avant chaque rédaction ; plusieurs dossiers indiquent explicitement une page à créer ou à harmoniser. Ne pas publier un lien vers une page inexistante.
- [ ] Pour J15–J16 et J17–J18, conserver un concept canonique partagé mais attribuer à chaque journée une question et un résultat d'apprentissage distincts.
- [ ] Pour J6–J14, éviter de faire de la causalité, de la régression ou de l'optimisation des prérequis implicites non expliqués.
- [ ] Pour J19–J20, séparer l'incertitude sur un score de l'identification de la cause d'une amélioration.
- [ ] Pour J21–J24, distinguer structure descriptive, prévision temporelle et décision : ces tâches ne répondent pas à la même question.
- [ ] Réexaminer l'équilibre du calendrier complet une fois les 24 textes rédigés ; les durées cibles des squelettes ne sont pas des temps observés.

---

## 6. Articles hors série

### Guide des arbres de récursion

- [ ] Le garder comme référence méthodologique générale.
- [ ] Réduire les répétitions avec la démonstration spécialisée de Karatsuba.
- [ ] Ajouter des liens depuis les articles qui réutilisent réellement l'analyse par niveaux, plutôt qu'un lien générique partout.
- [ ] Vérifier qu'un lecteur peut distinguer coût par niveau, nombre de feuilles, profondeur et hypothèses de la récurrence.

### Frontière théorique de la multiplication entière

Son rattachement thématique à Karatsuba est utile, mais son niveau et son statut évolutif justifient une lecture avancée autonome.

- [ ] Ajouter une entrée graduée et un glossaire local des modèles de calcul.
- [ ] Revalider les références, les versions de manuscrits et les hypothèses.
- [ ] Distinguer preuve publiée, prépublication, formalisation, artefact vérifié et interprétation éditoriale.
- [ ] Éviter toute comparaison de constantes ou d'exposants lorsque les modèles ne sont pas identiques.

### Auditer une variable mesurée en ML

- [ ] Ajouter un exercice qui oblige à choisir un protocole de validation selon trois scénarios : nouveau capteur, nouveau bâtiment/site, futur temporel.
- [ ] Préserver les limites d'identifiabilité lorsque site et instrument sont confondus.
- [ ] Garder explicite la décomposition algébrique de l'erreur et ne pas l'interpréter comme une somme de variances.
- [ ] Vérifier que les liens avec J1 et J2 du calendrier renforcent le transfert sans rendre l'article dépendant de leur lecture.

---

## 7. Ajouter une connexion entre nombres complexes et espace-temps de Minkowski

### 7.1 Constat dans les articles existants

La connexion est déjà latente dans deux endroits :

- L'article FFT utilise les nombres complexes, les racines de l'unité et les facteurs de phase, mais ne construit pas encore suffisamment le plan complexe comme représentation géométrique élémentaire.
- L'article sur le temps propre définit l'intervalle de Minkowski et dérive le temps propre, mais n'offre pas encore une représentation visuelle progressive de la géométrie 1+1 ni de la transformation de Lorentz comme transformation hyperbolique.

Le rapprochement est éditorialement naturel : il relie deux usages des transformations qui préservent une forme quadratique. Il ne faut toutefois pas les identifier.

### 7.2 Ce qui est mathématiquement commun

Dans le plan complexe, \(z=x+iy\) représente un point de \(\mathbb R^2\). Le module vérifie \(|z|^2=x^2+y^2\). Multiplier par \(e^{i\theta}\) effectue une rotation euclidienne ; les racines N-ièmes de l'unité sont régulièrement réparties sur le cercle unité. C'est le socle géométrique utile à la DFT/FFT complexe.

Dans l'espace-temps de Minkowski réduit à une dimension spatiale et au temps, les coordonnées sont \((ct,x)\) et l'intervalle peut s'écrire, avec une convention de signature donnée :

\[
s^2=x^2-c^2t^2.
\]

Les transformations de Lorentz préservent cette forme quadratique. En introduisant la rapidité \(\varphi\), elles s'écrivent avec \(\cosh\varphi\) et \(\sinh\varphi\) : ce sont des **rotations hyperboliques**, pas des rotations euclidiennes. Les courbes \(x^2-c^2t^2=\text{constante}\) sont des hyperboles ; les séparations nulles forment le cône de lumière.

La connexion pédagogique forte est donc :
- rotation euclidienne : cercle et conservation de \(x^2+y^2\) ;
- boost de Lorentz : hyperbole et conservation de \(x^2-c^2t^2\) ;
- racines de l'unité : symétries circulaires exploitées par la DFT ;
- rapidité : paramètre additif des boosts colinéaires, analogue formellement à l'angle des rotations.

### 7.3 Le pont algébrique le plus précis : les nombres complexes dédoublés

Il existe un parallèle encore plus précis que la seule comparaison cercle / hyperbole. Il faut toutefois introduire une algèbre distincte des nombres complexes usuels.

Pour les nombres complexes ordinaires, l'unité imaginaire vérifie \(i^2=-1\). Avec \(z=x+iy\), le produit par \(e^{i\theta}=\cos\theta+i\sin\theta\) réalise une rotation euclidienne et conserve \(x^2+y^2\).

Pour les **nombres complexes déployés** (split-complex, aussi appelés nombres hyperboliques), on introduit une unité \(j\) telle que \(j^2=+1\), avec \(j\ne 1\). Pour \(w=u+jv\), la conjugaison \(u-jv\) donne la forme quadratique associée
\[
w\bar w=u^2-v^2.
\]
Cette forme est indéfinie : elle peut être positive, négative ou nulle pour un élément non nul. En particulier, \((1+j)(1-j)=0\) : l'algèbre possède des diviseurs de zéro et n'est pas un corps. Les directions \(u=\pm v\), de forme quadratique nulle, correspondent aux deux directions du cône de lumière en \(1+1\) dimensions.
La multiplication par
\[
e^{-j\varphi}=\cosh\varphi-j\sinh\varphi
\]
transforme les coordonnées selon
\[
u'=u\cosh\varphi-v\sinh\varphi,\qquad
v'=v\cosh\varphi-u\sinh\varphi.
\]
Cette transformation conserve exactement \(u^2-v^2\). En prenant \(u=ct\) et \(v=x\), on retrouve la forme d'un boost de Lorentz en \(1+1\) dimensions, à convention de signe près.

Le parallèle est donc structurel :

| Algèbre | Unité | Forme quadratique préservée | Transformation associée |
|---|---|---|---|
| Complexes ordinaires | \(i^2=-1\) | \(x^2+y^2\) | Rotation circulaire, \(\cos\theta,\sin\theta\) |
| Complexes déployés | \(j^2=+1\) | \(u^2-v^2\) | Boost hyperbolique, \(\cosh\varphi,\sinh\varphi\) |

Cette connexion est particulièrement féconde : les nombres complexes ordinaires sont naturellement adaptés aux rotations euclidiennes et aux racines de l'unité de la FFT ; les nombres complexes dédoublés encodent naturellement les boosts de Lorentz en dimension \(1+1\). Elle explique algébriquement pourquoi les fonctions trigonométriques circulaires apparaissent dans le premier cas et les fonctions hyperboliques dans le second.

Il faudra cependant préciser que cette algèbre dédoublée est un outil de représentation des transformations en \(1+1\), pas une affirmation selon laquelle les coordonnées physiques de l'espace-temps seraient des nombres complexes. En \(3+1\), la structure complète des transformations de Lorentz demande une représentation plus riche ; ne pas extrapoler directement le modèle \(1+1\).

### 7.4 La limite à expliquer explicitement

Il serait trompeur de dire que l'espace-temps de Minkowski est simplement un plan complexe, ou que le temps est physiquement une coordonnée imaginaire.

L'écriture formelle \(x^0=ict\) peut transformer algébriquement la forme de Minkowski en une somme de carrés de type euclidien. C'est une **complexification / continuation analytique** utile dans certains calculs, souvent appelée rotation de Wick dans des contextes théoriques. Ce n'est ni un changement de référentiel de Lorentz réel, ni une preuve que le temps est une longueur spatiale imaginaire. Elle ne doit pas effacer les cônes de lumière, les distinctions temporel/spatial/nul ou la structure causale.

Autre différence essentielle : le plan complexe usuel est muni d'une métrique euclidienne définie positive ; la métrique de Minkowski est indéfinie, de signature \((- +)\) en 1+1 ou \((- + + +)\) en 3+1. La différence de signe est précisément ce qui change les cercles en hyperboles et autorise la structure causale relativiste.

### 7.5 Forme éditoriale recommandée : trois niveaux

**Niveau 1 — Ajout local dans l'article FFT (à faire).**

Ajouter une sous-section courte avant la définition de la DFT :
1. représenter \(a+ib\) comme un point du plan ;
2. définir module et argument ;
3. montrer que multiplier par \(e^{i\theta}\) tourne le point ;
4. placer quelques racines de l'unité sur le cercle ;
5. expliquer que la DFT combine les coefficients avec ces facteurs de phase.

Cet ajout doit suffire au lecteur pour comprendre le rôle géométrique des complexes dans la transformée. Il ne doit pas devenir un cours complet d'analyse complexe.

**Niveau 2 — Développement géométrique dans l'article sur le temps propre (à faire).**

Ajouter un diagramme 1+1 et un développement progressif :
1. axes ct et x, avec mêmes unités sur les deux axes ;
2. événement origine et ligne d'univers d'un observateur au repos ;
3. cônes de lumière \(x=\pm ct\) ;
4. ligne d'univers temporelle d'un voyageur et hyperbole de temps propre constant ;
5. effet d'un boost de Lorentz et conservation de \(x^2-c^2t^2\) ;
6. lecture des trajectoires de Simon et Kara, puis retour à l'intégrale du temps propre.

Le diagramme doit distinguer coordonnées, événements et lignes d'univers. Il ne doit pas suggérer que la pente d'une ligne représente directement une vitesse sans préciser les axes et les unités.

**Niveau 3 — Story transversale autonome (option à évaluer après les deux ajouts locaux).**

Titre de travail : **« Du cercle à l'hyperbole : deux géométries pour comprendre les transformations »**.

Question directrice : pourquoi certaines transformations préservent-elles un cercle et d'autres une hyperbole, et que change cette différence dans les applications ?

Parcours possible :
- nombres complexes et rotations du plan ;
- racines de l'unité et DFT/FFT ;
- formes quadratiques euclidienne et minkowskienne ;
- transformations de Lorentz et rapidité ;
- comparaison visuelle cercle / hyperbole ;
- encadré sur \(ict\), continuation analytique et limites de l'analogie ;
- retour aux deux applications : convolution rapide et temps propre.

Ce texte serait un **complément transversal**, pas un prérequis des deux séries. Il ne faut le créer que si les ajouts locaux révèlent une vraie question pédagogique commune et si l'article peut apporter plus qu'une juxtaposition de deux rappels.

### 7.6 Dispositif visuel ou interactif pertinent

Un comparateur à deux panneaux pourrait montrer :
- à gauche, un point tournant sur le cercle unité et la conservation de \(x^2+y^2\) ;
- à droite, un point se déplaçant sur une hyperbole et la conservation de \(x^2-c^2t^2\) ;
- un curseur d'angle \(\theta\) pour la rotation euclidienne ;
- un curseur de rapidité \(\varphi\) pour le boost ;
- les coordonnées avant/après et l'invariant calculé sous les deux figures.

Le visuel doit montrer que les fonctions trigonométriques circulaires et hyperboliques ne jouent pas le même rôle géométrique. Les paramètres ne doivent pas être assimilés : angle et rapidité ont des domaines et interprétations différents. Un diagramme statique avec calculs vérifiables est préférable à une animation si l'interaction ne sert pas une question précise.

### Références de travail pour préparer ce développement

- [The Split Complex Numbers — Oregon State University, Geometry of Euclidean and Lorentzian Geometries](https://books.physics.oregonstate.edu/GELG/csplit.html) : définition de l'algèbre, forme quadratique indéfinie, diviseurs de zéro et lien avec le plan de Minkowski.
- [MAT6702 lecture notes — Ohio State University](https://www.asc.ohio-state.edu/terekcouto.1/texts/MAT6702_OSU-USP19_notes.pdf) : définition des split-complex numbers et structure algébrique.
- [Particles and Symmetries — University of Washington, chapitre Minkowski spacetime](https://courses.washington.edu/partsym/15Spr/ch02.pdf) : rapidité, relations entre \(\gamma\), \(v/c\), \(\cosh\) et \(\sinh\), et matrice de boost.
- [Minkowski spacetime — Introductory University Physics](https://mochizuki-tus.github.io/UnivPhys_Textbook_EN/ch56_minkowski_spacetime.html) : comparaison explicite entre rotation euclidienne et boost hyperbolique.

Ces sources sont des pistes documentaires pour la rédaction, pas encore une bibliographie validée de l'article final. Vérifier les conventions de signature et les formules dans les textes retenus avant publication.

### 7.7 Décision proposée

- [ ] Ne pas ouvrir immédiatement une nouvelle série ou un nouvel article autonome.
- [ ] Ajouter d'abord le socle complexe dans l'article FFT.
- [ ] Ajouter ensuite le diagramme de Minkowski dans l'article du temps propre.
- [ ] Faire relire ces deux passages séparément par un lecteur novice et un lecteur mathématiques/physique.
- [ ] Évaluer ensuite la story transversale à partir des questions effectivement suscitées par les deux passages.

---

## 8. Contrôles transversaux et définition du terminé

### Pour chaque article

- [ ] Le lecteur novice connaît les termes, variables, conventions, unités et prérequis au moment où ils deviennent nécessaires.
- [ ] Les résultats centraux sont démontrés ou leur statut est explicitement qualifié.
- [ ] Les hypothèses et domaines de validité sont attachés aux formules et conclusions.
- [ ] Les exemples sont recalculés indépendamment ; les figures et interactions ne contredisent pas le texte.
- [ ] Les sources soutiennent effectivement les affirmations auxquelles elles sont associées.
- [ ] Les liens de série et les rôles pédagogiques sont cohérents.
- [ ] Le temps de lecture est mesuré sur le rendu, ou reste explicitement présenté comme estimation.
- [ ] Le statut review n'est pas remplacé par published avant validation éditoriale et technique.

### Pour le site rendu

- [ ] Build complet Astro + Quarto.
- [ ] Contrôle desktop/mobile à 320, 375, 768 et 1280 px.
- [ ] Zoom 200 %, équations longues, tableaux, figures et débordements.
- [ ] Parcours clavier, focus visible, contrôles interactifs et ordre de tabulation.
- [ ] VoiceOver ou lecteur d'écran, noms accessibles et alternatives textuelles.
- [ ] Contrastes, réduction du mouvement et comportement sans JavaScript lorsque pertinent.
- [ ] Liens internes, navigation précédent/suivant et relations d'articles contrôlés.

Une modification de texte n'est qu'une étape. Une série est terminée lorsque son parcours est cohérent, ses affirmations contrôlables et son rendu effectivement utilisable.
