<?php
//Development Connection
	//$conn = mysqli_connect("localhost", "root", "", "chatapp");
	//if(!$conn){
		//echo "Database connection established" .mysqli_connect_error();
	//}

//Remote Database Connection	
	$conn = mysqli_connect("remotemysql.com", "1OqjQYszvq", "gl73K5cFBq", "1OqjQYszvq");
	if(!$conn){
		echo "Database connection established" .mysqli_connect_error();
	}

?>