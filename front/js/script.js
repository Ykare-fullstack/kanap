

// fonction de récupération des données de L'API en promise
async function retrieveItems() {
    var res = await fetch("http://localhost:3000/api/products");
    return await res.json();
}

//fonction de récupération de la promise de l'API séparation dans un tableau et affichage dans la page d'accueil
async function fillPageWithItems () {
    var list = await retrieveItems()
    .then(function (listAPI) {               

        for (let item in listAPI)  {

            document.getElementById("items").insertAdjacentHTML("beforeEnd",

                '<a href="product.html?id='+listAPI[item]._id+'">' +
                    '<article>' +
                        '<img src="'+listAPI[item].imageUrl+'" alt="'+listAPI[item].altTxt+'">' +
                        '<h3 class="productName">'+listAPI[item].name+'</h3>' +
                        '<p class="productDescription">'+listAPI[item].description+'</p>' +
                    '</article>' +
                '</a>'
            );
        }
    });
}
console.log(window.localStorage); 
fillPageWithItems();