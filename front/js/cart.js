
console.log(window.localStorage);
//Initialisation du buffer de local storage
let bufferLocalStorage = JSON.parse(window.localStorage.getItem("produit"));

let fieldVerificationFirstName = false;
let fieldVerificationLastName = false;
let fieldVerificationCity = false;
let fieldVerificationEmail = false;
let fieldVerificationAddress = false;


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


    // prix total = prix item * quantité item
    priceTotal = 0;

    for (var i = 0; i < quantityArray.length; ++i) {
        priceTotal += (quantityArray[i].valueAsNumber * bufferLocalStorage[i].price);
    }

    document.getElementById('totalPrice').innerHTML = priceTotal;

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


            location.reload();

        })
    }
}
itemSuppression();


//fonction de récupération des éléments de l'API
async function retrieveItems(id) {
    var res = await fetch("http://localhost:3000/api/products", id);
    return await res.json();
}

//Fonction de calcul du prix total selon les données de L'API (via retrieveItems)
function fectchPrices(){
    
    let APIPrice = 0;
    for(let item in bufferLocalStorage){
            APIPrice = APIPrice + retrieveItems(item.id).price;
    }
    console.log-APIPrice;
    return APIPrice;       
}

//---------------------------------------------------------------------------------
//Validation du formulaire
function formValidation(){
    
    let commonRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");
    
    document.getElementById('firstName').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('firstName').value)){
            document.getElementById("firstNameErrorMsg").innerHTML = 'champ non valide';
            fieldVerificationFirstName = false;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
            fieldVerificationFirstName = true;
        }
    });

    document.getElementById('lastName').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('lastName').value)){
            document.getElementById("lastNameErrorMsg").innerHTML = 'champ non valide';
            fieldVerificationLastName = false;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
            fieldVerificationLastName = true;
        }

    });

    document.getElementById('city').addEventListener("change",function(){

        if(!commonRegExp.test(document.getElementById('city').value)){
            document.getElementById("cityErrorMsg").innerHTML = 'champ non valide';
            fieldVerificationCity = false;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
            fieldVerificationCity = true;
        }    

    });

    document.getElementById('email').addEventListener("change",function(){

        if(!emailRegExp.test(document.getElementById('email').value)){
            document.getElementById("emailErrorMsg").innerHTML = 'champ non valide';
            fieldVerificationEmail = false;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
            fieldVerificationEmail = true;
        }

    });

    document.getElementById('address').addEventListener("change",function(){

        if(!addressRegExp.test(document.getElementById('address').value)){
            document.getElementById("addressErrorMsg").innerHTML = 'champ non valide';
            fieldVerificationAddress = false;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = '';
            fieldVerificationAddress = true;
        }

    });
}
formValidation();

//---------------------------------------------------------------------------------
//Envoi des informations client au localstorage

function postForm(){

    if(fieldVerificationFirstName && fieldVerificationLastName && fieldVerificationAddress && fieldVerificationCity && fieldVerificationEmail && fectchPrices()==document.getElementById('totalPrice').value){
        //au clic sur "commander"
        document.getElementById("order").addEventListener("click", (event)=>{
        
            event.preventDefault();

            //Création d'un tableau des id produits depuis le buffer du local storage
            let idProducts = [];
            for (let i = 0; i<bufferLocalStorage.length;i++) {
                idProducts.push(bufferLocalStorage[i].idProduit);
            }
            console.log(idProducts);

            //Création de l'objet "order" avec les infos clients du formulaire
            var order = {
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
            .then((order) => {
                localStorage.clear();
                localStorage.setItem("orderId", order.orderId);
                console.log(localStorage);

                document.location.href = "confirmation.html";
            })
            .catch((err) => {
                alert ("Bug Fetch" + err.message);
            });
        })
    }
    else{
        alert('veuillez remplir le formulaire afin de valider la commande');
    }
}
postForm();