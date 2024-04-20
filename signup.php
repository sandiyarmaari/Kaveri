<?php
$email = $_POST["email"];
$pass = $_POST["pass"];
$otp = $_POST["otp"];


// Validation for password
if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $pass)) {
    echo "<script>";
    echo "alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');";
    echo "window.location.href = 'signup.html';";
    echo "</script>";
    exit(); // Stop execution if validation fails
}

// Hash the password
$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$conn = mysqli_connect("localhost", "root", "", "kaveri");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO authentication (email, pass, otp) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $hashed_pass, $otp);
    $stmt->execute();
    echo "<script>";
    echo "alert('Successfully Signed Up ');";
    echo "window.location.href = 'login.html';";
    echo "</script>";
    $stmt->close();
    $conn->close();
}
?>
