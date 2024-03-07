document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.addToCartButton');
    var cart = [];
    var cartList = document.getElementById('cartList');
    var totalBox = document.getElementById('totalBox');
    var buyButton = document.getElementById('buyButton');
    var paymentForm = document.getElementById('paymentForm');
    var submitPayment = document.getElementById('submitPayment');
    var removeButtons = [];

 
    var stripePublicKey = 'your_stripe_public_key';
    var stripe = Stripe(stripePublicKey);
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#cardElement');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var card = button.closest('.card');
            var packageName = card.dataset.package;
            var price = parseInt(card.dataset.price);

           
            cart.push({ packageName, price });
            updateCartList();
            updateTotal();
        });
    });

    buyButton.addEventListener('click', function () {
       
        paymentForm.style.display = 'block';
    });

    submitPayment.addEventListener('click', function () {
        
        if (cart.length > 0) {
            var totalPrice = cart.reduce(function (acc, item) {
                return acc + item.price;
            }, 0);

            
            totalBox.textContent = 'Total: ' + totalPrice + '/-';

            
            stripe.createToken(card).then(function (result) {
                if (result.error) {
                    alert(result.error.message);
                } else {
              
                    alert('Payment successful!');

                   
                    cart = [];
                    updateCartList();
                    updateTotal();

                    
                    paymentForm.style.display = 'none';
                }
            });
        } else {
            alert('Your cart is empty. Add items to the cart before purchasing.');
        }
    });

    function updateCartList() {
        
        cartList.innerHTML = '';
        removeButtons = []; 

        cart.forEach(function (item, index) {
            var listItem = document.createElement('li');
            listItem.textContent = item.packageName + ' - ' + item.price + '/-';

            
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('removeButton');
            removeButton.dataset.index = index;

            removeButton.addEventListener('click', function () {
            
                cart.splice(index, 1);
                updateCartList();
                updateTotal();
            });

        
            listItem.appendChild(removeButton);

            
            cartList.appendChild(listItem);

            
            removeButtons.push(removeButton);
        });
    }

    function updateTotal() {
        
        var totalAmount = cart.reduce(function (acc, item) {
            return acc + item.price;
        }, 0);

        
        totalBox.textContent = 'Total: ' + totalAmount + '/-';
    }
});
