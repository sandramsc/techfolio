<?php
    session_start();
    //if user logged in the redirect to this page, alternatively go to login page
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        //if logout/sign out id is set
        if(isset($logout_id)){
            $user_status = "Offline";
            //update user status to 'active' if user has successfully logged in
            $query = mysqli_query($conn, "UPDATE users SET user_status = '{$user_status}' WHERE unique_id = {$logout_id}");
            if($query){
              session_unset();
              session_destroy();
              header("location: ../login.php");
            }
        }else{
            header("location: ../users.php");
        }
    }else{
        header("location: ../login.php");
    }
?>