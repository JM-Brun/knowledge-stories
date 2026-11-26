# Itération éditoriale — Jour 1 : rendre visible l'identifiabilité

Date : 2026-11-26  
Branche : `editorial/jour-01-visual-proof-2026-11-26`  
Fichier modifié : `calendar/days/jour-01.qmd`  
Base : `main`

## Décision

Conserver le fil narratif et le périmètre scientifique de la version courante. Ne pas ajouter de nouveau chapitre théorique. La faiblesse prioritaire était la représentation de la démonstration centrale : les deux plans de collecte étaient décrits par des tableaux et des matrices, mais leur différence structurelle n'était pas immédiatement visible.

## Modifications

1. **Plan initial — confusion site × capteur** : ajout d'un SVG accessible montrant les deux associations observées et les deux combinaisons absentes. La légende précise qu'il s'agit d'un schéma du plan, non de données supplémentaires.
2. **Plan croisé — information nouvelle** : ajout d'un SVG accessible présentant les quatre combinaisons et les comparaisons par ligne et par colonne. La légende rappelle l'hypothèse d'additivité.
3. **Renversement numérique** : explicitation de la décomposition
   `−0,5 °C observé = +0,5 °C bâtiment − 1,0 °C capteur`.
   Les nombres sont ceux du tableau : (19,5-20,0=-0,5), (20,5-20,0=+0,5), (19,5-20,5=-1,0).
4. **Transfert** : ajout de trois situations de collecte (environnement, santé, NLP), présentées explicitement comme analogies de conception et non comme équivalences statistiques.

## Points scientifiques préservés

- Les relevés de co-localisation indiquent un écart observé d'environ 1 °C dans les conditions de l'essai ; ils ne démontrent pas un biais constant universel.
- La variance de la moyenne (sigma^2/n) reste conditionnée par l'indépendance, la variance commune et les hypothèses de stabilité déjà formulées.
- Le plan croisé identifie les effets principaux dans le modèle additif sans interaction ; une valeur par case ne permet pas d'évaluer adéquatement l'interaction ou la variabilité résiduelle.
- Le passage de la différence naïve (-0,5) °C au contraste bâtiment (+0,5) °C est conditionnel au modèle et au scénario numérique construit.

## Contrôles et limites

- Les équations et contrastes numériques ont été relus à partir des valeurs affichées.
- Les deux SVG comportent `title`, `desc`, `role="img"`, une région défilable au clavier et une légende textuelle.
- Le rendu Quarto, l'inspection navigateur desktop/mobile, le contrôle clavier/lecteur d'écran et les tests de build restent à effectuer sur la branche/PR. Aucun de ces contrôles n'est déclaré réussi ici.
- Aucun changement de métadonnées de contenu, de navigation ou de configuration du site n'est nécessaire pour cette itération.

## Prochaine validation

1. Exécuter `npm run check`, `npm run test`, `npm run build` et le rendu Quarto du calendrier selon les scripts disponibles.
2. Vérifier les deux schémas sur mobile, notamment le défilement horizontal et la lisibilité des libellés.
3. Contrôler le rendu MathJax de la décomposition numérique et des matrices.
4. Recalculer le temps de lecture après rendu ; ne pas modifier l'estimation sans mesure.
