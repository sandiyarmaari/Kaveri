<?php
$name = $_POST["name"];
$mobile = $_POST["mobile"];
$votp = $_POST["votp"];
$address = $_POST["address"];
$payment = $_POST["payment"];
$product = $_POST["product"];

$conn = mysqli_connect("localhost", "root", "", "kaveri");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO buy (name,mobile,votp,address,payment,product) VALUES (?, ?, ?,?,?,?)");
    $stmt->bind_param("ssssss", $name, $mobile, $votp,$address,$payment,$product);
    $stmt->execute();
    echo "<script>";
    echo "alert('Thank You For Your Order');";
    echo "alert('Confirmed Your Order');";
    echo "alert('Product Will Delivery In Few Minutes');";
    echo "window.location.href = 'shop.html';";
    echo "</script>";
    $stmt->close();
    $conn->close();
}
?>
