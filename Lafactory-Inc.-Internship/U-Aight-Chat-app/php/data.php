<?php
error_reporting(0);
ini_set('display_errors', 0);
//otherwise show all users in the users' list
    while($row = mysqli_fetch_assoc($query)){
        $query01 = "SELECT * FROM messages 
                    WHERE (incoming_msg_id = {$row['unique_id']}
                    OR outgoing_msg_id = {$row['unique_id']}) AND (outgoing_msg_id = {$outgoing_id}
                    OR incoming_msg_id = {$outgoing_id}) ORDER BY msg_id DESC LIMIT 1";
        $query02 = mysqli_query($conn, $query01);  
        $row01 = mysqli_fetch_assoc($query02);
        if(mysqli_num_rows($query02) > 0){
            $result = $row01['msg'];
        }else{
            $result = "There are no messages.";
        }  
        
        //trims message if words are more than 24 characters and adds the three dots...
        (strlen($result) > 24) ? $msg = substr($result, 0, 24).'...' : $msg = $result;
        //if the logged in id sends a message this adds 'you' at start
        ($outgoing_id == $row01['outgoing_msg_id']) ? $me = "Me: " : $me = "";
        //checks for users online/offline status
        ($row['user_status']  == "Offline") ? $offline = "offline" : $offline = "";
        
        $output .=  '<a href="chat.php?user_id='.$row['unique_id'].'">
                      <div class="content">
                      <img src="php/images/'. $row['image'] .'" alt="">
                        <div class="details">
                            <span>'. $row["firstName"]  . " " . $row["lastName"] .'</span>
                            <p>'. $me . $msg .'</p>
                      </div>
                      </div>
                      <div class="status-dot '. $offline .'"><i class="fab fa-canadian-maple-leaf"></i></div>
                      </a>';
    }
?>

