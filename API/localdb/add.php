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
    $email = isset($input['email']) ? $input['email'] : null;
    $nickname = isset($input['nickname']) ? $input['nickname'] : null;
    $password = isset($input['password']) ? $input['password'] : null;
    $pic = isset($input['pic']) ? $input['pic'] : null;
    
    // Verificar si se proporcionaron todos los datos necesarios
    if (!empty($nickname) && !empty($password)) {
        // Verificar si el usuario ya existe en la base de datos
        $sql_check = "SELECT * FROM users WHERE nickname = '$nickname'";
        $result_check = $conexion->query($sql_check);

        if ($result_check->num_rows > 0) {
            echo "El usuario ya existe.";
        } else {
            // Insertar el nuevo usuario en la tabla
            $sql_insert = "INSERT INTO users (email, nickname, pass, pic) VALUES ('$email','$nickname', '$password', '$pic')";
            if ($conexion->query($sql_insert) === TRUE) {
                $response = array(
                    "success" => true,
                    "message" => "Usuario agregado con éxito."
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
            
        }
    } else {
        echo "Faltan datos obligatorios: nickname y password.";
    }
} else {
    // Si no es una solicitud POST, devolver un mensaje de error
    echo "Esta API solo admite solicitudes POST.";
}


// Cerrar la conexión a la base de datos
$conexion->close();
?>
