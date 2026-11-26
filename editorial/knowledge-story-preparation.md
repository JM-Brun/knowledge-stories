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


## Chaîne complète : du dossier documentaire à la publication

Le workflow éditorial s'inscrit dans une chaîne de travail en amont et en aval. Les étapes documentaires et la modélisation des connaissances sont réalisées dans le référentiel de recherche ; Knowledge Stories reçoit une sélection publique, vérifiable et reconstruite. Les sept étapes ci-dessous constituent un contrat de complétude, pas sept outils ou workflows indépendants.

| Étape | Entrée | Travail attendu | Sortie vérifiable | Gate |
|---|---|---|---|---|
| 1. Ingestion | Question, corpus existant, sources candidates | Dédupliquer, qualifier l'accès, identifier les sources primaires et secondaires, capturer les versions et localisateurs | Inventaire des sources retenues/écartées et dossier de preuves | Sources identifiées, accessibles et pertinentes |
| 2. Métadonnées et extraction | Sources retenues | Décrire identité, version, auteur, date, type, langue, droits, périmètre, méthode et limites ; extraire les connaissances atomiques | Fiches de sources, claims localisés, concepts candidats, exemples et actifs pédagogiques | Provenance et couverture explicites |
| 3. Compilation et synthèse | Extractions par source | Comparer les approches sur des dimensions communes ; repérer convergences, complémentarités, alternatives, divergences et lacunes ; inventorier intuitions, idées fausses, confusions et enchaînements | Synthèse comparative, carte des idées et registre des points à clarifier | Les désaccords et incertitudes ne sont pas effacés |
| 4. Modélisation | Synthèse, concepts et graphe existants | Résoudre les concepts, comparer aux modèles existants, construire le graphe conceptuel minimal puis la progression pédagogique ; choisir article ou série | StoryBlueprint avec couverture concepts/claims/objectifs/sections | Identités, dépendances et format justifiés |
| 5. Rédaction | Blueprint accepté | Construire une explication autonome, les démonstrations, exemples, calculs, figures et transitions ; maintenir le fil rouge d'une série | Article(s) en brouillon reliés au plan | Claims et objectifs restent couverts |
| 6. Déclinaisons pédagogiques | Article(s) relus et stabilisés | Produire séparément synthèse, flashcards, exercices, corrigés et approfondissements si utiles | Ressources dérivées identifiées et reliées à leur contenu source | Pas de divergence ni de duplication canonique |
| 7. Validation | Ensemble des livrables | Contrôler science, pédagogie, liens, métadonnées, accessibilité, droits, confidentialité, tests, build Astro et rendu Quarto complet | Rapport de validation et décision humaine traçable | Aucun défaut bloquant ; publication explicitement autorisée |

### Métadonnées : distinguer qualité, preuve et couverture

Ne pas réduire la qualité d'une source à une note unique. Documenter un profil argumenté, avec au minimum :

- **Identité et version** : référence, auteur/organisme, publication, version/date consultée, URL ou DOI, empreinte si disponible.
- **Nature et rôle** : primaire, secondaire, documentation, données, témoignage, démonstration, source historique ; rôle dans le dossier.
- **Pertinence** : question traitée, proximité avec la question éditoriale, domaine et population/système concernés.
- **Méthode et transparence** : méthode, hypothèses, données, calculs, protocole et reproductibilité décrits ou non.
- **Autorité et indépendance** : compétence pertinente, proximité avec le phénomène, conflits d'intérêts ou dépendances connus.
- **Actualité et stabilité** : date pertinente pour le sujet, version, statut de maintenance et risque d'obsolescence.
- **Limites et réutilisation** : périmètre, biais possibles, qualité d'accès, licence et contraintes de citation/réutilisation.

Évaluer séparément la **qualité de la source**, la **qualité de preuve d'un claim précis** et la **couverture du sujet**. Une source réputée ne prouve pas toutes les affirmations qu'elle contient ; une source faible peut néanmoins documenter utilement l'existence d'une confusion ou d'une représentation répandue.

La couverture se décrit par question, sous-thème, claim et objectif : traité avec preuve directe, traité partiellement, contexte seulement, contradictoire, non traité, ou hors périmètre justifié. Une absence dans le corpus n'est pas une preuve d'absence dans la littérature.

### Compilation : produire une carte des idées, pas seulement un résumé

Pour chaque approche, conserver l'ordre de présentation de l'auteur et, séparément, ses dépendances logiques. La synthèse transversale doit notamment relever :

- intuitions utiles et conditions sous lesquelles elles fonctionnent ;
- analogies, avec leur correspondance et leurs limites ;
- idées fausses explicites ou induites ;
- confusions entre notions voisines, faux amis terminologiques et glissements de vocabulaire ;
- hypothèses cachées, changements de définition, de notation ou de régime ;
- étapes de raisonnement manquantes ou raccourcis qui rendent une explication difficile ;
- objections, contre-exemples, cas limites et questions ouvertes ;
- enchaînement d'idées minimal permettant de reconstruire le résultat.

Classer chaque élément comme affirmation de l'auteur, observation, interprétation, hypothèse ou inférence de synthèse. Les contradictions apparentes doivent être testées contre les définitions, hypothèses, unités, régimes et versions avant d'être qualifiées de désaccords réels.

### Modéliser une page ou une série contre l'existant

Avant de créer une nouvelle page, comparer le Blueprint aux articles, séries, concepts, prérequis et ressources déjà disponibles. Pour chaque élément important, décider : réutiliser, rappeler, approfondir, corriger, relier, déplacer, fusionner, scinder ou laisser hors périmètre. Les identifiants canoniques restent dans leur référentiel ; la projection publique utilise des libellés et références accessibles.

Une **page autonome** possède une question bornée, des prérequis explicites, un objectif observable, une explication complète, des exemples et limites, et un parcours de sortie.

Une **série** possède en plus une question commune, un fil rouge, une contribution distincte par article, des transitions motivées, un parcours essentiel, des branches facultatives et une matrice de couverture globale. Chaque article reste compréhensible isolément ; les rappels ne doivent pas devenir des répétitions intégrales.

### Déclinaisons : des objets dérivés, non des copies concurrentes

Les flashcards, fiches de synthèse, exercices, corrigés et approfondissements sont des ressources distinctes et facultatives. Chacune doit préciser son objectif, son public, son niveau, le contenu canonique dont elle dérive et la date/version de cette dépendance. Les exercices testent un objectif identifié ; les corrigés expliquent le raisonnement ; les flashcards privilégient le rappel actif et ne remplacent pas une explication. Une modification de l'article source déclenche une revue des ressources dépendantes.

Ne pas créer automatiquement toutes les déclinaisons pour chaque page. Les produire seulement lorsqu'elles ajoutent une activité cognitive différente et utile. Ne pas maintenir plusieurs versions divergentes d'une même explication.

### Matrice de traçabilité finale

Avant validation, pouvoir parcourir les chaînes suivantes dans les deux sens :

`source → locator → claim → concept / relation → synthèse → objectif → section → activité ou évaluation`

Pour chaque objectif : indiquer où il est enseigné et comment il est vérifié. Pour chaque claim important : indiquer sa preuve publique et les sections qui l'utilisent. Pour chaque idée fausse importante : indiquer où elle est anticipée, corrigée et éventuellement exercée. Les éléments non couverts doivent être marqués comme hors périmètre, non résolus ou à compléter, jamais silencieusement omis.
