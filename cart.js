var bar = document.getElementById("bar");
var acc = document.getElementById("acc");
var close = document.getElementById("acc_btn");

bar.addEventListener("click", function() {
    acc.style.display = "block";
    acc.style.transition = "opacity 2s ease-in-out";
});

close.addEventListener("click", function() {
    acc.style.display = "none";

});


// // JavaScript code for handling cart display
// document.addEventListener("DOMContentLoaded", function() {
//     displayCart();
// });

// function displayCart() {
//     // Retrieve the cart data from localStorage
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Get the cart container
//     var cartContainer = document.getElementById('cart');

//     // Clear existing content
//     cartContainer.innerHTML = '';

//     // Display each item in the cart
//     cart.forEach(function(item) {
//         var itemDiv = document.createElement('div');
//         itemDiv.innerHTML = `
//             <img src="${item.image}">
//             <h3>${item.product}</h3>
//             <h2>${item.price}</h2>
//             <label>Quantity:</label>
//             <button onclick="updateQuantity('${item.product}', -1)">-</button>
//             <span>${item.quantity}</span>
//             <button onclick="updateQuantity('${item.product}', 1)">+</button>
//             <p>Total: ₹${item.price * item.quantity}</p>
//             <button onclick="removeFromCart('${item.product}')">Remove</button>
//         `;

//         cartContainer.appendChild(itemDiv);
//     });

//     // Display the total price
//     var totalPrice = calculateTotalPrice(cart);
//     var totalDiv = document.createElement('div');
//     totalDiv.innerHTML = `<p>Total Price: ₹${totalPrice}</p>`;
//     cartContainer.appendChild(totalDiv);
// }

// // JavaScript code for handling removal and quantity adjustment in cart
// function removeFromCart(product) {
//     // Retrieve the cart data from localStorage
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Remove the item with the specified product from the cart
//     var updatedCart = cart.filter(function(item) {
//         return item.product !== product;
//     });

//     // Store the updated cart back in localStorage
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Display the updated cart
//     displayCart();
// }

// function updateQuantity(product, increment) {
//     // Retrieve the cart data from localStorage
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Find the item with the specified product in the cart
//     var updatedCart = cart.map(function(item) {
//         if (item.product === product) {
//             // Update the quantity
//             item.quantity += increment;
//             if (item.quantity < 0) {
//                 item.quantity = 0;
//             }
//         }
//         return item;
//     });

//     // Store the updated cart back in localStorage
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Display the updated cart
//     displayCart();
// }

// function calculateTotalPrice(cart) {
//     return cart.reduce(function(total, item) {
//         return total + item.price * item.quantity;
//     }, 0);
// }