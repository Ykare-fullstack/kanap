
//affichage du numéro de commande et mise à zéro du local storage
function displayOrder(){

    document.getElementById("orderId").innerText = localStorage.getItem("orderId");
    localStorage.clear();
}

displayOrder();

