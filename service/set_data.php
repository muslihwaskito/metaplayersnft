<?php
	require_once 'config.php';

	session_start();
	
	// Create connection
	$mysql = new mysqli($servername, $username, $password, $database);

	// Check connection
	if ($mysql->connect_error) {
		$die("Connection failed: " . $mysql->connect_error);
	}

    if (!empty($_POST)) {
        
		$percent = $_POST['percent'];
		$sold = $_POST['invested'];
	
		$query = mysqli_query($mysql, "SELECT * FROM setting");
		$result = mysqli_fetch_assoc($query);
		if (is_null($result)) {
			$insert = mysqli_query($mysql, "INSERT INTO setting(percent, invested) VALUES('$percent', '$sold')");
            if ($insert) {
				$_SESSION["status"] = "save data success";
				header('Location: '.$_SERVER['HTTP_REFERER']);
            } else {
				$_SESSION["status"] = "Error: Server Error";
				header('Location: '.$_SERVER['HTTP_REFERER']);
            }
		} else {
			$id = $result['id'];
			$update = mysqli_query($mysql, "UPDATE setting SET percent='$percent', invested='$sold' WHERE id = '$id'");
            if ($update) {
				$_SESSION["status"] = "save data success";
				header('Location: '.$_SERVER['HTTP_REFERER']);
            } else {
				$_SESSION["status"] = "Error: Server Error";
				header('Location: '.$_SERVER['HTTP_REFERER']);
            }
		}
    } else {
		$_SESSION["status"] = "Error: Percent and Sold is empty";
		header('Location: '.$_SERVER['HTTP_REFERER']);
    }
	
?>