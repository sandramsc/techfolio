<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); 

    session_start();
	include_once "config.php";
	$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
	$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$location = mysqli_real_escape_string($conn, $_POST['location']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);
	

	if(!empty($firstName) && !empty($lastName) && !empty($email) && !empty($location) && !empty($password)){
	//checks user email validation
	if(filter_var($email, FILTER_VALIDATE_EMAIL)){
		//checks to see if email already exists or not
		$query00 = mysqli_query($conn, "SELECT email FROM users WHERE email ='{$email}'");
	if(mysqli_num_rows($query00) > 0){
		//if email already exists
		echo "$email - This email address is already in use.";
			
		}else{
			//check wheather user has already uploaded a file or not
			if(isset($_FILES['image'])){
				//gets user uploaded image name
				$img_name = $_FILES['image']['name'];
				//this saves the file to folder with a temporary/tmp name
				$tmp_name = $_FILES['image']['tmp_name'];
				
				//explodes image and gets the file extention i.e jpg,png
				$img_explode = explode('.', $img_name);
				//aquire user image uploaded file extention
				$img_ext = end($img_explode);
				//store the image extentions into an array
				$extention = ['png', 'jpg', 'jpeg'];
				//checks to confirm if uploaded image extentions match those passed in array
				if(in_array($img_ext, $extention) === true){
					//returns current time that will allocate unique name to each image when uploaded
					$time = time();
					//saves the uploaded file url to the database while actual file is saved to specified folder
					$new_img_name = $time.$img_name;
					
					//if uploaded image successfully, move to allocated folder
					if(move_uploaded_file($tmp_name, 'images/'.$new_img_name)){
						//when user is signed in their status changes to 'active'
						$user_status = "Active";
						//creates random user id
						$random_id = rand(time(), 10000000);
						
						//insert all user data into table in db
						$query01 = mysqli_query($conn, "INSERT INTO users (unique_id, firstName, lastName, 	email , location, 
						                      password, image, user_status) VALUES ('{$random_id}','{$firstName}','{$lastName}','{$email }',
										     '{$location}','{$password}','{$new_img_name}','{$user_status}')");
						//if data is inserted
						if($query01){
							$query02 = mysqli_query($conn, "SELECT * FROM users WHERE email  = '{$email}'");
						if(mysqli_num_rows($query02)> 0){
							$row = mysqli_fetch_assoc($query02);
							$_SESSION['unique_id'] = $row['unique_id'];
							echo "SUCCESS  ( ͡° ͜ʖ ͡°)";
						}
						
						}else{
							echo "Something went wrong  ( ͡° ʖ̯ ͡°)";
						}
					}
									 
				}else{
					echo "Please select an image file extention of the following type - jpg, jpeg, png!";
		       }
			}else{
				echo "Please select an image file to upload!";
			}
		}
	}else{
		echo "$email - This is not a valid email address.";
		}
	}else{
		echo "All input fields are required!";
	}
?>