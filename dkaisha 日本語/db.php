<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "dkaisha_db";

$conn = mysqli_connect(
    $host,
    $user,
    $password,
    $database
);

if(!$conn) {

    die("Connection Failed");

}

?>