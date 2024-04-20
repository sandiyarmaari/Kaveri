// // var signupbutton = document.getElementById("btn2");
// // var loginbutton = document.getElementById("btn1");
// // var signupdiv = document.querySelector(".signup");
// // var logindiv = document.querySelector(".login");
// // var img = document.querySelector(".img-container");

// // btn1.addEventListener("click", function() {
// //     logindiv.style.display = "block";
// //     signupdiv.style.display = "none";
// //     img.style.display = "block";
// //     img.style.transform = "translateZ(550px)";
// //     logindiv.style.transform = "translateX(550px)";
// // });

// // btn2.addEventListener("click", function() {
// //     signupdiv.style.display = "block";
// //     img.style.display = "block";
// //     img.style.transform = "translateX(550px)";
// //     logindiv.style.display = "none";
// // });
// var signupForm = document.getElementById("signForm");
// var loginForm = document.getElementById("loginForm");
// var button1 = document.getElementById("signupbtn");
// var button2 = document.getElementById("loginbtn");


// signupForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var email = signupForm.elements["email"].value;
//     var password = signupForm.elements["pass"].value;
//     if (!email.endsWith("kav.in")) {
//         alert("Email must end with 'kav.in'");
//         return;
//     }
//     if (password.length < 8) {
//         alert("Password must be at least 8 characters long");
//         return;
//     }
//     // Comment out the alert to prevent it from showing
//     alert("Signup successful!");

// });

// loginForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var email = signupForm.elements["email"].value;
//     var password = signupForm.elements["pass"].value;
//     var confirmemail = loginForm.elements["confirmemail"].value;
//     var confirmpass = loginForm.elements["confirmPass"].value;
//     if (!email.endsWith("kav.in")) {
//         alert("Email must end with 'kav.in'");
//         return;
//     }
//     if (password.length < 8) {
//         alert("Password must be at least 8 characters long");
//         return;
//     }

//     if (email != confirmemail) {
//         alert("Email is Not Same");
//         return;
//     }

//     if (password != confirmpass) {
//         alert("Password Not Match");
//         return;
//     }
//     if (email == confirmemail && password == confirmpass) {
//         alert("Login Sucessfully");
//         window.location.href = "shop.html";




//     }

// });

var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function() {
    var input = document.getElementById("inputpass");
    if (this.checked) {
        input.type = "text";
    } else {
        input.type = "password";
    }
});

var checkbox1 = document.getElementById("checkbox1");
checkbox1.addEventListener("change", function() {
    var confirm = document.getElementById("confirminputpass");
    if (this.checked) {
        confirm.type = "text";
    } else {
        confirm.type = "password";
    }
});