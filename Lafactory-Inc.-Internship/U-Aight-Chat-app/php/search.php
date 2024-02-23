<?php
    session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    $searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);
    $output = "";
    //removes the account of logged in user. User cannot send messages to self
    $query = mysqli_query($conn, "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id} AND (firstName LIKE '%{$searchTerm}%' OR lastName LIKE '%{$searchTerm}%')");
    if(mysqli_num_rows($query) > 0 ){
        include "data.php";

    }else{
       $output .= "Entered search terms did not result in an existing user";
    }
    echo $output;
?>