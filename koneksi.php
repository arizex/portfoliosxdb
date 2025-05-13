<?php

// membuat koneksi
$host = "localhost";
$user = "root";
$pass = "";
$db = "db_progress";

// koneksi
$koneksi = mysqli_connect($host, $user, $pass, $db);

// tes tes
if(!$koneksi) {
    die("koneksi gagal: " .mysqli_connect_error());
}

?>