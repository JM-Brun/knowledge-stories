# Réserve éditoriale — idées pour les prochains calendriers

Date de constitution : 26 novembre 2026  
Statut : réserve d'idées extraites ou écartées du cadrage 2026 ; aucune idée n'est automatiquement programmée.

## 1. Rôle de cette réserve

Ce document conserve les idées, mécanismes et angles qui sont apparus pendant la rédaction ou l'audit du calendrier 2026, mais qui ne doivent pas surcharger les articles actuels.

**Mettre une idée en réserve ne signifie ni l'abandonner ni décider qu'elle sera publiée.** Elle pourra devenir une journée d'un calendrier ultérieur, un article autonome, une série, un encadré ou rester une note de recherche.

La réserve évite de supprimer une idée intéressante parce qu'elle dépasse la promesse d'un article, ou de la réintroduire plus tard sans se souvenir de son origine et de ses chevauchements. Chaque entrée conserve provenance, question possible, noyau scientifique, intérêt, précautions et maturité.

## 2. Idées extraites des articles J01–J05

### R01 — Métrologie et qualité d'une variable au-delà de répétabilité/justesse

- **Origine :** J01, article sur la mesure.
- **Matériau à préserver :** résolution, cadence d'acquisition, fidélité, traçabilité, incertitude de la référence, définition du mesurande, validité du construit, réactivité de la mesure et chaîne de production d'une variable.
- **Question possible :** « Que signifie réellement mesurer une propriété qui n'est pas directement observable ? »
- **Noyau :** modèle de mesure, opérationnalisation, erreur instrumentale, variable latente et validité de construit.
- **Intérêt DS :** très élevé pour les données issues de capteurs, questionnaires, annotations, instruments et systèmes métier.
- **Format :** article autonome sur la mesure de construits latents ou dossier sur la qualité sémantique des features.
- **Précaution :** ne pas refaire J01 sur répétabilité et justesse ; se concentrer sur ce que la variable représente et la validité de son opérationnalisation.
- **Maturité :** piste à documenter.

### R02 — Sélection, collider et transportabilité

- **Origine :** J02, article sur taille d'échantillon et sélection.
- **Matériau :** conditionnement sur le fait d'être observé, biais de sélection, associations induites, transportabilité, positivité/support commun, mécanisme de sélection et pondération.
- **Question possible :** « Comment le fait de ne regarder que les données disponibles peut-il créer une relation qui n'existe pas dans la population ? »
- **Noyau :** DAG, collider bias, sélection sur une variable commune, sélection des cas complets et limites de la correction.
- **Intérêt DS :** très élevé pour données observationnelles, benchmarks, cohortes et populations de déploiement.
- **Format :** article avec paradoxe de Berkson ou Simpson ; série courte sur sélection et transportabilité.
- **Précaution :** distinguer confusion, sélection, collider et changement de distribution ; ne pas présenter l'importance weighting comme solution universelle.
- **Maturité :** piste forte.

### R03 — Résumés statistiques face aux queues, à l'ordre et à l'hétérogénéité

- **Origine :** J03, article sur les résumés statistiques et Anscombe.
- **Matériau :** quantiles, asymétrie, queues lourdes, valeurs extrêmes, multimodalité, ordre temporel, distributions conditionnelles, sous-populations et limites des moments.
- **Question possible :** « Quand la moyenne devient-elle une mauvaise description du risque ? »
- **Noyau :** robustesse, statistiques d'ordre, quantiles, queues lourdes et agrégats qui masquent l'hétérogénéité.
- **Intérêt DS :** très élevé en monitoring, risques, SLA, latences, revenus, métriques de modèle et données déséquilibrées.
- **Format :** enquête comparative sur moyenne, médiane, quantiles et mesures de queue.
- **Précaution :** ne pas répéter Anscombe ni l'argument général sur la visualisation ; choisir une question ciblée (risque extrême, robustesse ou hétérogénéité).
- **Maturité :** piste forte.

### R04 — Dépendance, taille effective et pseudo-réplication

- **Origine :** J04, article sur covariance et variance d'une somme.
- **Matériau :** observations corrélées, prompts paraphrasés, mesures répétées, grappes, bootstrap par groupes, taille effective d'échantillon, dépendance intra-classe et pseudo-réplication.
- **Question possible :** « Cent observations corrélées contiennent-elles autant d'information que cent observations indépendantes ? »
- **Noyau :** design effect, corrélation intra-classe, taille effective, erreurs standards sous dépendance et unités indépendantes.
- **Intérêt DS :** très élevé pour benchmarks, évaluation de modèles, données longitudinales et expériences groupées.
- **Format :** article autonome centré sur taille effective et pseudo-réplication.
- **Précaution :** J04 explique la covariance dans la variance d'une somme ; le futur article doit traiter l'inférence et l'incertitude d'échantillonnage sous dépendance, pas répéter cette dérivation.
- **Maturité :** piste forte.

### R05 — Information mutuelle comme mesure de dépendance non linéaire

- **Origine :** J05, article sur entropie et incertitude.
- **Matériau :** entropie conditionnelle, information mutuelle, calcul sur distributions discrètes, comparaison avec covariance/corrélation et dépendances non linéaires.
- **Question possible :** « Comment détecter une dépendance que la corrélation ne voit pas ? »
- **Noyau :** information mutuelle, indépendance, variables transformées et estimation empirique de l'information.
- **Intérêt DS :** élevé pour analyse exploratoire, sélection de variables et dépendance statistique.
- **Format :** article avec contre-exemple où covariance nulle coexiste avec dépendance déterministe.
- **Précaution :** ne pas vendre l'information mutuelle comme solution universelle : estimation difficile en continu, biais d'échantillonnage, dépendance à la discrétisation/estimateur et absence d'interprétation causale.
- **Maturité :** piste forte.

### R06 — Incertitude aléatoire et incertitude épistémique

- **Origine :** J05, passage sur le désaccord entre modèles.
- **Matériau :** ambiguïté intrinsèque, désaccord entre modèles, ensemble de prédicteurs, manque de couverture, apprentissage actif et décomposition de l'incertitude.
- **Question possible :** « Deux modèles également incertains ont-ils besoin des mêmes données supplémentaires ? »
- **Noyau :** aleatoric vs epistemic uncertainty, entropie prédictive, désaccord d'ensemble et valeur d'une annotation supplémentaire.
- **Intérêt DS :** très élevé en classification, active learning, détection hors distribution et systèmes à haut risque.
- **Format :** article avec deux situations ayant la même entropie prédictive mais des causes d'incertitude différentes.
- **Précaution :** préciser les hypothèses et limites des décompositions ; ne pas présenter la variance entre modèles comme mesure universelle de l'incertitude épistémique.
- **Maturité :** piste forte, sources spécialisées à réunir.

### R07 — Entropie différentielle et dépendance à la représentation

- **Origine :** J05, passage sur les variables continues.
- **Matériau :** changement d'unité, transformation de densité, entropie différentielle pouvant être négative et distinction avec l'entropie discrète.
- **Question possible :** « Peut-on comparer l'incertitude de deux variables continues en comparant leurs entropies ? »
- **Noyau :** entropie différentielle, changement de variable, Jacobien et invariance des quantités informationnelles pertinentes.
- **Intérêt DS :** moyen à élevé, notamment en modélisation probabiliste et théorie de l'information.
- **Format :** note mathématique ou article spécialisé ; peut être trop technique pour une journée généraliste sans bonne expérience.
- **Précaution :** ne pas traiter l'entropie différentielle comme l'équivalent direct de l'entropie discrète.
- **Maturité :** à évaluer.

### R08 — Scores probabilistes et qualité d'une prévision

- **Origine :** J05 ; frontière volontairement réservée à J18 dans le calendrier 2026.
- **Matériau :** log-loss, score de Brier, calibration, sharpness et évaluation des distributions prédictives.
- **Question possible :** « Comment évaluer une prévision qui annonce une distribution plutôt qu'une réponse ? »
- **Noyau :** proper scoring rules, calibration, résolution et décomposition des scores.
- **Intérêt DS :** très élevé.
- **Format :** article spécialisé, à condition de ne pas dupliquer J18.
- **Précaution :** J18 couvre déjà la calibration ; réutiliser cette idée seulement avec un angle nouveau (propriétés des scores, incitations à annoncer des probabilités honnêtes ou décomposition d'un score).
- **Maturité :** réserve conditionnelle.

## 3. Idées émergées de la réévaluation J06–J24

Ces idées n'ont pas été retirées d'articles publiés ; elles sont apparues comme alternatives ou approfondissements pendant l'audit.

### R09 — Paradoxe de Simpson et inversions sous agrégation
- **Origine :** proposition de recentrage de J06.
- **Question :** « Comment une conclusion peut-elle s'inverser lorsqu'on regroupe les données ? »
- **Noyau :** agrégation, stratification, distributions conditionnelles et causalité.
- **Intérêt DS :** très élevé.
- **Précaution :** ne pas en faire un exemple spectaculaire isolé ; expliciter les poids de groupes et les hypothèses causales.

### R10 — Paradoxe de Berkson et biais de sélection
- **Origine :** alternative évoquée pour compléter J06 et R02.
- **Question :** « Pourquoi sélectionner les cas observés peut-il créer une corrélation ? »
- **Noyau :** collider, conditionnement et sélection.
- **Intérêt DS :** très élevé.
- **Précaution :** chevauchement important avec R02 et J06 ; choisir un récit central ou concevoir une série cohérente.

### R11 — Conditionnement numérique et problèmes mal conditionnés
- **Origine :** piste nouvelle identifiée pendant la réévaluation.
- **Question :** « Pourquoi une petite erreur sur les données peut-elle produire une grande erreur sur le résultat ? »
- **Noyau :** conditionnement, stabilité numérique, valeurs singulières, régression, inversion de matrices et précision finie.
- **Intérêt DS :** très élevé pour calcul scientifique, optimisation, modèles linéaires et pipelines numériques.
- **Format :** excellente journée mathématique, avec expérience calculée et visualisation des directions sensibles.
- **Précaution :** distinguer conditionnement du problème et stabilité de l'algorithme.
- **Maturité :** priorité haute.

### R12 — Moyenne, robustesse et événements extrêmes
- **Origine :** piste nouvelle issue de la critique de J03.
- **Question :** « Quand la moyenne cesse-t-elle de décrire le risque ? »
- **Noyau :** queues lourdes, variance infinie ou instable, médiane, quantiles et statistiques robustes.
- **Intérêt DS :** très élevé.
- **Précaution :** différencier ce sujet de J03 en se concentrant sur l'inférence et les décisions sous queues lourdes.

### R13 — Les clusters sont-ils une propriété des données ?
- **Origine :** transformation proposée pour J22.
- **Question :** « Les groupes découverts changent-ils lorsque nous changeons la représentation ? »
- **Noyau :** métrique, standardisation, densité, stabilité et validation non supervisée.
- **Intérêt DS :** élevé.
- **Précaution :** ne pas refaire un tutoriel k-means ; démontrer la dépendance de la partition aux choix de représentation.

### R14 — Dérive et changement de régime
- **Origine :** recentrage proposé pour J23.
- **Question :** « Que devient un modèle lorsque la relation qu'il a apprise change ? »
- **Noyau :** covariate shift, concept drift, rupture, détection et adaptation.
- **Intérêt DS :** très élevé.
- **Précaution :** préserver la distinction entre changement de P(X), de P(Y) et de P(Y|X) ; le calendrier 2026 traite déjà une partie de cette matière en J23.

## 4. Règles de gestion de la réserve

Pour chaque nouvelle idée :
1. conserver la provenance précise (article, journée, source ou discussion) ;
2. écrire une question candidate, pas seulement un thème ;
3. expliciter intérêt professionnel et mécanisme scientifique ;
4. noter les chevauchements avec les journées déjà publiées ou programmées ;
5. préciser ce qui rendrait l'idée autonome ;
6. indiquer les sources ou concepts à vérifier ;
7. conserver les idées rejetées ou fusionnées avec leur raison, plutôt que les effacer.

Avant réutilisation :
- vérifier si l'idée a entre-temps été publiée dans Knowledge Stories ou un autre projet ;
- vérifier sources, état des connaissances et exemples ;
- choisir un angle distinct du contenu déjà publié ;
- réévaluer intérêt, public et durée ;
- reconstruire une narration adaptée, sans recopier mécaniquement sections ou figures.

## 5. Priorités indicatives

| Idée | Potentiel | Priorité de réexamen |
|---|---|---|
| R11 — Conditionnement numérique | Très élevé | Haute |
| R04 — Taille effective et pseudo-réplication | Très élevé | Haute |
| R06 — Incertitude aléatoire/épistémique | Très élevé | Haute |
| R05 — Information mutuelle | Élevé | Haute |
| R02/R10 — Sélection et collider | Très élevé | Haute, chevauchement à résoudre |
| R03/R12 — Queues lourdes et robustesse | Très élevé | Haute |
| R09 — Paradoxe de Simpson | Très élevé | Haute, si non absorbé par J06 |
| R13 — Réalité des clusters | Élevé | Moyenne |
| R07 — Entropie différentielle | Moyen à élevé | Moyenne |
| R08 — Proper scoring rules | Très élevé | Conditionnelle à J18 |
| R14 — Dérive et changement de régime | Très élevé | Conditionnelle à J23 |

## 6. Traçabilité

Ce registre accompagne l'audit [calendrier 2026](../audits/calendar-2026-editorial-audit-and-decisions-2026-11-26.md). Les identifiants R01–R14 sont des identifiants locaux de suivi, pas des identifiants de concepts canoniques. Les concepts et sources devront être reliés à Wiki Knowledge lors de la préparation d'une future histoire.
