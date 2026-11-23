# Indexation thématique des archives

## Deux axes de navigation

L'archive publique propose deux vues complémentaires :

- **Par calendrier** : navigation chronologique par édition annuelle, puis par journée.
- **Par thématique** : index transversal qui relie des histoires provenant de plusieurs éditions et des articles hors calendrier.

Une histoire peut apparaître dans plusieurs thèmes. Les pages ne sont jamais dupliquées : chaque entrée renvoie vers l'URL canonique du contenu.

## Métadonnées

Pour les articles Astro, renseigner dans le frontmatter :

- `themes` : un ou plusieurs thèmes éditoriaux relativement stables, utilisés pour le regroupement transversal ;
- `tags` : notions plus fines, utiles à la recherche et aux évolutions futures du catalogue ;
- `category` : catégorie de présentation de l'article, qui ne remplace pas les thèmes.

Pour les journées Quarto, le catalogue `src/data/archive.ts` assure la jonction avec l'archive Astro. Il ne contient que les journées publiées. À chaque publication d'une journée, ajouter son titre, sa description, son URL relative à la base du site, son année, son édition, son numéro, ses thèmes et ses tags.

## Principes de classement

1. Choisir des thèmes conceptuels, pas des intitulés propres à une édition.
2. Réutiliser un thème existant lorsqu'il décrit réellement le contenu ; ne pas créer un thème pour une seule page sans raison éditoriale.
3. Autoriser plusieurs thèmes lorsque l'histoire fait un pont réel entre plusieurs domaines.
4. Réserver les tags aux concepts plus précis ; éviter de transformer chaque tag en rubrique.
5. N'indexer dans l'archive publique que les contenus publiés.
6. Conserver les liens et titres canoniques dans une seule entrée par contenu et générer les regroupements à partir des métadonnées.

Le catalogue Quarto est volontairement explicite, car Quarto et Astro sont deux chaînes de publication distinctes. Si le volume augmente, il pourra être remplacé par un manifeste partagé consommé par les deux builds, sans changer le modèle éditorial.
