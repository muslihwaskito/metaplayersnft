<?php
	require_once 'config.php';
	// Create connection
	$mysql = new mysqli($servername, $username, $password, $database);

	// Check connection
	if ($mysql->connect_error) {
		$die("Connection failed: " . $mysql->connect_error);
	}
    
    $query = mysqli_query($mysql, "SELECT * FROM setting");
    $result = mysqli_fetch_assoc($query);
    if ($result) {
        $response = [
            'status' => 200,
            'data' => $result
        ];
        echo json_encode($response);
    } else {
        $response = [
            'status' => 401,
            'message' => 'Data empty'
        ];
        echo json_encode($response);
    }
	
?>