<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

// Function to generate a random password
function generateRandomPassword($length = 8) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $password = '';
    for ($i = 0; $i < $length; $i++) {
        $password .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $password;
}

// Generate a random password
$randomPassword = generateRandomPassword();

$status = 0;

$insert = mysqli_query($kon, "INSERT INTO tbl_cm (
    `kd_reg`, `nama`, `jk`, `no_hp`, `email`, `asal_sekolah`, `prodi`, `jenjang`, `kelas`, `info_kampus`, `pass`, `status`)
        VALUES (
        '',
        '$_POST[nama]',
        '$_POST[jk]',
        '$_POST[no_hp]',
        '$_POST[email]',
        '$_POST[asal_sekolah]',
        '$_POST[prodi]',
        '$_POST[jenjang]',
        '$_POST[kelas]',
        '$_POST[info_kampus]',
        '$randomPassword',  -- Use the generated random password
        '$status')");

if ($insert) {
    $result = json_encode(array('error' => false, 'msg' => 'Data berhasil disimpan'));
} else {
    $result = json_encode(array('error' => true, 'msg' => 'Data gagal disimpan'));
}

echo $result;
?>
