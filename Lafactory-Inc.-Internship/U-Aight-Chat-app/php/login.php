<?php
session_start();
	include_once "config.php";
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);
	
	//echo "login.php file backend edition";
	
	if(!empty($email) && !empty($password)){
		//checks if user entered email and password matches that already in db
		$query = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}' AND password = '{$password}'");
		//checks if user credentials are matched to those in db - if matched then user redirects to users.php file
		if(mysqli_num_rows($query) > 0 ){
			//fetches the unique_id of current user to use on other php pages
			$row = mysqli_fetch_assoc($query);
			$user_status = "Active";
            //update user status to 'active' if user has successfully logged in
            $query01 = mysqli_query($conn, "UPDATE users SET user_status = '{$user_status}' WHERE unique_id = {$row['unique_id']}");
			if($query01){
				$_SESSION['unique_id'] = $row['unique_id'];
				echo "SUCCESS  ( ͡° ͜ʖ ͡°)";	
			}
		}else{
			echo "Either password or email is incorrect (·̿Ĺ̯·̿ ̿)";
		}
	}else{
		echo "All input fields are required!";
	}
?>
