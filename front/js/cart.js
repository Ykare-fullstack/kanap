
console.log(window.localStorage);
//Initialisation du buffer de local storage
let bufferLocalStorage = JSON.parse(window.localStorage.getItem("produit"));

console.log(bufferLocalStorage);


function displayCart()
{
    if (bufferLocalStorage === null || bufferLocalStorage == 0) 
    { 
        document.getElementById('cart__items').innerHTML = '<p>Votre panier est vide</p>';
    } 
    else 
    {
    for (let produit in bufferLocalStorage){
        document.getElementById("cart__items").insertAdjacentHTML('beforebegin',

                '<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">' +
                    '<div class="cart__item__img">' +
                    '<img src="'+bufferLocalStorage[produit].imgUrl+'" alt="'+bufferLocalStorage[produit].imgAlt+'">' +
                    '</div>' +
                    '<div class="cart__item__content">' +
                        '<div class="cart__item__content__description">' +
                            '<h2>'+ bufferLocalStorage[produit].name +'</h2>' +
                            '<p>' + bufferLocalStorage[produit].color +'</p>' +
                            '<p>'+ bufferLocalStorage[produit].price +'€ </p>' +
                        '</div>' +
                        '<div class="cart__item__content__settings">' +
                            '<div class="cart__item__content__settings__quantity">' +
                                '<p>Qté :</p>' +
                                '<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="'+ bufferLocalStorage[produit].quantity +'">' +
                            '</div>' +
                            '<div class="cart__item__content__settings__delete">' +
                                '<p class="deleteItem">Supprimer</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</article>');
    }}                
}

displayCart();
//---------------------------------------------------------------------------------
//affichage du prix total
function displayPriceQuantityTotal(){

    // scan de la page et incrémentation de la quantité
    var quantityArray = document.getElementsByClassName('itemQuantity');
    var quantityTotal = 0;

    for (var i = 0; i < quantityArray.length; ++i) {
        quantityTotal += quantityArray[i].valueAsNumber;
    }

    document.getElementById('totalQuantity').innerHTML = quantityTotal;
    console.log(quantityTotal);

    // prix total = prix item * quantité item
    priceTotal = 0;

    for (var i = 0; i < quantityArray.length; ++i) {
        priceTotal += (quantityArray[i].valueAsNumber * bufferLocalStorage[i].price);
    }

    document.getElementById('totalPrice').innerHTML = priceTotal;
    console.log(priceTotal);
}
displayPriceQuantityTotal();

//---------------------------------------------------------------------------------
// modification de quantité d'un produit
function modifyQuantity() {
    let quantityArray = document.querySelectorAll(".itemQuantity");
    console.table(quantityArray); 

    //scan de la page en cas de modification
    for (let i = 0; i < quantityArray.length; i++){
        quantityArray[i].addEventListener("change" , (event) => {
            event.preventDefault();

            bufferLocalStorage[i].quantity = quantityArray[i].valueAsNumber;
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));

            console.table(bufferLocalStorage);
            location.reload();

        })
    }
}
modifyQuantity();


//---------------------------------------------------------------------------------
// Suppression d'un produit
function itemSuppression() {

    for (let i = 0; i < document.querySelectorAll(".deleteItem").length; i++){
        document.querySelectorAll(".deleteItem")[i].addEventListener("click" , (event) => {
            event.preventDefault();
        
            bufferLocalStorage.splice(i,1);
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));

            console.table(bufferLocalStorage);
            location.reload();

        })
    }
}
itemSuppression();


//---------------------------------------------------------------------------------
//Validation du formulaire
function formValidation(){
    
    let commonRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");
    let fieldVerification = false;
    document.getElementById('firstName').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('firstName').value)){
            document.getElementById("firstNameErrorMsg").innerHTML = 'champ non valide';
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
        }
    });

    document.getElementById('lastName').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('lastName').value)){
            document.getElementById("lastNameErrorMsg").innerHTML = 'champ non valide';
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
        }

    });

    document.getElementById('city').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('city').value)){
            document.getElementById("cityErrorMsg").innerHTML = 'champ non valide';
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
        }    

    });

    document.getElementById('email').addEventListener("change",function(){

        if(!emailRegExp.test(document.getElementById('email').value)){
            document.getElementById("emailErrorMsg").innerHTML = 'champ non valide';
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
        }

    });

    document.getElementById('address').addEventListener("change",function(){

        if(!addressRegExp.test(document.getElementById('address').value)){
            document.getElementById("addressErrorMsg").innerHTML = 'champ non valide';
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
        }

    });
}
formValidation();

//---------------------------------------------------------------------------------
//Envoi des informations client au localstorage

function postForm(){

    //au clic sur "commander"
    document.getElementById("order").addEventListener("click", (event)=>{
    

        //Création d'un tableau des id produits depuis le buffer du local storage
        let idProducts = [];
        for (let i = 0; i<bufferLocalStorage.length;i++) {
            idProducts.push(bufferLocalStorage[i].idProduit);
        }
        console.log(idProducts);

        //Création de l'objet "order" avec les infos clients du formulaire
        const order = {
            contact : {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                email: document.getElementById('email').value,
            },
            products: idProducts,
        } 
        console.table(order);


        const postEnTete = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json', 
                "Content-Type": "application/json" 
            },
        };

        fetch("http://localhost:3000/api/products/order", postEnTete)
        .then((response) => response.json())
        .then((data) => {
            localStorage.clear();
            localStorage.setItem("orderId", data.orderId);

            document.location.href = "confirmation.html";
        })
        .catch((err) => {
            alert ("Bug Fetch");
        });
    })
}
postForm();