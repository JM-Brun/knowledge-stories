# Atelier : modèle éditorial et feuille de route

## Rôle de l'Atelier

L'Atelier est un espace de maturation et de relecture des contenus Knowledge Stories. Il ne constitue ni une deuxième archive publique, ni un outil de publication automatique. Les pages qui y figurent ont le statut technique `review` et restent accessibles à toute personne disposant de leur URL : `noindex` n'est pas un contrôle d'accès.

Le site public et l'Atelier partagent les mêmes sources d'articles. Il ne faut pas dupliquer les textes pour construire des vues différentes.

## Trois objets éditoriaux

1. **Parcours thématique** : ensemble cohérent d'articles ordonnés, reliés par une question commune et une progression pédagogique réelle. Une catégorie commune ne suffit pas à créer une série.
2. **Article autonome** : unité de lecture qui traite une question délimitée et se comprend sans lire les autres articles. Il peut pointer vers des prérequis et des prolongements.
3. **Piste de développement** : proposition ou sujet encore insuffisamment documenté pour être présenté comme un article en relecture. Les pistes ne doivent pas être mélangées au catalogue des textes effectivement relisibles.

## Contrat d'un parcours

Chaque série doit expliciter :
- une question directrice et une promesse de compréhension ;
- un ordre de lecture justifié ;
- le rôle de chaque étape (intuition, formalisation, application, limites, par exemple) ;
- les prérequis importants ;
- le temps de lecture de chaque article et la durée cumulée ;
- les éventuels approfondissements facultatifs, exclus du temps principal.

Les numéros d'étapes doivent être continus et non ambigus. L'article d'introduction utilise l'ordre zéro. Ne pas inventer d'objectifs d'apprentissage à partir des seuls titres : ils doivent être validés à la lecture du contenu.

## Contrat d'un article autonome

Un article autonome présente une question directrice, les concepts principaux, son niveau, une estimation de lecture et des relations pertinentes vers d'autres articles. Les relations doivent être qualifiées conceptuellement : prérequis, approfondissement, application ou connexion. Ne pas créer de liens artificiels pour remplir une grille.

Le champ `relatedArticles` est réservé aux identifiants/slug d'articles du dépôt ; son format exact doit être conservé et documenté avant de l'exploiter automatiquement. En attendant, les liens éditoriaux peuvent être explicités dans le texte.

## États éditoriaux et états du site

Le workflow général (proposition, recherche, rédaction, revue, validation, publication, mise à jour) décrit la maturité du travail. Le frontmatter actuel décrit seulement le comportement de génération du site :
- `draft` : non généré ;
- `review` : généré dans l'Atelier ;
- `published` : généré dans l'espace public.

Ne pas ajouter les états internes au schéma de contenu public sans besoin concret. En particulier, `Approved` est une décision humaine préalable au passage vers `published`, pas une route supplémentaire. `Needs update` est un signal de maintenance, pas un état de publication. Le workflow de référence reste `editorial/publication-workflow.md`.

## Temps de lecture

Le calcul est centralisé dans `src/utils/reading-time.mjs`. La vitesse conventionnelle est de 180 mots/minute ; les blocs de code et balises HTML sont exclus autant que possible. Une valeur explicite `readingTime` dans le frontmatter prévaut sur l'estimation. La durée d'une série est la somme des durées de ses articles présents dans le même périmètre éditorial. Les approfondissements externes sont exclus.

Cette estimation est indicative : les équations, figures, tableaux, démonstrations et interactions peuvent allonger sensiblement la lecture. Une durée explicite doit être renseignée lorsqu'une estimation automatique est manifestement trompeuse.

## Critères de revue d'un parcours

- La question commune est-elle assez précise pour justifier une série ?
- Chaque article apporte-t-il une contribution distincte, sans répétition évitable ?
- L'ordre réduit-il les sauts conceptuels et introduit-il les prérequis au bon moment ?
- Les transitions expliquent-elles pourquoi l'étape suivante est nécessaire ?
- Le parcours équilibre-t-il intuition, formalisation, exemples, applications et limites ?
- Le temps total annoncé correspond-il au contenu réellement proposé ?
- Les liens internes sont-ils utiles, exacts et maintenus ?

### Pilotes

- **Karatsuba** : vérifier la continuité entre intuition algébrique, décomposition, récurrence, analyse asymptotique et limites des algorithmes rapides. Ne pas promettre une couverture de Toom–Cook ou FFT si ces sujets ne sont pas effectivement traités dans les articles du parcours.
- **Paradoxe des jumeaux** : vérifier la distinction entre temps coordonnée et temps propre, la construction du raisonnement relativiste, les hypothèses physiques et le rôle du changement de référentiel. Préserver les nuances et ne pas présenter le paradoxe comme une contradiction réelle de la relativité.

Les deux pilotes doivent être audités sur leurs contenus réels avant de déclarer leur progression validée.

## Feuille de route

### À faire maintenant
- [x] Centraliser le calcul du temps de lecture et le couvrir par des tests.
- [x] Documenter le rôle de l'Atelier et les contrats de séries/articles.
- [x] Clarifier la différence entre workflow de maturité et statuts de génération.
- [ ] Auditer chaque article des deux séries pilotes et corriger les étapes, transitions et promesses qui ne correspondent pas au contenu.
- [ ] Vérifier les temps explicites sur les articles longs ou riches en équations/figures.
- [ ] Vérifier l'affichage mobile, clavier et lecteur d'écran de l'index et des pages individuelles.

### Ensuite
- [ ] Définir formellement le format de `relatedArticles` et les types de relations avant toute visualisation.
- [ ] Ajouter un contrôle de cohérence des séries (unicité des ordres, continuité, domaine cohérent, articles orphelins).
- [ ] Construire une vue de suivi éditorial séparée de l'index de lecture, uniquement lorsque le volume le justifiera.
- [ ] Envisager une carte de connaissances seulement si les relations sont suffisamment nombreuses et qualifiées.

## Hors périmètre

- Pas de tableau de bord complexe pour quelques articles.
- Pas de création automatique de séries depuis les catégories.
- Pas de duplication entre Atelier et publication.
- Pas de publication automatique après génération.
- Pas de graphe décoratif ou de relations conceptuelles inférées sans validation.
