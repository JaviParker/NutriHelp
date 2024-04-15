<?php
require "config/Conexion.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del cuerpo de la solicitud JSON
    $input = json_decode(file_get_contents("php://input"), true);

    // Obtener los datos del usuario del cuerpo de la solicitud
    $id = isset($input['id']) ? $input['id'] : null;
    $user_email = isset($input['user_email']) ? $input['user_email'] : null;
    
    // Verificar si se proporcionaron todos los datos necesarios
    if (!empty($user_email) && !empty($id)) {
        $sql_insert = "INSERT INTO favorites (id, user_email) VALUES ('$id','$user_email')";
            if ($conexion->query($sql_insert) === TRUE) {
                $response = array(
                    "success" => true,
                    "message" => "Platillo agregado con éxito."
                );
                echo json_encode($response);
            } else {
                http_response_code(400); // Cambiar el estado HTTP a 400
                $response = array(
                    "success" => false,
                    "message" => "Error al agregar platillo: " . $conexion->error
                );
                echo json_encode($response);
            }
    } else {
        echo "Faltan datos obligatorios";
    }
} else {
    // Si no es una solicitud POST, devolver un mensaje de error
    echo "Esta API solo admite solicitudes POST.";
}


// Cerrar la conexión a la base de datos
$conexion->close();
?>
