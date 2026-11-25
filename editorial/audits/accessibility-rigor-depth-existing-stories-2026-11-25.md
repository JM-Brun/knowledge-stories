---
title: "Audit des histoires existantes selon le standard accessibilité–rigueur–profondeur"
date: 2026-11-25
status: editorial-audit
scope: "15 articles MDX et les cinq journées publiées du calendrier 2026"
---

# Audit des histoires existantes selon le standard accessibilité–rigueur–profondeur

## 1. Objet, périmètre et méthode

Cet audit applique aux contenus existants le standard éditorial défini dans `editorial/accessibility-rigor-depth.md`. Il porte sur les textes sources présents dans `main` au 25 novembre 2026, et non sur la seule conformité des métadonnées ou sur les audits antérieurs.

Périmètre :

- **15 articles MDX** : six articles de la série Karatsuba, le guide général sur les arbres de récursion, sept articles du dossier des jumeaux et l'article appliqué sur l'audit d'une variable mesurée en ML ;
- **cinq journées du calendrier 2026**, jours 1 à 5.

Les trois dimensions sont évaluées séparément :

- **Accessibilité** : possibilité pour un lecteur novice ou ayant oublié les bases de reconstruire le raisonnement, sans prérequis dissimulé.
- **Rigueur** : exactitude et qualification des affirmations, visibilité des hypothèses, statut des preuves et contrôlabilité des calculs.
- **Profondeur** : apport substantiel au-delà d'une explication introductive standard, y compris pour un lecteur déjà familier du sujet.

Échelle qualitative : **fort** (exigence largement satisfaite), **bon** (satisfaite avec améliorations ciblées), **à renforcer** (obstacle important ou apport insuffisamment développé). Ce n'est pas une note scientifique ni une certification.

### Limites de vérification

L'audit repose sur la lecture des sources MDX/QMD et sur les audits de contenu antérieurs lorsqu'ils apportent des vérifications déjà consignées. Il ne constitue pas :
- une relecture indépendante exhaustive de chaque source bibliographique et de chaque résultat récent ;
- une exécution systématique de tous les calculs, scripts et composants interactifs ;
- un test navigateur complet, un audit WCAG ou une validation sur appareil mobile ;
- une validation scientifique externe par un spécialiste indépendant.

Les tests de rendu, de clavier, de lecteur d'écran, de responsive, de zoom et de réduction des animations restent à effectuer. Les articles MDX examinés portent actuellement `status: review` : cet audit ne recommande pas de les publier automatiquement.

## 2. Résultat transversal

Le corpus possède déjà une ambition nettement supérieure à celle d'une collection de billets de vulgarisation ordinaires. Les points forts récurrents sont :
- des exemples numériques travaillés plutôt que de simples affirmations ;
- une distinction assez fréquente entre modèle, hypothèse, observation et interprétation ;
- des limites explicitement discutées ;
- des liens entre concepts et des possibilités de transfert ;
- des démonstrations ou calculs qui permettent au lecteur de suivre une partie du raisonnement.

La principale faiblesse n'est donc pas une superficialité générale. Elle est plus précise : **l'accès aux fondations n'est pas toujours aussi complet que l'approfondissement**. Certains articles sont rigoureux et riches, mais demandent au lecteur de connaître déjà une transformation, une convention, une définition ou un outil mathématique qui devrait être reconstruit ou rappelé à l'endroit utile.

Deuxième faiblesse : **la profondeur est parfois présente mais mal balisée**. Le lecteur ne sait pas toujours ce qui constitue le parcours principal, ce qui est un approfondissement et ce qui relève d'une extension experte. Cela concerne surtout les articles FFT et frontière théorique, ainsi que la densité du jour 1 du calendrier.

Troisième faiblesse : la documentation des contenus est plus avancée que la validation de leur expérience réelle de lecture. Les temps sont des estimations explicites, pas des temps chronométrés sur le rendu ; la qualité responsive et l'accessibilité ne peuvent pas être déduites d'un build réussi.

## 3. Audit des articles MDX

### 3.1 Série Karatsuba et multiplication rapide

| Article | Accessibilité | Rigueur | Profondeur | Diagnostic |
|---|---|---|---|---|
| Karatsuba, trois produits au lieu de quatre | Bon | Fort | Fort | Bonne entrée par l'algèbre et l'exemple ; prérequis annoncés, mais ce n'est pas une introduction absolue à l'algèbre et à la notation asymptotique |
| Calculer la complexité de Karatsuba | Bon | Fort | Fort | Démonstration riche ; faire remonter plus tôt la portée du modèle équilibré et la différence entre modèle idéal et implémentation |
| Arbres de récursion : compter le travail à chaque niveau | Fort | Bon | Bon | Guide général réutilisable ; maintenir sa différence avec l'application spécifique à Karatsuba |
| Après Karatsuba : Toom–Cook et interpolation | À renforcer | Fort | Fort | Développement technique substantiel ; mieux baliser les prérequis polynomiaux et le parcours essentiel |
| De Toom–Cook à la FFT : convolution | À renforcer | Bon à fort | Fort | Contenu avancé riche ; les niveaux FFT, convolution exacte et Schönhage–Strassen nécessitent des repères de lecture plus explicites |
| Frontière théorique de la multiplication entière | À renforcer | Bon, sous réserve de vérification externe | Très fort | Excellent sujet de profondeur ; exige un lecteur déjà à l'aise avec les modèles de calcul et la théorie de la complexité |

#### Karatsuba — mécanisme et complexité

L'article principal présente le problème, l'identité algébrique, un calcul détaillé, un explorateur et un algorithme récursif pédagogique. Il signale explicitement les limites de `len(str(x))`, de la profondeur de récursion et les difficultés liées aux opérandes de longueurs différentes. La portée de `Theta(n^{log₂ 3})` est maintenant qualifiée : modèle équilibré et opérandes de tailles comparables. C'est une correction importante contre une généralisation abusive.

**À améliorer :**
1. Ajouter un bref rappel accessible de la notation `O`, de `Theta` et de la différence entre coût d'une opération et coût total, ou rendre le lien vers le rappel plus visible avant la première utilisation.
2. Garder la réserve sur les sommes `a+b` et `c+d` qui peuvent gagner un chiffre ; elle est conceptuellement importante et ne doit pas être noyée dans la section d'implémentation.
3. Dans l'article de complexité, remonter près de la première récurrence le contrat du modèle : tailles comparables, découpage équilibré, traitement des tailles impaires et coût des additions. L'article traite déjà plus loin les tailles réelles, l'arrêt anticipé et les bornes de l'implémentation pédagogique ; cette analyse doit être préservée, pas réécrite.
4. Dans l'exemple de comptage des niveaux, continuer à distinguer les unités pédagogiques d'un benchmark de temps réel.

**Verdict :** contenu fort sur les trois dimensions, avec une amélioration de l'accessibilité et de la hiérarchie des hypothèses. Pas de simplification ni de fusion recommandée.

#### Guide général des arbres de récursion

Le guide a une fonction méthodologique distincte : enseigner le comptage du travail par niveau, y compris pour des arbres équilibrés et irréguliers. Il peut servir de ressource de référence pour plusieurs algorithmes.

**À améliorer :** réduire les répétitions génériques dans l'article de complexité de Karatsuba, sans rendre ce dernier dépendant du guide. L'article spécialisé doit conserver assez de rappels pour être autonome et consacrer son espace aux particularités de Karatsuba.

**Verdict :** bonne accessibilité et bon potentiel de transfert. La profondeur vient de la généralisation de la méthode, pas d'une accumulation de cas.

#### Toom–Cook et FFT

L'article Toom–Cook reconstruit l'idée d'évaluation-interpolation, le passage de neuf produits à cinq pour Toom–3 et les divisions exactes de l'interpolation. L'audit antérieur a vérifié que la justification des divisions par 2 et 3 est déjà présente : ne pas supprimer cette démonstration. Le raisonnement sur les exposants asymptotiques est également explicité.

L'article FFT relie produit de polynômes, convolution, transformée de Fourier discrète, convolution circulaire, multiplication entière exacte et Schönhage–Strassen. Cette couverture est un véritable approfondissement, mais elle rassemble plusieurs changements de niveau mathématique.

**À améliorer :**
1. Marquer le parcours essentiel (produit de polynômes → convolution linéaire → FFT → prévention de l'aliasing circulaire).
2. Isoler clairement les approfondissements sur les racines de l'unité, NTT et anneaux de Schönhage–Strassen.
3. À chaque changement de structure algébrique, préciser si l'on travaille dans les réels, les complexes, un corps fini ou un anneau ; ne pas transférer implicitement une propriété d'un cadre à l'autre.
4. Donner une courte carte des prérequis (polynômes, coefficients, convolution, exponentielle complexe) avec rappels ou liens précis.

**Verdict :** profondeur forte ; accessibilité insuffisamment balisée. Il s'agit d'un problème de stratification, pas d'un motif pour retirer le contenu avancé.

#### Frontière théorique de la multiplication entière

Cet article a une valeur distinctive importante : il compare des résultats récents, les modèles de calcul, les paramètres des bornes, le statut des preuves écrites et les formalisation Lean. Il distingue explicitement résultat asymptotique et performance pratique, preuve formalisée et examen par les pairs.

**À améliorer :**
1. Ajouter au début un encadré de vocabulaire très court : borne supérieure, asymptotique, modèle de machine, prépublication, preuve formalisée.
2. Rendre explicite le niveau de lecture requis et proposer une voie de lecture partielle pour les lecteurs qui veulent comprendre les enjeux sans reconstruire toute la théorie.
3. Pour chaque résultat récent, garder une fiche de provenance datée : version du manuscrit, énoncé exact, hypothèses, modèle, statut de revue et artefacts vérifiés.
4. Ne pas laisser entendre qu'une formalisation Lean valide automatiquement la pertinence du modèle ou l'ensemble des choix mathématiques et éditoriaux. Le texte fait déjà cette distinction ; la conserver et la rendre très visible.
5. Revalider les résultats de 2026 à chaque mise à jour : ce contenu est particulièrement sensible à l'évolution de la littérature.

**Verdict :** profondeur très forte ; accessibilité volontairement avancée mais à mieux organiser. La rigueur documentaire demande une vérification externe continue, qui dépasse la seule lecture du texte.

### 3.2 Dossier du paradoxe des jumeaux

| Article | Accessibilité | Rigueur | Profondeur | Diagnostic |
|---|---|---|---|---|
| Le paradoxe des jumeaux, chacun à sa montre | Bon | Bon | Bon | Bonne porte d'entrée ; rendre les prérequis physiques et le contrat du parcours encore plus explicites |
| Composition des vitesses | Bon | Bon | Bon | Exemple classique et dérivation relativiste utiles ; expliciter les transformations de Lorentz utilisées comme point de départ |
| Simultanéité | Bon | Bon à fort | Fort | Bonne approche opérationnelle ; rendre visibles les conventions de synchronisation et les hypothèses de référentiel |
| Asymétrie | Bon | Bon | Fort | Bonne distinction entre accélération propre et accélération de coordonnées ; renforcer la représentation des lignes d'univers et des référentiels successifs |
| Doppler et signaux | Bon | Bon | Fort | Complément distinctif : sépare signal reçu, date coordonnée et temps propre |
| Temps propre | À renforcer | Bon à fort | Fort | Aboutissement conceptuel essentiel ; la construction géométrique de la formule doit être accessible et pas seulement donnée |
| Trois voyageurs, deux planètes | Bon | Bon | Fort | Bonne extension ; vérifier que chaque rencontre, chaque phase et chaque temps propre sont explicitement traçables |

#### Point critique : reconstruire les fondations physiques

Le dossier distingue correctement plusieurs notions souvent confondues : temps coordonné, temps propre, simultanéité à distance, signal lumineux reçu, accélération propre et changement de référentiel. C'est sa principale force conceptuelle.

Pour satisfaire pleinement l'exigence « partir de zéro », le parcours doit toutefois rendre explicites, au bon moment, les fondations suivantes :

- ce qu'est un événement dans l'espace-temps et ce qu'est une ligne d'univers ;
- la différence entre référentiel inertiel, coordonnées et observateur ;
- le postulat de constance de la vitesse de la lumière et les conditions d'application de la relativité restreinte ;
- le facteur de Lorentz et la signification de ses variables ;
- la synchronisation des horloges distantes et le statut de la simultanéité ;
- le lien entre intervalle d'espace-temps et temps propre mesuré par une horloge.

Les articles de préparation couvrent une partie de ces notions, mais le lecteur ne doit pas avoir à deviner quelles étapes sont indispensables. Le parcours d'entrée doit indiquer ce qui est supposé, ce qui est construit dans le dossier et ce qui peut être sauté par un lecteur déjà formé.

#### Temps propre : priorité scientifique et pédagogique

L'article définit le temps propre par l'intégrale le long d'une trajectoire et calcule les durées du scénario. Il explique aussi que l'accélération n'est pas une pénalité ajoutée au calcul et que le demi-tour instantané est une idéalisation.

**Amélioration prioritaire :** reconstruire explicitement le lien entre l'intervalle de Minkowski et la formule différentielle
`dτ = dt √(1 − v²/c²)`, dans le cadre annoncé de l'espace-temps plat et d'une trajectoire temporelle. Définir les conventions de signature utilisées, expliquer le rôle de `v(t)`, puis passer à l'intégrale. Il faut aussi expliquer pourquoi la durée propre est une quantité locale accumulée le long de la ligne d'univers et pourquoi elle ne dépend pas du choix de coordonnées. Si cette dérivation est déjà traitée ailleurs, la référencer précisément et en donner ici le minimum nécessaire.

#### Asymétrie, simultanéité et observation

- L'article sur l'asymétrie évite correctement l'explication simpliste selon laquelle « l'accélération ralentit le temps ». Il doit continuer à distinguer l'accélération propre mesurée localement et la description coordonnée du mouvement.
- L'article sur la simultanéité donne une procédure de synchronisation opérationnelle. Il faut maintenir visibles l'hypothèse de référentiel inertiel et la convention d'Einstein utilisée.
- L'article Doppler apporte un approfondissement réel : ce que l'on reçoit optiquement n'est pas ce que le référentiel attribue comme événement simultané. Le garder comme complément, pas comme étape obligatoire de la preuve des âges.
- Le changement de date attribuée à la Terre au demi-tour ne doit jamais être décrit comme un saut physique de son horloge. Les articles audités distinguent cette date coordonnée du signal reçu ; préserver cette distinction.

#### Principe de Mach et extension à trois voyageurs

L'article sur l'inertie distingue trois questions différentes : identifier un référentiel inertiel, mesurer une accélération et expliquer l'origine physique de l'inertie. Il évite de faire dépendre le résultat standard du paradoxe des jumeaux d'une résolution du principe de Mach. C'est un apport profond, mais l'article est avancé et doit le rester : il ne doit pas être imposé comme prérequis du dossier élémentaire. Les sources vidéo doivent être traitées comme sources de positions débattues, pas comme autorités scientifiques équivalentes aux textes et références de physique.

L'article des trois voyageurs constitue une généralisation utile par événements de rencontre. Son scénario à accélérations idéalisées doit préciser les lignes d'univers et les phases exactes ; ne pas généraliser la règle « le voyageur est plus jeune ». Le texte explicite déjà un contre-exemple où Simon et Odile retrouvent le même âge malgré des phases de mouvement différentes. C'est un bon test de transfert.

**Verdict du dossier :** profondeur conceptuelle forte et distinctions scientifiques pertinentes. La priorité est de mieux construire les bases géométriques et relativistes, en particulier la dérivation du temps propre, puis de vérifier les diagrammes et les conventions de l'explorateur. Ne pas réduire le dossier à l'explication classique des jumeaux : ses compléments apportent une réelle valeur.

### 3.3 Article appliqué — Auditer une variable mesurée en ML

Cet article fait le pont entre métrologie, validité de construit, erreur de mesure, données et validation ML. Il dépasse le conseil générique « nettoyer les données » : il distingue perturbation de l'objet mesuré, biais instrumental, opérationnalisation d'un construit, erreur du modèle et effet du protocole de validation.

La décomposition
`f(x̃) − g(x) = [f(x̃) − f(x)] + [f(x) − g(x)]`
est explicitement présentée comme une identité algébrique, à modèle fixé et cible déterministe, et non comme une addition de variances. Cette qualification est essentielle. Le protocole `GroupKFold` est accompagné de conditions d'usage, d'une réserve sur le nombre de groupes, la généralisation visée et la validation imbriquée.

**À améliorer :**
1. Rendre encore plus explicite la différence entre variable directement mesurée et construit latent, dès la question d'ouverture.
2. Dans le code, garder visibles les hypothèses d'un jeu de variables numériques et le fait que le groupement doit reproduire le scénario de déploiement. Le texte le précise déjà : ne pas séparer le code de ces avertissements.
3. Proposer un mini-exercice qui demande au lecteur de choisir le groupe de validation selon trois scénarios (nouveau capteur, nouveau bâtiment, futur temporel).
4. Qualifier davantage les limites d'identifiabilité : si instrument et site sont parfaitement confondus, aucune sophistication du modèle ne permet de les séparer sans information ou variation de plan supplémentaire.

**Verdict :** bon équilibre entre rigueur et transfert professionnel, profondeur forte. Accessibilité bonne pour un lecteur de niveau intermédiaire ; le prérequis ML doit rester explicite.

## 4. Audit des cinq journées du calendrier

| Journée | Accessibilité | Rigueur | Profondeur | Diagnostic |
|---|---|---|---|---|
| J1 — Mesure précise, mesure fausse ? | Bon | Fort | Fort | Très riche ; hiérarchiser le fil conducteur et surveiller la densité |
| J2 — 50 000 réponses valent-elles mieux que 1 000 ? | Bon | Bon à fort | Fort | Excellent transfert vers sélection et généralisation ; vérifier que les hypothèses de pondération restent attachées aux méthodes |
| J3 — Trois distributions, une même moyenne | Fort | Bon | Bon | Bonne progression visuelle ; expliciter ce que chaque résumé conserve ou perd |
| J4 — Covariance et variance d'une somme | Bon | Fort | Bon à fort | Démonstration courte et transfert pertinent ; préciser les conventions empiriques et probabilistes |
| J5 — Quelle distribution est la plus incertaine ? | Fort | Fort | Bon à fort | Définition et exemples corrects ; bon traitement des pièges d'interprétation et de représentation |

### Jour 1 — Mesurer avant de modéliser

La journée construit un fil riche : répétabilité, justesse, exactitude, résolution, modèle de mesure, incertitude de référence, opérationnalisation, perturbation par la mesure et propagation vers un modèle. Elle apporte plus qu'un contraste entre biais et variance : elle montre que la donnée est produite par un protocole et que la variable peut ne pas représenter le construit visé.

**Risque principal : surcharge cognitive.** Plusieurs changements d'échelle se succèdent. Le modèle de mesure doit rester le pivot narratif ; les notions de validité de construit, réactivité et propagation doivent apparaître comme des conséquences de la question « que mesure-t-on réellement ? ». Les profils de capteurs sont pédagogiquement utiles, mais ne doivent pas éclipser le raisonnement central.

Les précautions déjà intégrées sur les cinq profils doivent être conservées : trois observations ne suffisent pas à établir un biais de population, une résolution ou une robustesse instrumentale ; les exemples C, D et E ne sont pas un même essai comparatif. Le texte distingue aussi biais métrologique et biais d'estimation, distinction à préserver.

### Jour 2 — Échantillonnage et sélection

La journée va au-delà de la taille d'échantillon : population cible, base de sondage, sélection, absence de support, pondération, transportabilité et généralisation ML. L'angle sur la sélection conditionnelle et les hypothèses de correction apporte une profondeur réelle.

**Points de contrôle à maintenir :**
- distinguer variabilité d'échantillonnage et biais de sélection ;
- ne pas faire croire qu'une pondération récupère les groupes absents ou corrige une sélection dépendant de variables non observées ;
- distinguer covariate shift, label shift et changement de la relation conditionnelle ;
- expliciter positivité, adéquation du modèle de poids et taille effective ;
- faire dépendre le split de validation du domaine de généralisation réellement visé.

La journée est dense pour un lecteur débutant, mais les prérequis sont annoncés et les notions sont introduites progressivement. Ne pas supprimer les hypothèses pour raccourcir : préférer une hiérarchie visuelle entre parcours principal et approfondissements.

### Jour 3 — Résumés statistiques et distributions

La progression entre moyenne commune, dispersion différente et distributions ayant plusieurs résumés identiques illustre bien la compression avec perte. Le lecteur découvre pourquoi une statistique descriptive ne suffit pas à caractériser une structure.

**À améliorer :** rendre systématique la question « qu'est-ce que ce résumé conserve, et qu'est-ce qu'il efface ? ». Distinguer série observée, distribution empirique et loi génératrice ; le texte le fait déjà, il faut conserver cette distinction dans les légendes et exercices. Un graphique est un diagnostic exploratoire, pas une preuve du mécanisme.

### Jour 4 — Covariance

La journée construit la variance d'une somme à partir d'un exemple numérique et étend le raisonnement aux combinaisons pondérées, aux matrices de covariance et à l'agrégation de modèles/mesures. Le contre-exemple « covariance nulle n'implique pas indépendance » est un approfondissement important.

**À améliorer :** harmoniser les conventions de variance et covariance empiriques. L'exemple utilise le diviseur `n` et le précise ; le lecteur doit comprendre qu'il s'agit ici de moments de la distribution empirique, distincts des estimateurs corrigés avec `n−1`. Rappeler dans les calculs que l'identité générale
`Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)`
ne requiert pas l'indépendance ; c'est l'annulation du terme de covariance qui exige une hypothèse de covariance nulle, pas nécessairement l'indépendance.

### Jour 5 — Entropie et information

La journée définit la surprise, l'entropie discrète, l'entropie conditionnelle et l'information mutuelle. Les exemples binaires sont calculables ; le texte traite correctement la convention `0 log 0 = 0`, la dépendance à la base logarithmique, la distinction information/causalité, la calibration et la différence entre entropie discrète et entropie différentielle.

**Points forts :**
- l'entropie est définie comme une moyenne de surprise, et non comme la surprise d'une issue ;
- le calcul de l'information mutuelle est reconstruit sur une observation imparfaite ;
- les limites d'interprétation sont explicites : faible entropie ne signifie pas bonne prévision, et l'entropie n'est pas un coût du risque ;
- les exercices vérifient les notions centrales.

**À améliorer :**
1. Dans la première visualisation, vérifier numériquement les coordonnées de la courbe SVG : une courbe schématique doit être annoncée comme telle ou générée à partir de la formule exacte.
2. Préciser que l'information mutuelle est nulle si et seulement si l'indépendance dans le cadre discret considéré ; le texte le dit déjà, à conserver.
3. Pour l'usage en apprentissage actif, rappeler que l'entropie prédictive peut refléter à la fois l'incertitude du modèle et l'ambiguïté intrinsèque des données ; elle ne mesure pas exclusivement l'incertitude épistémique.

**Verdict calendrier :** le corpus satisfait bien la triple ambition. J1 et J2 ont la plus grande densité conceptuelle ; J3 à J5 offrent des unités plus courtes et plus ciblées. L'amélioration prioritaire consiste à préserver le fil de chaque journée et à éviter qu'une succession de notions pertinentes ne devienne une liste de sujets.

## 5. Priorités consolidées

### P0 — À traiter avant de considérer les parcours comme pédagogiquement aboutis

1. **Temps propre :** expliciter la dérivation de la formule depuis l'intervalle de Minkowski, avec conventions, hypothèses et interprétation physique.
2. **Entrée du dossier des jumeaux :** expliciter les prérequis et distinguer visuellement ce que le dossier construit de ce qu'il suppose.
3. **FFT / Toom–Cook :** baliser les niveaux de lecture et rendre les changements de cadre algébrique explicites.
4. **Jour 1 :** hiérarchiser la densité sans supprimer les nuances métrologiques.
5. **Jour 2 :** maintenir les hypothèses de sélection/pondération immédiatement attachées aux corrections proposées.

### P1 — Améliorations de qualité à fort rendement

1. Karatsuba : faire remonter les hypothèses du modèle équilibré et le statut des tailles de blocs.
2. Complexité : rendre plus visible la distinction entre analyse idéale et implémentation pédagogique.
3. Frontière théorique : ajouter une voie de lecture graduée et revalider les résultats contemporains.
4. Jour 3 : expliciter la perte d'information associée à chaque résumé.
5. Jour 4 : harmoniser les conventions empiriques et probabilistes.
6. Jour 5 : contrôler le tracé exact de la courbe d'entropie et distinguer incertitude prédictive et épistémique.
7. Article ML : ajouter un exercice de choix du protocole de validation.

### P2 — Validation empirique et expérience de lecture

- Chronométrer les pages rendues et distinguer lecture linéaire, exercices et interactions.
- Tester 320, 375, 768 et 1280 px, zoom 200 %, équations, tableaux et SVG.
- Tester navigation clavier, focus, contrôles interactifs, VoiceOver et alternatives textuelles.
- Vérifier les préférences de réduction du mouvement et le fonctionnement sans JavaScript lorsque pertinent.
- Ouvrir les sources primaires et les références contemporaines ; consigner versions et dates de vérification.

## 6. Décision éditoriale

**Le corpus ne doit pas être simplifié globalement.** Il possède déjà une vraie profondeur, notamment dans les démonstrations de Karatsuba, la séparation des notions relativistes, les limites de la mesure et les hypothèses de généralisation statistique.

Les corrections doivent viser les fondations manquantes, la hiérarchie des niveaux et la traçabilité des preuves. En particulier :
- ne pas retirer les démonstrations pour rendre les articles plus courts ;
- ne pas faire passer les articles avancés pour des textes introductifs ;
- ne pas exiger que chaque article contienne toute la théorie : les prérequis et approfondissements peuvent être répartis, à condition que les liens et rôles soient explicites ;
- ne pas confondre réussite du build, revue éditoriale et validation scientifique.

Le critère de clôture reste la double lecture : un novice motivé peut-il reconstruire le raisonnement, et un lecteur averti y trouve-t-il une valeur qui dépasse le rappel des notions usuelles ?

Cet audit constitue un diagnostic de contenu et un plan de correction. Il ne vaut ni validation de publication ni certification de l'accessibilité des rendus.


## 7. Mise en œuvre du plan de correction

L'audit est conçu comme un diagnostic actionnable. Les corrections sont suivies séparément afin de distinguer le constat, la modification éditoriale et sa validation technique.

### Première tranche — Fondations du temps propre

**Statut : implémentation commencée sur la branche `improve/twin-proper-time-foundations`.**

L'article `src/content/articles/temps-propre-paradoxe-jumeaux.mdx` a été réécrit sur les points suivants :

- introduction explicite des événements, des référentiels inertiels et des lignes d'univers ;
- annonce du cadre physique : relativité restreinte, espace-temps plat, absence de champ gravitationnel ;
- convention de signature de la métrique explicitée (`- + + +`) ;
- dérivation algébrique complète de `dτ = dt √(1 − v²/c²)` depuis l'intervalle de Minkowski ;
- définition de la vitesse comme norme de la vitesse coordonnée dans le référentiel inertiel choisi ;
- justification de la racine positive et intégration sur une trajectoire dont la vitesse peut varier ;
- distinction explicite entre coordonnées dépendantes du référentiel et temps propre invariant ;
- démonstration de la maximalité du temps propre de la trajectoire inertielle entre deux événements de genre temps ;
- clarification du rôle du demi-tour de durée finie et de l'idéalisation instantanée.

Le calcul numérique du scénario des jumeaux et les distinctions conceptuelles utiles de l'article ont été conservés. Le temps de lecture affiché a été porté de 9 à 12 minutes pour refléter l'ajout de la dérivation.

**À vérifier avant clôture de cette tranche :**
- rendu effectif des équations dans Astro/MDX ;
- cohérence du vocabulaire et des conventions avec les autres articles de la série ;
- cohérence de la démonstration de maximalité avec les hypothèses affichées ;
- relecture novice et relecture physique indépendante ;
- build, responsive, clavier et lecteur d'écran.

### Deuxième modification — Article d'entrée du paradoxe des jumeaux

**Statut : première passe éditoriale réalisée sur la même branche.**

Dans `src/content/articles/paradoxe-des-jumeaux.mdx` :
- ajout d'un bloc de prérequis minimaux définissant `c`, l'année-lumière, le référentiel et le référentiel inertiel ;
- définition du temps propre comme durée mesurée le long du trajet de l'horloge ;
- introduction du facteur de Lorentz et de la relation valable sur une branche à vitesse constante ;
- clarification du calcul des 5 ans par trajet à partir de 4 années-lumière et de `0,8c` ;
- temps de lecture estimé ajusté de 7 à 9 minutes.

Cette modification rend l'entrée plus autonome, mais ne constitue pas encore une validation complète du parcours novice. Il reste à vérifier la progression entre cette introduction, la simultanéité, l'asymétrie et le temps propre, ainsi que le fonctionnement de l'explorateur interactif.

### Tranches suivantes

| Priorité | Contenus | Action attendue | Statut |
|---|---|---|---|
| P0 | Article d'entrée du paradoxe des jumeaux | Vérifier transitions et parcours novice / approfondissements | Relecture à faire |
| P0 | Toom–Cook et FFT | Construire une progression visible et expliciter les changements de cadre algébrique | À faire |
| P0 | Calendrier, jour 1 | Recentrer la progression sur le modèle de mesure et hiérarchiser les approfondissements | À faire |
| P0 | Calendrier, jour 2 | Attacher systématiquement les hypothèses aux méthodes de correction de sélection | À faire |
| P1 | Karatsuba et analyse de complexité | Faire apparaître plus tôt les hypothèses du modèle et les différences avec l'implémentation | À faire |
| P1 | Frontière théorique de la multiplication | Ajouter une voie de lecture graduée et revalider les résultats contemporains | À faire |
| P1 | Calendrier, jours 3–5 | Vérifier la perte d'information des résumés, les conventions de covariance et le tracé de l'entropie | À faire |
| P1 | Article ML | Ajouter un exercice de choix du protocole de validation selon le scénario de généralisation | À faire |
| P2 | Tous les contenus rendus | Tests chronométrés, responsive, zoom, clavier, VoiceOver et alternatives textuelles | À faire |

### Règle de progression

Une tranche n'est pas considérée comme terminée parce que le texte a été modifié. Elle doit passer une relecture de fond, une vérification des formules et hypothèses, puis les contrôles de rendu pertinents. Les contenus restent en statut `review` tant que les critères de publication ne sont pas satisfaits.

Les corrections ne doivent pas supprimer les approfondissements existants pour réduire artificiellement la longueur. En cas de surcharge, privilégier une hiérarchie explicite entre parcours essentiel et développements avancés, sans rendre le texte dépendant d'un prérequis non expliqué.


## 8. Feuille de route consolidée

Le suivi détaillé des travaux restants par série, par journée du calendrier et par article hors série, ainsi que l'étude de la connexion entre nombres complexes et géométrie de Minkowski, est désormais centralisé dans [la feuille de route éditoriale](../roadmap-series-and-minkowski-connection-2026-11-25.md).

Cette feuille de route distingue les modifications déjà commencées, les vérifications encore nécessaires et les développements proposés. Elle recommande de tester d'abord deux ajouts locaux (plan complexe dans l'article FFT ; diagramme de Minkowski dans l'article sur le temps propre) avant de décider de créer une story transversale autonome.
