
var string = window.location.href;
var url = new URL(string);
var id = url.searchParams.get("id");
console.log(id);

function fillProductPage (id) {

    fetch("http://localhost:3000/api/products/" + id)
    .then((apiAnswer) => {
        console.log(apiAnswer);
        return apiAnswer.json();
    })
    .then(async function (res) {
        item = await res;

        console.table(item);

        document.getElementById('product_picture').alt = item.altTxt;
        document.getElementById('product_picture').src = item.imageUrl;
        document.getElementById('title').textContent = item.name;
        document.getElementById('price').textContent = item.price;
        document.getElementById('description').textContent = item.description;

        for (let color of item.colors){

            let itemColor = document.createElement("option");
            document.getElementById('colors').appendChild(itemColor);
            itemColor.value = color;
            itemColor.innerHTML = color;
            
        }
    })
}

//Gestion du panier
function addToCart() {

    //eventListener implémenté au click "ajouter au panier" si 0<quantité<100
    document.getElementById('addToCart').addEventListener("click", (evenement)=>{
        if(document.getElementById('quantity').value>0 && document.getElementById('quantity').value<100 && document.getElementById('quantity').value!=0){


    //Récupération des options de l'article à ajouter au panier
    let productToAdd = {
        idProduit: id,
        color : document.getElementById('colors').value,
        quantity : document.getElementById('quantity').value,
        name: document.getElementById('title').textContent,
        price: document.getElementById('price').textContent,
        description: document.getElementById('description').textContent,
        imgUrl: document.getElementById('product_picture').src,
        imgAlt: document.getElementById('product_picture').alt
    };
    console.log(productToAdd);

    //Initialisation du local storage
    let bufferLocalStorage = JSON.parse(window.localStorage.getItem("produit"));


    //Si bufferLocalStorage n'est pas vide
    if (bufferLocalStorage) {
    const found = bufferLocalStorage.find(
        (cartProduct) => cartProduct.idProduit === id && cartProduct.color === productToAdd.color);
        

        //Si produit déja existant dans le panier
        if (found) {

            found.quantity = parseInt(productToAdd.quantity) + parseInt(found.quantity);
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));

            alert('produit déja dans le panier');

        //si nouveau produit dans le panier
        } else {
 
            bufferLocalStorage.push(productToAdd);
            window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));

            alert('nouveau produit dans le panier');
        }
    //Si le panier est vide
    } else {
        alert('panier vide');
        bufferLocalStorage =[];
        bufferLocalStorage.push(productToAdd);
        window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));

    }}});   
}

fillProductPage(id);
addToCart();
console.log(window.localStorage); 
