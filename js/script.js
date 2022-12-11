// var price = document.getElementById("price");
// var price = 0;

let cart = [
    {
        price:100,
    }, 
    {
        price:200,
    },
    {
        price:300,
    },
    {
        price:400,
    },
    {
        price:500,
    },
    {
        price:600,
    },

];

let cart_product = [
    "id1", "id2", "id3", "id4", "id5", "id6",
];

// document.querySelector("#submit").onclick = function(){
    
//     // if cart[]

//     price++;

//     console.log(price);
//     document.getElementById("price").innerHTML = price + " p";
// }

document.onclick = Event => {
    // console.log(Event.target.classList);
    if (Event.target.classList.contains("main-form__product-button")){
        // console.log(Event.target.dataset.id);
        plusFunction(Event.target.dataset.id)
    }
}

let sum = 0;

const plusFunction = id =>{

    sum += cart[cart_product.findIndex(i => i == id)].price
    document.getElementById("price").innerHTML = sum + " р";
    localStorage.setItem("sum", sum);
    // console.log(cart_product.findIndex(i => i == id));
}


// console.log(localStorage.getItem("sum"));
let val = localStorage.getItem("sum");

document.getElementById("finalprice").innerHTML = "Сумма к оплате " + val + " р";