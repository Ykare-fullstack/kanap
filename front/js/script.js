

// fonction de récupération des données de L'API en promise
async function retrieveItems() {
    var res = await fetch("http://localhost:3000/api/products");
    return await res.json();
}

//fonction de récupération de la promise de l'API séparation dans un tableau et affichage dans la page d'accueil
async function fillPageWithItems () {
    var list = await retrieveItems()
    .then(function (listAPI) {               
        const itemList = listAPI;


        for (let item in itemList)  {


            let linkTag = document.createElement("a");
            document.querySelector(".items").appendChild(linkTag);
            linkTag.href = `product.html?id=${listAPI[item]._id}`;


            let articleTag = document.createElement("article");
            linkTag.appendChild(articleTag);


            let thumbnailImg = document.createElement("img");
            articleTag.appendChild(thumbnailImg);
            thumbnailImg.src = listAPI[item].imageUrl;
            thumbnailImg.alt = listAPI[item].altTxt;


            let productName = document.createElement("h3");
            articleTag.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = listAPI[item].name;


            let descriptionTag = document.createElement("p");
            articleTag.appendChild(descriptionTag);
            descriptionTag.classList.add("productName");
            descriptionTag.innerHTML = listAPI[item].description;
        }
    });
}
console.log(window.localStorage); 
fillPageWithItems();