var checkbox1 = document.getElementById("checkbox1");
checkbox1.addEventListener("change", function() {
    var inputpass = document.getElementById("inputpass");
    if (this.checked) {
        inputpass.type = "text";
    } else {
        inputpass.type = "password";
    }
});



document.getElementById("sendOTP").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "signup.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);

                // Display an alert after successfully sending OTP
                if (xhr.responseText.includes("OTP sent to")) {
                    alert("OTP sent successfully!");
                }
            }
        };

        xhr.send("email=" + emailInput + "&sendOTP=1");
    } else {
        alert("Please enter your email.");
    }
});

document.getElementById("verifyOTP").addEventListener("click", function() {
    var otpInput = document.getElementById("otpInput").value;

    if (otpInput) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "signup.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);

                // Check if the response contains "OTP verified successfully!"
                if (xhr.responseText.includes("OTP verified successfully!")) {
                    // Redirect to login.html
                    window.location.href = "login.html";
                }
            }
        };
        xhr.send("otp=" + otpInput + "&verifyOTP=1");
    } else {
        alert("Please enter the OTP.");
    }
});