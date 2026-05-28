<?php

session_start();

include "db.php";

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users
WHERE email='$email'";

$result = mysqli_query($conn, $sql);

$user = mysqli_fetch_assoc($result);

if(
    $user &&
    password_verify(
        $password,
        $user['password']
    )
) {

    $_SESSION['user'] =
    $user['fullname'];

    header(
      "Location: index.html?login=success"
    );

    exit();

} else {

    header(
      "Location: auth.html?login=failed"
    );

    exit();

}

?>