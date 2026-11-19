# Pistes éditoriales initiales

Ce document est un carnet de propositions, pas une liste d'articles approuvés. Chaque sujet doit faire l'objet d'un dossier documentaire autonome avant rédaction. Les dépôts privés peuvent aider à retrouver le travail déjà effectué, mais aucune donnée ou note privée n'est copiée dans les contenus publics.

## 1. Comment Karatsuba multiplie-t-il deux grands nombres avec moins de multiplications ?

- **Domaine :** mathématiques et algorithmique.
- **Intention pédagogique :** partir de la multiplication scolaire, montrer la décomposition des nombres, faire apparaître l'astuce qui remplace quatre multiplications par trois, puis expliquer la récurrence et le coût asymptotique.
- **Expériences possibles :** calcul pas à pas, comparaison naïf/Karatsuba, visualisation de l'arbre récursif et seuil de bascule.
- **État documentaire :** premier brouillon créé dans `src/content/articles/karatsuba-multiplication.md`. Références primaires et pédagogiques ajoutées ; revue indépendante encore nécessaire sur l'histoire, les variantes pratiques et la validation technique.
- **Précaution :** la page utilisée comme inspiration éditoriale est une référence de pédagogie et de design, pas un texte à reproduire. L'article doit être rédigé indépendamment et citer ses propres sources.

## 2. Pourquoi la compression révèle-t-elle parfois la structure d'une information ?

- **Domaine :** théorie de l'information et intelligence artificielle.
- **Intention pédagogique :** relier régularités, description, entropie, codage et généralisation sans réduire l'intelligence à un simple taux de compression.
- **Expériences possibles :** comparer des chaînes aléatoires et structurées, visualiser un codage simple, tester les limites d'une analogie.
- **État documentaire :** sujet transversal déjà étudié dans les travaux sur compression et attention ; les sources et les affirmations doivent être revalidées pour le lectorat public.
- **Précaution :** distinguer compression sans perte, compression avec perte, complexité descriptive et hypothèses sur l'intelligence.

## 3. Comment Parcoursup organise-t-il l'affectation des candidats ?

- **Domaine :** éducation et politiques publiques.
- **Intention pédagogique :** expliquer les acteurs, les vœux, les classements, les propositions et les contraintes, puis distinguer le fonctionnement réglementaire des effets observés.
- **Expériences possibles :** scénario fictif d'affectation, visualisation des étapes et analyse des indicateurs publics.
- **État documentaire :** dossier de recherche et synthèse existants dans Society Lab ; reconstruire un dossier public à partir des textes officiels, données et études.
- **Précaution :** ne pas confondre description de l'algorithme, critères locaux, effets sociaux et jugement sur l'équité.

## 4. Comment le mécanisme d'attention aide-t-il un Transformer à traiter le contexte ?

- **Domaine :** intelligence artificielle et informatique.
- **Intention pédagogique :** expliquer les requêtes, clés, valeurs, poids d'attention et dimensions avec un exemple chiffré.
- **Expériences possibles :** petite matrice d'attention manipulable et visualisation des poids.
- **État documentaire :** LLM Lab dispose d'un parcours pédagogique et d'implémentations à utiliser comme points de départ ; les références primaires doivent soutenir les explications.
- **Précaution :** ne pas présenter les poids d'attention comme une explication complète ou universelle des décisions d'un modèle.

## Critères de sélection des pilotes

Les trois premiers articles devraient tester des formes de raisonnement différentes : une démonstration algorithmique, une explication conceptuelle interdisciplinaire et une analyse socio-institutionnelle. La sélection finale dépendra de la disponibilité des sources, de la qualité des preuves et de la capacité à construire une expérience pédagogique utile.
