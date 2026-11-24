---
title: "Audit éditorial article par article — Karatsuba et paradoxe des jumeaux"
date: 2026-11-25
status: editorial-audit
scope: "13 articles des séries Karatsuba et paradoxe des jumeaux, plus le guide général des arbres de récursion"
---

# Audit éditorial article par article — Karatsuba et paradoxe des jumeaux

## Portée et statut

Audit fondé sur la lecture des 13 fichiers MDX concernés : explications, équations, exemples, exercices, transitions et liens. Il porte sur les contenus réels, pas seulement sur le schéma des métadonnées.

Les durées n'ont pas été chronométrées sur le site publié. Le code et les styles ont été examinés, mais les tests visuels desktop/mobile, clavier et lecteur d'écran restent à exécuter. Les constats ci-dessous sont donc des résultats éditoriaux, pas une déclaration de conformité WCAG.

## Synthèse

Les deux séries sont scientifiquement et pédagogiquement solides dans leur architecture générale. Un contrôle complémentaire des 15 articles du catalogue confirme que toutes les valeurs `readingTime` sont présentes, que toutes les cibles `relatedArticles` existent et que les liens Markdown internes vers des articles de l'atelier pointent vers des slugs présents. Les ordres sont continus : Karatsuba utilise 1–5, tandis que le dossier des jumeaux utilise 0–6. Le validateur futur ne doit donc pas imposer une origine unique (0 ou 1) à toutes les séries ; il doit vérifier la continuité à partir de la convention de chaque série.

Les corrections prioritaires sont ciblées :
1. expliciter la portée du modèle asymptotique équilibré de Karatsuba ;
2. séparer plus nettement modèle théorique et code concret ;
3. réduire les répétitions du calcul 1,8 → 8,2 ans sans supprimer les reprises nécessaires à des explications différentes ;
4. distinguer le parcours essentiel du paradoxe des jumeaux de ses préparations et extensions ;
5. ne pas présenter les durées actuelles comme chronométrées ;
6. ne pas implémenter `relatedArticles` typé avant d'avoir validé les relations sur les contenus.

---

## A. Série Karatsuba

### A1. Karatsuba, trois produits au lieu de quatre — 14 min

**Réussites :** question initiale concrète ; identité algébrique bien amenée ; exemple 1 234 × 5 678 ; explorateur interactif ; exercice sur 9 999 × 1 234 qui révèle le problème de retenue ; distinction entre produits récursifs et opérations linéaires ; code clairement qualifié de pédagogique.

**À corriger :** rattacher explicitement `Theta(n^log₂3)` au modèle équilibré et à une famille d'instances de taille n (ou au pire cas sur des opérandes de cette taille). La borne ne décrit pas toute paire dont le plus grand opérande a n chiffres : un opérande très court atteint rapidement le cas de base. Maintenir la réserve sur les sommes `a+b` et `c+d`, qui peuvent avoir un chiffre supplémentaire. La limite de `len(str(x))` est déjà signalée ; éventuellement indiquer une alternative binaire ou une bibliothèque spécialisée sans transformer l'article en tutoriel d'implémentation.

**Décision :** conserver la structure et les interactions ; faire une précision locale sur la portée de la borne et hiérarchiser les sources (fondamentales, documentation, approfondissement avancé).

### A2. Calculer la complexité de la multiplication de Karatsuba — 16 min

**Réussites :** la récurrence `3T(n/2)+O(n)` est construite à partir de l'algorithme ; le coût des niveaux est distingué du nombre de feuilles ; les additions sont comptées ; les limites du modèle sont abordées.

**Constat affiné après lecture complète :** l'article traite déjà explicitement les tailles réelles des blocs, l'arrêt anticipé lorsque l'un des opérandes est court, la borne supérieure de l'implémentation pédagogique et la distinction entre cette borne et une borne inférieure de pire cas équilibré. C'est un point fort à préserver. La seule amélioration utile est de faire remonter plus tôt cette distinction, car elle apparaît tard dans la démonstration.

**Décision :** conserver la démonstration. Ajouter un renvoi ou un bref repère en amont vers la section 7, sans dupliquer son analyse.

### A3. Arbres de récursion : compter le travail à chaque niveau — 11 min, hors série

**Réussites :** guide transférable à plusieurs algorithmes ; vocabulaire défini ; distinction entre arbres équilibrés et irréguliers ; formule de coût par niveau utile.

**Risque :** chevauchement avec l'article spécialisé Karatsuba, qui réexplique la méthode. Cette répétition est acceptable si le guide enseigne la méthode générale et l'autre page l'applique au cas précis.

**Décision :** garder hors série. Faire du guide la référence générale ; dans l'article Karatsuba, réduire les rappels génériques et approfondir les hypothèses propres à l'algorithme, sans supprimer l'autonomie.

### A4. Après Karatsuba : Toom–Cook et interpolation — 10 min

**Réussites :** transition naturelle de l'identité de Karatsuba à l'évaluation-interpolation ; passage à trois blocs ; choix de cinq valeurs pour un polynôme de degré au plus quatre ; discussion des seuils pratiques.

**Constat affiné après lecture complète :** l'article justifie déjà l'intégralité des divisions par 2 et 3 en réécrivant les numérateurs à partir des coefficients entiers de R. Cette justification est correcte et doit être conservée. La variante par différences de GNU MP est présentée dans la section précédente ; une transition plus explicite pourrait rappeler qu'il s'agit d'une variante de Karatsuba, distincte de Toom–Cook.

**Décision :** aucune correction mathématique requise sur l'interpolation. Amélioration éditoriale facultative de la transition entre la variante par différences et Toom–Cook.

### A5. De Toom–Cook à la FFT : accélérer la multiplication par convolution — 12 min

**Réussites :** convolution introduite depuis le produit de polynômes ; convolution circulaire distinguée de la linéaire ; séparation FFT complexe / NTT / multiplication exacte ; explication pair-impair du coût `O(N log N)` ; précautions algébriques sérieuses.

**À améliorer :** la partie sur les racines de l'unité et l'anneau de Schönhage–Strassen est beaucoup plus avancée que l'introduction. Prévoir des repères « parcours essentiel » et « approfondissement technique ». Vérifier que les explorateurs distinguent les exemples illustratifs des hypothèses exactes des algorithmes, et que les propriétés des corps ne sont pas généralisées sans justification aux anneaux.

**Décision :** conserver le contenu technique ; mieux baliser les niveaux de lecture.

### A6. La frontière théorique de la multiplication entière — 9 min

**Réussites :** séparation claire entre borne, modèle, statut de preuve et implémentation ; distinction des travaux OpenAI, Harvey, Cui–Liu–Woodruff et du dépôt Mathlib séparé ; absence de confusion entre borne asymptotique et performance pratique ; dates de consultation.

**Vigilances :** état de l'art évolutif à revalider ; ne jamais comparer les valeurs de kappa sans aligner modèles et énoncés ; saut de difficulté élevé mais acceptable en fin de série ; les huit questions finales constituent une charge de révision qui doit être prise en compte dans la durée.

**Décision :** conserver comme destination avancée et datée ; instaurer une revalidation des sources, valeurs et statuts à chaque mise à jour.

### Bilan de la série Karatsuba

L'ordre actuel des cinq articles est cohérent : mécanisme → complexité → Toom–Cook → FFT → frontière théorique. Le guide général des arbres de récursion reste un complément méthodologique hors série. Pas de fusion ni de découpage recommandé.

---

## B. Série du paradoxe des jumeaux

### B1. Le paradoxe des jumeaux, chacun à sa montre — 7 min

**Réussites :** scénario numérique posé tôt ; résultat 10 ans / 6 ans vérifiable ; avertissement que le calcul seul ne résout pas la réciprocité ; parcours des six étapes ; explorateur utile.

**À améliorer :** l'introduction anticipe déjà des explications reprises ensuite. Garder un aperçu, mais réserver les démonstrations aux épisodes dédiés. Expliciter les prérequis implicites (référentiel inertiel, vitesse de la lumière, facteur de Lorentz). Qualifier les étapes selon leur rôle réel.

**Décision :** conserver comme porte d'entrée ; ajouter un repère « prérequis / ce que le dossier construit ».

### B2. De l'addition classique des vitesses à la relativité — 7 min

**Réussites :** exemple train/quai accessible ; dérivation depuis Lorentz ; conventions de signe ; restriction aux mouvements colinéaires ; limite classique.

**Parcours :** préparation cinématique utile, mais pas obligatoire pour tout lecteur qui connaît déjà les transformations de Lorentz.

**Décision :** conserver comme préparation recommandée/prérequis selon le niveau, sans en faire un passage obligé pour tous.

### B3. La simultanéité en relativité restreinte — 9 min

**Réussites :** synchronisation opérationnelle ; heure coordonnée distinguée de la lecture locale ; calcul 1,8 puis 8,2 ans correct dans le modèle instantané ; distinction entre simultanéité et image reçue.

**Répétition :** le calcul 1,8 → 8,2 est démontré ici. Les articles sur l'asymétrie et le Doppler le rappellent brièvement, mais ne refont pas la démonstration : le premier l'utilise pour parler des trajectoires et du changement de référentiel, le second pour distinguer simultanéité et signal reçu. Cette répétition courte est fonctionnelle et ne justifie pas une suppression.

**Décision :** conserver la démonstration et les rappels contextualisés ; aucune correction de fond nécessaire sur ce point.

### B4. Le paradoxe des jumeaux : où se trouve l'asymétrie ? — 9 min

**Réussites :** accélération propre distinguée de l'accélération de coordonnées ; refus de l'explication simpliste « l'accélération ralentit le temps » ; maximisation du temps propre correctement rattachée à Minkowski et aux événements fixés ; cas symétrique utile pour le transfert.

**À améliorer :** garder les hypothèses immédiatement attachées à l'énoncé de maximisation ; mieux distinguer changement de référentiel et accélération physique par un schéma de lignes d'univers si l'illustration actuelle ne le montre pas déjà. Le principe de Mach est un approfondissement connexe, pas un prérequis.

**Décision :** conserver ; renforcer la représentation des trajectoires si nécessaire après inspection du rendu.

### B5. Ce que les jumeaux voient : lumière et effet Doppler relativiste — 8 min

**Réussites :** distinction observation/simultanéité ; facteurs Doppler corrects à beta = 0,8 (1/3 et 3) ; comptage cohérent des tops (10 ans terrestres reçus par Kara, 6 ans du vaisseau reçus par Simon) ; signal du demi-tour reçu par Simon à la neuvième année.

**Parcours :** point de vue observationnel complémentaire, non nécessaire à la démonstration par temps propre.

**Décision :** conserver comme complément. Faire ressortir sa question propre : « que reçoit-on ? », et non « quelle durée propre mesure chaque montre ? ».

### B6. Le temps propre : ce que mesure une montre — 9 min

**Réussites :** définition différentielle et intégrale ; calcul 10 ans / 6 ans ; événements de rencontre explicités ; pas de pénalité artificielle liée à l'accélération ; expérience de symétrie.

**À améliorer :** faire de cet article l'aboutissement explicite du parcours essentiel. La maximisation du temps propre répète en partie l'article sur l'asymétrie ; garder le lien géométrique mais renvoyer à la démonstration précédente. Annoncer dès la définition le cadre de l'espace-temps plat.

**Décision :** conserver comme conclusion quantitative et synthèse du parcours essentiel.

### B7. Trois voyageurs, deux planètes — 9 min

**Réussites :** scénario défini ; rencontres locales distinguées des comparaisons calculées à distance ; tableau des temps propres cohérent ; généralisation utile à plusieurs lignes d'univers.

**Problème de classement :** généralisation après résolution du paradoxe, pas prérequis. L'inclusion dans les 58 minutes de la série laisse croire qu'elle fait partie du parcours de base.

**Décision :** conserver sans fusion ; présenter comme extension facultative / laboratoire de généralisation.

### Bilan de la série des jumeaux

La séquence actuelle mélange préparation, résolution, point de vue complémentaire et généralisation. Une première clarification a été appliquée dans l'article d'entrée : les chapitres sont maintenant annoncés selon leur rôle (préparation recommandée, parcours essentiel, point de vue complémentaire, extension). Proposition de rôles :
- entrée : article introductif ;
- préparation recommandée : composition des vitesses ;
- parcours essentiel : simultanéité → asymétrie → temps propre ;
- complément observationnel : Doppler ;
- extension : trois voyageurs ;
- approfondissement connexe hors série : inertie et principe de Mach.

Ne pas renuméroter les articles avant validation de la navigation. Les rôles peuvent d'abord être rendus visibles dans la page de série.

---

## C. Temps de lecture : état réel

Toutes les 13 pages auditées ont une valeur explicite dans leur frontmatter.

**Karatsuba :** 14 + 16 + 10 + 12 + 9 = 61 min. Le guide général (11 min) est hors série.

**Jumeaux :** 7 + 7 + 9 + 9 + 8 + 9 + 9 = 58 min.

Ces sommes sont arithmétiquement exactes, mais ne signifient pas que tous les articles sont obligatoires. Il faut distinguer durée du parcours essentiel et durée des compléments/extensions après validation des rôles.

Aucun temps n'a été chronométré sur le site rendu pendant cet audit. Ne pas modifier les valeurs sur la seule base du nombre de mots. Protocole à appliquer : lecture chronométrée du rendu, équations et figures comprises ; manipulations/exercices mesurés séparément ; répétition des cas atypiques ; ajustement seulement sur observations reproductibles.

---

## D. Accessibilité et mobile : état réel

**Indices favorables dans le code :** attributs aria-label sur certaines figures mathématiques ; composants interactifs dédiés ; états focus visibles sur certains liens et résumés ; règles responsive pour les grilles ; conteneurs de défilement pour certains tableaux.

**Tests non réalisés :**
- largeurs 320, 375, 768 et 1280 px ;
- équations longues, tableaux, figures, légendes et débordements ;
- navigation clavier et ordre du focus ;
- noms accessibles des contrôles et états des composants ;
- VoiceOver/lecteur d'écran ;
- contrastes des codes couleur et états actifs ;
- zoom 200 % ;
- préférences de réduction du mouvement et états de chargement ;
- alternatives textuelles des diagrammes.

Aucune conformité WCAG ni qualité mobile ne doit être déclarée avant ces tests sur le site publié.

---

## E. Relations entre articles : modèle à valider sur les cas réels

Le champ actuel `relatedArticles` mélange suite, prérequis, complément, approfondissement, extension et proximité thématique. Proposition de vocabulaire :
- `prerequisite` : connaissance recommandée avant lecture ;
- `next` : continuation pédagogique ;
- `complementary` : autre point de vue ;
- `deepening` : approfondissement facultatif ;
- `generalization` : transfert à un cas plus large ;
- `related` : proximité thématique sans dépendance.

La série et son ordre doivent rester distincts des relations. Ne pas implémenter avant validation des relations sur les 13 articles.

---

## F. Plan d'action priorisé

### P1 — Fond et parcours
- [x] Préciser la portée de `Theta(n^log₂3)` dans l'article Karatsuba (modèle équilibré, opérandes de taille comparable).
- [x] Qualifier dans l'article d'entrée des jumeaux la préparation, le parcours essentiel, le point de vue complémentaire et l'extension.
- [ ] Remonter un repère vers la section sur les tailles réelles et la borne de l'implémentation dans l'article de complexité.
- [x] Vérifier les reprises du résultat 1,8 → 8,2 : la démonstration complète reste dans l'article sur la simultanéité ; les autres occurrences sont des rappels contextualisés et utiles.

**Vérifications de fond déjà satisfaites :** l'article de complexité traite correctement l'arrêt anticipé et distingue borne supérieure de l'implémentation pédagogique et borne inférieure du modèle équilibré ; l'article Toom–3 justifie déjà les divisions exactes par 2 et 3. Ces deux points ne nécessitent pas de correction mathématique. Les contrôles automatisables sur le catalogue ont également été exécutés : durées présentes, relations résolues, liens d'articles internes valides et séquences sans trou, avec des conventions de départ différentes selon la série.

### P2 — Pédagogie
- [ ] Différencier le guide général des arbres de récursion de l'application à Karatsuba.
- [ ] Ajouter des repères de lecture aux sections algébriques avancées de l'article FFT.
- [ ] Faire du temps propre l'aboutissement explicite du parcours essentiel.
- [ ] Distinguer les durées du parcours obligatoire et des extensions.

### P3 — Vérifications empiriques
- [ ] Chronométrer les articles sur le site publié.
- [ ] Tester clavier et lecteur d'écran.
- [ ] Vérifier mobile et zoom.
- [ ] Contrôler contrastes, alternatives textuelles et débordements.
- [ ] Vérifier liens internes et références de relations.

## Critères de clôture

L'audit ne sera clos que lorsque chaque constat P1 aura une décision et, si nécessaire, une correction dans l'article ; les transitions auront été suivies sur le site ; les durées auront une observation documentée ou seront explicitement conservées comme estimations ; les pages auront été testées sur desktop et mobile ; les relations typées auront été validées sur les cas concrets avant leur intégration.

**Décision générale :** préserver la richesse scientifique. Améliorer les hypothèses, les rôles des articles et les parcours plutôt que supprimer des explications ou fusionner artificiellement les contenus.
