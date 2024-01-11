<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";
$data = array();
$reg = "REG20240"; 
$no = 1; 

$query = mysqli_query($kon, "SELECT `kd_reg`, `pass`, `nama`, `status` FROM tbl_cm");
while ($rows = mysqli_fetch_array($query)) {
    $data[] = array(
        'no' => $no, 
        'kd_reg' => $reg . $rows['kd_reg'],
        'pass' => $rows['pass'],
        'nama' => $rows['nama'],
        'status' => $rows['status']
    );
    $no++;
}

if ($query) {
    $result = json_encode(array('success' => true, 'result' => $data));
} else {
    $result = json_encode(array('success' => false));
}
echo $result;
?>
