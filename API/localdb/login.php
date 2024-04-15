<?php
require "config/Conexion.php";
header("Access-Control-Allow-Origin: http://localhost:8100");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Obtener datos de la solicitud GET
$nickname = isset($_GET['nickname']) ? $_GET['nickname'] : null;
$password = isset($_GET['password']) ? $_GET['password'] : null;

echo $password;

if (!empty($nickname)) {
    $sql = "SELECT nickname, pass FROM users WHERE nickname = '$nickname'";
    $query = $conexion->query($sql);

    if ($query->num_rows > 0) {
        $data = array();
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        echo "No se encontraron registros para el nickname '$nickname'.";
    }
} else {
    echo "El parámetro nickname no se proporcionó en la URL.";
}

$conexion->close();
?>