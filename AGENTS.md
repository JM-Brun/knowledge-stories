# Instructions pour les agents — Knowledge Stories

## Mission
Transformer des sujets déjà étudiés en articles publics autonomes, rigoureux, pédagogiques et visuellement expressifs. L'agent est un assistant éditorial et technique, jamais une autorité qui valide seul les faits ou autorise une publication.

## Avant toute rédaction
1. Identifier précisément la question et le public visé.
2. Consulter les sources canoniques accessibles et leurs documents de méthode.
3. Retrouver les sources primaires derrière les synthèses lorsque c'est possible.
4. Constituer un registre des affirmations et des preuves ; noter contradictions et lacunes.
5. Vérifier les droits et la confidentialité de chaque élément réutilisé.
6. Ne jamais supposer qu'un dépôt privé est accessible au lecteur ou publiable.

## Règles de rédaction
- Suivre `editorial/editorial-charter.md` et `editorial/article-template.md`.
- Commencer par une question, une situation ou un problème concret.
- Expliquer les termes au moment où ils deviennent nécessaires.
- Développer une intuition avant la formalisation, sans retarder artificiellement les définitions indispensables.
- Employer des exemples calculables et vérifier les calculs.
- Distinguer explicitement fait, preuve, interprétation, hypothèse et opinion.
- Exposer les limites et les controverses pertinentes.
- Ne jamais fabriquer de références, chiffres, citations, résultats ou liens.
- Préserver les nuances des projets sources ; ne pas transformer un désaccord documenté en consensus.
- Éviter les identifiants opaques et séquentiels. Utiliser des slugs sémantiques stables.

## Médias et interactivité
Chaque schéma, graphique, animation ou composant interactif doit servir un objectif pédagogique explicite. Fournir une explication textuelle équivalente, une légende, les unités et la provenance des données. Respecter clavier, contrastes, mouvement réduit et petits écrans.

## Architecture et sécurité
- Le contenu public doit être autonome et ne pas dépendre de fichiers ou d'accès à des dépôts privés.
- Ne pas copier automatiquement des dossiers entiers d'un autre projet.
- Ne jamais publier de secrets, tokens, données personnelles ou données brutes non autorisées.
- Préférer des dépendances minimales et maintenues.
- Ne pas contourner ou désactiver des contrôles pour faire passer le build.

## Avant de terminer
Exécuter `npm run check` et `npm run build` si l'environnement le permet. Examiner les changements, vérifier les liens internes et signaler honnêtement ce qui n'a pas pu être testé. Une publication reste soumise à validation humaine explicite.
