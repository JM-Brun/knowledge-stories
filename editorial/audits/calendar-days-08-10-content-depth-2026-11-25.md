# Revue de contenu — calendrier 2026, journées 8 à 10

Date : 25 novembre 2026  
Périmètre : dossiers de conception `jour-08.md` à `jour-10.md`, branche `calendar/content-depth-days-08-10`.

## Résultat de la revue

Les trois dossiers proposaient déjà une bonne question directrice et un dispositif, mais la démonstration restait trop souvent décrite comme une tâche future. Les ajouts rendent le raisonnement central calculable et vérifiable avant la rédaction de l'article.

### J08 — Retrouver le biais d'une pièce

Ajouts :
- Vraisemblance Bernoulli pour 7 piles sur 10 lancers, log-vraisemblance et dérivation de `p_hat = 0,7`.
- Distinction entre séquence ordonnée et observation du seul nombre de piles : le coefficient binomial ne dépend pas de p et ne change donc pas le maximum.
- Rapport de vraisemblance entre p=0,7 et p=0,5 (environ 2,28), accompagné de l'avertissement qu'il ne s'agit pas d'une probabilité du paramètre.
- Cas limites k=0 et k=n, hypothèses d'indépendance/stabilité et limite d'une estimation ponctuelle sur petit échantillon.
- Exercices qui distinguent calcul du maximum, incertitude et interprétation bayésienne.

Vigilance scientifique : l'article final devra choisir et sourcer une méthode d'incertitude adaptée (intervalle fréquentiste ou analyse bayésienne) sans les confondre. Ne pas conclure à un biais simplement parce que l'estimation ponctuelle diffère de 0,5.

### J09 — Le modèle optimise ce qu'on lui demande

Ajouts :
- Exemple `0, 0, 0, 0, 10` : la moyenne (2) minimise la somme des carrés (80), tandis que la médiane (0) minimise la somme des erreurs absolues (10).
- Décomposition explicite erreur/résidu, perte, risque empirique et risque populationnel.
- Mise en garde contre la confusion entre perte d'entraînement, seuil de décision et métrique de compte rendu.
- Exercice de transfert sur les coûts asymétriques d'une alerte de panne.

Vigilance scientifique : l'exemple concerne un prédicteur constant en régression. L'article devra éviter de transférer sans précaution la conclusion vers la classification, où la règle de décision, la calibration et les coûts interviennent à d'autres niveaux.

### J10 — Un pas trop grand fait rater la vallée

Ajouts :
- Itération exacte pour `f(x)=x²` : `x_(t+1)=(1-2 eta)x_t`.
- Seuil de convergence `0 < eta < 1` et quatre régimes illustrés : convergence, optimum atteint en un pas, oscillation non amortie, divergence.
- Généralisation à `f(x)=lambda x²/2` : `0 < eta < 2/lambda`.
- Explication du lien entre courbure, échelle du pas et mauvais conditionnement.
- Limites : ce résultat quadratique ne constitue pas une garantie générale pour les fonctions non convexes ou les variantes stochastiques.
- Exercices numériques et transfert à une courbure différente.

Vigilance scientifique : présenter les conditions de convergence dans le cadre exact de la fonction considérée. Ne pas présenter le seuil quadratique comme une règle universelle pour tout modèle.

## Contrôles numériques

- J08 : `0.7^7 * 0.3^3 / (0.5^10) ≈ 2.2769`.
- J09 : somme des carrés au minimiseur a=2 : 80 ; somme des valeurs absolues au minimiseur a=0 : 10.
- J10 : pour x0=1, le facteur multiplicatif vaut 0,5 ; 0 ; -1 ; -1,2 pour eta=0,25 ; 0,5 ; 1 ; 1,1 respectivement.

Ces contrôles portent sur les exemples proposés dans les dossiers. Ils ne remplacent pas la vérification des calculs et figures dans les articles finaux.

## Travail restant avant publication

1. Vérifier les concepts canoniques et leurs statuts dans Wiki Knowledge ; J08 mentionne encore un identifiant historique à harmoniser, J09 un concept à créer, J10 un concept draft.
2. Choisir et vérifier des références bibliographiques précises pour les trois démonstrations.
3. Construire les figures seulement si elles ajoutent une lecture que les équations et tableaux ne donnent pas déjà.
4. Rédiger les articles autonomes ; mesurer leur durée réelle.
5. Faire relire les exercices et leurs corrections, puis vérifier le rendu, l'accessibilité et les liens.

## Limites de cette revue

- Les trois dossiers de conception ont été enrichis ; aucun article public des journées 8 à 10 n'a été créé ou publié.
- Les références bibliographiques n'ont pas encore été vérifiées.
- Aucun rendu Quarto, test navigateur ou audit lecteur d'écran n'a été effectué.
- La PR de calendrier #144 est indépendante et n'est pas incluse dans cette branche.
