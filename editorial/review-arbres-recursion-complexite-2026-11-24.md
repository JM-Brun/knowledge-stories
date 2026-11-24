# Revue pédagogique — arbres de récursion et complexité

Date : 2026-11-24  
Page concernée : `src/content/articles/arbres-recursion-complexite.mdx`  
URL : https://jm-brun.github.io/knowledge-stories/atelier/arbres-recursion-complexite/

## Objectif éditorial

Faire de la page une ressource autonome sur l'analyse des arbres de récursion. Karatsuba reste l'étude de cas centrale, mais le lecteur doit d'abord acquérir une méthode transférable à d'autres récurrences.

Progression visée : vocabulaire et représentation → coût d'un niveau → somme des niveaux et feuilles → application à Karatsuba → généralisation → exercices et méthode de transfert.

## Modifications réalisées

### 1. Fondations générales ajoutées avant Karatsuba

- Définitions de racine, nœud, parent/enfant, niveau, feuille et profondeur.
- Exemple indépendant de Karatsuba : (T(n)=2T(n/2)+cn).
- Tableau des quantités (N_j), (S_j), (C_j) et (W_j).
- Relation centrale (W_j=N_jC_j), et généralisation par somme lorsque les nœuds d'un niveau ont des coûts différents.
- Distinction entre travail interne et coût des feuilles.
- Contre-exemple pédagogique montrant pourquoi compter uniquement les feuilles peut être insuffisant : (T(n)=2T(n/2)+Theta(n)).

### 2. Démonstration de Karatsuba conservée

La démonstration existante est maintenue : récurrences classique/Karatsuba, arbre et tableau pour (n=8), nombre de feuilles, changement de base, somme géométrique du travail local, comparaison classique, lien avec le théorème maître, discussion des tailles irrégulières et distinction entre modèle équilibré et implémentation à arrêt anticipé.

Correction de notation dans le passage classique : (O(n 2^j)) au lieu de la notation ambiguë (O(n,2^j)).

### 3. Généralisation ajoutée

- Récurrence (T(n)=aT(n/b)+Theta(n^d)).
- Coût du niveau (W_j=Theta(n^d(a/b^d)^j)).
- Interprétation des trois régimes : premiers niveaux dominants, contribution comparable de chaque niveau, derniers niveaux dominants.
- Tableau de synthèse et lien explicite avec les cas du théorème maître, sous ses hypothèses usuelles.

### 4. Apprentissage actif ajouté

Quatre exercices avec corrections raisonnées :
- lecture d'un niveau ;
- calcul du travail d'un niveau ;
- identification du régime de croissance ;
- distinction entre coût des feuilles et coût total.

Une procédure en huit étapes clôt le parcours.

## Registre de conservation du contenu antérieur

Les blocs suivants ont été conservés dans le fichier lors de l'insertion des nouvelles sections :

- interprétation de (3T(n/2)+O(n)) et distinction entre coûts de calcul et opérations arithmétiques ;
- comparaison des quatre sous-multiplications classiques et des trois sous-multiplications de Karatsuba ;
- tableau des appels et tailles par niveau ;
- exemple (n=8), y compris les unités normalisées de travail local ;
- calcul (3^k=n^{\log_2 3}) ;
- analyse du coût des additions/soustractions et somme géométrique ;
- comparaison (Theta(n^2)) / (Theta(n^{\log_2 3})) ;
- lien avec le théorème maître ;
- analyse des retenues et tailles de blocs irrégulières ;
- nuance entre la borne supérieure de l'implémentation à arrêt anticipé et la borne inférieure du modèle équilibré ;
- sources bibliographiques déjà présentes.

Aucune section de démonstration antérieure n'a été volontairement supprimée.

## Points à vérifier pendant la revue technique

- [ ] Exécuter `npm run check`.
- [ ] Exécuter `npm test`.
- [ ] Exécuter `npm run build`.
- [ ] Vérifier le rendu MathJax de toutes les nouvelles équations.
- [ ] Vérifier l'affichage des tableaux sur mobile.
- [ ] Vérifier les éléments `details/summary` au clavier et leur lisibilité avec les styles globaux.
- [ ] Vérifier que la page publiée correspond au commit fusionné, et non seulement à la branche de travail.
- [ ] Faire une relecture mathématique indépendante du passage sur les trois cas du théorème maître et de l'analyse des tailles irrégulières.

## Limites de cette itération

L'explorateur interactif générique (paramètres (a,b,d,n), arbre, coûts par niveau et feuilles) n'a pas été ajouté. La page dispose déjà de composants interactifs liés à Karatsuba dans l'écosystème du site ; un nouvel outil générique mérite un composant dédié, testé séparément, avec une représentation accessible sans JavaScript.

Les schémas existants ont été conservés. Leur refonte en arbre complet annoté (nombre d'appels, taille des sous-problèmes et coût local sur un même visuel) reste une amélioration graphique distincte. Il vaut mieux ne pas simuler cette visualisation avec un dessin décoratif qui masquerait les hypothèses.

## Critères d'acceptation

La page est pédagogiquement satisfaisante si un lecteur peut, sans connaître Karatsuba :
1. expliquer ce que représente un nœud, un niveau et une feuille ;
2. calculer (N_j), (S_j), (C_j) et (W_j) dans un cas régulier ;
3. expliquer pourquoi le coût total comprend les niveaux internes et les feuilles ;
4. identifier le régime dominant à partir de (a/b^d) ;
5. appliquer la procédure à une récurrence nouvelle et expliciter les hypothèses utilisées.


## Correctifs après la première exécution CI

L'exécution de la CI sur la première version de la PR a révélé trois défauts de compatibilité, sans remettre en cause la démonstration mathématique :

- des délimiteurs TeX écrits sous forme de caractères bruts dans le MDX n'étaient pas protégés de l'analyse Markdown/MDX ;
- le caractère `<` de la comparaison `a/b^d<1` était interprété comme le début d'un élément JSX ;
- un test de régression attendait encore l'ancienne notation `O(n,2^j)`, alors que le texte avait été corrigé en `O(n 2^j)`.

Correctifs appliqués dans la branche :

- uniformisation des délimiteurs mathématiques en entités MDX sûres ;
- remplacement de la comparaison par la commande mathématique `\\lt` ;
- mise à jour du test pour vérifier la notation corrigée sans relâcher l'exigence de marquage sémantique.

Le contrôle Astro a réussi sur la première exécution (0 erreur, 0 avertissement, 0 hint). Le build a ensuite échoué sur le caractère `<` signalé ci-dessus ; les tests ont échoué sur les deux assertions décrites. Les correctifs ont été poussés dans la branche, mais ils ne sont pas considérés comme validés tant qu'une nouvelle exécution complète de `npm test`, `npm run check` et `npm run build` n'a pas réussi.


## Deuxième itération — arbre annoté et coût des arbres irréguliers

### Correction de fond

La première formulation du coût total séparait les niveaux internes et un coût de feuilles unique au niveau maximal. Cette écriture ne couvrait pas les arbres dont certaines branches s'arrêtent plus tôt.

La page distingue désormais :
- le cas général, où chaque nœud interne et chaque feuille est compté exactement une fois ;
- l'écriture par niveaux, où (W_j) comprend tous les nœuds présents au niveau (j) ;
- le cas équilibré particulier, où toutes les feuilles sont au même niveau (h), ce qui autorise la séparation (sum_{j=0}^{h-1}W_j^{\mathrm{int}}+L_h).

### Visualisation ajoutée

Nouveau composant : `src/components/RecursionTreeExample.astro`.

- Arbre SVG accessible (titre et description explicites).
- Trois niveaux représentés pour (T(n)=2T(n/2)+cn).
- Taille de chaque sous-problème affichée dans les nœuds.
- Pour chaque niveau : nombre d'appels, taille, coût local et coût cumulé.
- Légende qui précise que les nœuds du niveau 2 ne sont pas nécessairement les feuilles.
- Mise en page responsive, avec une présentation en colonne sur petit écran.

Le composant est inséré dans l'article avant le tableau général. Le tableau est conservé : il formalise le motif pour un niveau arbitraire (j), tandis que le schéma donne une représentation concrète des trois premiers niveaux.

### Validation technique de l'itération

Sur le commit `85b8d8ef2075577ab991388cf304a20de7c1d9c6) :

- `npm test` : réussi.
- `npm run check` : réussi.
- `npm run build` : réussi.
- Workflow de publication : contrôle Astro, build du site, installation de Quarto, rendu du calendrier et vérification de la publication combinée réussis.
- L'étape d'upload de l'artefact est ignorée sur une pull request ; aucune publication Pages n'a été déclenchée depuis le workflow PR.

La compilation ne remplace pas une revue visuelle dans un navigateur. La vérification fine du rendu desktop/mobile, du contraste en thème sombre et de la navigation clavier reste à faire. La PR #82 a ensuite été fusionnée dans `main` au commit `7ea146f50b0f089db1eb7346f172367d63e0998d`.


## Troisième itération — expérimentation paramétrique générique

### Objectif

Rendre transférable le raisonnement développé dans la page. Le lecteur ne doit pas seulement lire les trois régimes : il doit pouvoir les provoquer en modifiant les paramètres de la récurrence.

### Composant ajouté

Nouveau composant : `src/components/RecursionTreeExplorer.astro`.

Paramètres manipulables :
- nombre de sous-problèmes par appel (`a`) ;
- facteur de réduction de la taille (`b`) ;
- exposant du coût local (`d`) ;
- profondeur (`k`), avec une taille initiale `n = b^k`.

Le tableau recalcule, pour chaque niveau, le nombre d'appels `N_j`, la taille `S_j`, le coût local `C_j` et le coût cumulé `W_j`. Les barres facilitent la comparaison des contributions. Un résumé indique la comparaison entre `a` et `b^d`, le régime dominant et le nombre de feuilles.

### Choix de modélisation et limites

- Les tailles sont des puissances exactes de `b` : aucune approximation due aux arrondis de découpage.
- Le tableau est rendu initialement côté serveur ; JavaScript ne fait que mettre à jour les valeurs et les barres. Une version statique reste donc lisible sans interaction.
- Les valeurs sont des unités de travail abstraites, pas des temps d'exécution.
- L'atelier représente un arbre régulier et un coût de feuille constant. Il ne remplace pas la discussion des arbres irréguliers et des retenues dans l'étude de Karatsuba.
- Les contrôles sont des éléments HTML natifs, utilisables au clavier ; les mises à jour de synthèse sont annoncées via une région `aria-live`.

### Vérifications restantes

- [ ] `npm test`.
- [ ] `npm run check`.
- [ ] `npm run build`.
- [ ] Tester les trois régimes : (a,b,d) = (2,2,1), (2,2,2), (3,2,1).
- [ ] Vérifier les valeurs du tableau et des feuilles pour plusieurs profondeurs.
- [ ] Revue visuelle desktop/mobile, thème sombre et navigation clavier.
- [ ] Vérifier la cohérence de l'atelier avec les équations et le texte de généralisation.
