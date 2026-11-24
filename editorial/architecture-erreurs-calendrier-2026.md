# Architecture éditoriale — erreurs dans la chaîne de modélisation (calendrier 2026)

**Statut :** cadrage éditorial pour les 24 histoires, sans modification du programme.  
**Périmètre :** mathématiques, statistique, data science et apprentissage automatique.  
**Principe :** le jour 1 donne une vue d'ensemble intelligible ; les autres jours approfondissent chacun un mécanisme précis. Aucun jour n'est ajouté, supprimé ou renommé par ce document.

## Décision éditoriale

Le thème des erreurs de données et de modélisation est transversal. Il ne justifie pas une journée supplémentaire : il sert de fil rouge discret entre plusieurs concepts déjà prévus.

Le jour 1 doit rester une introduction à la mesure. Il distingue :
1. le phénomène ou la quantité que l'on cherche à connaître ;
2. l'observation produite par un instrument ou un protocole ;
3. la prédiction produite par un modèle.

Il donne une seule décomposition illustrative de l'erreur de prédiction. Il ne développe pas encore le biais d'échantillonnage, le compromis biais-variance, la propagation de covariance, l'incertitude statistique, la robustesse, la généralisation ou la calibration : ces sujets ont leur place dans les journées existantes.

## Répartition des 24 journées

| Jour | Thème conservé | Place dans le fil rouge des erreurs |
|---:|---|---|
| 1 | Mesure | Vue d'ensemble : distinguer réalité, observation et prédiction ; introduire l'effet d'une donnée erronée et l'écart du modèle. |
| 2 | Échantillonnage | Biais de sélection, couverture et représentativité : les données peuvent être nombreuses mais ne pas représenter la population cible. |
| 3 | Distributions | Variabilité, asymétrie, multimodalité et valeurs influentes : les résumés peuvent masquer la structure des données. |
| 4 | Covariance / dépendance | Propagation de l'incertitude : les erreurs communes et les dépendances changent l'incertitude d'un agrégat. |
| 5 | Entropie | Information et incertitude : ce qu'une représentation probabiliste exprime, et ce qu'elle ne permet pas de conclure. |
| 6 | Corrélation / causalité | Confusion entre association observée et mécanisme causal ; variables omises et biais de sélection comme risques d'interprétation. |
| 7 | Interpolation / extrapolation | Erreur hors du domaine observé : une approximation valable localement peut échouer ailleurs. |
| 8 | Test d'hypothèse | Incertitude d'échantillonnage, erreurs de type I/II, puissance et conclusions excessives. |
| 9 | Mauvais objectif | Erreur de spécification : optimiser une cible mal définie produit un système cohérent avec le mauvais objectif. |
| 10 | Géométrie | Distances, échelles et représentations : une géométrie inadéquate déforme les proximités et les décisions. |
| 11 | Régularisation | Contrôle de la complexité et compromis biais-variance ; ne pas assimiler régularisation et correction de données. |
| 12 | Stabilité | Sensibilité aux perturbations, conditionnement et robustesse locale ; distinguer stabilité numérique et validité scientifique. |
| 13 | Annotation | Bruit d'étiquetage, désaccord, ambiguïté des catégories et biais des annotateurs. |
| 14 | Boosting | Correction séquentielle des erreurs résiduelles ; limites lorsque les erreurs proviennent de labels bruités ou de biais systématiques. |
| 15 | Généralisation | Écart entre performance d'entraînement et performance sur de nouvelles données ; rôle du protocole d'évaluation. |
| 16 | Fuite de données | Contamination des variables ou des partitions : l'évaluation ne mesure plus la performance attendue en usage réel. |
| 17 | Métriques trompeuses | Une métrique agrégée peut masquer des erreurs par sous-groupe, classe, seuil ou contexte d'usage. |
| 18 | Calibration | Fiabilité des probabilités et adéquation entre confiance annoncée et fréquences observées. |
| 19 | Gain réel | Distinguer amélioration mesurée, gain opérationnel et valeur nette après coûts et contraintes. |
| 20 | Attribution causale | Identifier les effets attribuables à une intervention plutôt qu'à des différences préexistantes ou facteurs confondants. |
| 21 | Tenseurs | Structure, dimensions et sémantique des données ; erreurs de forme, d'alignement ou d'interprétation des axes. |
| 22 | Softmax | Transformation de scores en distribution ; effets de température et limites de l'interprétation probabiliste. |
| 23 | Attention | Pondération contextuelle et propagation de représentations ; ne pas confondre poids d'attention et explication causale. |
| 24 | Autorégression | Accumulation des erreurs de prédiction au fil des étapes et dépendance des sorties aux tokens précédemment générés. |

## Réseau de correspondances éditoriales

Les numéros de jour déterminent la date de publication, pas un niveau de difficulté ni un ordre d'apprentissage. Le calendrier ne doit pas reproduire le plan d'un cours, d'un manuel ou d'un parcours de formation. Les sujets sont choisis d'abord pour leur pouvoir de curiosité : paradoxe, résultat contre-intuitif, expérience, controverse méthodologique ou décision concrète.

Le fil rouge des erreurs permet des rapprochements transversaux, sans transformer les journées en étapes successives. Quelques familles de correspondances possibles :

- **Mesurer et représenter le réel :** J1, J2, J3, J10, J13, J21.
- **Raisonner sous incertitude :** J4, J5, J8, J12, J18.
- **Comprendre ce qu'un modèle apprend réellement :** J7, J9, J11, J14, J15.
- **Évaluer une affirmation ou une décision :** J6, J16, J17, J19, J20.
- **Comprendre les mécanismes des modèles de langue :** J21, J22, J23, J24.

Ces familles sont des index de lecture, pas des blocs chronologiques. Elles peuvent se recouper : une même journée peut éclairer plusieurs questions. Les renvois entre journées doivent expliciter une analogie, une différence ou une limite ; ils ne doivent jamais laisser entendre qu'une journée est un prérequis implicite d'une autre.

La grille des 24 cases reste chronologique pour respecter le calendrier de l'Avent, mais son ordre ne doit pas former une progression pédagogique déguisée. Lors des révisions des jours encore non publiés, varier volontairement les domaines et les formes d'enquête afin d'éviter les longues séquences homogènes (statistiques, puis apprentissage, puis évaluation, puis LLM).

## Règles de densité pour le jour 1

Le jour 1 doit conserver le sujet principal de la mesure. Pour tenir le format court :

- garder une situation concrète de mesure et les distinctions métrologiques indispensables ;
- montrer une seule chaîne visuelle « phénomène → observation → modèle → prédiction » ou une décomposition compacte équivalente ;
- donner une seule équation de décomposition et un exemple numérique court ;
- préciser que les contributions sont signées, peuvent se renforcer ou se compenser, et ne constituent pas une addition générale de variances ;
- préciser que des données d'entraînement biaisées peuvent aussi modifier les paramètres appris : l'effet de perturbation d'entrée pour un modèle fixé ne couvre pas ce mécanisme ;
- renvoyer les détails vers les journées correspondantes, sans anticiper leurs démonstrations.

À éviter dans le jour 1 : développer le compromis biais-variance, les matrices de covariance, les intervalles de confiance, les diagnostics de robustesse, les courbes de généralisation ou la calibration. Leur présence détaillée diluerait la question de la mesure.

## Fil rouge conceptuel : chaîne de production d'une prédiction

La chaîne suivante peut servir de repère récurrent, à enrichir sans la répéter intégralement dans chaque histoire :

1. **Acquisition :** définition du mesurande, instrument, protocole, biais et incertitude (J1).
2. **Constitution du jeu de données :** population cible, sélection et représentativité (J2).
3. **Description :** distributions, variabilité et dépendances (J3–J5).
4. **Interprétation :** association, causalité et hypothèses (J6–J8).
5. **Spécification :** objectif, géométrie et complexité du modèle (J9–J11).
6. **Calcul et sensibilité :** stabilité, perturbations et annotation (J12–J14).
7. **Évaluation :** généralisation, fuite, métriques et calibration (J15–J18).
8. **Usage et modèles avancés :** gain réel, attribution, représentations et génération (J19–J24).

## Contrôle de cohérence lors des prochaines révisions

Pour chaque journée, vérifier :
- qu'elle répond à une question centrale unique et reste autonome ;
- qu'elle enseigne un concept mathématique ou data-science précis, pas seulement une morale générale sur les données ;
- que les hypothèses des formules et des exemples sont explicites ;
- que le concept n'est pas développé prématurément dans le jour 1 ;
- que le lien transversal apporte un transfert de raisonnement plutôt qu'une répétition ;
- que le temps de lecture annoncé reste crédible et que les visuels servent une idée identifiable.

**Invariant du calendrier : 24 journées, 24 thèmes.** Le fil rouge des erreurs améliore la cohérence entre les histoires ; il ne devient pas un vingt-cinquième thème.
