<?php

    session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    //remove account of currently logged in user from the list
    $query = mysqli_query($conn, "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id}");
    $output = "";

    if(mysqli_num_rows($query) == 1){
        //this convey that since there's only one user logged in there isn't another available user to chat with
        $output .= "You are the only user currently logged in";
    }elseif(mysqli_num_rows($query) > 0){
       include "data.php";

    }
        echo $output;

?>