# Réécriture éditoriale — calendrier 2026, jours 1 à 5

Date : 2026-11-26  
Branche : calendar/rewrite-day-01-measurement-story-v1  
PR : https://github.com/JM-Brun/knowledge-stories/pull/150  
Statut : réécriture source effectuée ; rendu et revue visuelle à réaliser.

## Objectif

Passer de pages informatives parfois accumulatives à des articles qui conduisent le lecteur dans une enquête ou une démonstration. La qualité recherchée n'est pas la longueur : chaque page doit avoir une question directrice, un enchaînement nécessaire, des exemples entièrement calculables, des visuels qui font avancer le raisonnement et une conclusion qui change la façon d'analyser un cas.

## Référence éditoriale fournie

Page demandée : https://djamchid.fr/blog/posts/2026-11-18-multiplication-karatsuba.html

La page exacte n'a pas été récupérée par l'outil de consultation pendant cette session. Une publication LinkedIn de l'auteur décrit cependant le dispositif associé : exemple concret 1234 × 5678, comparaison de 16 produits élémentaires avec les trois produits de Karatsuba, mise en contexte historique et démonstration interactive : https://fr.linkedin.com/posts/dalili_math%C3%A9matiques-intelligenceartificielle-activity-7528766134909763584-4THP. Cette publication est un indice secondaire, pas un substitut à la lecture de l'article.

Un autre article du même auteur, consultable ici, a pu être étudié : https://djamchid.fr/blog/posts/2026-11-13-mais-que-fait-lean-au-juste.html. Il donne un exemple utile de progression éditoriale : question concrète, intervention humaine (l'astuce), formalisation, contrôle des étapes, puis portée et limites. L'article fait travailler une démonstration courte au lieu de commencer par une présentation abstraite de l'outil. Ce modèle de progression a inspiré la réorganisation, sans chercher à copier son plan à l'identique.

## Changements réalisés

### J01 — Mesure

Fichier : calendar/days/jour-01.qmd

- Recentrage sur une enquête : deux bâtiments semblent différer ; deux capteurs sont comparés côte à côte.
- Remplacement du tableau de cinq profils par un seul contraste chiffré : séries A (20,2 ; 20,1 ; 20,2) et B (19,0 ; 19,1 ; 19,0).
- Progression : anomalie → fidélité/répétabilité et justesse → modèle theta + b + epsilon_i → effet de la moyenne → incertitude de la référence → décision avant correction → transfert vers la qualité des variables.
- Trois figures SVG : comparaison des capteurs, réduction du bruit sans suppression du biais, chaîne de production d'une variable.
- Exercice final avec un troisième capteur et discussion d'un usage en détection de tendance.
- Les développements secondaires sur les construits, la résolution et les autres propriétés instrumentales ont été réduits au strict nécessaire ou déplacés vers les ressources liées.

### J02 — Échantillonnage et sélection

Fichier : calendar/days/jour-02.qmd

- Récit de deux enquêtes de satisfaction contradictoires.
- Estimand explicite : moyenne de la population de 100 000 utilisateurs, moitié réguliers (moyenne 10), moitié occasionnels (moyenne 20).
- Comparaison d'un recensement de 50 000 réguliers avec un échantillon stratifié de 1 000 répondants.
- Trois figures SVG : composition des enquêtes, chaîne population/base/observations, graphe causal de sélection sur un collisionneur.
- Pondération conservée comme transfert ML, mais réduite à un exemple de ratios de parts cible/source et aux hypothèses nécessaires.
- Dataset shift ramené à une distinction des trois mécanismes et à l'adéquation du protocole de validation.

### J03 — Résumés statistiques et visualisation

Fichier : calendar/days/jour-03.qmd

- Récit des quatre rapports qui semblent identiques avant que les données soient visualisées.
- Trois séries numériques de même moyenne et de dispersions différentes.
- Le quartette d'Anscombe devient la résolution centrale ; les statistiques communes sont affichées et comparées aux formes graphiques.
- La visualisation est traitée comme un test d'hypothèse, avec un protocole de diagnostic et les limites des graphiques.
- Lien explicite entre résumé, perte d'information et interprétation des scores ML.

### J04 — Covariance

Fichier : calendar/days/jour-04.qmd

- Ouverture narrative avec deux capteurs sur un pont et une perturbation partagée.
- Tableau du rapport entre variance de la moyenne et variance marginale pour rho = -1, 0 et +1.
- Schéma SVG séparant perturbation commune et bruits propres.
- Démonstration algébrique, modèle à composante commune, matrice de covariance et exemple dépendance sans covariance conservés.
- Le transfert vers les ensembles de modèles insiste sur la diversité des erreurs, et non le simple nombre de modèles.

### J05 — Entropie et qualité prédictive

Fichier : calendar/days/jour-05.qmd

- Récit de deux services météo annonçant respectivement 90 % et 50 % de pluie.
- Calcul de l'entropie binaire et représentation de sa courbe.
- Contre-exemple quantitatif : sur 100 jours dont 50 pluvieux, score de Brier 0,41 pour la prévision constante 0,9 et 0,25 pour la prévision constante 0,5.
- Exemple d'information mutuelle avec un capteur binaire de fiabilité 90 %.
- Distinction entre entropie prédictive, calibration, score probabiliste et ambiguïté utile en apprentissage actif.
- Précaution sur l'entropie différentielle des variables continues.

## Contrôles statiques effectués

Sur les cinq fichiers de la branche :
- nombre de balises figure égal au nombre de balises de fermeture ;
- nombre de balises SVG égal au nombre de balises SVG de fermeture ;
- blocs details équilibrés ;
- délimiteurs de mathématiques affichées équilibrés.

Comptage des visuels SVG : J01 3, J02 3, J03 2, J04 2, J05 2.

Vérifications algébriques des exemples :
- J01 : moyennes 20,17 °C et 19,03 °C ; modèle de moyenne sous erreurs indépendantes ; biais constant non réduit par le moyennage.
- J02 : moyenne cible 15 ; moyenne de groupe A 10 ; poids 0,5/0,9 environ 0,56 et 0,5/0,1 égal à 5.
- J03 : moyennes des trois séries égales à 5 ; variances descriptives avec diviseur n : 0,4 ; 8 ; 40. Valeurs résumées du quartette d'Anscombe données à l'arrondi près.
- J04 : variances 2/3 et 8/3, covariance 4/3, variance de la somme 6 ; pour deux variables de même variance, variance de la moyenne égale à sigma² fois (1 + rho) / 2.
- J05 : entropie binaire de 0,5 égale à 1 bit ; de 0,9 environ 0,469 bit ; Brier des prévisions constantes 0,9 et 0,5 sur une fréquence observée 0,5 : 0,41 et 0,25 ; information mutuelle du canal binaire symétrique de fiabilité 0,9 environ 0,531 bit.

## Limites non levées

- Aucun rendu Quarto n'a été exécuté dans cette session.
- Aucun contrôle navigateur/mobile, clavier, lecteur d'écran ou contraste n'a été réalisé.
- Les SVG sont des figures statiques. Il faudra décider après rendu si une interaction apporte un bénéfice pédagogique réel ; ne pas ajouter d'interactivité simplement pour en avoir.
- Les sources et liens bibliographiques doivent être vérifiés individuellement lors de la revue scientifique finale.
- La comparaison avec l'article Karatsuba exact reste à compléter dès que son contenu est récupérable.
- Les pages restent dans une PR brouillon et ne sont pas publiées.

## Prochaine itération

1. Rendre les cinq pages et examiner chaque figure sur grand et petit écran.
2. Corriger les défauts de rendu mathématique, d'accessibilité et de mise en page.
3. Vérifier les sources, en particulier le VIM et les références sur le dataset shift, Anscombe et les scores probabilistes.
4. Faire une revue de continuité J01→J05 : éviter les répétitions, clarifier les transitions et vérifier que chaque page apporte une question nouvelle.
5. Décider si certains visuels méritent une version interactive (par exemple, faire varier le biais et le nombre de mesures en J01, la proportion des groupes en J02, la corrélation en J04 ou la probabilité prédite en J05).
