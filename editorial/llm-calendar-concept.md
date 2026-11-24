# Calendrier de récits autour des LLM — positionnement éditorial

> **Statut :** cadrage éditorial et réservoir de sujets, à instruire.  
> **Périmètre :** une future édition thématique de Knowledge Stories consacrée aux idées, découvertes, controverses et phénomènes qui éclairent les grands modèles de langage (LLM).  
> **Ce document ne valide ni une liste définitive de 24 journées, ni un calendrier de publication.**

## 1. Intention

Le calendrier doit proposer une collection de récits scientifiques qui permettent de regarder les LLM sous d'autres angles que celui du cours technique. Il ne doit pas être une version romancée, simplifiée ou découpée en 24 épisodes du parcours principal de LLM Lab.

La question directrice est :

**Quelles idées, expériences, découvertes et controverses permettent de mieux comprendre ce que les LLM héritent d'autres disciplines, ce qu'ils rendent possible, ce qu'ils ne savent pas faire et ce que leurs comportements nous apprennent ?**

Le récit constitue une porte d'entrée. Chaque journée doit aussi transmettre des concepts suffisamment expliqués pour être réutilisés : définitions, mécanismes, exemples, preuves ou expériences, conditions de validité et limites.

## 2. Contrat éditorial avec LLM Lab

Les deux projets sont complémentaires et gardent des responsabilités distinctes.

| Dimension | LLM Lab | Calendrier Knowledge Stories |
|---|---|---|
| Question principale | Comment fonctionne un LLM, comment le reconstruire, l'entraîner et l'expérimenter ? | Quelles idées et quels phénomènes éclairent les LLM depuis d'autres perspectives ? |
| Organisation | Parcours d'apprentissage structuré, concepts reliés, implémentations et exercices | Récits autonomes organisés autour d'une question, d'une découverte ou d'une tension |
| Progression | Des fondations vers les mécanismes, l'apprentissage et l'inférence | Parcours éditorial souple ; chaque journée doit pouvoir se lire indépendamment |
| Profondeur | Explication technique systématique et reconstruction progressive | Profondeur ciblée sur la question du récit, sans refaire le cours technique |
| Expérimentation | Construire, coder, mesurer et modifier les mécanismes d'un LLM | Observer un phénomène, reproduire une expérience, tester une hypothèse ou comparer des interprétations |
| Résultat attendu | Savoir expliquer et reconstruire les mécanismes d'un LLM | Savoir replacer les LLM dans un paysage scientifique, historique, critique et sociotechnique |

### Règle de non-duplication

Une journée ne doit pas reprendre comme sujet central une étape déjà enseignée dans le parcours principal de LLM Lab : tokenisation, embeddings, projections Q/K/V, attention, logits, softmax, décodage, boucle autorégressive, loss, gradients ou mise à jour des paramètres.

Ces notions peuvent apparaître :
- comme **prérequis brièvement rappelés** ;
- comme **point de comparaison** nécessaire à une question plus large ;
- comme **lien vers l'explication canonique** de LLM Lab ;
- comme **objet d'une expérience nouvelle** si l'angle étudié n'est pas déjà couvert.

En cas de recouvrement, déplacer le centre de gravité du récit. Par exemple, ne pas refaire un cours sur l'entropie croisée ; raconter comment Shannon a construit une mesure de l'information, ce que cette mesure permet de quantifier et pourquoi elle ne mesure pas le sens d'un texte.

### Test de complémentarité

Avant de retenir une journée, répondre explicitement à ces questions :

1. Quelle page ou quelle partie du parcours LLM Lab traite déjà le sujet technique le plus proche ?
2. Qu'est-ce que le lecteur apprend ici qu'il ne trouverait pas dans cette page ?
3. Le sujet conserve-t-il son intérêt si l'on retire les explications élémentaires du fonctionnement d'un Transformer ?
4. Le lien avec les LLM éclaire-t-il réellement le récit, ou est-il seulement ajouté pour justifier le thème ?
5. Le récit apporte-t-il une perspective historique, interdisciplinaire, expérimentale, critique ou sociétale identifiable ?

Si la réponse à la deuxième ou à la quatrième question est faible, le sujet doit être reformulé, fusionné avec un autre ou écarté.

## 3. Territoires thématiques

Les familles ci-dessous constituent un espace de recherche, pas des rubriques obligatoires ni une répartition imposée des journées.

### A. Les idées dont les LLM ont hérité

Explorer les problèmes et les inventions qui ont préparé le terrain : théorie de l'information, prédiction statistique, modèles de Markov, compression, calcul, cybernétique, réseaux de neurones, traduction automatique et histoire du traitement du langage.

**Angle recherché :** raconter comment une question scientifique a émergé, quelles solutions ont été proposées, ce qui a résisté et ce qui a été transmis aux systèmes actuels.

### B. Les propriétés surprenantes du langage

Explorer l'ambiguïté, la polysémie, les expressions idiomatiques, les régularités statistiques, les langues peu dotées, les phénomènes de fréquence et de longue traîne, ainsi que les limites d'une représentation purement textuelle.

**Angle recherché :** partir d'un phénomène linguistique concret pour comprendre pourquoi le langage est un objet difficile à modéliser.

### C. Les phénomènes mathématiques et statistiques qui changent le regard

Traiter les paradoxes et outils qui aident à interpréter les comportements des modèles sans refaire les démonstrations du cours : paradoxe de Simpson, grande dimension, concentration de la mesure, événements rares, distributions à longue traîne, lois d'échelle, double descente, grokking et transitions de comportement.

**Angle recherché :** faire constater un phénomène par un exemple, une simulation ou une expérience, puis préciser ce qu'il permet — et ne permet pas — de conclure sur les LLM.

### D. Les limites, paradoxes et questions philosophiques

Explorer la chambre chinoise, l'ancrage des symboles, le paradoxe de Moravec, la distinction entre compétence et compréhension, les hallucinations, la robustesse, la vérité et les limites des évaluations.

**Angle recherché :** poser une question difficile sans la réduire à un slogan ni présenter un débat philosophique comme un résultat expérimental.

### E. Les inventions et bifurcations architecturales

Raconter les étapes historiques et les choix qui ont transformé le domaine : perceptron, rétropropagation, mécanismes d'attention antérieurs aux Transformers, invention du Transformer, mise à l'échelle, architectures à experts, modèles multimodaux.

**Angle recherché :** expliquer le problème auquel répondait une invention, les alternatives disponibles et les conséquences de ce choix. Ne pas substituer une chronologie à l'explication technique de LLM Lab.

### F. Les découvertes expérimentales sur les réseaux entraînés

Explorer l'interprétabilité mécaniste, les circuits, la superposition, les neurones poly-sémantiques, l'apprentissage en contexte, les induction heads, le grokking et les comportements émergents.

**Angle recherché :** reconstruire les expériences, les observations et les inférences ; distinguer ce qui est établi, ce qui est interprété et ce qui reste débattu.

### G. Les usages, systèmes et conséquences collectives

Explorer les outils et agents, la mémoire externe et le RAG, les coûts énergétiques, les données et droits, les biais, les effets institutionnels et les usages à fort enjeu.

**Angle recherché :** dépasser la démonstration technique pour étudier les conditions réelles d'utilisation, les compromis, les externalités et les conséquences.

## 4. Réservoir initial de sujets

Cette liste reprend les pistes discutées lors du cadrage. Elle sert à ouvrir l'exploration et doit être confrontée aux contenus déjà publiés, aux sources disponibles et à la complémentarité réelle avec LLM Lab. Les sujets ne sont ni classés par priorité ni approuvés pour publication.

| Famille | Question ou sujet possible | Apport complémentaire recherché |
|---|---|---|
| Héritage scientifique | Comment Zipf a-t-il révélé les régularités de fréquence des mots ? | Relier les distributions de langage aux phénomènes de fréquence et de longue traîne |
| Héritage scientifique | Comment Shannon a-t-il rendu l'information mesurable ? | Distinguer information, incertitude, surprise et sens |
| Héritage scientifique | Pourquoi prédire peut-il aussi servir à compresser ? | Examiner le lien entre régularités, codage et description, sans assimiler compression et intelligence |
| Héritage scientifique | Comment les modèles de Markov ont-ils rendu la prédiction du langage calculable ? | Situer historiquement la modélisation probabiliste et ses limites |
| Langage | Pourquoi une phrase peut-elle avoir plusieurs sens ? | Montrer les difficultés de l'ambiguïté et du contexte linguistique |
| Langage | Que perd-on lorsqu'une langue est peu représentée dans les données ? | Étudier couverture, ressources, biais et transfert entre langues |
| Mathématiques et statistiques | Pourquoi la grande dimension rend-elle certaines intuitions trompeuses ? | Comprendre distances, géométrie et concentration dans les espaces de représentation |
| Mathématiques et statistiques | Pourquoi quelques coïncidences deviennent-elles probables à grande échelle ? | Utiliser le paradoxe des anniversaires pour raisonner sur les collisions et les grands ensembles |
| Mathématiques et statistiques | Comment les événements rares structurent-ils les comportements ? | Examiner queues de distribution, couverture et évaluation des cas peu fréquents |
| Mathématiques et statistiques | Pourquoi une courbe d'apprentissage peut-elle d'abord se dégrader puis s'améliorer ? | Introduire la double descente et ses conditions expérimentales |
| Mathématiques et statistiques | Pourquoi un réseau peut-il apprendre soudainement une règle après une longue phase d'échec ? | Explorer le grokking et les hypothèses explicatives |
| Mathématiques et statistiques | Que mesurent réellement les lois d'échelle ? | Examiner les régularités empiriques, les variables de mise à l'échelle et leurs limites |
| Découvertes expérimentales | Peut-on retrouver des circuits de calcul à l'intérieur d'un réseau ? | Introduire l'interprétabilité mécaniste et ses méthodes |
| Découvertes expérimentales | Pourquoi un neurone ne représente-t-il pas toujours un concept unique ? | Expliquer superposition et représentations poly-sémantiques |
| Découvertes expérimentales | Comment un modèle apprend-il à exploiter des exemples présents dans son contexte ? | Étudier l'apprentissage en contexte comme phénomène expérimental, sans refaire le mécanisme de génération |
| Découvertes expérimentales | Que révèlent les induction heads sur les circuits d'un Transformer ? | Relier une observation mécaniste à une hypothèse de fonctionnement testable |
| Limites et philosophie | Une machine peut-elle manipuler des symboles sans comprendre ? | Présenter la chambre chinoise et les réponses qu'elle a suscitées |
| Limites et philosophie | Comment les symboles acquièrent-ils un ancrage dans le monde ? | Explorer le symbol grounding et les limites du texte seul |
| Limites et philosophie | Pourquoi certaines tâches simples pour l'humain sont-elles difficiles pour une machine ? | Examiner le paradoxe de Moravec et les asymétries de compétences |
| Limites et philosophie | Pourquoi un modèle produit-il parfois une réponse plausible mais fausse ? | Analyser les hallucinations, les incitations et les limites de vérification |
| Histoire et architecture | Comment l'attention est-elle devenue une idée centrale avant le Transformer ? | Raconter une filiation historique plutôt que refaire le calcul de l'attention |
| Usages et systèmes | Que change le fait de donner des outils à un modèle ? | Étudier délégation, contrôle, fiabilité et limites des agents |
| Usages et systèmes | Une mémoire externe rend-elle un modèle plus fiable ? | Comparer mémoire, récupération documentaire et génération, en lien avec le RAG |
| Usages et société | Quel est le coût matériel d'une réponse générée ? | Examiner énergie, calcul, matériel, inférence et arbitrages de mesure |
| Usages et société | À qui appartiennent les données et les productions utilisées par les modèles ? | Distinguer questions juridiques, économiques, techniques et éthiques |

La sélection finale devra éviter les doublons entre sujets voisins. Certains thèmes peuvent être fusionnés, scindés ou reportés ; le nombre de journées dépendra de la cohérence éditoriale et de la qualité des dossiers, pas d'un quota rempli à tout prix.

## 5. Fiche de qualification d'une journée

Chaque proposition retenue pour instruction doit disposer d'une fiche courte contenant les champs suivants :

- **Question narrative :** une question concrète, formulée pour susciter une enquête.
- **Discipline d'origine :** histoire, linguistique, mathématiques, statistique, informatique, philosophie, sciences cognitives, énergie, droit, etc.
- **Événement ou tension :** découverte, expérience, controverse, échec, paradoxe ou changement de perspective qui porte le récit.
- **Concepts centraux :** notions que le lecteur devra réellement comprendre.
- **Prérequis :** vocabulaire et connaissances à rappeler sans transformer la journée en cours préalable.
- **Lien avec les LLM :** mécanisme, comportement, limite ou usage précis éclairé par le sujet.
- **Proximité avec LLM Lab :** pages canoniques les plus proches et niveau de recouvrement (faible, partiel, fort).
- **Apport distinctif :** ce que la journée apporte au-delà des ressources déjà disponibles dans LLM Lab.
- **Dispositif de compréhension :** expérience, calcul, simulation, comparaison, archive, visualisation ou contre-exemple.
- **Preuves et références :** sources primaires, travaux de référence, données et documentation nécessaires.
- **Limites :** hypothèses, incertitudes, controverses et conclusions interdites par les preuves.
- **Transfert :** une question permettant de réutiliser l'idée dans un autre contexte.
- **Décision éditoriale :** à explorer, retenu, fusionné, reporté ou écarté, avec justification.

## 6. Critères de sélection et de priorité

Évaluer chaque proposition sur les dimensions suivantes, avec une justification écrite plutôt qu'un score mécanique :

1. **Complémentarité :** le sujet n'est pas une répétition du parcours LLM Lab.
2. **Valeur conceptuelle :** il permet de comprendre et de réutiliser des notions, pas seulement de retenir une anecdote.
3. **Solidité des preuves :** des sources accessibles et suffisamment robustes permettent de soutenir le récit.
4. **Potentiel narratif :** une question, une découverte, une difficulté ou une controverse donne envie de poursuivre.
5. **Lien substantiel avec les LLM :** la connexion éclaire effectivement les modèles ou leur environnement.
6. **Expérimentabilité :** un raisonnement, une expérience ou une visualisation peut rendre le phénomène observable.
7. **Autonomie :** la journée reste compréhensible sans avoir suivi les autres journées ni le cours LLM Lab.
8. **Faisabilité :** le travail de recherche, de vérification, d'illustration et de maintenance est proportionné.

Un sujet spectaculaire mais mal documenté ne doit pas être prioritaire. Un sujet moins spectaculaire peut être excellent s'il donne au lecteur un outil intellectuel réutilisable.

## 7. Principes de composition d'une édition

- Construire une diversité de disciplines et de types de récits ; ne pas faire sept familles de rubriques obligatoires.
- Alterner découvertes historiques, expériences, paradoxes, phénomènes mathématiques, questions linguistiques et débats critiques.
- Éviter les suites de journées qui ne sont que des étapes successives d'un même cours.
- Garder chaque journée autonome, tout en proposant des liens facultatifs vers les autres récits et vers les pages canoniques de LLM Lab.
- Ne pas forcer une connexion aux LLM lorsqu'elle est artificielle ; expliquer honnêtement le caractère indirect d'un rapprochement.
- Ne pas confondre analogie et mécanisme commun.
- Ne pas transformer une controverse en duel artificiellement équilibré : présenter les positions et le poids des preuves.
- Ne pas chercher à couvrir toutes les notions du domaine ; préférer une sélection cohérente et mémorable.
- Le nombre de journées est une contrainte de format, pas un critère de qualité scientifique.

## 8. Structure pédagogique recommandée pour un récit

La structure suit la charte éditoriale générale de Knowledge Stories et peut être adaptée :

1. **La question :** une situation, une observation ou un paradoxe concret.
2. **Le récit :** contexte historique ou scientifique, acteurs, problème et découverte.
3. **L'idée à comprendre :** définitions et concepts indispensables.
4. **Le mécanisme ou le raisonnement :** explication progressive, calcul ou preuve lorsque cela est pertinent.
5. **L'expérience :** reproduire, simuler, comparer ou examiner les éléments qui soutiennent l'idée.
6. **Le lien avec les LLM :** portée exacte de la connexion et pages techniques à consulter pour aller plus loin.
7. **Les limites :** ce que l'histoire et les preuves ne démontrent pas.
8. **Le transfert :** une situation nouvelle où le lecteur peut mobiliser le concept.
9. **Les sources :** références vérifiables et pistes d'approfondissement.

La narration et l'apprentissage conceptuel doivent progresser ensemble : ni anecdote décorative, ni chapitre de manuel auquel on aurait ajouté une introduction narrative.

## 9. Liens entre les projets

- **Knowledge Stories** porte le récit public, autonome, sourcé et visuellement travaillé.
- **LLM Lab** reste la destination pour apprendre les mécanismes, reconstruire les composants, coder et expérimenter techniquement.
- Les articles doivent pointer vers des pages précises de LLM Lab lorsque cela aide le lecteur ; ils ne doivent pas exiger ce détour pour être compris.
- Les liens vers LLM Lab sont des approfondissements, pas des prérequis implicites.
- Toute réutilisation repart des sources originales, respecte les licences et suit le contrat d'intégration inter-projets. Une synthèse interne ou une page d'un autre projet ne remplace pas une preuve accessible au lecteur.

## 10. Prochaine étape de travail

Avant de figer une édition :

1. inventorier les pages et concepts déjà couverts par LLM Lab ;
2. confronter chaque proposition à cet inventaire et aux articles déjà publiés dans Knowledge Stories ;
3. identifier les recouvrements et reformuler les angles qui peuvent devenir réellement complémentaires ;
4. constituer les dossiers documentaires des sujets les plus prometteurs ;
5. sélectionner une composition équilibrée à partir des preuves et de la valeur pédagogique ;
6. seulement ensuite, arrêter le nombre, l'ordre et les titres des journées.

**Décision à préserver :** le calendrier n'est pas le parcours LLM Lab raconté autrement. C'est une collection de récits scientifiques qui enrichit la compréhension des LLM par des perspectives que le parcours technique ne peut pas, et ne doit pas, développer systématiquement.
