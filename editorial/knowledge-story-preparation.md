# Workflow de préparation d'une histoire depuis un dossier de recherche

## Rôle

Ce document définit le contrat éditorial en aval du travail documentaire. Wiki Knowledge peut aider à découvrir les concepts, sources et comparaisons ; Knowledge Stories reste propriétaire du plan pédagogique public, des textes, des exemples, des médias et des décisions de publication.

Le workflow de préparation s'arrête à un squelette validable. Il ne génère pas automatiquement un article complet et ne publie jamais.

## Entrées attendues

Un dossier de recherche validé ou explicitement provisoire doit fournir :
- la question éditoriale, le public, le périmètre et les exclusions ;
- les sources primaires et secondaires retenues, avec liens publics, versions/dates et droits ;
- les affirmations importantes et leurs preuves/localisateurs ;
- les concepts nécessaires et leurs dépendances ;
- une comparaison des approches des sources ;
- les désaccords, limites, contre-exemples et questions ouvertes ;
- une proposition de progression pédagogique.

Une synthèse documentaire n'est pas une preuve. Revenir aux sources originales pour toute affirmation importante.

## Pipeline éditorial

1. **Qualifier la promesse** : une question précise, un lecteur identifié, une transformation intellectuelle observable.
2. **Choisir le format** : article autonome ou série ; justifier le choix.
3. **Définir les prérequis** : expliciter ce qui est supposé connu et intégrer les rappels nécessaires.
4. **Construire le parcours** : ordonner les idées selon les dépendances pédagogiques, pas selon l'ordre arbitraire des sources.
5. **Écrire le squelette** : sections, objectifs, preuves, exemples, médias et transitions.
6. **Auditer la couverture** : concepts, claims, idées fausses, démonstrations, limites et transferts.
7. **Soumettre à validation** : accepter, modifier, approfondir, scinder, fusionner ou rejeter le plan.
8. **Rédiger après validation** : développer les sections sans perdre les références et les objectifs du squelette.

## Contrat d'un nœud pédagogique

Chaque section ou article de série doit expliciter :

- **Rôle** : intuition, définition, mécanisme, démonstration, application, comparaison, limite, synthèse ou approfondissement.
- **Question locale** : la question à laquelle cette étape répond.
- **Objectif observable** : ce que le lecteur saura faire (expliquer, dériver, calculer, distinguer, critiquer, transférer).
- **Concepts** : notions introduites et notions réutilisées.
- **Prérequis** : ce qui doit être compris avant cette étape.
- **Raisonnement** : étapes argumentatives et résultat attendu.
- **Preuves** : références publiques et localisateurs soutenant les affirmations.
- **Exemple / contre-exemple** : cas calculable ou expérience qui rend l'idée vérifiable.
- **Difficultés** : confusion probable, hypothèse cachée, limite ou controverse.
- **Média** : schéma, figure, animation, code ou interaction envisagé et son utilité pédagogique.
- **Transition** : pourquoi la suite devient nécessaire.
- **Critère de sortie** : comment vérifier que l'objectif est atteint.
- **Statut** : essentiel ou facultatif ; validé ou à revoir.

## Contrat d'une série

Une série est justifiée uniquement si :
- elle répond à une question directrice commune ;
- chaque article possède une question et une contribution distinctes ;
- l'ordre est justifié par les prérequis et la progression ;
- les transitions rendent explicite le besoin de l'étape suivante ;
- chaque article reste autonome, avec rappels et liens vers prérequis si nécessaire ;
- le parcours essentiel est séparé des approfondissements facultatifs ;
- les durées annoncées sont estimées sur le contenu réel.

Ne pas scinder un article simplement pour obtenir plusieurs pages. Ne pas fusionner des sujets qui exigent des prérequis ou des rythmes d'apprentissage incompatibles.

## Couverture et non-répétition

Construire une matrice de couverture entre objectifs, concepts, claims, sections, preuves et évaluations. Pour chaque élément, indiquer s'il est :
- introduit ;
- expliqué ;
- démontré ou justifié ;
- illustré ;
- exercé ;
- réutilisé/transféré ;
- seulement mentionné ;
- volontairement hors périmètre.

Repérer les sections qui répètent une explication déjà acquise. Une notion déjà démontrée ne doit pas être redémontrée intégralement sans raison : la rappeler, expliciter ce qui est réutilisé, puis concentrer le nouvel effort sur l'apport propre de la section.

## Traçabilité et autonomie publique

Le dépôt public ne doit contenir que :
- les références et liens accessibles au lecteur ;
- les affirmations reformulées et vérifiables ;
- les explications, schémas et exemples créés pour l'article ;
- les métadonnées éditoriales publiques nécessaires.

Ne pas publier d'IDs privés, de liens profonds vers Wiki Knowledge, de captures internes, de notes de recherche confidentielles ou de graphe interne. Un article doit rester compréhensible sans accès au dossier privé qui a servi à le préparer.

## Décision et cycle de vie

Le plan peut être proposé, révisé ou accepté comme plan de rédaction. Cette décision n'est pas une approbation scientifique finale et ne change pas automatiquement le frontmatter du site.

Conserver le cycle de génération déjà défini :
- `draft` : non généré ;
- `review` : rendu dans l'Atelier ;
- `published` : rendu dans le parcours public après approbation humaine explicite.

Ne pas ajouter un statut de contenu pour représenter chaque étape du travail interne. La validation doit être tracée par la revue GitHub ou l'issue associée au commit concerné.

## Critères de validation d'un squelette

- La promesse est précise et correspond au contenu réel.
- Les prérequis sont explicites ; aucune notion indispensable n'apparaît sans préparation.
- L'ordre de lecture est motivé par les dépendances et la progression.
- Chaque section apporte une contribution distincte.
- Les démonstrations et calculs nécessaires sont planifiés au bon endroit.
- Les résultats déjà établis sont réutilisés sans répétition gratuite.
- Les exemples, contre-exemples et médias ont une fonction précise.
- Les limites et désaccords importants ne sont pas évacués.
- Les objectifs sont évaluables et favorisent le transfert, pas seulement la mémorisation.
- Les références publiques permettent de contrôler les affirmations importantes.
- Le plan est autonome et ne dépend pas de l'accès à un dépôt privé.

## Modèle

Utiliser `editorial/story-blueprint-template.md` pour chaque proposition d'article ou de série. Ne pas remplir les sections avec des informations supposées : marquer explicitement les lacunes et les décisions en attente.
