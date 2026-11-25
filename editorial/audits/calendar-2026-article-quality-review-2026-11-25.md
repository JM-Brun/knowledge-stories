# Revue de qualité éditoriale — calendrier 2026

Date : 2026-11-25  
Périmètre initial : articles publiés J01–J05 et dossiers de préparation J06–J10.  
Statut : diagnostic initial, à confirmer par lecture rendue et revue des sources.

## Décision éditoriale

La prochaine itération ne doit pas consister à allonger les textes ni à remplir davantage le gabarit. Les pages existantes sont déjà souvent denses. Le travail prioritaire est de mieux choisir le noyau pédagogique, de réduire les détours, de renforcer les démonstrations et de rendre le transfert réellement opératoire.

Le standard visé est un article qui :
1. pose une question précise et maintient cette question jusqu'à la conclusion ;
2. fait découvrir un mécanisme par un exemple ou une démonstration vérifiable ;
3. introduit les concepts au moment où ils deviennent nécessaires ;
4. distingue clairement résultat, hypothèse, interprétation et limite ;
5. apporte une capacité de raisonnement transférable ;
6. utilise les figures comme instruments de pensée, pas comme décoration ;
7. permet de vérifier les sources et les calculs.

Ne pas imposer à chaque page la même structure de sections. Le rythme doit dépendre du sujet.

## Référence de comparaison

Article indiqué : https://djamchid.fr/blog/posts/2026-11-18-multiplication-karatsuba.html

La page n'a pas pu être récupérée par les moyens de consultation disponibles pendant cette revue (échec de récupération côté navigateur et recherche). Il serait incorrect de prétendre en avoir analysé les choix précis. La comparaison stylistique reste donc ouverte. Le lien est conservé comme référence de l'utilisateur ; reprendre l'analyse dès que son contenu est accessible ou fourni.

## Diagnostic article par article

### J01 — Une mesure précise peut-elle être fausse ?

Fichier : `calendar/days/jour-01.qmd`  
Volume observé : environ 36 500 caractères.

**Ce qui fonctionne**
- La question est forte et le contraste entre dispersion et décalage est pertinent.
- Les distinctions métrologiques sont appuyées sur le VIM plutôt que sur le langage courant.
- L'article ne traite pas la référence comme une vérité absolue.
- Le passage vers la qualité des variables en Data Science est légitime.

**Problèmes à traiter**
- Le début mobilise cinq profils de capteurs. A et B suffisent à établir le contraste principal ; C peut servir de contre-exemple. D et E ajoutent des dimensions (résolution, cadence d'acquisition) qui détournent l'attention et imposent de longues précautions.
- Plusieurs niveaux sont entremêlés : fidélité/répétabilité/justesse/exactitude, modèle biais-bruit, validité des construits, chaîne de traçabilité, spécification du mesurande, instrumentation d'un jeu de données et validation ML. Chacun est pertinent, mais leur accumulation dilue la question initiale.
- La durée annoncée (environ 20 min) est probablement sous-estimée au regard du volume et des figures.
- Le transfert Data Science est essentiellement délégué à un lien vers un atelier. L'article devrait tout de même contenir une décision ou un diagnostic court, autonome.
- Il faut vérifier que le vocabulaire du VIM est utilisé de façon strictement conforme, notamment la distinction entre fidélité, répétabilité, justesse, exactitude et précision au sens courant.
- Les profils illustratifs sont explicitement séparés, mais la présentation tabulaire et visuelle peut malgré tout donner l'impression d'un protocole comparatif homogène.

**Révision proposée**
- Garder un seul fil : « répétabilité n'implique pas justesse ».
- Construire le raisonnement avec deux capteurs et un calcul transparent ; introduire le troisième cas uniquement pour montrer qu'une moyenne observée centrée ne suffit pas.
- Déplacer les développements sur résolution/fréquence vers un encadré ou une ressource dédiée, sans perdre les informations.
- Réduire les digressions sur la validité des construits et la chaîne métrologique à ce qui est indispensable ; conserver une piste d'approfondissement sourcée.
- Remplacer le transfert final par un mini-audit guidé d'une variable (mesurande, instrument, protocole, biais plausible, groupes concernés, conséquence sur la validation).
- Mesurer la durée réelle après révision.

### J02 — 50 000 réponses valent-elles mieux que 1 000 ?

Fichier : `calendar/days/jour-02.qmd`  
Volume observé : environ 28 900 caractères.

**Ce qui fonctionne**
- Le titre pose une question intuitive et utile.
- La distinction entre taille d'échantillon et mécanisme de sélection est le bon pivot.
- La page fait le lien entre sondage, population cible et généralisation ML.

**Problèmes à traiter**
- Le sujet s'étend de l'échantillonnage à la sélection, aux changements de distribution, puis à la pondération par importance. Cela forme presque deux articles : « pourquoi un grand échantillon peut être biaisé » et « quand/à quelles conditions corriger un covariate shift ».
- Le transfert ML risque de prendre le pas sur l'explication statistique initiale.
- La pondération ne doit jamais apparaître comme une réparation générale du biais de sélection : il faut faire travailler les hypothèses de support commun/positivité, de sélection conditionnellement ignorable et de stabilité des poids, ainsi que le coût en variance et la taille effective.
- La page doit hiérarchiser explicitement erreur d'échantillonnage, biais de couverture, non-réponse et changement de distribution.

**Révision proposée**
- Centrer l'article sur la question du titre et une expérience numérique simple comparant un petit échantillon probabiliste à un grand échantillon auto-sélectionné.
- Montrer séparément ce que la taille réduit et ce qu'elle ne corrige pas.
- Garder la typologie des dataset shifts dans un encadré de transfert ML, et déplacer la démonstration détaillée de l'importance weighting dans un article/atelier dédié si elle dépasse la promesse.
- Ajouter un arbre de diagnostic : population cible → mécanisme d'inclusion → non-réponse → variables auxiliaires disponibles → correction défendable ou non.

### J03 — Trois distributions, une même moyenne

Fichier : `calendar/days/jour-03.qmd`  
Volume observé : environ 20 300 caractères.

**Ce qui fonctionne**
- L'exemple numérique démarre simplement et les statistiques ne sont pas présentées comme des descriptions exhaustives.
- La page fait progresser le lecteur de la moyenne vers la dispersion, puis vers la forme des distributions.
- Les références à Anscombe et au Datasaurus Dozen sont adaptées au propos.

**Problèmes à traiter**
- Le titre promet une comparaison de distributions, mais le parcours ajoute plusieurs sujets : variance, forme, graphiques, diagnostic exploratoire, compression de l'information et transfert ML.
- La progression entre « même moyenne », « mêmes résumés » et « mêmes statistiques mais graphes différents » doit être plus explicite pour éviter de donner l'impression que ces propriétés sont équivalentes.
- Le passage sur la compression de l'information doit être relié à un mécanisme précis, sinon il ressemble à une analogie ajoutée.
- La règle de choix des résumés doit découler des exemples et non arriver comme une checklist indépendante.

**Révision proposée**
- Organiser l'article autour d'une démonstration en deux temps : même moyenne / dispersion différente, puis mêmes statistiques usuelles / géométries différentes (Anscombe).
- Faire de la visualisation le moment de résolution de l'enquête : quelle structure le résumé a-t-il effacée ?
- Garder le lien à la compression uniquement si la perte d'information est formalisée sur un exemple ; sinon déplacer ce développement.
- Terminer par une méthode concrète de diagnostic exploratoire liée à la nature de la variable et à la question.

### J04 — Quand la covariance change-t-elle la variance d'une somme ?

Fichier : `calendar/days/jour-04.qmd`  
Volume observé : environ 11 000 caractères.

**Ce qui fonctionne**
- La question mathématique est nette.
- Le cas parfaitement dépendant rend la covariance concrète.
- Le contre-exemple « covariance nulle n'implique pas indépendance » apporte une distinction importante.
- Le transfert vers l'agrégation de modèles est naturel.

**Problèmes à traiter**
- La formule générale de la variance d'une combinaison pondérée apparaît deux fois avec une explication très proche.
- Le lien entre le cas à deux variables, le cas à poids égaux et la matrice de covariance peut être rendu plus progressif.
- Le transfert vers les ensembles de modèles mérite un exemple quantitatif, pas seulement une analogie.
- La durée de 7–9 minutes doit être vérifiée après ajout d'un exemple appliqué.

**Révision proposée**
- Supprimer la répétition de la formule générale et faire apparaître une seule fois le passage de deux variables à (w^T\Sigma w).
- Ajouter un exemple numérique court comparant deux agrégats de même variance marginale mais de corrélations différentes.
- Distinguer soigneusement covariance, corrélation et indépendance.
- Conclure par une règle de décision sur le moment où l'agrégation réduit effectivement la variance.

### J05 — Quelle distribution est la plus incertaine ?

Fichier : `calendar/days/jour-05.qmd`  
Volume observé : environ 10 500 caractères.

**Ce qui fonctionne**
- La distinction surprise / entropie est claire.
- Le calcul binaire est vérifiable.
- La page met en garde contre l'assimilation entre faible entropie, confiance et qualité prédictive.
- Le passage à l'information mutuelle a une base mathématique utile.

**Problèmes à traiter**
- L'article passe de l'entropie binaire à l'entropie conditionnelle, l'information mutuelle, la calibration, le score de Brier/log-loss, puis à l'entropie différentielle. C'est beaucoup pour une question introductive.
- L'entropie différentielle est un changement de cadre important (variable continue, dépendance à la mesure/unité) et ne doit pas être ajoutée comme simple « autre piège » sans exemple.
- Les usages en apprentissage actif et en classification sont listés, mais ne sont pas développés en une décision concrète.
- Il faut distinguer plus explicitement l'entropie d'une distribution prédictive, l'incertitude épistémique/aléatoire si cette distinction est abordée, et la qualité d'une prévision évaluée sur des observations.

**Révision proposée**
- Faire du noyau de l'article : calculer et interpréter l'entropie, puis montrer ce qu'elle ne permet pas de conclure sur une prévision.
- Utiliser un jeu de prédictions et de résultats observés pour montrer pourquoi une distribution concentrée peut être mal calibrée.
- Garder l'information conditionnelle comme prolongement direct si elle est réellement calculée ; déplacer l'entropie différentielle vers un approfondissement séparé.
- Remplacer la liste d'applications par un cas de décision précis (par exemple, sélectionner une observation à annoter) et discuter les limites du critère.

## Dossiers J06–J10 : ce ne sont pas encore des articles

Les fichiers `editorial/calendar-2026/skeletons/jour-06.md` à `jour-10.md` sont des dossiers de conception. Ils ne doivent pas être évalués comme des pages publiques ni être simplement enrichis par davantage de rubriques.

Priorités de production :
- **J06 causalité** : construire un exemple chiffré de confusion (tableau ou simulation reproductible), montrer pourquoi (P(Y\mid X)) diffère de (P(Y\mid do(X))), expliciter les hypothèses d'identification.
- **J07 régression** : partir d'un petit nuage de points calculable, dériver les moindres carrés sur un cas simple, examiner résidus et point influent, distinguer prédiction et causalité.
- **J08 maximum de vraisemblance** : conserver le calcul de la pièce biaisée, mais faire apparaître la courbe de vraisemblance et le rôle de l'information disponible ; distinguer estimateur ponctuel et incertitude.
- **J09 fonction de perte** : construire une décision où changer la perte change le comportement optimal, et distinguer perte d'entraînement, métrique d'évaluation et coût métier.
- **J10 descente de gradient** : faire manipuler une fonction et plusieurs pas d'apprentissage ; relier la dérivée à la mise à jour et à la convergence sans généraliser abusivement le cas quadratique.

## Ordre de traitement recommandé

1. J01 : resserrer le fil, réduire les cas accessoires et rendre l'audit de variable autonome.
2. J02 : clarifier les mécanismes de sélection et les limites des corrections.
3. J03 : transformer la visualisation en résolution d'une démonstration.
4. J04 : supprimer la redondance et quantifier le transfert.
5. J05 : réduire le nombre de notions et construire un cas d'évaluation prédictive.
6. J06–J10 : écrire des articles complets à partir des questions et démonstrations, pas des squelettes plus longs.

## Contrôles à effectuer pour chaque page

- Exactitude de chaque formule et de chaque résultat numérique.
- Sources primaires, édition/version, lien stable et affirmation réellement soutenue.
- Durée mesurée sur le texte rendu, pas estimée à partir d'un nombre de mots.
- Chaque figure a une question pédagogique, une légende, un texte alternatif et une version mobile lisible.
- Chaque exemple est reproductible et ses hypothèses sont visibles.
- Les concepts centraux sont expliqués, les notions secondaires sont déplacées plutôt que simplement accumulées.
- Le transfert se conclut par une action ou une interprétation qui change réellement.
- Liens internes, navigation clavier et rendu mobile contrôlés.
- Pas de publication tant que revue scientifique et revue visuelle ne sont pas faites.
