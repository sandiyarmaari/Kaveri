<?php
$email = ($_POST["email"]); // Trim leading/trailing whitespace
$pass = $_POST["pass"];

$conn = mysqli_connect("localhost", "root", "", "kaveri");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Normalize email to lowercase
    // $email = strtolower($email);

    // Retrieve user data from the database based on the provided email
    $stmt = $conn->prepare("SELECT pass FROM authentication WHERE (email) = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Verify password
        if (password_verify($pass, $row['pass'])) {
            // Password is correct, proceed with login
            echo "<script>";
            echo "alert('Login Successful');";
            echo "window.location.href = 'shop.html';";
            echo "</script>";
        } else {
            // Invalid password
            echo "<script>";
            echo "alert('Incorrect password. Please try again.');";
            echo "window.location.href = 'login.html';";
            echo "</script>";
        }
    } else {
        // User not found
        echo "<script>";
        echo "alert('User not found. Please check your email.');";
        echo "window.location.href = 'login.html';";
        echo "</script>";
    }
    $stmt->close();
    $conn->close();
}
?>
