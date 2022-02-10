
//fonction d'affichage du numéro de commande et suppression de ce dernier dans le local storage
function displayOrder(){

    document.getElementById("orderId").innerText = localStorage.getItem("orderId");
    localStorage.clear();
}

displayOrder();

