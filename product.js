let cartItems = [];
function addToCart(productId) {
    let product = {
        id: productId,
        name: `Product ${productId}`,
        price: getProductPrice(productId)
    };
    cartItems.push(product);
    updateCartDisplay();
}
function getProductPrice(productId) {
    switch (productId) {
        case 1:
            return 400;
        case 2:
            return 600;
        case 3:
            return 180;
        case 4:
            return 499;
        case 5:
            return 599;
        case 6:
            return 550;
        case 7:
            return 450;
        case 8:
            return 350;
        case 9:
            return 350;
        case 10:
            return 500;
        case 11:
            return 300;
        case 12:
            return 1000;
        case 13:
            return 299;
        case 14:
            return 500;
        case 15:
            return 520;
        case 16:
            return 1000;
        case 17:
            return 1500;
        case 18:
            return 499;
        case 19:
            return 500;
        case 20:
            return 300;
        case 21:
            return 600;
        case 22:
            return 2000;
        case 23:
            return 300;
        case 24:
            return 180;
        case 25:
            return 250;
        case 26:
            return 299;
        case 27:
            return 550;
        case 28:
            return 450;
        case 29:
            return 350;
        case 30:
            return 3000;
        case 31:
            return 200;
        case 32:
            return 350;
        case 33:
            return 400;
        case 34:
            return 5000;
        case 35:
            return 200;
        default:
            return 0; 
            };
        };
        function updateCartDisplay() {
            let cartList = document.getElementById("cart-items");
            let cartTotal = document.getElementById("cart-total");

         
            cartList.innerHTML = "";

          
            cartItems.forEach(item => {
                let listItem = document.createElement("li");
                listItem.textContent = `${item.name} - rs${item.price}/-`;
                cartList.appendChild(listItem);
            });

          
            let total = cartItems.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = total.toFixed(2);
        };

        
        function remove() {
            if (cartItems.length > 0) {
                cartItems.pop(); 
                updateCartDisplay();
            } else {
                alert("The cart is already empty.");
            }
        };

       
        function checkout() {
            alert("Added succesfully");
        };