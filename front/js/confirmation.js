function displayOrder(){
    console.log(localStorage);
    document.getElementById("orderId").innerText = localStorage.getItem("orderId");

    console.log(localStorage.getItem("orderId"));
    localStorage.clear();
}

displayOrder();

