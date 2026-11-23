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
