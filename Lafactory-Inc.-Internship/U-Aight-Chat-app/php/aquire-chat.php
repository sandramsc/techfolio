<?php
    session_start();
    //making that chat area / chat container dynamic
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        $output ="";

        //selecting chat messages that match to those incoming and outgoing
        $query = "SELECT * FROM messages
                  LEFT JOIN users ON users.unique_id = messages.outgoing_msg_id
                  WHERE (outgoing_msg_id = {$outgoing_id} AND incoming_msg_id = {$incoming_id})
                  OR (outgoing_msg_id = {$incoming_id} AND incoming_msg_id = {$outgoing_id}) ORDER BY msg_id";
        
        $query01 = mysqli_query($conn, $query);
        if(mysqli_num_rows($query01) > 0 ){
            while($row = mysqli_fetch_assoc($query01)){
                //if this is equal than the user is the message receiver
                if($row['outgoing_msg_id'] === $outgoing_id){
                    $output .= '<div class="chat outgoing">
                                <div class="details">
                                    <p>'. $row['msg'] .'</p>
                                </div>
                                </div>';
                //the user is the message sender    
                }else{
                    $output .= '<div class="chat incoming">
                                <img src="php/images/'. $row['image'] .'" alt="">
                                <div class="details">
                                    <p>'. $row['msg'] .'</p>
                                </div>
                                </div>';
                }
            }
            echo $output;
        }
    }else{
        header("../login.php");
    }

?>