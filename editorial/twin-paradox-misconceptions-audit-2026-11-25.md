---
title: "Audit des idées fausses sur le paradoxe des jumeaux"
date: 2026-11-25
status: "working-audit"
scope: "Inventaire des incompréhensions, couverture de la série, limites et ingestion documentaire"
series: "paradoxe-des-jumeaux"
---

# Audit des idées fausses sur le paradoxe des jumeaux

## 1. Objet et méthode

Ce document transforme l'inventaire des erreurs courantes en grille de contrôle durable pour la série **Le paradoxe des jumeaux : comparer deux temps vécus**.

Il ne s'agit pas de constituer un catalogue autonome de curiosités. Chaque idée fausse doit être traitée là où le raisonnement qui la corrige devient nécessaire. La série doit remplacer les slogans par un modèle mental vérifiable, sans créer un article supplémentaire pour chaque confusion.

L'audit distingue quatre états :

- **Couverture explicite** : l'article formule la distinction et donne le raisonnement nécessaire.
- **Couverture partielle** : l'idée apparaît, mais une formulation, une démonstration ou une limite manque.
- **Renvoi nécessaire** : l'article doit orienter vers un autre chapitre plutôt que répéter sa démonstration.
- **À traiter / vérifier** : le point n'est pas encore couvert de façon suffisamment explicite ou sa présence doit être confirmée sur le rendu.

L'évaluation ci-dessous porte sur les contenus MDX de `main`, après fusion des PR #127 et #129, consultés le 25 novembre 2026. Elle constitue une revue textuelle; elle ne vaut pas validation du site rendu, des interactions, de l'accessibilité ni des contrôles visuels desktop/mobile. Les durées déclarées en frontmatter ne sont pas des mesures chronométrées.

## 2. Le modèle mental que la série doit construire

Le lecteur doit apprendre à séparer quatre objets :

1. **Temps propre** : durée accumulée par une horloge le long de sa ligne d'univers.
2. **Temps coordonné et simultanéité** : dates assignées aux événements par un référentiel et une procédure de synchronisation.
3. **Signaux reçus** : événements d'émission passés dont la lumière atteint l'observateur ; leur cadence dépend notamment du Doppler.
4. **Géométrie de l'espace-temps** : structure qui détermine les durées propres entre événements et permet de comparer les trajectoires.

L'accélération caractérise la trajectoire et le changement de référentiel du voyageur dans le scénario standard. Elle n'est pas une « pénalité temporelle » ajoutée au calcul du temps propre. Enfin, les résultats du cas plat standard ne doivent pas être transformés en lois universelles sur toutes les trajectoires et tous les espaces-temps.

## 3. Registre des erreurs et suivi de couverture

| ID | Idée fausse ou raccourci | Correction scientifique attendue | Article responsable | État initial |
|---|---|---|---|---|
| M01 | « Le temps ralentit quand on va vite. » | Toujours préciser le référentiel, les événements comparés et la procédure de datation. Une horloge mesure localement son temps propre ; la comparaison porte sur des trajectoires. | Page principale + temps propre | Couverture partielle : distinctions présentes, slogan à désamorcer explicitement. |
| M02 | « Chacun voit l'autre ralentir, donc ils doivent finir au même âge. » | La réciprocité concerne les descriptions inertielle locales ; les observateurs ne choisissent pas les mêmes événements distants comme simultanés. Le voyageur change de référentiel. | Simultanéité + asymétrie | Couverture explicite, à vérifier sur les transitions et les exercices. |
| M03 | « C'est l'accélération qui fait vieillir moins vite. » | Le vieillissement se calcule par intégration du temps propre. L'accélération n'est pas une pénalité ; elle intervient dans la trajectoire et le changement de référentiel. | Temps propre + asymétrie | Couverture explicite, nuance à maintenir dans tous les résumés. |
| M04 | « Il faut la relativité générale pour résoudre le paradoxe. » | Le scénario standard se résout en relativité restreinte dans l'espace-temps plat. La relativité générale étudie d'autres situations où la métrique et la gravitation comptent. | Page principale + asymétrie | Couverture explicite après ajout d'une phrase frontale sur la suffisance de la relativité restreinte et l'absence de nécessité de la RG. |
| M05 | « Le voyageur saute dans le futur au demi-tour. » | Le saut de 1,8 à 8,2 ans est une réattribution de simultanéité à distance dans le modèle à virage instantané ; la montre terrestre reste continue et indique 5 ans. | Page principale + simultanéité | Couverture explicite ; conserver l'expression « date attribuée » et éviter « saut du temps ». |
| M06 | « Le voyageur voit réellement l'horloge terrestre sauter/accélérer. » | Voir une horloge signifie recevoir des signaux émis dans le passé. Ce n'est ni une lecture simultanée ni une date coordonnée. | Signaux et Doppler | Couverture explicite ; contrôler les légendes et les conventions de signe. |
| M07 | « Le temps propre n'existe que dans le référentiel où l'objet est au repos. » | Le temps propre est un invariant associé à la ligne d'univers ; on peut le calculer dans tout système de coordonnées adapté. | Temps propre | À vérifier explicitement : invariance et indépendance du choix de coordonnées doivent être démontrées ou justifiées. |
| M08 | « Le voyageur vieillit moins parce qu'il parcourt une plus grande distance spatiale. » | La comparaison relève de la métrique de Minkowski, pas d'une longueur euclidienne. Dans l'espace-temps plat, la ligne inertielle entre deux événements temporellement séparés maximise le temps propre. | Temps propre | Couverture explicite par la section de maximalité ; vérifier que l'analogie géométrique n'est pas simplifiée à l'excès. |
| M09 | « Simon est absolument immobile ; la Terre est le repos absolu. » | Aucun référentiel inertiel privilégié. La station terrestre est une idéalisation explicitement choisie pour le calcul. | Page principale | Couverture explicite après ajout indiquant que le référentiel de Simon est un choix de calcul, non un repos absolu. |
| M10 | « Même départ et même arrivée impliquent même durée vécue. » | Les événements extrêmes sont communs, mais les lignes d'univers diffèrent ; le temps propre dépend de toute la trajectoire. | Temps propre | Couverture explicite. |
| M11 | « Le paradoxe révèle une contradiction de la relativité. » | Il s'agit d'une contradiction apparente avec l'intuition classique ; la contradiction disparaît lorsqu'on cesse de prolonger la réciprocité locale à l'histoire globale. | Page principale + asymétrie | Couverture explicite après définition du mot « paradoxe » comme contradiction apparente avec l'intuition classique, et non contradiction interne. |
| M12 | « Le jumeau accéléré est toujours le plus jeune. » | C'est le résultat du scénario standard dans Minkowski, pas une loi universelle pour des espaces-temps courbes ou des configurations arbitraires. | Asymétrie + trois voyageurs | Partiel : contre-exemple de symétrie présent ; limites en relativité générale à signaler sans transformer la série en cours de RG. |
| M13 | « Plus l'accélération est forte/longue, plus le vieillissement est faible. » | L'accélération propre seule ne détermine pas l'écart d'âge. Il faut comparer les lignes d'univers et intégrer le temps propre. | Asymétrie + temps propre | Couverture partielle ; préciser ce qui est déterminé par la trajectoire complète. |
| M14 | « L'effet Doppler explique à lui seul les âges finaux. » | Le Doppler décrit la cadence des signaux reçus ; les âges finaux sont les durées propres aux retrouvailles. Les deux calculs répondent à des questions différentes. | Signaux et Doppler | Couverture explicite. |
| M15 | « La relativité du temps est un effet visuel ou une illusion de mesure. » | Les lectures locales des horloges sont physiques ; la différence finale est directement constatable lorsque les horloges se retrouvent. Les signaux ne sont qu'un protocole d'observation à distance. | Temps propre + signaux | À expliciter dans la synthèse de fin de parcours. |
| M16 | « Le demi-tour instantané est physiquement réaliste. » | C'est une idéalisation de calcul. Une manœuvre réelle dure un temps fini et le référentiel comobile évolue continûment ; le temps propre s'intègre pendant toute la manœuvre. | Page principale + asymétrie | Couverture explicite ; ajouter si nécessaire un exemple à accélération finie, sans nouvel article. |
| M17 | « La Terre réelle est un référentiel inertiel. » | La station est idéalisée ; rotation, orbite et gravitation sont négligées dans le scénario standard. Les expériences réelles exigent des corrections supplémentaires. | Page principale + trois voyageurs | Couverture partielle ; clarifier que « terrestre » désigne le référentiel du modèle, non une description complète de la Terre. |
| M18 | « Une expérience de pensée n'a aucun appui expérimental. » | Le scénario humain exact est fictif, mais les mécanismes utilisés sont testés par les horloges atomiques, les particules relativistes et les expériences de transport d'horloges. | Temps propre | Couverture explicite après ajout des expériences des muons du CERN, Hafele–Keating et des horloges optiques de Chou et al.; le texte précise qu'aucune ne reproduit exactement le scénario humain. |
| M19 | « La composition des vitesses permet d'additionner librement les vitesses relatives. » | La transformation relativiste des vitesses préserve la borne (c) ; les vitesses doivent être rapportées à des référentiels clairement définis. | Composition des vitesses | Couverture explicite. |
| M20 | « Le changement de simultanéité est une convention arbitraire sans contenu physique. » | La simultanéité à distance dépend du référentiel et de la procédure de synchronisation ; les prédictions observables et les rencontres restent cohérentes. | Simultanéité | À renforcer : expliciter la procédure d'Einstein/radar et le statut opérationnel des dates attribuées. |
| M21 | « Une vitesse de coordonnées supérieure à (c) viole la relativité. » | Une vitesse de coordonnées dépend des coordonnées ; la vitesse locale mesurée reste limitée par (c). Ce point relève d'un approfondissement sur les coordonnées accélérées, pas du parcours essentiel. | Renvoi vers Wiki Knowledge / approfondissement | Hors périmètre du cœur de la série ; garder un renvoi si le sujet est évoqué. |
| M22 | « Le principe de Mach ou la gravitation est nécessaire à l'explication. » | Le paradoxe standard n'exige ni principe de Mach ni champ gravitationnel. Ces sujets constituent des prolongements historiques ou relativistes distincts. | Page principale + pour aller plus loin | À clarifier dans la page d'entrée et les liens connexes. |

### 3.1 Règles de formulation

Éviter comme explications autonomes :

- « Le temps ralentit pour le voyageur. »
- « L'accélération ralentit son temps. »
- « Le voyageur saute dans le futur. »
- « Il voit l'horloge terrestre accélérer. »
- « Le chemin du voyageur est plus long, donc son temps est plus court. »

Préférer, selon le contexte :

- « Dans le référentiel inertiel terrestre, la durée coordonnée entre ces événements est… »
- « La montre embarquée accumule le temps propre… »
- « Le référentiel comobile attribue à cet événement terrestre la date… »
- « Le signal reçu porte la date d'émission… »
- « Dans l'espace-temps de Minkowski, la trajectoire inertielle entre ces événements maximise le temps propre. »

Le raccourci « dilatation du temps » reste acceptable si le référentiel et la comparaison sont déjà définis.

## 4. Couverture réelle de la série : état initial

L'analyse des sept contenus MDX de la branche de travail montre que l'architecture est déjà bien alignée avec les grandes familles de confusion :

| Article | Contribution réelle observée | Contrôle restant |
|---|---|---|
| `paradoxe-des-jumeaux` | Hypothèses du modèle, scénario, réciprocité, réattribution 1,8 → 8,2 ans, distinction temps propre/simultanéité/signaux, idéalisation du demi-tour. | Rendre explicites « pas de repos absolu », « pas besoin de RG », « paradoxe apparent » ; s'assurer que les trois distinctions sont comprises avant l'explorateur. |
| `temps-propre-paradoxe-jumeaux` | Événements, référentiels, lignes d'univers, métrique de Minkowski, calcul 10/6 ans, maximalité de la trajectoire inertielle, absence de pénalité d'accélération, trajectoires symétriques. | Vérifier l'invariance du résultat, la preuve de maximalité et les limites exactes de ce théorème. |
| `simultaneite-relativite-restreinte` | Synchronisation d'horloges distantes, référentiels aller/retour, calcul du changement de simultanéité, distinction avec les signaux. | Vérifier que la procédure opérationnelle et les conventions de signe sont suffisamment introduites pour un novice. |
| `asymetrie-paradoxe-jumeaux` | Réciprocité locale, accéléromètre, segments inertiels du voyageur, accélération et vieillissement différentiel, test de symétrie. | Ne pas réduire l'asymétrie à « un seul accélère » ; distinguer accélération propre, changement de référentiel et trajectoire globale. |
| `signaux-doppler-relativiste` | Voir n'est pas dater, propagation lumineuse, Doppler, comptage des tops et insuffisance de la seule observation pour résoudre le paradoxe. | Vérifier quantitativement les conventions, les dates d'émission/réception et les durées de réception des deux observateurs. |
| `composition-vitesses-relativite` | Limite de l'addition classique, invariance de (c), composition relativiste et origine de la formule. | Garder cette préparation facultative ; ne pas imposer toute la dérivation avant l'entrée dans le paradoxe. |
| `trois-voyageurs-deux-planetes` | Plusieurs trajectoires et rencontres, calculs de temps propre, rejet des règles simplistes. | Vérifier que l'extension ne donne pas l'impression que l'accélération propre suffit à classer les âges dans toute géométrie. |

Cette table est un **état de couverture du contenu source**, pas une validation finale. La prochaine revue doit relire les paragraphes concernés et le rendu, puis remplacer les états « partiel/à vérifier » par des décisions explicites.

## 5. Interventions éditoriales recommandées

Ne pas créer un article autonome sur les idées fausses. Répartir les corrections dans les pages existantes.

### P0 — Clarifications courtes dans la page principale

1. Ajouter une phrase indiquant que le paradoxe standard se résout en relativité restreinte, dans un espace-temps plat.
2. Préciser que le référentiel terrestre est un référentiel inertiel idéalisé, et non un repos absolu.
3. Qualifier le mot « paradoxe » : contradiction apparente avec l'intuition classique, pas incohérence de la théorie.
4. Introduire les trois comparaisons : durée propre, date simultanée attribuée, signal reçu.
5. Garder le résultat 1,8 → 8,2 ans comme réattribution de date, jamais comme saut physique de l'horloge.

### P0 — Consolidation des chapitres essentiels

- **Temps propre** : vérifier la preuve de maximalité en signature choisie, l'invariance de la durée et la distinction entre longueur spatiale et intervalle de Minkowski.
- **Simultanéité** : dériver la synchronisation et les dates attribuées ; ne pas confondre date radar, simultanéité d'Einstein et signal reçu.
- **Asymétrie** : expliquer pourquoi « un seul accélère » identifie une différence de trajectoire sans constituer à lui seul une démonstration ; distinguer accélération propre, accélération de coordonnées et changement de référentiel.

### P1 — Signaux et limites de généralisation

- **Doppler** : faire vérifier les formules et le sens des facteurs pour chaque phase ; présenter le Doppler comme protocole d'observation, pas comme mécanisme de vieillissement.
- **Trois voyageurs** : expliciter le domaine du résultat de maximalité et ajouter un renvoi vers un approfondissement sur les espaces-temps courbes si le lecteur veut dépasser Minkowski.
- **Expériences** : la section sourcée est ajoutée à l'article sur le temps propre; vérifier sur le rendu que les résultats et la distinction entre mécanismes testés et scénario fictif restent lisibles.

## 6. Travail documentaire à mener dans Wiki Knowledge

### 6.1 État du corpus connu

Le concept canonique `paradoxe-des-jumeaux` référence déjà un corpus conséquent : sources historiques (Langevin, Nordmann, Einstein), explications contemporaines, démonstrations, expériences d'horloges, signaux et Doppler, topologie, temps radar et variantes. Deux synthèses existantes sont particulièrement pertinentes :

- `parcours-pedagogique-paradoxe-des-jumeaux` : comparaison des ressources pédagogiques, progression conceptuelle et cahier des charges visuel.
- `jumeaux-inertie-et-principe-de-mach` : synthèse plus large des arguments, objections, variantes, signaux et questions sur l'inertie.

La série publique ne doit pas recopier ces documents. Wiki Knowledge conserve les claims, les controverses, les sources et les nuances ; Knowledge Stories construit une progression autonome et sélectionne les démonstrations utiles.

### 6.2 Sources candidates à ingérer ou à compléter

L'ingestion doit commencer par un contrôle d'existence dans `raw/`, `wiki/sources/`, le registre et les claims déjà extraits. Une URL citée dans une synthèse ne signifie pas que la source a été ingérée comme fiche canonique.

| Priorité | Source | Apport ciblé | Traitement |
|---|---|---|---|
| P0 | da Câmara, Lemos, Calvão & Sasse (2025), *Twins in relativistic spacetimes: dispelling some misconceptions*, DOI 10.1590/1806-9126-RBEF-2025-0049, arXiv:2509.21455 | Contre-exemples à « accéléré = plus jeune », distinctions en espace-temps courbe, absence de corrélation universelle entre Doppler et vieillissement. | Source, extraction et synthèse intégrées dans Wiki Knowledge. Reproductions ciblées C/K, D/K, U/K et D/C engagées; poursuivre D/U, U/C et les courbes complètes. Voir Wiki Knowledge PR #172. |
| P0 | Herrmann & Pohlig (2024), *Two ways to slower aging — or just one?*, DOI 10.31349/RevMexFisE.21.010202 | Met en relation des effets souvent séparés en relativité restreinte et générale ; utile pour clarifier les interprétations de « ralentissement ». | Ingérer et comparer avec le concept canonique ; vérifier précisément la portée de leur unification. |
| P1 | *The “twin paradox”: the role of acceleration*, Canadian Journal of Physics (2019), DOI 10.1139/cjp-2018-0788 | Calcul du temps propre depuis les deux points de vue et rôle de l'accélération dans le référentiel du voyageur. | La ressource figure déjà dans la synthèse pédagogique ; vérifier l'absence de fiche source et l'ingérer si elle n'existe pas. |
| P1 | Fung, Clark, Lewis & Wu (2016), *A computational approach to the twin paradox in curved spacetime*, European Journal of Physics 37, 055602, DOI 10.1088/0143-0807/37/5/055602 | Méthode numérique de comparaison des temps propres en espace-temps courbe ; limite de la règle géodésique = âge maximal. | Source d'approfondissement ; ne pas la faire entrer dans le parcours essentiel. |
| P1 | *Boomeranging through the Earth: When free fall doesn't maximize proper time*, American Journal of Physics (2026), DOI à relever sur la page éditeur | Exemple pédagogique avancé où la chute libre ne maximise pas le temps propre, avec point conjugué. | Vérifier métadonnées, version publiée et calculs ; relier à la fiche canonique seulement après revue. |
| P2 | *The twin paradox in the vicinity of rotating black holes* (2026), DOI 10.1088/1361-6404/ae83ed | Extension numérique en géométrie de Kerr et rôle des points conjugués. | Approfondissement spécialisé ; extraire seulement les résultats nécessaires et vérifier le statut éditorial. |
| P2 — controverse | Vavryčuk & Křížek (2024), *Symmetric twin paradox for free-falling frames*, DOI 10.1016/j.physleta.2024.129886, et la réponse publiée en 2025, DOI 10.1016/j.physleta.2025.130579 | Controverse sur les référentiels en chute libre, la synchronisation et l'interprétation des transformations de Lorentz. | Ingérer les deux textes ensemble ; documenter arguments et réponse, distinguer résultats établis, hypothèses et conclusions contestées. Ne pas présenter le titre ou l'abstract comme un résultat acquis. |

### 6.3 Protocole d'ingestion et de compilation

Pour chaque source retenue :

1. **Identifier** : auteur, titre, date, revue, DOI, version, statut (publié/prépublication/commentaire), licence et URL canonique.
2. **Capturer** le texte ou PDF dans `raw/` sans altérer la source ; noter la date d'accès et l'empreinte.
3. **Extraire** les claims atomiques : proposition, hypothèses, équations, démonstration, exemple, contre-exemple, limite, citation/page/section.
4. **Qualifier** chaque claim : résultat établi, hypothèse, interprétation pédagogique, conjecture, critique ou résultat contesté.
5. **Comparer** les claims au concept canonique et aux synthèses : nouveauté, confirmation indépendante, contradiction apparente, changement de domaine de validité, simple reformulation.
6. **Décider** pour chaque apport : enrichir le concept, compléter une synthèse, ouvrir une alerte/controverse, ou ne pas intégrer avec justification.
7. **Mettre à jour** les liens bidirectionnels concept ↔ source, les relations, le registre et les index générés.
8. **Valider** les citations, les calculs, les unités, les conventions de signature et les hypothèses. Une ingestion automatisée ne valide pas une interprétation physique.

Ne pas créer une nouvelle page de concept pour chaque idée fausse. Les notions doivent enrichir les concepts existants (temps propre, simultanéité, référentiels, accélération propre, Doppler, géodésique, espace-temps courbe). Les idées fausses sont des relations entre une affirmation populaire, une confusion et le résultat scientifique qui la corrige.

### 6.4 Livrables attendus côté Wiki Knowledge

- fiches sources complètes et traçables pour les sources retenues ;
- mise à jour du concept canonique du paradoxe des jumeaux ;
- matrice « misconception → claim scientifique → sources → pages canoniques » ;
- synthèse comparative des résultats qui se généralisent ou non de Minkowski aux espaces-temps courbes ;
- alertes documentées pour les controverses, notamment les articles contradictoires sur les référentiels en chute libre ;
- journal d'ingestion et validation du registre/liens.

## 7. Critères de clôture

L'audit sera considéré comme suffisamment traité lorsque :

- chaque idée fausse M01–M22 est soit corrigée dans un article, soit explicitement déclarée hors périmètre avec un renvoi pertinent ;
- chaque correction importante s'appuie sur une démonstration ou une source vérifiable, pas seulement sur une formule de conclusion ;
- aucun article n'utilise « ralentissement du temps », « saut » ou « accélération » sans préciser la grandeur physique concernée ;
- les résultats du modèle plat ne sont pas généralisés à la relativité générale ;
- le corpus Wiki Knowledge distingue les sources déjà ingérées des simples références bibliographiques ;
- les sources contradictoires sont comparées, et non fusionnées en une synthèse artificiellement consensuelle ;
- les articles restent autonomes, sans perte de contenu et dans la cible de 7 à 15 minutes de lecture réelle ;
- les rendus desktop/mobile, les interactions, la navigation clavier et les alternatives textuelles sont contrôlés.

## 8. Sources de repérage

- Einstein Online, [The case of the travelling twins](https://www.einstein-online.info/en/spotlight/twins/).
- UNSW, [Einstein Light — Twin Paradox](https://www.phys.unsw.edu.au/einsteinlight/jw/module4_twin_paradox.htm).
- *The “twin paradox”: the role of acceleration*, Canadian Journal of Physics (2019), [DOI 10.1139/cjp-2018-0788](https://doi.org/10.1139/cjp-2018-0788).
- Herrmann & Pohlig (2024), [Two ways to slower aging — or just one?](https://doi.org/10.31349/RevMexFisE.21.010202).
- da Câmara et al. (2025), [Twins in relativistic spacetimes: dispelling some misconceptions](https://doi.org/10.1590/1806-9126-RBEF-2025-0049), [arXiv:2509.21455](https://arxiv.org/abs/2509.21455).
- Fung et al. (2016), [A computational approach to the twin paradox in curved spacetime](https://doi.org/10.1088/0143-0807/37/5/055602).
- Vavryčuk & Křížek (2024), [Symmetric twin paradox for free-falling frames](https://doi.org/10.1016/j.physleta.2024.129886), et commentaire (2025), [DOI 10.1016/j.physleta.2025.130579).

Les sources de recherche sont des pistes de travail, pas une validation automatique. Les textes et calculs doivent être contrôlés avant toute reprise dans un article public.


### 6.5 Avancement documentaire vérifié au 25 novembre 2026

- **da Câmara et al. (2025)** : fiche source, capture paraphrasée, extraction et synthèse présentes dans Wiki Knowledge. Le PDF publié est accessible; le relevé local n'est pas une copie intégrale. Le cas D/C de la section 5.6 est reproduit indépendamment; C/K, D/K et U/K ont fait l'objet de vérifications numériques ciblées. D/U, U/C et les familles complètes de courbes restent à traiter.
- **Expériences de temps propre** : l'article Knowledge Stories référence désormais les expériences de Bailey et al. (muons au CERN, 1977), Hafele–Keating (horloges atomiques transportées, 1972) et Chou et al. (horloges optiques, 2010), avec une distinction explicite entre les mécanismes testés et le scénario fictif des jumeaux.
- **Herrmann & Pohlig (2024)** : fiche source et extraction intégrées au dossier consolidé Wiki Knowledge PR #171, maintenant fusionné.
- **Vavryčuk & Křížek (2024) et Lambare (2025)** : dossier contradictoire et comparaison intégrés dans la PR #171 fusionnée. La capture de Lambare reste explicitement partielle; ne pas la présenter comme un examen du texte intégral.
- **Wiki Knowledge issue #167** : toujours ouverte. La PR #172 porte les vérifications numériques complémentaires; ses workflows sont actuellement en échec avec des jobs sans étapes et sans logs exploitables. Ne pas traiter sa CI comme validée.
- **Knowledge Stories** : PR #127 (parcours de sept articles) et PR #129 (portée de la maximalité en Minkowski) sont fusionnées. L'issue #121 reste ouverte. La présente revue ne remplace pas la revue visuelle responsive, les contrôles clavier/lecteur d'écran ni la vérification du rendu publié.
