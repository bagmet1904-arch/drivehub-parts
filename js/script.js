let cart = [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Товар додано у кошик!");
}
