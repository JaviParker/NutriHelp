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
        $category = isset($_GET['category']) ? $_GET['category'] : null;

        // Verificar si se proporcionó la categoría
        if (!empty($category)) {
            // Preparar la consulta SQL para obtener los registros que coincidan con la categoría especificada
            $sql_get_favorites = "SELECT * FROM foodia WHERE category = '$category'";
            $query_get_favorites = $conexion->query($sql_get_favorites);

            // Verificar si se encontraron registros
            if ($query_get_favorites->num_rows > 0) {
                $data = array();
                while ($row = $query_get_favorites->fetch_assoc()) {
                    $data[] = $row;
                }
                // Devolver los datos en formato JSON
                header('Content-Type: application/json');
                echo json_encode($data);
            } else {
                // Si no se encontraron registros, devolver un mensaje de error
                $response = array(
                    "success" => false,
                    "message" => "No hay registros en la categoría especificada."
                );
                echo json_encode($response);
            }
        } else {
            // Si no se proporcionó la categoría, devolver un mensaje de error
            $response = array(
                "success" => false,
                "message" => "Falta el parámetro 'category'."
            );
            echo json_encode($response);
        }

        break;
    
    case 'POST':
        // Obtener los datos del cuerpo de la solicitud JSON
        $input = json_decode(file_get_contents("php://input"), true);

        // Obtener los datos del usuario del cuerpo de la solicitud
        $id = isset($input['id']) ? $input['id'] : null;
        $category = isset($input['category']) ? $input['category'] : null;
        
        // Verificar si se proporcionaron todos los datos necesarios
        if (!empty($category) && !empty($id)) {
            $sql_insert = "INSERT INTO favorites (id, category) VALUES ('$id','$category')";
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
        $category = isset($_GET['category']) ? $_GET['category'] : null;
        
        // Verificar si se proporcionaron todos los datos necesarios
        if (!empty($category) && !empty($id)) {
            // Preparar la consulta SQL para eliminar el platillo
            $sql_delete = "DELETE FROM favorites WHERE id = '$id' AND category = '$category'";
            
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