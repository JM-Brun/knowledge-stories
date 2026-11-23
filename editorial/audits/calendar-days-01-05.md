# Audit éditorial — journées 1 à 5

## Périmètre et méthode

Audit de la structure, des angles, des notions travaillées et des transitions des fichiers `calendar/days/jour-01.qmd` à `jour-05.qmd` sur la branche `main` au 24 novembre 2026. Il s'agit d'une revue éditoriale et conceptuelle du contenu source ; elle ne remplace pas une vérification du rendu navigateur, des calculs par exécution ni une revue exhaustive des références.

## Lecture transversale

Les cinq journées forment une progression cohérente :

1. **Mesurer** : la donnée représente-t-elle correctement le phénomène ?
2. **Sélectionner** : les observations permettent-elles de généraliser à la population visée ?
3. **Résumer** : les statistiques conservent-elles les structures utiles ?
4. **Relier** : comment les dépendances modifient-elles l'incertitude d'un agrégat ?
5. **Quantifier l'information** : comment formaliser l'incertitude et l'information apportée par une variable ?

La progression va de la qualité de l'observation vers la structure statistique, puis vers une formalisation informationnelle. Elle ne doit pas être présentée comme une chaîne de prérequis stricts : les notions se renforcent mutuellement, mais chaque journée doit rester lisible de façon autonome.

## Revue par journée

### Jour 1 — Une mesure précise peut-elle être fausse ?

- **Noyau conceptuel** : fidélité/répétabilité, justesse, exactitude, résolution, biais et variabilité ; modèle additif simplifié de l'erreur ; incertitude de référence ; validité de construit et opérationnalisation.
- **Angle distinctif existant** : partir de capteurs de température puis élargir la question à ce que signifie réellement mesurer. Les passages sur l'opérationnalisation et sur la mesure qui transforme son objet dépassent le simple contraste précision/biais.
- **Valeur** : très forte richesse conceptuelle, liens explicites vers la Data Science et les décisions.
- **Point de vigilance** : la journée est nettement plus longue que les suivantes (20–25 min annoncées). Elle accumule plusieurs changements d'échelle : métrologie instrumentale, mesure de construits latents, réactivité de la mesure, référence et propagation dans les données.
- **Amélioration recommandée** : conserver la richesse, mais mieux hiérarchiser le fil narratif. Faire du modèle de mesure le pivot ; traiter les autres dimensions comme des conséquences successives de la question « que signifie mesurer ? ». Vérifier que les cinq profils de capteurs ne prennent pas plus de place que l'idée centrale. Ne pas supprimer les distinctions métrologiques utiles.

### Jour 2 — 50 000 réponses valent-elles mieux que 1 000 ?

- **Noyau conceptuel** : population cible, base de sondage, échantillon observé, couverture, auto-sélection, biais de sélection et incertitude d'échantillonnage.
- **Angle distinctif existant** : l'effet moins visible de la sélection sur les associations, illustré par les utilisateurs encore actifs d'une plateforme. La journée ne se limite donc pas au slogan « un grand échantillon biaisé reste biaisé ».
- **Valeur** : bonne distinction entre incertitude aléatoire et biais de mécanisme ; transfert pertinent vers la validation ML et la population de généralisation.
- **Point de vigilance** : le passage du biais de proportion à la sélection sur une variable influencée par plusieurs facteurs introduit un sujet causal plus avancé.
- **Amélioration recommandée** : expliciter en une phrase le changement de niveau : le biais de sélection peut déformer non seulement les proportions, mais aussi les relations entre variables. Garder le graphe causal comme approfondissement si le mécanisme n'est pas entièrement expliqué.

### Jour 3 — Trois distributions, une même moyenne

- **Noyau conceptuel** : moyenne, variance, distribution empirique, forme de distribution, statistiques descriptives, diagnostic graphique et compression avec perte.
- **Angle distinctif existant** : progression en deux temps — même moyenne avec dispersions différentes, puis quartette d'Anscombe où plusieurs statistiques usuelles sont identiques malgré des géométries différentes.
- **Valeur** : l'exemple historique et la visualisation font constater les limites des résumés ; la chaîne J1–J3 est une bonne synthèse de méthode.
- **Point de vigilance** : distinguer clairement données observées, distribution empirique et loi de probabilité. Ne pas laisser entendre qu'un graphique suffit à établir un mécanisme.
- **Amélioration recommandée** : faire de la question « qu'a-t-on perdu en résumant ? » le fil conducteur entre moyenne, variance, nuages de points et compression. Éviter de multiplier les statistiques dans la synthèse finale sans préciser la question diagnostique associée.

### Jour 4 — Quand la covariance change-t-elle la variance d'une somme ?

- **Noyau conceptuel** : covariance, corrélation, variance d'une combinaison linéaire, matrice de covariance, dépendance et indépendance.
- **Angle distinctif existant** : erreurs communes entre capteurs et diversité effective des modèles ; contre-exemple de variables dépendantes à covariance nulle.
- **Valeur** : démonstration numérique courte, formule générale avec matrice de covariance et transfert interdisciplinaire pertinent.
- **Point de vigilance** : l'exemple initial utilise des variances/covariances empiriques avec diviseur n ; le préciser systématiquement et le distinguer de l'estimateur corrigé avec n−1. Le texte le précise déjà pour le calcul initial, mais les notations pourraient être harmonisées.
- **Amélioration recommandée** : ajouter une courte phrase sur le rôle de la covariance dans le cas général à poids non égaux, en s'appuyant sur la formule matricielle déjà présente. Éviter de confondre corrélation nulle et absence de toute dépendance.

### Jour 5 — Quelle distribution est la plus incertaine ?

- **Noyau conceptuel** : surprise, entropie discrète, logarithme, entropie conditionnelle et information mutuelle ; distinction avec calibration et risque.
- **Angle distinctif existant** : montrer que l'entropie décrit la distribution annoncée, pas la qualité d'une prévision, puis rappeler la dépendance à la représentation et la différence avec l'entropie différentielle.
- **Valeur** : le passage de l'intuition binaire à la définition de Shannon est progressif ; le lien avec les modèles de langue est naturel.
- **Point de vigilance** : l'affirmation « information mutuelle positive sinon » doit être comprise au sens non négatif ; elle vaut zéro exactement en cas d'indépendance sous les conditions usuelles. Éviter aussi de présenter l'entropie comme une mesure universelle de l'incertitude décisionnelle.
- **Amélioration recommandée** : ajouter un mini-exemple numérique d'entropie conditionnelle ou d'information mutuelle, afin que ces notions ne restent pas uniquement définies par formule. Conserver le contraste calibration / concentration.

## Connexions entre journées

| Transition | Ce qui se transmet | Ce qui change |
|---|---|---|
| J1 → J2 | La qualité de la donnée conditionne les conclusions | On passe de l'erreur de mesure à la sélection des unités observées |
| J2 → J3 | L'échantillon détermine les données disponibles | On passe de « qui observe-t-on ? » à « que conserve le résumé ? » |
| J3 → J4 | Les résumés univariés sont insuffisants pour certaines questions | La dépendance entre variables devient explicite |
| J4 → J5 | La covariance ne décrit qu'une partie des dépendances | L'information mutuelle permet de quantifier une dépendance plus générale, sans établir la causalité |

La transition J4 → J5 est particulièrement intéressante et mérite d'être rendue explicite : covariance et corrélation capturent une dépendance linéaire, tandis que l'information mutuelle peut détecter des dépendances non linéaires. Ne pas présenter l'information mutuelle comme une simple « covariance améliorée » : elle repose sur une autre construction et dépend de la distribution jointe.

## Priorités de révision

1. **J1 — hiérarchiser sans appauvrir** : réduire les ruptures de fil narratif, pas les concepts centraux.
2. **J5 — rendre l'information mutuelle calculable** : un exemple discret court suffit.
3. **J2 — baliser le saut vers la sélection causale** : expliquer pourquoi les relations peuvent être déformées.
4. **J4 — harmoniser les conventions d'estimation** : diviseur n vs n−1 et notations empiriques.
5. **J3 — renforcer le fil de la perte d'information** : garder la distinction entre distribution empirique et loi.

## Limites de cet audit

- Pas de rendu Quarto ni de capture desktop/mobile/clavier dans cette revue.
- Les équations et valeurs ont été relues conceptuellement, mais pas toutes recalculées par un script indépendant.
- Les URL et références n'ont pas fait l'objet d'une vérification bibliographique exhaustive.
- Les propositions ci-dessus sont des pistes de révision ciblées, pas des modifications déjà apportées aux cinq pages.
