<?php
require "config/Conexion.php";

// Permitir el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir los métodos DELETE
header("Access-Control-Allow-Methods: DELETE");
// Especificar los encabezados permitidos
header("Access-Control-Allow-Headers: Content-Type");

// Verificar si la solicitud es DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Obtener los datos del cuerpo de la solicitud JSON
    $input = json_decode(file_get_contents("php://input"), true);

    // Obtener el nickname desde los parámetros de la URL o del cuerpo de la solicitud
    $nickname = isset($_GET['nickname']) ? $_GET['nickname'] : (isset($input['nickname']) ? $input['nickname'] : null);

    // Realizar la lógica para eliminar el usuario con el nickname proporcionado
    if (!empty($nickname)) {
        // Construir la consulta DELETE
        $sql = "DELETE FROM users WHERE nickname = '$nickname'";
        
        // Ejecutar la consulta
        if ($conexion->query($sql) === TRUE) {
            $response = array(
                "success" => false,
                "message" => "Error al agregar usuario: " . $conexion->error
            );
            echo json_encode($response);
        } else {
            http_response_code(400); // Cambiar el estado HTTP a 400
            $response = array(
                "success" => false,
                "message" => "Error al agregar usuario: " . $conexion->error
            );
            echo json_encode($response);
        }
    } else {
        echo "El parámetro nickname no se proporcionó en la solicitud.";
    }
} else {
    // Si no es una solicitud DELETE, devolver un mensaje de error
    echo "Esta API solo admite solicitudes DELETE.";
}

// Cerrar la conexión a la base de datos
$conexion->close();
?>
