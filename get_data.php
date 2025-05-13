<?php
include 'koneksi.php';

$query = "SELECT * FROM tb_progress"; //nama table
$result = mysqli_query($koneksi, $query);

$data = [];

while($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

header('content-Type: application/json');
echo json_encode($data);
?>