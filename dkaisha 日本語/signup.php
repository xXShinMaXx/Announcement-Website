<?php

include "db.php";

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$password = $_POST['password'];

$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);

$sql = "INSERT INTO users
(fullname, email, password)

VALUES
('$fullname', '$email', '$hashedPassword')";

if(mysqli_query($conn, $sql)) {

    header(
      "Location: auth.html?signup=success"
    );

    exit();

} else {

    echo "Signup Failed";

}

?>