# Audit éditorial et décisions — calendrier 2026

Date : 26 novembre 2026  
Périmètre : 24 journées ; articles J01–J05 et squelettes J06–J24.  
Statut : audit consolidé et décisions de cadrage proposées. Il ne vaut pas validation scientifique finale ni autorisation de publication.

## 1. Objet et décision générale

Cet audit consolide les évaluations du calendrier après clarification du critère éditorial : l'originalité ne suffit pas. Chaque journée doit apporter un intérêt réel à un data scientist, une compréhension non triviale et une matière suffisante pour justifier un article autonome.

La conclusion est de **ne pas remplacer massivement les sujets**. La plupart ont un potentiel substantiel, mais plusieurs titres ou promesses réduisent artificiellement leur portée. Le travail prioritaire consiste à formuler le problème scientifique, isoler une découverte centrale, construire une démonstration vérifiable et distinguer les journées voisines.

Les articles publiés J01–J05 ont été lus dans leur contenu source. Les journées J06–J24 ont été évaluées à partir des dossiers de conception disponibles ; leurs verdicts restent provisoires jusqu'à la lecture des articles rédigés et de leur rendu.

## 2. Principes d'évaluation

Six dimensions sont examinées :

1. **Intérêt pour un data scientist** — la compréhension améliore-t-elle une analyse, une expérimentation, une modélisation ou une décision réelle ?
2. **Profondeur scientifique** — existe-t-il un mécanisme statistique, mathématique ou méthodologique qui mérite d'être développé ?
3. **Valeur de découverte** — le lecteur apprend-il quelque chose qui ne se réduit pas à une définition ou à une évidence ?
4. **Connexions** — le sujet relie-t-il utilement plusieurs notions sans les juxtaposer artificiellement ?
5. **Potentiel narratif et visuel** — peut-on construire une enquête, un contre-exemple, une expérience ou une visualisation qui fait progresser le raisonnement ?
6. **Autonomie éditoriale** — la question justifie-t-elle un article de 7 à 15 minutes (20 minutes exceptionnellement), plutôt qu'un encadré ou un tutoriel ?

### Critères éliminatoires

- **Réponse évidente** : si le titre contient déjà toute la réponse et que le développement ne fait que l'illustrer, le sujet est trop faible dans sa formulation actuelle.
- **Substituabilité** : si le contenu peut être résumé dans une section d'une autre journée sans perte importante, il ne justifie pas une journée autonome.
- **Transfert artificiel** : ajouter une application ML à une notion ne suffit pas à rendre le sujet pertinent pour un data scientist.
- **Profondeur par accumulation** : multiplier les concepts ne constitue pas une progression ; il faut un mécanisme directeur.

La simplicité mathématique n'est pas un défaut. Une idée élémentaire peut être riche si elle révèle une structure inattendue. Le critère est la simplicité intellectuelle, non le niveau technique des outils. Une bonne note d'originalité ne compense pas un intérêt professionnel faible, une démonstration pauvre ou l'absence d'autonomie.

## 3. Synthèse des décisions par journée

Légende : **Conserver** = promesse solide ; **Recentrer** = question directrice à préciser ; **Transformer** = matière à garder, problème à reformuler.

| Jour | Sujet actuel | Décision | Question / angle recommandé | Base |
|---|---|---|---|---|
| J01 | Une mesure précise peut-elle être fausse ? | Recentrer | Votre modèle apprend-il le phénomène ou l'instrument ? | Article lu |
| J02 | 50 000 réponses valent-elles mieux que 1 000 ? | Conserver | Quand un grand échantillon estime-t-il très précisément la mauvaise population ? | Article lu |
| J03 | Trois distributions, une même moyenne | Conserver, préciser | Quelles structures un résumé statistique efface-t-il ? | Article lu |
| J04 | Quand la covariance change-t-elle la variance d'une somme ? | Conserver en priorité | Comment la dépendance limite-t-elle le gain d'une agrégation ? | Article lu |
| J05 | Quelle distribution est la plus incertaine ? | Recentrer | Une prédiction incertaine signifie-t-elle que le modèle ne sait pas ? | Article lu |
| J06 | Corrélation n'est pas causalité | Recentrer | Comment une conclusion statistique peut-elle s'inverser lorsqu'on contrôle une variable ? | Squelette |
| J07 | Une droite peut-elle apprendre ? | Transformer | Pourquoi la meilleure droite n'est-elle pas nécessairement une bonne explication ? | Squelette |
| J08 | Retrouver le biais d'une pièce | Transformer | Comment les données départagent-elles des explications concurrentes ? | Squelette |
| J09 | Le modèle optimise ce qu'on lui demande | Conserver | Quelle quantité statistique une fonction de perte fait-elle estimer ? | Squelette |
| J10 | Un pas trop grand fait rater la vallée | Recentrer | Pourquoi la géométrie d'un problème rend-elle son optimisation difficile ? | Squelette |
| J11 | Payer pour un modèle plus simple | Conserver | Régularisation, compromis biais-variance et géométrie des contraintes | Squelette |
| J12 | Un modèle stable vaut parfois mieux qu'un modèle précis | Conserver | Pourquoi le même modèle change-t-il quand les données changent ? | Squelette |
| J13 | Apprendre en posant des questions | Transformer | Un arbre peut-il choisir le meilleur mauvais découpage ? | Squelette |
| J14 | Corriger ses erreurs, arbre après arbre | Conserver | Comment optimiser une fonction en lui ajoutant des arbres ? | Squelette |
| J15 | Le test doit ressembler au futur | Conserver | Quelle population et quelle quantité mesure réellement une évaluation ? | Squelette |
| J16 | Le score parfait qui cache une fuite | Conserver en priorité | Comment un modèle peut-il connaître une réponse qu'il ne devrait pas connaître ? | Squelette |
| J17 | 99 % d'accuracy : bon modèle ou mauvais problème ? | Recentrer | Pourquoi la performance d'un classifieur dépend-elle de la population mesurée ? | Squelette |
| J18 | Quand 80 % veut-il vraiment dire 80 % ? | Conserver en priorité | Une probabilité annoncée correspond-elle à la fréquence observée ? | Squelette |
| J19 | Un gain de 0,3 point est-il réel ? | Conserver | Quelle incertitude entoure une différence de performance ? | Squelette |
| J20 | Qu'est-ce qui a vraiment amélioré le modèle ? | Conserver en priorité | Comment attribuer un gain à une modification expérimentale ? | Squelette |
| J21 | Peut-on simplifier des données sans perdre leur structure ? | Recentrer | Préserver la variance, est-ce préserver l'information utile ? | Squelette |
| J22 | Peut-on découvrir des groupes sans connaître les réponses ? | Transformer | Les clusters sont-ils dans les données ou dans leur représentation ? | Squelette |
| J23 | Pourquoi prévoir une série temporelle n'est pas prédire des lignes au hasard ? | Recentrer | Que devient un modèle lorsque le monde change après son entraînement ? | Squelette |
| J24 | Une bonne prédiction conduit-elle à une bonne décision ? | Conserver en priorité | Pourquoi le meilleur modèle prédictif n'est-il pas toujours la meilleure aide à la décision ? | Squelette |

## 4. Diagnostic des articles J01–J05

### J01 — Mesure

Le titre suggère une réponse trop rapide : une mesure peut être répétable sans être juste. Le contenu est plus intéressant : référence incertaine, correction instrumentale, définition du mesurande et confusion entre effet du capteur et effet du site.

**Décision :** conserver le matériau et déplacer le centre narratif vers le risque d'apprendre l'instrument plutôt que le phénomène. Le contraste répétabilité/justesse reste le mécanisme introductif, pas la promesse complète.

### J02 — Taille d'échantillon et sélection

La valeur n'est pas le constat générique « grand échantillon ne signifie pas échantillon représentatif ». Elle réside dans la distinction entre population cible, mécanisme d'inclusion, non-réponse et possibilité réelle de correction.

**Décision :** conserver. Renforcer les hypothèses qui rendent une pondération défendable : support commun/positivité, mécanisme de sélection conditionnellement ignorable, stabilité des poids et coût en variance. Une pondération n'est pas une réparation universelle.

### J03 — Résumés statistiques

Le quartette d'Anscombe donne une expérience forte : des statistiques résumées similaires peuvent masquer des géométries très différentes. Le transfert vers les métriques agrégées en ML est légitime.

**Décision :** conserver. Faire de la perte de structure le fil conducteur, en distinguant moyenne identique, statistiques usuelles identiques et géométries différentes. Ne pas conclure par une morale générique « visualisez toujours ».

### J04 — Covariance et agrégation

C'est un sujet particulièrement solide. La formule centrale, Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X,Y), ouvre vers la matrice de covariance, les combinaisons linéaires, les mesures répétées, les erreurs corrélées et les ensembles de modèles.

**Décision :** conserver en priorité. Renforcer l'exemple quantitatif sur la diversité des erreurs et distinguer soigneusement covariance nulle et indépendance. Ne pas réduire le sujet à une formule à mémoriser.

### J05 — Entropie et incertitude

L'article contient plusieurs thèmes importants, mais les juxtapose : entropie, entropie conditionnelle, information mutuelle, calibration, log-loss, entropie différentielle et désaccord entre modèles.

**Décision :** recentrer sur la distinction entre ambiguïté de la prédiction et manque de connaissance du modèle. Une distribution à forte entropie n'indique pas à elle seule pourquoi le modèle hésite ; une faible entropie ne garantit pas une bonne prévision. Ne pas concurrencer J18 sur la calibration. Garder l'entropie différentielle et le panorama des scores pour une réserve séparée.

## 5. Cadrage des journées J06–J24

Ces propositions sont des orientations éditoriales, pas des modifications déjà appliquées aux squelettes.

- **J06 — Association et causalité :** faire de l'inversion d'une conclusion sous stratification (paradoxe de Simpson) l'expérience d'ouverture. Introduire confusion, médiation et collider avec des graphes causaux. Question de fond : contrôler davantage de variables peut-il empirer une analyse ?
- **J07 — Régression linéaire :** éviter le tutoriel pente/intercept/moindres carrés. Examiner hypothèses, résidus, valeurs influentes et limites de l'explication. Garder distincte la question causale de J06.
- **J08 — Estimation :** l'estimateur du biais d'une pièce est trop élémentaire comme sujet complet. Conserver la pièce comme exemple, puis montrer ce qu'une estimation ponctuelle ne dit pas : incertitude, identifiabilité, comparaison d'hypothèses et rapport de vraisemblance. Ne pas confondre rapport de vraisemblance et probabilité du paramètre.
- **J09 — Fonction de perte :** relier la perte à la quantité estimée : MSE et moyenne conditionnelle, MAE et médiane conditionnelle, perte quantile et quantiles conditionnels. Distinguer perte d'entraînement, risque populationnel, métrique de compte rendu et règle de décision.
- **J10 — Optimisation :** aller au-delà de la parabole. Montrer courbure, valeurs propres, conditionnement, directions raides et plates, oscillation et préconditionnement. Les garanties doivent rester dans leur cadre mathématique.
- **J11 — Régularisation :** garder une frontière nette avec J12 : J11 traite pénalisation et géométrie des contraintes (L1/L2, biais-variance, sélection), pas variabilité entre échantillons.
- **J12 — Stabilité :** faire varier les échantillons d'entraînement et visualiser la distribution des prédictions/frontières. Éviter de répéter la décomposition biais-variance de J11. Bootstrap et bagging peuvent servir le raisonnement.
- **J13 — Arbres :** expliquer le caractère glouton des splits : un choix localement optimal n'est pas nécessairement un optimum global. Distinguer importance prédictive et interprétation causale. Rester distinct du boosting de J14.
- **J14 — Boosting :** montrer la construction additive dans l'espace des fonctions, les résidus/gradients et le shrinkage. Ne pas faire un catalogue de bibliothèques.
- **J15 — Évaluation :** préciser l'estimand : quelle population, quelles unités et quelle procédure de déploiement l'évaluation vise-t-elle ? Traiter dépendance, validation groupée/temporelle et incertitude des scores.
- **J16 — Fuite :** traiter la fuite comme une erreur de conception de l'expérience, pas seulement comme une colonne postérieure à la cible. Inclure preprocessing avant split, doublons, target encoding, dépendances de groupe et information temporelle indirecte.
- **J17 — Métriques :** faire travailler prévalence, seuil et métriques (ROC/PR, précision/rappel), avec changement de population. Frontière avec J24 : J17 mesure le système, J24 choisit une action.
- **J18 — Calibration :** comparer des modèles de même pouvoir de classement mais de probabilités différentes. Examiner calibration globale/conditionnelle, scores probabilistes et conséquences des probabilités mal calibrées. Ne pas reprendre l'entropie de J05.
- **J19 — Incertitude sur une amélioration :** traiter comparaisons appariées, bootstrap, variabilité des seeds, multiplicité et sélection après essais répétés. Distinguer significativité statistique et importance pratique.
- **J20 — Attribution expérimentale :** faire apparaître facteurs confondants et interactions : une ablation isolée ne mesure pas nécessairement la contribution d'un composant lorsque les composants interagissent. Les plans factoriels peuvent fournir le mécanisme central.
- **J21 — Réduction de dimension :** construire un contre-exemple où une direction de faible variance contient l'information prédictive. Distinguer préservation de variance, reconstruction et information utile à une tâche.
- **J22 — Clustering :** montrer comment échelle, métrique, représentation, initialisation et densité changent les partitions. Traiter l'absence de vérité terrain et la stabilité des groupes.
- **J23 — Séries temporelles :** distinguer changement de covariables, changement de relation prédictive et changement de régime. Faire de la non-stationnarité et de l'adaptation le problème central, pas seulement du split chronologique.
- **J24 — Décision :** construire un exemple chiffré où le modèle au meilleur score n'induit pas la meilleure décision. Introduire coûts, utilité, seuils, contraintes et valeur de l'information.

## 6. Frontières entre journées

| Journées | Frontière à préserver |
|---|---|
| J01 / J02 | Erreur dans la production/mesure d'une variable vs mécanisme de sélection des unités |
| J03 / J04 | Structures effacées par les résumés vs effet de dépendance sur la variance d'un agrégat |
| J05 / J18 | Concentration et information d'une distribution vs fiabilité des probabilités annoncées |
| J06 / J17 | Identification d'un effet causal vs mesure descriptive de performance |
| J07 / J09 | Hypothèses d'un modèle de régression vs choix de la fonction de perte et de l'estimand |
| J09 / J24 | Quantité estimée par l'apprentissage vs action optimale sous coûts |
| J10 / J14 | Optimisation paramétrique et conditionnement vs optimisation additive dans l'espace des fonctions |
| J11 / J12 | Pénalisation/complexité d'un modèle vs variabilité due aux données d'entraînement |
| J13 / J14 | Construction gloutonne d'un arbre vs combinaison séquentielle d'arbres |
| J15 / J16 / J23 | Population/estimand de validation vs contamination du protocole vs changement temporel |
| J17 / J18 / J24 | Classement et seuils vs calibration des probabilités vs utilité des décisions |
| J19 / J20 | Incertitude sur un écart observé vs attribution causale d'un changement expérimental |

## 7. Architecture éditoriale suggérée

Le calendrier peut être organisé en quatre ensembles thématiques sans imposer une lecture strictement linéaire :

1. **Observer et décrire** — J01 à J06 : mesure, sélection, résumés, dépendance, information, causalité.
2. **Construire un modèle** — J07 à J14 : hypothèses, estimation, pertes, optimisation, régularisation, stabilité, arbres et boosting.
3. **Évaluer une preuve** — J15 à J20 : généralisation, fuite, métriques, calibration, incertitude, expérimentation.
4. **Comprendre et décider** — J21 à J24 : représentation, clustering, évolution temporelle, décision.

Ces ensembles clarifient les transitions et les redondances ; ils ne doivent pas devenir des prérequis rigides.

## 8. Priorités

1. Finaliser les contrats éditoriaux des journées à recentrer ou transformer : J01, J05, J06, J07, J08, J10, J13, J17 et J22.
2. Établir une frontière vérifiable pour les couples à risque de redondance.
3. Pour chaque article, choisir une expérience ou démonstration centrale avant d'étendre le texte.
4. Vérifier références primaires, calculs et figures ; distinguer preuve, illustration et analogie.
5. Mesurer la durée réelle et vérifier l'autonomie.
6. Réaliser une seconde passe sur J06–J24 après rédaction ; les décisions actuelles sont provisoires.

## 9. Limites et traçabilité

- J01–J05 : lecture des fichiers sources des articles au 26 novembre 2026. Cette synthèse ne remplace pas les audits antérieurs plus détaillés.
- J06–J24 : lecture des dossiers éditoriaux et comparaison avec les titres/structure du calendrier. Aucun article final n'a été évalué ici pour ces journées.
- Les titres proposés sont des options éditoriales, pas des changements déjà effectués dans les pages publiques.
- Les idées déplacées hors du périmètre d'un article ne sont pas supprimées : elles sont consignées dans le registre compagnon « editorial/backlog/future-calendar-ideas.md », avec leur origine et leur statut.
- Aucun contrôle de rendu, d'accessibilité, de bibliographie exhaustive ou de build n'est revendiqué par cet audit.

## Documents liés

- [Registre des idées à conserver pour les calendriers futurs](../backlog/future-calendar-ideas.md)
- [Revue initiale de qualité du calendrier](calendar-2026-article-quality-review-2026-11-25.md)
- [Audit détaillé des journées 1 à 5](calendar-days-01-05.md)
- [Revue de contenu des journées 8 à 10](calendar-days-08-10-content-depth-2026-11-25.md)
- [Dossiers éditoriaux J06–J24](../calendar-2026/skeletons/README.md)
