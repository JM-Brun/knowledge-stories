---
title: "Comment Karatsuba multiplie-t-il deux grands nombres avec moins de multiplications ?"
description: "En découpant chaque nombre en deux parties, Karatsuba remplace quatre multiplications récursives par trois. Une identité algébrique simple fait passer le coût asymptotique du quadratique à n puissance log₂(3)."
date: 2026-11-20
category: "Mathématiques et informatique"
tags: ["algorithmique", "arithmétique", "récursivité", "complexité"]
difficulty: "intermediate"
readingTime: 10
status: "draft"
featured: false
sources:
  - title: "Karatsuba et Ofman (1962), notice bibliographique et texte original"
    url: "https://www.mathnet.ru/php/archive.phtml?jrnid=dan&option_lang=eng&paperid=26729&wshow=paper"
    kind: "primary"
    accessed: 2026-11-20
  - title: "Lecture notes — Complexity, Radboud University (2024)"
    url: "https://www.cs.ru.nl/~herman/onderwijs/complexity2024/complexity_lecture_notes.pdf"
    kind: "secondary"
    accessed: 2026-11-20
  - title: "Multiplying integers — FLINT documentation"
    url: "https://fredrikj.net/fdoc/html/algorithms/integers/multiplication.html"
    kind: "documentation"
    accessed: 2026-11-20
  - title: "Karatsuba Multiplication — University of Illinois, CS 173"
    url: "https://courses.grainger.illinois.edu/CS173/fa2024/ALL-lectures/Lectures/algorithms4.html"
    kind: "secondary"
    accessed: 2026-11-20
relatedArticles: []
---

> **Question de départ** — Faut-il nécessairement effectuer quatre multiplications pour multiplier deux nombres que l'on a chacun découpés en deux morceaux ?

## L'idée en une minute

Quand on multiplie deux grands nombres, on peut les couper en deux blocs : un bloc de poids fort et un bloc de poids faible. Le développement habituel fait apparaître quatre produits entre ces blocs.

Karatsuba a remarqué que les deux produits croisés peuvent être obtenus indirectement. Au lieu de les calculer séparément, on multiplie une seule fois les sommes des blocs, puis on soustrait les deux produits déjà calculés.

On passe ainsi de **quatre multiplications de taille réduite à trois**. Répétée récursivement, cette économie transforme le coût asymptotique de Θ(n²) en Θ(n^log₂(3)), soit environ Θ(n^1,585).

## Pourquoi cette question est intéressante

La multiplication que nous apprenons à l'école fonctionne très bien pour les nombres ordinaires. Pour deux nombres de n chiffres, chaque chiffre du premier peut contribuer à chacun des n chiffres du second. Le nombre d'opérations élémentaires croît donc comme le carré de la taille : Θ(n²).

Pour des entiers très longs, cette croissance devient coûteuse. Peut-on exploiter la structure de la multiplication pour éviter certains calculs ?

En 1962, Anatoli Karatsuba et Yuri Ofman publient un résultat fondateur sur la multiplication de nombres à plusieurs chiffres. L'article original est très court ; l'idée algorithmique, elle, est devenue un jalon de l'arithmétique rapide.

## Construire l'intuition

Prenons deux nombres et séparons chacun en deux blocs. En base dix, si l'on coupe après m chiffres :

    x = a × 10^m + b
    y = c × 10^m + d

Les lettres a et c désignent les blocs de gauche, les plus significatifs ; b et d, ceux de droite.

En développant le produit :

    xy = ac × 10^(2m) + (ad + bc) × 10^m + bd

Il faut donc connaître trois quantités : le produit des blocs de gauche ac, le produit des blocs de droite bd, et la somme des deux produits croisés ad + bc.

La méthode directe calcule quatre produits : ac, ad, bc et bd. Mais les deux produits croisés n'ont pas besoin d'être calculés séparément.

## Le mécanisme : une multiplication en moins

Calculons plutôt :

    (a + b)(c + d) = ac + ad + bc + bd

En retirant les deux produits que nous connaissons déjà, il reste exactement ce qui nous manque :

    ad + bc = (a + b)(c + d) - ac - bd

Nous avons donc seulement besoin de trois multiplications :

    p = ac
    q = bd
    r = (a + b)(c + d)

Le produit final se recompose ainsi :

    xy = p × 10^(2m) + (r - p - q) × 10^m + q

Les décalages de blocs et les additions/soustractions demandent un nombre d'opérations proportionnel à la taille des nombres. Ils coûtent donc O(n), tandis que les trois multiplications peuvent être confiées à la même méthode, récursivement.

## Un exemple pas à pas

Multiplions 1234 par 5678. Découpons chaque nombre après deux chiffres :

    1234 = 12 × 100 + 34
    5678 = 56 × 100 + 78

**1. Les deux produits des blocs**

    p = 12 × 56 = 672
    q = 34 × 78 = 2652

**2. Le produit des sommes**

    r = (12 + 34)(56 + 78)
    r = 46 × 134 = 6164

**3. Retrouver les produits croisés**

    r - p - q = 6164 - 672 - 2652 = 2840

Nous avons donc 12 × 78 + 34 × 56 = 2840, sans avoir calculé ces deux produits séparément.

**4. Recomposer le résultat**

    1234 × 5678
    = 672 × 10000 + 2840 × 100 + 2652
    = 6 720 000 + 284 000 + 2 652
    = 7 006 652

La vérification est importante : Karatsuba ne fait pas disparaître les produits croisés. Il les reconstitue à partir d'un produit auxiliaire et des deux produits déjà calculés.

## Pourquoi le gain devient-il considérable ?

Notons T(n) le coût de la multiplication de deux nombres de n chiffres, ou plus généralement de n blocs dans une base fixée.

La méthode classique par découpage calcule quatre produits de taille approximativement n/2, auxquels s'ajoutent des opérations linéaires :

    T(n) = 4T(n/2) + O(n)

Cette récurrence reste quadratique : T(n) = Θ(n²).

Karatsuba ne calcule que trois produits récursifs. Le découpage, les additions, les soustractions et la recomposition demandent toujours un travail linéaire :

    T(n) = 3T(n/2) + O(n)

À chaque niveau, les sous-problèmes sont donc trois fois plus nombreux, mais leur taille est divisée par deux. Le théorème maître donne :

    T(n) = Θ(n^log₂(3)) ≈ Θ(n^1,585)

L'exposant est inférieur à 2. C'est le gain fondamental : lorsque la taille augmente, le coût de Karatsuba croît moins vite que celui de la multiplication scolaire.

Une autre manière de voir la différence consiste à regarder les feuilles de l'arbre récursif. Si la taille est divisée par deux à chaque niveau, il faut environ log₂(n) niveaux. Quatre appels par nœud conduisent à 4^log₂(n) = n² feuilles ; trois appels conduisent à 3^log₂(n) = n^log₂(3).

## Ce que cette explication ne dit pas

**Une meilleure complexité asymptotique ne signifie pas que Karatsuba est toujours plus rapide.** Pour de petits nombres, les multiplications classiques ont peu de surcoût. La récursion, les allocations et les additions supplémentaires peuvent coûter davantage que les multiplications économisées.

Les bibliothèques d'arithmétique utilisent donc généralement plusieurs algorithmes et des seuils de bascule. Ces seuils dépendent de l'implémentation, de la représentation des nombres, du processeur et des optimisations disponibles. La documentation de FLINT décrit des choix de seuils différents selon les architectures : il ne faut pas transformer ces valeurs en constante universelle.

**La formule présentée est une version pédagogique, pas nécessairement la variante la plus efficace en pratique.** Le produit (a + b)(c + d) peut porter sur un bloc légèrement plus grand que les blocs initiaux. Des implémentations utilisent aussi une identité fondée sur les différences, avec une gestion du signe, afin de mieux contrôler la taille des opérandes intermédiaires.

**Enfin, Θ(n^1,585) est une mesure de croissance, pas un temps en secondes.** Elle décrit le nombre d'opérations dans un modèle donné, lorsque la taille devient grande. Elle ne suffit pas à prédire les performances d'un programme réel sur une machine particulière.

Karatsuba n'est pas non plus l'algorithme asymptotiquement le plus rapide connu pour les très grands entiers. Il constitue une étape importante dans une famille d'algorithmes qui réduisent progressivement le coût de la multiplication.

## À retenir

- En découpant deux nombres en deux blocs, le développement classique fait apparaître quatre produits partiels.
- L'identité (a + b)(c + d) - ac - bd = ad + bc permet de reconstruire les produits croisés avec une seule multiplication auxiliaire.
- Trois appels récursifs au lieu de quatre donnent la récurrence T(n) = 3T(n/2) + O(n), donc une complexité en Θ(n^log₂(3)).
- Le meilleur algorithme en théorie asymptotique n'est pas nécessairement le plus rapide pour toutes les tailles : les implémentations pratiques combinent plusieurs méthodes.

## Pour aller plus loin

- **La publication originale.** La notice de Math-Net donne la référence de l'article de Karatsuba et Ofman, publié en 1962 dans *Doklady Akademii Nauk SSSR*, volume 145, pages 293–294. Elle permet de retrouver le texte original et son contexte historique.
- **Une présentation de la récurrence.** Les notes de cours de l'université Radboud détaillent le passage de quatre à trois multiplications et la résolution de la récurrence.
- **Les choix d'implémentation.** La documentation de FLINT présente une identité de Karatsuba, une preuve de la borne et des considérations concrètes sur les seuils et les architectures.
- **Un cours d'algorithmique.** Le cours CS 173 de l'université de l'Illinois propose une explication progressive de l'identité et de la complexité.

---

*État éditorial : brouillon de travail. Les explications mathématiques et les références initiales ont été assemblées, mais l'article doit encore faire l'objet d'une revue indépendante, notamment sur l'histoire de la découverte, les variantes pratiques et les exemples de calcul, avant toute publication.*
