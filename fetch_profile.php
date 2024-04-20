<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "Please log in to view your profile.";
    exit();
}

// Retrieve user's profile information from the database
$conn = mysqli_connect("localhost", "root", "", "authentication");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user_id'];
$sql = "SELECT * FROM signup WHERE user_id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User found, display profile information
    $row = $result->fetch_assoc();
    $email = $row['email'];
    // Add other profile fields as needed
    echo "<p>Email: $email</p>";
    // Add other profile information here
} else {
    // User not found, handle error or redirect
    // For example:
    echo "User not found";
}

$conn->close();
?>
