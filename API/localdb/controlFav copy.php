<?php
require "config/Conexion.php";

header("Access-Control-Allow-Origin: https://localhost");
// Permite el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Define los métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
// Define los encabezados HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type");

// Verificar el método de la solicitud
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Obtener datos de la solicitud GET
        $user_email = isset($_GET['user_email']) ? $_GET['user_email'] : null;
        $id = isset($_GET['id']) ? $_GET['id'] : null;

        // Verificar la cantidad de parámetros
        if (!empty($user_email) && empty($id)) {
            // Si solo se proporciona user_email, devolver la lista de favoritos del usuario
            $sql_get_favorites = "SELECT * FROM favorites WHERE user_email = '$user_email'";
            $query_get_favorites = $conexion->query($sql_get_favorites);

            if ($query_get_favorites->num_rows > 0) {
                $data = array();
                while ($row = $query_get_favorites->fetch_assoc()) {
                    $data[] = $row;
                }
                header('Content-Type: application/json');
                echo json_encode($data);
            } else {
                $response = array(
                    "success" => false,
                    "message" => "No hay favoritos para este usuario."
                );
                echo json_encode($response);
            }
        } elseif (!empty($user_email) && !empty($id)) {
            // Si se proporcionan tanto user_email como id, verificar si el platillo está registrado como favorito
            $sql_check = "SELECT api FROM favorites WHERE user_email = '$user_email' AND api = $id";
            $query_check = $conexion->query($sql_check);

            if ($query_check->num_rows > 0) {
                // El platillo ya está registrado como favorito del usuario
                $response = array(
                    "success" => true,
                    "message" => "Platillo encontrado con éxito."
                );
                echo json_encode($response);
            } else {
                // El platillo no está registrado como favorito del usuario
                $response = array(
                    "success" => false,
                    "message" => $sql_check
                );
                echo json_encode($response);
            }
        } else {
            // Si no se proporciona user_email, devolver un mensaje de error
            $response = array(
                "success" => false,
                "message" => "Falta el parametro email."
            );
            echo json_encode($response);
        }
        break;
    
    case 'POST':
        // Obtener los datos del cuerpo de la solicitud JSON
        $input = json_decode(file_get_contents("php://input"), true);

        // Obtener los datos del usuario del cuerpo de la solicitud
        $id = isset($input['id']) ? $input['id'] : null;
        $user_email = isset($input['user_email']) ? $input['user_email'] : null;
        
        // Verificar si se proporcionaron todos los datos necesarios
        if (!empty($user_email) && !empty($id)) {
            $sql_insert = "INSERT INTO favorites (user_email, api) VALUES ('$user_email','$id')";
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
        break;   
    
    case 'DELETE':
        // Obtener los datos de la solicitud DELETE
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        $user_email = isset($_GET['user_email']) ? $_GET['user_email'] : null;
        
        // Verificar si se proporcionaron todos los datos necesarios
        if (!empty($user_email) && !empty($id)) {
            // Preparar la consulta SQL para eliminar el platillo
            $sql_delete = "DELETE FROM favorites WHERE id = '$id' AND user_email = '$user_email'";
            
            // Ejecutar la consulta SQL
            if ($conexion->query($sql_delete) === TRUE) {
                $response = array(
                    "success" => true,
                    "message" => "Platillo eliminado con éxito."
                );
                echo json_encode($response);
            } else {
                // Si hay un error en la consulta, devolver un mensaje de error
                http_response_code(400); // Cambiar el estado HTTP a 400
                $response = array(
                    "success" => false,
                    "message" => "Error al eliminar platillo: " . $conexion->error
                );
                echo json_encode($response);
            }
        } else {
            // Si faltan datos obligatorios, devolver un mensaje de error
            http_response_code(400); // Cambiar el estado HTTP a 400
            $response = array(
                "success" => false,
                "message" => "Faltan datos obligatorios."
            );
            echo json_encode($response);
        }
    break;     
        
    default:
        // Si no es una solicitud GET, POST o DELETE, devolver un mensaje de error
        echo "Esta API solo admite solicitudes GET, POST y DELETE.";
        break;
}

// Cerrar la conexión a la base de datos
$conexion->close();

?>
