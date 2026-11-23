# Pistes éditoriales initiales

Ce document est un carnet de propositions, pas une liste d'articles approuvés. Chaque sujet doit faire l'objet d'un dossier documentaire autonome avant rédaction. Les dépôts privés peuvent aider à retrouver le travail déjà effectué, mais aucune donnée ou note privée n'est copiée dans les contenus publics.

## 1. Comment Karatsuba multiplie-t-il deux grands nombres avec moins de multiplications ?

- **Domaine :** mathématiques et algorithmique.
- **Intention pédagogique :** partir de la multiplication scolaire, montrer la décomposition des nombres, faire apparaître l'astuce qui remplace quatre multiplications par trois, puis expliquer la récurrence et le coût asymptotique.
- **Expériences possibles :** calcul pas à pas, comparaison naïf/Karatsuba, visualisation de l'arbre récursif et seuil de bascule.
- **État documentaire :** premier brouillon créé dans `src/content/articles/karatsuba-multiplication.md`. Références primaires et pédagogiques ajoutées ; revue indépendante encore nécessaire sur l'histoire, les variantes pratiques et la validation technique.
- **Précaution :** la page utilisée comme inspiration éditoriale est une référence de pédagogie et de design, pas un texte à reproduire. L'article doit être rédigé indépendamment et citer ses propres sources.

## 2. Pourquoi la compression révèle-t-elle parfois la structure d'une information ?

- **Domaine :** théorie de l'information et intelligence artificielle.
- **Intention pédagogique :** relier régularités, description, entropie, codage et généralisation sans réduire l'intelligence à un simple taux de compression.
- **Expériences possibles :** comparer des chaînes aléatoires et structurées, visualiser un codage simple, tester les limites d'une analogie.
- **État documentaire :** sujet transversal déjà étudié dans les travaux sur compression et attention ; les sources et les affirmations doivent être revalidées pour le lectorat public.
- **Précaution :** distinguer compression sans perte, compression avec perte, complexité descriptive et hypothèses sur l'intelligence.

## 3. Comment Parcoursup organise-t-il l'affectation des candidats ?

- **Domaine :** éducation et politiques publiques.
- **Intention pédagogique :** expliquer les acteurs, les vœux, les classements, les propositions et les contraintes, puis distinguer le fonctionnement réglementaire des effets observés.
- **Expériences possibles :** scénario fictif d'affectation, visualisation des étapes et analyse des indicateurs publics.
- **État documentaire :** dossier de recherche et synthèse existants dans Society Lab ; reconstruire un dossier public à partir des textes officiels, données et études.
- **Précaution :** ne pas confondre description de l'algorithme, critères locaux, effets sociaux et jugement sur l'équité.

## 4. Comment le mécanisme d'attention aide-t-il un Transformer à traiter le contexte ?

- **Domaine :** intelligence artificielle et informatique.
- **Intention pédagogique :** expliquer les requêtes, clés, valeurs, poids d'attention et dimensions avec un exemple chiffré.
- **Expériences possibles :** petite matrice d'attention manipulable et visualisation des poids.
- **État documentaire :** LLM Lab dispose d'un parcours pédagogique et d'implémentations à utiliser comme points de départ ; les références primaires doivent soutenir les explications.
- **Précaution :** ne pas présenter les poids d'attention comme une explication complète ou universelle des décisions d'un modèle.

## Critères de sélection des pilotes

Les trois premiers articles devraient tester des formes de raisonnement différentes : une démonstration algorithmique, une explication conceptuelle interdisciplinaire et une analyse socio-institutionnelle. La sélection finale dépendra de la disponibilité des sources, de la qualité des preuves et de la capacité à construire une expérience pédagogique utile.
Le benchmark de dépassement du billet de référence est documenté dans [`benchmark-karatsuba.md`](./benchmark-karatsuba.md). Il fixe les qualités à préserver, les critères de comparaison, les non-régressions et les améliorations attendues.


---

## Calendrier Data Science & Machine Learning 2026 — angles éditoriaux à approfondir

Ces pistes complètent les titres déjà inscrits dans le calendrier. Elles ne changent pas le programme ni les notions prévues : elles proposent, pour chaque journée, une question moins attendue, un déplacement de perspective et une expérience visuelle ou intellectuelle. Les exemples et chiffres devront être construits ou sourcés explicitement avant publication.

### Jour 1 — Une mesure précise peut-elle être fausse ?

- **Angle distinctif :** passer de la précision instrumentale à la validité de ce que l'on prétend mesurer. Une mesure peut être stable mais biaisée ; un indicateur peut être fiable sans représenter le concept visé.
- **Idées à explorer :** opérationnalisation des concepts latents ; validité de construit ; incertitude de la référence ; perturbation du phénomène par l'observation ; dérive et transfert d'étalonnage.
- **Expérience :** comparer une température physique, un score de satisfaction et un benchmark de raisonnement : dans chaque cas, qu'observe-t-on réellement, et quelle inférence supplémentaire fait-on ?
- **Visuel :** chaîne « construit → indicateur → protocole → observation → interprétation → décision », avec les sources d'incertitude et de biais à chaque transition.
- **Vigilance :** ne pas confondre erreur, incertitude, biais, fidélité et validité. La stabilité d'un score ne prouve pas sa validité.

### Jour 2 — 50 000 réponses valent-elles mieux que 1 000 ?

- **Angle distinctif :** le volume réduit l'incertitude d'échantillonnage sous certaines conditions ; il ne répare ni l'absence de couverture ni un mécanisme de sélection.
- **Idées à explorer :** population cible versus population accessible ; biais de non-réponse ; auto-sélection ; paradoxe du survivant ; pondération et positivité ; biais de sélection induit par le conditionnement.
- **Expérience :** faire varier la taille d'un échantillon volontairement biaisé et celle d'un petit échantillon probabiliste. Montrer que l'intervalle autour d'une mauvaise cible peut devenir très étroit.
- **Visuel :** deux distributions d'estimateurs sur des répétitions de tirages : grand échantillon biaisé, petit échantillon représentatif.
- **Question rarement posée :** qui n'a matériellement aucune chance d'entrer dans le jeu de données ?
- **Vigilance :** l'échantillonnage stratifié n'est pas automatiquement représentatif ; il faut tenir compte des probabilités d'inclusion et des poids de population.

### Jour 3 — Trois distributions, une même moyenne

- **Angle distinctif :** un résumé statistique est une projection avec perte d'information. Même plusieurs résumés (moyenne, variance, corrélation) peuvent masquer la structure.
- **Idées à explorer :** quartette d'Anscombe ; Datasaurus Dozen ; multimodalité ; asymétrie ; valeurs influentes ; agrégation et hétérogénéité des sous-populations.
- **Expérience :** construire plusieurs séries avec la même moyenne et des formes différentes, puis comparer histogramme, densité, quantiles et nuage de points.
- **Visuel :** petits multiples synchronisés avec statistiques identiques et distributions radicalement différentes.
- **Question rarement posée :** quelles transformations de la distribution la statistique choisie rend-elle invisibles ?
- **Vigilance :** ne pas transformer « visualiser les données » en slogan absolu : un graphique peut lui aussi masquer, déformer ou surcharger.

### Jour 4 — Quand la covariance change-t-elle la variance d'une somme ?

- **Angle distinctif :** l'incertitude d'un agrégat dépend de la manière dont ses composantes varient ensemble, pas seulement de leurs variances individuelles.
- **Idées à explorer :** diversification ; erreurs communes ; corrélation positive et négative ; dépendance temporelle ; covariance induite par une cause commune ; propagation d'incertitude.
- **Expérience :** simuler deux capteurs ayant la même variance marginale, mais une corrélation réglable, puis observer la variance de leur moyenne et de leur somme.
- **Visuel :** nuages de points dont la corrélation varie, accompagnés de la variance de l'agrégat.
- **Question rarement posée :** pourquoi moyenner plusieurs mesures ne réduit-il presque rien si elles partagent la même erreur ?
- **Vigilance :** covariance n'est pas causalité ; corrélation empirique estimée sur peu de données est elle-même incertaine.

### Jour 5 — Quelle distribution est la plus incertaine ?

- **Angle distinctif :** l'incertitude n'est pas une propriété absolue d'une distribution : elle dépend de ce que l'on sait, de l'espace des événements et de la question posée.
- **Idées à explorer :** entropie de Shannon ; surprise d'un événement ; entropie conditionnelle ; information mutuelle ; maximum d'entropie sous contraintes ; différence entre incertitude et ignorance du modèle.
- **Expérience :** comparer une pièce équilibrée, une pièce biaisée et une variable dont on connaît partiellement le résultat ; faire varier les probabilités et observer l'entropie.
- **Visuel :** entropie en fonction de la probabilité d'une issue, puis comparaison entre incertitude marginale et conditionnelle.
- **Question rarement posée :** une distribution très concentrée est-elle toujours « moins incertaine » pour la décision qui nous intéresse ?
- **Vigilance :** ne pas confondre entropie, variance, confiance subjective et incertitude épistémique.

### Jour 6 — Corrélation n'est pas causalité

- **Angle distinctif :** le problème n'est pas seulement qu'une troisième variable peut expliquer deux phénomènes ; conditionner sur une variable peut aussi créer une association artificielle.
- **Idées à explorer :** confusion, médiation, collider, causalité inverse, sélection, diagrammes causaux.
- **Expérience :** simuler une association nulle qui devient non nulle après conditionnement sur un collider.
- **Visuel :** trois DAG interactifs et distributions simulées correspondantes.
- **Vigilance :** un DAG formalise des hypothèses causales ; il ne les découvre pas automatiquement dans les données.

### Jour 7 — Une droite peut-elle apprendre ?

- **Angle distinctif :** apprendre consiste à ajuster une règle à partir d'exemples, mais la règle dépend de la représentation et de la famille de fonctions choisie.
- **Idées à explorer :** interpolation versus extrapolation ; biais inductif ; résidus ; identifiabilité des paramètres ; géométrie de la projection.
- **Expérience :** déplacer quelques points et observer la droite, les résidus et l'extrapolation.
- **Visuel :** nuage de points, droite ajustée, résidus et zone d'extrapolation distinguée.
- **Vigilance :** un bon ajustement dans l'échantillon ne démontre pas une loi du phénomène.

### Jour 8 — Retrouver le biais d'une pièce

- **Angle distinctif :** une expérience aléatoire ne révèle pas son paramètre avec certitude ; l'observation doit être interprétée par un modèle probabiliste.
- **Idées à explorer :** vraisemblance, loi des grands nombres, intervalle de confiance, test séquentiel, paradoxe du taux de base.
- **Expérience :** lancer virtuellement une pièce biaisée, suivre l'estimation de sa probabilité et visualiser ses fluctuations.
- **Visuel :** trajectoire de l'estimation et bande d'incertitude au fil des lancers.
- **Vigilance :** ne pas présenter un intervalle fréquentiste comme la probabilité que le paramètre fixe s'y trouve.

### Jour 9 — Le modèle optimise ce qu'on lui demande

- **Angle distinctif :** la fonction objectif n'est pas un détail technique : elle définit ce que le système apprend à privilégier.
- **Idées à explorer :** proxy et objectif réel ; Goodhart ; coût asymétrique des erreurs ; objectifs multiples ; reward hacking.
- **Expérience :** modifier les coûts des faux positifs et faux négatifs et observer le déplacement du seuil optimal.
- **Visuel :** matrice de confusion, courbe coût-seuil et frontière entre objectifs concurrents.
- **Vigilance :** la loi de Goodhart est une famille de mécanismes, pas une loi mathématique universelle.

### Jour 10 — Un pas trop grand fait rater la vallée

- **Angle distinctif :** l'optimisation est une dynamique dépendante de la géométrie, de l'échelle et du bruit, pas une simple descente visuelle.
- **Idées à explorer :** conditionnement ; ravins ; oscillations ; bruit stochastique ; taux d'apprentissage adaptatif.
- **Expérience :** comparer plusieurs taux d'apprentissage sur une surface quadratique anisotrope.
- **Visuel :** trajectoires de descente sur contours de niveau.
- **Vigilance :** une animation en deux dimensions ne représente pas fidèlement toute la géométrie d'un réseau profond.

### Jour 11 — Payer pour un modèle plus simple

- **Angle distinctif :** la régularisation encode une préférence et échange biais contre variance ; elle ne « punit » pas la complexité dans l'absolu.
- **Idées à explorer :** norme L1/L2 ; sparsité ; sélection de variables ; régularisation comme a priori ; compromis prédiction/interprétation.
- **Expérience :** faire varier le coefficient de régularisation et suivre coefficients et erreurs train/test.
- **Visuel :** trajectoires des coefficients et courbes d'erreur selon la pénalisation.
- **Vigilance :** distinguer pénalisation, sélection de modèle et validation du modèle.

### Jour 12 — Un modèle stable vaut parfois mieux qu'un modèle précis

- **Angle distinctif :** deux modèles de score voisin peuvent avoir une sensibilité très différente aux données, au hasard du split ou à une petite perturbation.
- **Idées à explorer :** stabilité algorithmique ; variance entre échantillons ; robustesse ; ensembles ; reproductibilité.
- **Expérience :** réentraîner plusieurs fois le même modèle sur des échantillons bootstrap et comparer prédictions et paramètres.
- **Visuel :** distribution des scores et variabilité des prédictions individuelles.
- **Vigilance :** stabilité ne signifie pas validité ni robustesse à tout changement de distribution.

### Jour 13 — Apprendre en posant des questions

- **Angle distinctif :** choisir les observations à annoter est une décision statistique et économique.
- **Idées à explorer :** active learning ; incertitude prédictive ; diversité ; coût d'annotation ; biais de sélection induit par la stratégie d'échantillonnage.
- **Expérience :** comparer sélection aléatoire et sélection par incertitude sur un petit problème simulé.
- **Visuel :** frontière de décision et points successivement demandés à l'annotation.
- **Vigilance :** l'incertitude du modèle n'est pas toujours un bon proxy de l'utilité d'une annotation.

### Jour 14 — Corriger ses erreurs, arbre après arbre

- **Angle distinctif :** le boosting construit une correction séquentielle dans l'espace des fonctions, pas une simple collection d'arbres indépendants.
- **Idées à explorer :** résidus, pseudo-résidus, gradient fonctionnel, shrinkage, profondeur et interactions.
- **Expérience :** visualiser les erreurs successives corrigées par des arbres faibles.
- **Visuel :** évolution de la fonction prédite et des résidus à chaque itération.
- **Vigilance :** ne pas réduire tous les algorithmes de boosting à une même mécanique exacte.

### Jour 15 — Le test doit ressembler au futur

- **Angle distinctif :** la validation est un protocole de simulation du déploiement, et le découpage des données exprime une hypothèse sur le futur.
- **Idées à explorer :** split aléatoire versus temporel ; groupes ; dépendance ; extrapolation ; validation externe.
- **Expérience :** comparer les scores d'un split aléatoire et d'un split chronologique sur des données dérivantes.
- **Visuel :** frise temporelle montrant entraînement, validation et futur.
- **Vigilance :** aucune stratégie de split n'est universellement correcte ; elle dépend de l'unité de généralisation visée.

### Jour 16 — Le score parfait qui cache une fuite

- **Angle distinctif :** une fuite est une information disponible pendant l'entraînement mais indisponible au moment réel de la prédiction, ou une contamination du protocole d'évaluation.
- **Idées à explorer :** fuite temporelle, target leakage, doublons, prétraitement avant split, fuite par entité.
- **Expérience :** introduire volontairement une variable postérieure à la cible et observer l'effondrement du score hors protocole.
- **Visuel :** chronologie des événements et disponibilité effective des variables.
- **Vigilance :** distinguer fuite de cible, contamination train/test et simple variable fortement prédictive mais disponible en production.

### Jour 17 — 99 % d'accuracy : bon modèle ou mauvais problème ?

- **Angle distinctif :** une métrique agrégée peut récompenser un modèle inutile lorsque les classes, les coûts ou les groupes sont déséquilibrés.
- **Idées à explorer :** prévalence ; accuracy majoritaire ; précision/rappel ; courbe précision-rappel ; métriques par sous-groupe.
- **Expérience :** construire une matrice de confusion où prédire toujours la classe majoritaire donne 99 %.
- **Visuel :** comparaison de plusieurs métriques pour un même classifieur.
- **Vigilance :** ne pas ériger F1 ou AUC en métrique universelle ; relier l'évaluation à la décision.

### Jour 18 — Quand 80 % veut-il vraiment dire 80 % ?

- **Angle distinctif :** discrimination et calibration répondent à deux questions différentes : classer les cas et quantifier correctement les probabilités.
- **Idées à explorer :** calibration ; score de Brier ; fiabilité par intervalles ; base rates ; calibration conditionnelle.
- **Expérience :** comparer deux modèles de même AUC mais de calibration différente.
- **Visuel :** diagramme de fiabilité et histogramme des probabilités prédites.
- **Vigilance :** une bonne calibration globale peut masquer des écarts par groupe ou par région de l'espace des prédictions.

### Jour 19 — Un gain de 0,3 point est-il réel ?

- **Angle distinctif :** une différence observée n'est pas automatiquement une différence robuste, utile ou reproductible.
- **Idées à explorer :** incertitude des métriques ; bootstrap apparié ; tests multiples ; taille d'effet ; puissance ; variance des seeds.
- **Expérience :** comparer deux modèles sur les mêmes exemples avec bootstrap apparié.
- **Visuel :** distribution de la différence de score, plutôt que deux barres seules.
- **Vigilance :** distinguer significativité statistique, importance pratique et stabilité sur d'autres populations.

### Jour 20 — Qu'est-ce qui a vraiment amélioré le modèle ?

- **Angle distinctif :** un benchmark comparatif est une expérience ; sans contrôle des variables, l'attribution du gain est fragile.
- **Idées à explorer :** ablation ; facteurs confondus ; seeds ; budget de calcul ; sélection du meilleur essai ; multiplicité expérimentale.
- **Expérience :** construire un plan factoriel simple pour isoler l'effet de deux changements.
- **Visuel :** matrice d'ablation et intervalles de variation.
- **Vigilance :** une ablation mesure une contribution dans un contexte donné, pas une importance universelle.

### Jour 21 — La forme d'un tenseur ne dit pas son sens

- **Angle distinctif :** une dimension numérique n'a de sens qu'avec un contrat sémantique : ordre des axes, unités, masque, batch et convention.
- **Idées à explorer :** sémantique des formes ; broadcasting ; permutations silencieuses ; unités ; invariants de représentation.
- **Expérience :** manipuler un même tenseur avec deux interprétations d'axes et montrer les erreurs de calcul possibles.
- **Visuel :** cube tensoriel annoté et transformations d'axes.
- **Vigilance :** les formes seules ne suffisent pas à documenter une représentation.

### Jour 22 — Des scores aux probabilités, puis à l'erreur

- **Angle distinctif :** normaliser des scores ne les transforme pas magiquement en probabilités fiables ; la fonction de perte définit le signal d'apprentissage.
- **Idées à explorer :** softmax ; log-vraisemblance ; entropie croisée ; calibration ; scores relatifs versus probabilités.
- **Expérience :** modifier la température du softmax et comparer classement, entropie et calibration.
- **Visuel :** distributions de probabilités avant/après température et évolution de la loss.
- **Vigilance :** la température modifie la confiance apparente, pas nécessairement la qualité probabiliste réelle.

### Jour 23 — Pourquoi le modèle regarde-t-il ailleurs ?

- **Angle distinctif :** l'attention est une opération de pondération contextuelle, mais ses poids ne constituent pas une explication causale complète.
- **Idées à explorer :** Q/K/V ; géométrie des similarités ; normalisation ; masquage ; multi-têtes ; limites interprétatives.
- **Expérience :** modifier une clé ou une requête et suivre le déplacement des poids et la sortie.
- **Visuel :** matrice d'attention manipulable avec projections et sortie calculée.
- **Vigilance :** distinguer poids d'attention, contribution à la sortie et explication du comportement du modèle.

### Jour 24 — Apprendre avec le bon préfixe, générer avec le sien

- **Angle distinctif :** l'entraînement autorégressif et la génération n'exposent pas le modèle exactement aux mêmes contextes.
- **Idées à explorer :** teacher forcing ; décalage train/inférence ; exposition aux erreurs ; décodage ; température et top-p.
- **Expérience :** comparer prédiction conditionnée par le vrai préfixe et génération récursive à partir des propres sorties.
- **Visuel :** deux chaînes côte à côte : contexte cible et contexte généré.
- **Vigilance :** ne pas attribuer toutes les erreurs de génération au seul teacher forcing ; séparer apprentissage, distribution des contextes et stratégie de décodage.

## Règles d'exploitation de ces pistes

1. **Une idée forte par journée.** Les angles secondaires servent la compréhension du sujet central, pas l'accumulation encyclopédique.
2. **Un résultat vérifiable.** Chaque paradoxe ou affirmation contre-intuitive doit être soutenu par une démonstration, une simulation reproductible, une source primaire ou un exemple dont les limites sont explicites.
3. **Un visuel qui raisonne.** Préférer une figure qui révèle une relation, une comparaison ou une hypothèse à une illustration décorative.
4. **Un transfert.** Chaque journée doit montrer où l'idée réapparaît dans une autre discipline ou dans une pratique de Data Science/ML.
5. **Une frontière de validité.** Dire ce que l'expérience ne permet pas de conclure.
6. **Ne pas gonfler artificiellement la durée.** Viser 7 à 10 minutes utiles ; une interaction courte peut remplacer plusieurs paragraphes.
7. **Ne pas publier une piste comme un fait établi.** Les dossiers de sources, calculs et licences sont à constituer avant la rédaction finale.
