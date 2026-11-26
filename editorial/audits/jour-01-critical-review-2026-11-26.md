# Relecture critique — Jour 1

Date : 2026-11-26  
Article : `calendar/days/jour-01.qmd`  
Page publiée : https://jm-brun.github.io/knowledge-stories/calendar/days/jour-01.html

## Portée et correction de méthode

Cette relecture reprend les points de l'audit conversationnel précédent et les confronte au fichier source versionné. Une limite importante doit être consignée : **les équations LaTeX du fichier source sont présentes et syntaxiquement cohérentes**. L'affirmation précédente selon laquelle les expressions étaient détruites dans le source n'était donc pas fondée. Le rendu HTML publié n'a pas pu être inspecté dans un navigateur pendant cette passe ; le défaut d'affichage signalé reste à reproduire avant d'attribuer sa cause à MathJax, Quarto ou au contenu.

La configuration Quarto du calendrier déclare MathJax 3 avec le composant TeX/CHTML. Cela rend plausible un problème de rendu ou d'extraction, mais ne suffit pas à en établir la cause. Ne pas réécrire les formules uniquement sur la base d'une extraction textuelle dégradée.

## Corrections apportées au texte

1. **Moyennes et résolution** — Expliciter que les moyennes 20,17 °C et 19,03 °C sont des résultats arithmétiques calculés sur des indications arrondies au dixième ; les centièmes ne démontrent pas une résolution instrumentale de 0,01 °C.
2. **Écart observé et biais** — Remplacer la formulation trop affirmative par « différences observées par rapport à l'indication de référence ». Trois observations ne démontrent pas la valeur du biais.
3. **Incertitude de comparaison** — Rappeler que l'incertitude élargie de la référence ne constitue pas à elle seule l'incertitude de la comparaison.
4. **Hypothèses du modèle de moyenne** — Rendre explicite la stabilité de la température recherchée et du décalage pendant la série.
5. **Autocorrélation** — Ajouter la limite des mesures temporelles dépendantes : la variance de la moyenne n'est alors généralement pas `σ²/n`.
6. **Plan croisé** — Distinguer identification des effets sous modèle additif et validation du modèle ; une valeur par case ne permet pas d'estimer correctement la variabilité résiduelle.
7. **Validation ML** — Relier le découpage de validation au scénario de déploiement et préciser les limites d'une validation par groupes.

## Points scientifiques conservés

- Le modèle `X_i = θ + b + ε_i` et les résultats sur l'espérance et la variance de la moyenne sont corrects sous les hypothèses annoncées : `θ` et `b` constants, erreurs indépendantes, de même loi, centrées et de variance finie `σ²`.
- La distinction fidélité/répétabilité/justesse/exactitude suit le VIM. L'exactitude est une notion qualitative.
- La décomposition biais–variance est correcte pour l'erreur quadratique moyenne d'un estimateur d'une quantité fixe.
- Le plan croisé illustratif donne bien un effet capteur de −1 °C et un effet bâtiment de +0,5 °C sous le modèle additif.
- Le passage vers la qualité des variables en Data Science reste l'angle distinctif à préserver.

## Points à vérifier avant validation éditoriale

- [ ] Construire le site avec `npm run check` et `npm run build`.
- [ ] Ouvrir la page générée sur desktop et mobile ; vérifier toutes les équations en particulier les indices, fractions, opérateurs, espérances et variances.
- [ ] Vérifier le chargement effectif de MathJax et la console navigateur ; distinguer un échec du moteur d'un défaut d'extraction textuelle.
- [ ] Vérifier le SVG des trois figures, les libellés, les contrastes, le défilement horizontal et les alternatives textuelles.
- [ ] Vérifier les liens VIM, DOI, NIST, atelier et navigation vers les jours suivants.
- [ ] Recalculer la durée de lecture après les ajouts.

## Décision

Conserver l'architecture et le fil narratif. Les corrections apportées renforcent les limites statistiques et la transposition Data Science sans ajouter une nouvelle digression. Ne pas déclarer le problème d'affichage résolu tant que le HTML généré n'a pas été contrôlé visuellement.