<?php
require "config/Conexion.php";

header("Access-Control-Allow-Origin: https://localhost");
// Permite el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Define los métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
// Define los encabezados HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type");

$sql = "SELECT DISTINCT category FROM foodia";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    // Arreglo para almacenar los valores únicos de la categoría
    $categories = array();

    // Iterar sobre los resultados y agregar las categorías al arreglo
    while($row = $result->fetch_assoc()) {
        $categories[] = $row["category"];
    }

    // Devolver el arreglo como respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($categories);
} else {
    // Si no hay resultados, devolver un mensaje de error
    echo "No se encontraron categorías.";
}

// Cerrar la conexión
$conexion->close();

?>