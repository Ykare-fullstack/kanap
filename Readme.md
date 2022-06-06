# Projet 5 - OpenClassroom formation qualifiante WebDev #

## Construisez un site e-commerce en JavaScript ##

![KanapLogo](./front/images/logo.png)
</br>

### Compétences évaluées ###

En vous basant sur les critères d’évaluation du projet, définissez le statut d’acquisition de chaque compétence et commentez à l'aide de ces instructions :

- [X] Validé - Commentez si besoin

- [ ] Non validé - Listez les critères non remplis  

 

### 1. Interagir avec un web service avec JavaScript ###

- [X] Validé

Commentaires :

- [X] Tous les appels API répertoriés dans les spécifications fonctionnelles et techniques ont été effectués :

    GET / doit retourne un tableau de tous les éléments ;
    GET /{product-ID} renvoie l'élément correspondant à {product-ID}, identifiant d’un produit ;
    POST /order retourne l'objet contact, le tableau produits et orderId 

- [X] L’étudiant a évité le callback hell avec des Promesses ou l’utilisation de fetch.

### 2. Gérer des événements JavaScript ###

- [X] Validé

Commentaires :

- [X] La page d’accueil affiche les produits de l’API dynamiquement.

- [X] La page Produit affiche les détails d’un produit de l’API dynamiquement.

- [X] La page Produit récupère l’id du produit à afficher dans l’URL pour requêter l’API (http://localhost:3000/api/products/{product-ID}), et non pas dans localStorage.

- [X] Le texte alternatif de chaque image est renseigné à partir des données de l’API.

- [X] LocalStorage est utilisé pour gérer les produits ajoutés dans le panier.

- [X] Le prix n'est pas stocké dans le localStorage (pour des raisons de sécurité).

- [X] La page Panier affiche l’ensemble des produits ajoutés par l’utilisateur, ainsi que la quantité et la couleur correspondantes.

- [X] Si un produit est ajouté deux fois de suite dans le panier, avec la même couleur,  le produit apparaît qu'une seule fois dans la page Panier, avec une quantité de deux.

- [X] Si un produit est ajouté deux fois de suite dans le panier, avec des couleurs différentes, le produit apparaît en deux lignes distinctes dans la page Panier.

- [X] Sur la page Produit ainsi que sur la page Panier, il est possible de modifier la quantité d’un produit.

- [X] Sur la page Panier, il est possible de supprimer un produit du panier. Le produit doit disparaît de la page Panier.

- [X] Lors du passage de la commande, l’identifiant de la commande est récupéré et affiché. Cet identifiant est passé en paramètre de l’URL, il n'est pas stocker dans le localStorage.

Le code JS est présentable :

- [X] Le code source est indenté.

- [X] Chaque fonction est décrite par un commentaire de début de fonction.

- [X] Le code source ne présente pas de répétition de code.

- [X] Le code source utilise des fonctions réutilisables (nommées).

- [X] Le code utilise la création d’élément DOM avec document.createElement ou bien le concept d'interpolation avec le templating (avec innerHTML). 

### 3. Valider des données issues de sources externes ###

- [X] Validé 

Commentaires :

La validation des données effectuée dans le code du site est valide :

- [X] Les inputs des utilisateurs sont analysés à l’aide de regex avant l’envoi à l’API.

- [X] En cas de problème avec un input utilisateur, un message d’erreur est affiché sous l’input correspondant.

### 4. Créer un plan de test pour une application ###

- [X] Validé 

Commentaires :

Le plan de test est complet :

- [X] Le plan de test couvre l’ensemble des fonctionnalités listées dans le document “Spécifications fonctionnelles et techniques Kanap”. 

- [X] Pour chaque test, le plan explique clairement les actions à mener, les attentes associées, ainsi que le résultat. 

Livrable

Points forts :

    Livrable délivré à temps
    Présentation bien structuré
    Présentatio respectant le temps imparti
    Expression oral fluide
    Plan de test bien élaboré

Aprés la soutenance l'etudiante à apporter des améliorations sur :

    l’identifiant de la commande ne soit pas stocké dans le localStorage.Cet identifiant est passé en paramètre de l’URL
    Le prix ne soit pas stocké dans le localStorage

Axes d'amélioration :

    Plus se conformez aux spécifications fonctionnelles et techniques.

Soutenance

Remarques :

Bonne soutenance avec une bonne présentation avec un plan de test bien fait et des réponses aux questions satisfaisantes.

 L'etudiant est trés réactif par rapport aux retours sur les améliorations à apporter.

Bon travail et bonne chance pour la suite de ton parcours  !