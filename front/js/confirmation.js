
//affichage du numéro de commande et mise à zéro du local storage
function displayOrder(){

    var string = window.location.href;
    var url = new URL(string);
    var id = url.searchParams.get("id");

    document.getElementById("orderId").innerText = id;

}

displayOrder();

