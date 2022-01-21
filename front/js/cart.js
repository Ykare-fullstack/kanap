console.log(window.localStorage);
//Initialisation du buffer de local storage
let bufferLocalStorage = JSON.parse(window.localStorage.getItem("produit"));

console.log(bufferLocalStorage);
const positionEmptyCart = document.querySelector("#cart__items");


displayCart();
// Si le panier est vide
function displayCart()
{
    if (bufferLocalStorage === null || bufferLocalStorage == 0) 
    { 
        document.getElementById('cart__items').innerHTML = '<p>Votre panier est vide</p>';
    } 
    else 
    {
    for (let produit in bufferLocalStorage){

        document.getElementById("cart__item").insertAdjacentHTML('beforebegin',

                '<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">' +
                    '<div class="cart__item__img">' +
                    '<img src="'+bufferLocalStorage[produit].imgUrl+'" alt="'+bufferLocalStorage[produit].imgAlt+'">' +
                    '</div>' +
                    '<div class="cart__item__content">' +
                        '<div class="cart__item__content__description">' +
                            '<h2>'+ bufferLocalStorage[produit].name +'</h2>' +
                            '<p>' + bufferLocalStorage[produit].color +'</p>' +
                            '<p>'+ bufferLocalStorage[produit].price +'</p>' +
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


// modification de quantité
function modifyQuantity() {
    let quantityArray = document.querySelectorAll(".itemQuantity");

    //scan de la page en cas de modification
    for (let i = 0; i < quantityArray.length; i++){
        quantityArray[i].addEventListener("change" , (event) => {
            event.preventDefault();
   
            //on cherche dans le buffer un élément n'ayant pas la même quantité que dans le window.localStorage
            const found = bufferLocalStorage.find((item) => item.quantityArray[i].valueAsNumber !== bufferLocalStorage[i].quantity);

            found.quantity = quantityArray[i].valueAsNumber;
            bufferLocalStorage[i].quantity = found.quantity;
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));
            alert('quantité modifiée');
        })
    }
}
modifyQuantity();

// Suppression d'un produit
function itemSuppression() {

    for (let i = 0; i < document.querySelectorAll(".deleteItem").length; i++){
        document.querySelectorAll(".deleteItem")[i].addEventListener("click" , (event) => {
            event.preventDefault();

            bufferLocalStorage = bufferLocalStorage.filter( item => item.idProduit !== bufferLocalStorage[i].idProduit || item.couleurProduit !== bufferLocalStorage[i].color );
            
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));
            alert('produit supprimé');
        })
    }
}
itemSuppression();
