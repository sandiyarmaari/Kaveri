//search function
function search() {
    var input, filter, select, item_list, text, marquee, i, noResultsMsg;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    marquee = document.getElementById("marquee");
    select = document.getElementById("select");
    item_list = document.getElementsByClassName('item_list');
    noResultsMsg = document.getElementById('noResultsMsg');

    var found = false;

    for (i = 0; i < item_list.length; i++) {
        text = item_list[i].getElementsByTagName('h3')[0];
        if (text) {
            if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
                item_list[i].style.display = '';
                found = true;
            } else {
                item_list[i].style.display = 'none';
            }
        }
    }
    // Show or hide the "No results" message
    if (found) {
        noResultsMsg.style.display = 'none';
        select.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'block';

        select.style.display = 'block';

    }


}
//menu function
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


//cart function

// function addToCart(button) {
//     // Get the product details from the clicked item
//     var productDiv = button.closest('.item_list');
//     var product = productDiv.getAttribute('data-product');
//     var price = productDiv.querySelector('h2').innerText;
//     var imageSrc = productDiv.querySelector('img').src;

//     // Create an object to represent the item
//     var item = {
//         product: product,
//         price: price,
//         image: imageSrc
//     };

//     // Retrieve the existing cart data from localStorage
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Add the new item to the cart
//     cart.push(item);

//     // Store the updated cart back in localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Display a confirmation message (you can customize this part)
//     alert('Item added to cart!');
//     // window.location.href = "cart.html";
// }



//cart animation
function shake() {
    // Add 'shake' class to the cart button
    document.getElementById('btn1').classList.add('shake');

    // Remove 'shake' class after the animation duration (0.5s)
    setTimeout(function() {
        document.getElementById('btn1').classList.remove('shake');
    }, 500);
}




// Function to handle Buy button click
function buyButtonClick(event) {
    // Get the parent element of the clicked button (item_list)
    var product = event.target.closest('.item_list');
    var productName = product.querySelector('h3').innerText;
    var productPrice = product.querySelector('h2').innerText;
    var productImage = product.querySelector('img').src;
    var productQuantity = product.querySelector('h4').innerText;

    // Create an object to store product details
    var productDetails = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: productQuantity
            // Add more details as needed
    };

    // Convert productDetails to JSON and store in local storage
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

    // Display a confirmation dialog
    var confirm = window.confirm("Are You Want To Purchase This Item?");
    if (confirm) {
        alert("Thanks For Your Order ...");
        window.location.href = "buy.html";
    } else {
        alert("Purchase Cancelled ...");
        // Handle cancellation logic if needed
    }
}

// Attach the buyButtonClick function to all Buy buttons
var buyButtons = document.querySelectorAll('.but1');
buyButtons.forEach(function(button) {
    button.addEventListener('click', buyButtonClick);
});















// script.js