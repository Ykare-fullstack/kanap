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

</br>
</br>
</br>
English version :
-----------------------

# Project 5 - OpenClassroom qualifying training program WebDev #

## Build an e-shop website in Javascript ##

![KanapLogo](./front/images/logo.png)
</br>

### Evaluated skills ###

Based on the project evaluation criteria, define the level of acquisition of each particular skill as such :

- [X] Validated - Comment if needed

- [ ] Not validated - List all non-filled criteria

 
</br>

### 1. Interact with a web service using Javascript ###

- [X] Validated

Commentaries :

- [X] Each required API call has been implemented :

    GET / must return a table of all elements ;
    GET /{product-ID} return the element linked to {product-ID}, product identifier ;
    POST /order return contact element, product table and orderId 

- [X] Student avoided callback hell using fetch.

</br>

### 2. Gérer des événements JavaScript ###

- [X] Validated

Commentaries :

- [X] accueil page dynamically displays product from API.

- [X] produit page dynamically display product details from an API.

- [X] produit page grabs product Id to display in URL to request API (http://localhost:3000/api/products/{product-ID}), and not in localStorage.

- [X] Alternative text for each picture is setup from API info.

- [X] LocalStorage is used to deal with products added to cart.

- [X] Price not stored in localStorage.

- [X] Cart page displays all products chosen by the user as well as prices, quantity and colors.

- [X] 2 of the same product are not displayed separately even if added sepparately in the cart.

- [X] 2 products with different colors are displayed separately in the cart.

- [X] On product and cart page, possibility of changing quantity.

- [X] On panier page, possibility to delete an item.

- [X] On order, orderId is displayed. orderId should be sent via Url and not via localStorage.

Js code is readable :

- [X] Indented source code.

- [X] Each function is described with a comment.

- [X] No code repetition.

- [X] Reusable functions are used.

- [X] Code use DOM creation of elements. 

</br>

### 3. Validate data from an out source ###

- [X] Validated 

Commentaries :

Data validation performed in the code is valid :

- [X] Users inputs are analysed via regex before beeing sent to the API.

- [X] In case of a user input mistake an alert is displayed indicating the mistake.

</br>

### 4. Create a test plan ###

- [X] Validated 

Commentaries :

Test plan is validated if :

- [X] Test plan covers every functionality described in the document “Spécifications fonctionnelles et techniques Kanap”. 

- [X] For each test the plan explains the test performed as well as expected results. 

Delivrable

Strong points :

    Delivrable delivered on time
    Structured presentation
    Accurate presentation time
    Fluid oral
    Test plan correctly created

After the oral presentation, the sudent has to improve on :

    OrderId should not be sotres in the localStorage
    price should not be stored in the localStorage

Improvements axes :

    try to conform to the given technical and functional spec.

Oral presentation

Commentaries :

Great oral presentation with a well prepared test plan and satisfying answers to questions.
The student is quick on catching and fixing shown mistake.

Good work and good luck for the rest of your training  !