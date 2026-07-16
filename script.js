// Shah Online Mart JavaScript


let cart = [];


// Add To Cart Function

function addCart(productName){

    cart.push(productName);

    alert(productName + " added to cart!");

    console.log(cart);

}




// WhatsApp Order Function

function orderWhatsApp(product){

    let phone = "8801XXXXXXXXX";

    let message = 
    "Hello Shah Online Mart,%0A%0A" +
    "I want to order: " + product;


    let url = 
    "https://wa.me/" + phone + "?text=" + message;


    window.open(url, "_blank");

}




// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});





// Welcome Message

window.onload = function(){

    console.log(
    "Welcome To Shah Online Mart"
    );

}
