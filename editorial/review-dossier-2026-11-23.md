# Dossier de relecture — histoires en préparation

**Date de l'audit :** 23 novembre 2026  
**Périmètre :** les deux articles longs présents dans la collection éditoriale.  
**Décision technique :** passage à `status: review` pour les rendre accessibles dans l'atelier, sans les intégrer aux publications publiques.

Ce dossier est une revue préparatoire, pas une validation scientifique finale ni une autorisation de publication.

## 1. Karatsuba, trois produits au lieu de quatre

**Sujet disciplinaire :** algorithmique, arithmétique et complexité.

### Points contrôlés
- L'identité `(a+b)(c+d)-ac-bd=ad+bc` est correctement utilisée.
- L'exemple `1 234 × 5 678 = 7 006 652` est arithmétiquement cohérent.
- Pour un découpage équilibré en deux blocs, la récurrence `T(n)=3T(n/2)+O(n)` conduit à `Θ(n^{log₂ 3})`, sous le modèle de coût sur chiffres et avec un cas de base approprié.
- Le texte distingue désormais explicitement complexité asymptotique, coût local et performance réelle.
- La présentation de Toom rappelle que l'interpolation sur les entiers impose de gérer les divisions exactes.

### Améliorations intégrées
- Précision sur le modèle de coût et le seuil de multiplication directe.
- Précision sur les contraintes d'interpolation pour Toom.
- Passage au statut `review`.

### Points restant à examiner
1. Vérifier indépendamment les affirmations historiques et les statuts des résultats de multiplication sous-`n log n` de 2026, en distinguant prépublication, examen externe, preuve formalisée et implémentation.
2. Tester l'explorateur avec des opérandes de longueurs très différentes, des zéros, des retenues et les limites autorisées.
3. Vérifier clavier, lecteur d'écran, petit écran et solution de repli sans JavaScript.
4. Contrôler que les unités et modèles de coût sont visibles à chaque comparaison chiffrée.

## 2. Le paradoxe des jumeaux, chacun à sa montre

**Sujet disciplinaire :** relativité restreinte, simultanéité et temps propre.

### Points contrôlés
- Pour une vitesse de croisière de `0,8c`, le facteur de Lorentz vaut `γ=5/3`.
- Chaque trajet de cinq ans dans le référentiel terrestre correspond à trois ans de temps propre à bord ; les durées totales sont donc 10 ans et 6 ans.
- Au demi-tour situé à `(t,x)=(5 ans,4 années-lumière)`, les coupes de simultanéité des référentiels inertiels d'aller et de retour attribuent respectivement les dates terrestres `1,8` et `8,2 ans`.
- La différence de `6,4 ans` entre ces dates explique le changement d'attribution à distance ; elle ne représente pas un saut physique de l'horloge terrestre.
- Le texte distingue date attribuée par simultanéité et signal effectivement reçu.

### Améliorations intégrées
- Clarification du caractère idéalisé du demi-tour instantané et de sa lecture comme limite d'une manœuvre de durée finie.
- Précision que le temps propre dépend de la trajectoire entre les événements de rencontre, pas du système de coordonnées choisi.
- Passage au statut `review`.

### Points restant à examiner
1. Vérifier les conventions de signe et les événements simultanés dans l'explorateur interactif.
2. Contrôler que le diagramme espace-temps distingue clairement lignes d'univers, lignes de simultanéité et trajets lumineux.
3. Ajouter, si utile, une comparaison numérique avec un demi-tour de durée finie plutôt que de laisser l'idéalisation instantanée comme seul scénario.
4. Relire la présentation historique du paradoxe et la portée exacte des sources citées.

## 3. Règles de revue communes

- Vérifier les calculs indépendamment du texte et du composant interactif.
- Contrôler qu'une simplification pédagogique n'efface pas une hypothèse déterminante.
- Distinguer résultat mathématique, interprétation physique, convention de représentation et performance empirique.
- Vérifier sources, licences, accessibilité, responsive et autonomie de lecture.
- Ne passer à `published` qu'après validation humaine explicite.

## 4. Accès à l'atelier

Les deux articles sont désormais proposés sous `/atelier/{slug}/`. L'index `/atelier/` est accessible depuis un lien discret placé dans les notes de fin du calendrier 2026. Les pages sont marquées `noindex, nofollow, noarchive` et absentes de la navigation ordinaire.

**Limite importante :** le dépôt et GitHub Pages sont publics. Le statut `review` masque les contenus des parcours et moteurs de recherche conformes à la directive, mais ne fournit aucun contrôle d'accès. Ne pas y placer d'information confidentielle.

## 5. Suivi de la correction de l'atelier et de la page Karatsuba — 23 novembre 2026

### État technique vérifié

- Le lien de pied de page, les liens de l'index de relecture et les liens de retour utilisent maintenant une base URL normalisée avec un séparateur final. Cela évite la concaténation fautive `/knowledge-storiesatelier/`.
- La page Karatsuba possède une notice de provenance en tête : l'article de Djamchid Dalili, [« Multiplier deux nombres — de Karatsuba à l'IA »](https://djamchid.fr/blog/posts/2026-11-18-multiplication-karatsuba.html), est explicitement présenté comme source principale. La page indique que son fil explicatif, plusieurs idées de présentation et une part importante de sa matière pédagogique en dérivent.
- Une comparaison visuelle responsive illustre les quatre produits du développement direct et les trois produits de Karatsuba, avec l'identité algébrique qui permet de reconstruire les termes croisés.
- La PR Knowledge Stories #18 a été fusionnée. Les contrôles de qualité, tests, build Astro, rendu Quarto, vérification de publication combinée et déploiement Pages ont réussi.
- URLs de revue : [index](https://jm-brun.github.io/knowledge-stories/atelier/) · [Karatsuba](https://jm-brun.github.io/knowledge-stories/atelier/karatsuba-multiplication/).
- Le contenu conserve le statut `review`. Ne pas le passer à `published` sans validation humaine explicite.

### Travail restant — ordre recommandé

#### P0 — Revue visuelle réelle et liens en production
- [ ] Ouvrir l'index de relecture depuis le lien discret du pied de page sur ordinateur et mobile ; vérifier que l'URL reste sous `/knowledge-stories/atelier/`.
- [ ] Ouvrir les deux fiches depuis l'index et utiliser le lien « Index de relecture » depuis chaque fiche.
- [ ] Examiner la page Karatsuba en largeur desktop, tablette et mobile : débordements, densité, hiérarchie des titres, lisibilité des équations et cohérence des couleurs.
- [ ] Vérifier le rendu effectif des blocs mathématiques et du composant comparatif dans le navigateur ; le succès du build ne garantit pas à lui seul leur rendu visuel.
- [ ] Vérifier les liens externes et les ancres vers la source principale, notamment l'ancre `#atelier` si elle est conservée.

#### P1 — Exactitude, attribution et intégrité éditoriale de Karatsuba
- [ ] Relire l'article de Djamchid en parallèle du brouillon et établir une petite matrice de provenance : idées/structure reprises, formulations reformulées, exemples/calculs ajoutés, visualisations ajoutées et références complémentaires.
- [ ] Vérifier que l'attribution ne laisse pas entendre que les éléments repris sont des contributions originales de Knowledge Stories. Conserver une attribution visible dans la page, pas seulement dans les métadonnées.
- [ ] Vérifier les conditions de réutilisation de la source et des éventuels visuels : distinguer inspiration, paraphrase, adaptation et reproduction. Demander une autorisation ou remplacer tout élément dont les droits ne sont pas établis ; ne pas supposer qu'un lien ou une attribution suffit.
- [ ] Contrôler indépendamment les calculs numériques, la décomposition algébrique, la récurrence et les hypothèses du modèle de coût.
- [ ] Revoir les affirmations historiques et contemporaines sur les algorithmes de multiplication rapide à partir de sources primaires ; dater les résultats et distinguer prépublication, publication évaluée, preuve formalisée et implémentation.
- [ ] Confirmer que les comparaisons de complexité ne sont pas présentées comme des mesures de temps réel et que les seuils pratiques sont contextualisés.

#### P1 — Qualité du composant et accessibilité
- [ ] Tester l'explorateur interactif avec nombres de tailles très différentes, zéro, valeurs négatives si elles sont prises en charge, retenues et limites de saisie.
- [ ] Vérifier les comportements clavier, focus visible, lecteurs d'écran et libellés des contrôles.
- [ ] Vérifier que la comparaison visuelle a une alternative textuelle suffisante et reste compréhensible sans couleur.
- [ ] Tester le comportement sans JavaScript ou documenter explicitement les éléments qui nécessitent JavaScript.
- [ ] Contrôler le responsive et les contrastes du bandeau de provenance, des cartes de comparaison et des liens.

#### P2 — Cohérence éditoriale et modèle de connaissance
- [ ] Après revue humaine, synchroniser les corrections de contenu dans la fiche conceptuelle et la fiche source de Wiki Knowledge ; ne pas traiter la page dérivée comme une corroboration indépendante de sa source.
- [ ] Vérifier que les liens croisés Knowledge Stories ↔ Wiki Knowledge ne créent ni doublon de concept ni double comptage des sources.
- [ ] Pour le paradoxe des jumeaux, reprendre séparément les points de revue listés plus haut ; ne pas considérer la validation de Karatsuba comme une validation globale de l'atelier.
- [ ] Enregistrer la décision de revue et les corrections substantielles avant tout passage à `published`.

### Dépendance inter-dépôts

La PR de modélisation correspondante dans Wiki Knowledge est [#158](https://github.com/JM-Brun/wiki-knowledge/pull/158). Elle relie la fiche conceptuelle Karatsuba à cette adaptation dérivée et documente la provenance dans la fiche source. Elle reste à valider : ses workflows ont échoué avant la première étape des jobs, sans journal exploitable. À la prochaine session, vérifier si une relance produit des étapes et des journaux normaux ; sinon diagnostiquer le provisionnement GitHub Actions. Ne pas fusionner uniquement sur la base du diff si les validations attendues n'ont pas été exécutées.

### Reprise rapide à la prochaine session

1. Commencer par le contrôle navigateur de l'index et de la page Karatsuba déployés.
2. Effectuer la revue de provenance et de droits avec l'article de Djamchid ouvert en parallèle.
3. Tester explorateur, équations, clavier et mobile.
4. Traiter Wiki Knowledge PR #158 et synchroniser les corrections éventuelles.
5. Ne demander une validation de publication qu'après clôture des points bloquants et décision humaine explicite.


## 6. Revue éditoriale et scientifique — Calendrier, jour 1 — 23 novembre 2026

### État de la source

- La source de référence est `calendar/days/jour-01.qmd`. Elle contient déjà cinq profils pédagogiques, une galerie de capteurs, un sélecteur d'aide au choix, les équations corrigées, les visualisations biais–variance et propagation des erreurs.
- Le rendu public observé au début de la revue ne correspondait pas à cette source : il présentait encore l'ancienne version à deux capteurs et des expressions mathématiques dégradées. Le workflow Pages du commit `9a89b9d` est toutefois indiqué comme réussi. Une nouvelle vérification du rendu déployé reste nécessaire ; un succès CI ne prouve pas à lui seul que le navigateur ou un cache sert la bonne version.
- Le contenu est riche et scientifiquement prudent, mais dense pour un premier jour. Il faut préserver les nuances sans accumuler les avertissements redondants.

### Corrections intégrées dans la branche de revue

- Le profil C n'est plus qualifié de « peu biaisé » sur la seule base de trois observations : sa moyenne observée est explicitement distinguée du biais de la population.
- Le profil D n'infère plus une résolution de l'instrument à partir de trois nombres : le pas de 0,5 °C est présenté comme une hypothèse illustrative sur l'affichage.
- Les descriptions alternatives du graphique ont été alignées sur ces précautions.
- Les explications répétées sur la comparaison A/B ont été allégées.
- La discussion du profil C distingue maintenant clairement moyenne journalière, bruit centré à confirmer et événements brefs susceptibles d'être masqués.

### Revue scientifique — points validés à la lecture

- Pour A et B, les deux séries ont la même étendue et le même écart-type empirique (environ 0,058 °C avec le diviseur `n-1`) ; les moyennes et écarts à la référence sont cohérents après arrondi.
- Sous les hypothèses i.i.d. explicitées, l'écart-type de la moyenne varie comme (1/\sqrt{n}), tandis que le décalage systématique constant persiste.
- La décomposition biais–variance de l'EQM est formulée pour l'estimation d'une quantité fixe sous perte quadratique.
- La décomposition (f(\tilde{x})-g(x)=[f(\tilde{x})-f(x)]+[f(x)-g(x)]) est une identité exacte sous les hypothèses indiquées ; l'exemple numérique donne respectivement (2,4), (1,68) et (4,08).
- Le texte distingue erreur de mesure, incertitude, étalonnage, ajustage et traçabilité, ainsi que biais de mesure et biais d'estimation.

### Travail restant — avant clôture

1. **Rendu publié (P0)** — vérifier en navigateur que la version publique correspond bien au commit source courant ; inspecter les équations MathJax, le sommaire, les deux SVG et les ancres. Faire un rechargement sans cache si nécessaire.
2. **Responsive et accessibilité (P1)** — contrôler desktop, tablette et mobile ; tester le sélecteur au clavier, le focus visible, le contraste, le lecteur d'écran et le comportement sans JavaScript.
3. **Visualisations (P1)** — contrôler la lisibilité des libellés dans le graphique à cinq profils et dans la chaîne de propagation sur petit écran ; vérifier que la couleur n'est jamais le seul canal de distinction.
4. **Sources (P1)** — ouvrir les liens JCGM, NIST et AI Measurement Science ; confirmer les versions et la portée des affirmations, en particulier la référence 2026 sur la calibration sans référence.
5. **Édition (P2)** — relire la longueur réelle avec un lecteur non spécialiste. Envisager de déplacer une partie du détour sur la validité des construits ou la perturbation de la mesure vers un encadré « Pour aller plus loin » si la progression principale paraît trop chargée.
6. **Publication** — ne pas déclarer la revue terminée avant les vérifications de rendu et d'accessibilité. Le statut de revue ne vaut pas validation scientifique externe.

### Principe éditorial

Conserver le fil conducteur « phénomène → instrument/protocole → observation/incertitude → jeu de données → modèle/décision ». Chaque détail métrologique doit éclairer une décision de mesure ou une limite d'interprétation ; éviter d'ajouter des profils ou des notions qui ne renforcent pas ce raisonnement.
