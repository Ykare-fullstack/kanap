
//fonction d'affichage du numéro de commande et suppression de ce dernier dans le local storage
function displayOrder(){

    console.log(localStorage);
    document.getElementById("orderId").innerText = localStorage.getItem("orderId");

    localStorage.clear();
}

displayOrder();

