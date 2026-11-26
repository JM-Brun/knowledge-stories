# Blueprint de refonte — Jour 1

**Statut :** proposition de réécriture à évaluer.  
**Question directrice :** *Le modèle voit-il le bâtiment ou le capteur ?*  
**Contribution attendue :** montrer qu'une confusion parfaite entre site et instrument rend leurs effets non identifiables, puis que le croisement des mesures peut inverser la conclusion naïve.

## Promesse de lecture

À partir d'un cas simple, le lecteur comprend qu'un dataset peut être volumineux et pourtant ne pas contenir les comparaisons nécessaires pour répondre à une question. Il sait reconnaître le problème et proposer un plan de mesure qui apporte l'information manquante.

## Parcours essentiel

1. **Alerte** — deux bâtiments semblent différer, mais chacun possède un capteur différent.
2. **Comparaison commune** — les capteurs sont rapprochés dans les mêmes conditions ; leur décalage apparaît sans prétendre établir une calibration générale.
3. **Répétition** — le modèle de mesure distingue bruit aléatoire et décalage systématique ; les hypothèses sont visibles.
4. **Non-identifiabilité** — le modèle additif montre que l'observation initiale ne sépare pas l'effet du site de celui du capteur.
5. **Plan croisé** — les quatre combinaisons site × capteur révèlent des contrastes distincts et renversent la conclusion tirée de la comparaison initiale.
6. **Limites expérimentales** — absence d'interaction, répétitions, stabilisation et ordre des mesures.
7. **Transfert professionnel** — quand changer la collecte plutôt que les données ou l'algorithme.

## Matrice de couverture

| Notion / affirmation | Traitement dans l'article | Preuve ou justification | Limite |
|---|---|---|---|
| Dispersion ≠ décalage | Expliquée par deux séries à étendue identique | Tableau de trois mesures | Trois points ne caractérisent pas une performance générale |
| Répéter réduit le bruit, pas le biais | Démontrée brièvement | Modèle X = θ + b + ε sous hypothèses iid | Dépendance temporelle signalée, non développée |
| Référence incertaine | Mise en garde concise | VIM et documentation de la référence dans le scénario | Pas de budget d'incertitude |
| Confusion site × capteur | Concept central | Modèle additif et différence observée | Le plan initial ne permet pas d'isoler les deux effets |
| Plan croisé | Démonstration numérique | Contrastes à site constant et capteur constant | Hypothèse d'absence d'interaction ; répétitions nécessaires |
| Décision data science | Transfert final | Comparaison entre ajouter des lignes, complexifier le modèle et changer le plan | Pas de développement sur validation/généralisation |

## Éléments explicitement hors périmètre

- Taxonomie générale des erreurs de données et de modèles.
- Décomposition biais–variance de l'EQM d'un estimateur : autre sens du biais, à traiter dans le concept canonique et dans une ressource dédiée.
- Budget d'incertitude, GUM détaillé, étalonnage complet et traçabilité avancée.
- Biais d'échantillonnage, bruit d'annotation, erreur de spécification, fuite, calibration et robustesse.
- Développement sur les splits temporels ou par groupes, traité dans les journées sur l'évaluation.
- Analogie LLM/annotateurs sans exemple empirique quantifié.

Ces éléments sont à conserver dans Wiki Knowledge ou dans un futur backlog de série sur les erreurs, sans créer de nouvelle journée au calendrier 2026.

## Contrôles avant validation

- Vérifier les contrastes numériques et le sens du renversement de conclusion.
- Vérifier que le modèle additif et l'hypothèse sans interaction sont correctement expliqués.
- Ne pas présenter les trois relevés comme une estimation robuste de répétabilité ou de biais.
- Vérifier les localisateurs VIM et la portée des références sur l'incertitude.
- Contrôler le rendu MathJax, les tableaux, la navigation et le temps de lecture sur le HTML construit.
- Faire relire le récit comme une démonstration unique, et non comme une succession de définitions.
