//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php 
    session_start();
    if(!isset($_SESSION['unique_id'])){
        header("location: login.php");
    }
?>

<?php include_once "header.php"; ?>
<body>

    <div class="wrapper">
        <section class="chat-area">
            <header>
                
			<?php
                include_once "php/config.php";
                $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);
                //select all data of logged in user using session
                $query = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$user_id}");
                //turn the static the users.php data dynamic
                if(mysqli_num_rows($query) > 0 ){
                    $row = mysqli_fetch_assoc($query);
			 }
			?>

                <a href="users.php" class="back-icon"><i  class="fas fa-arrow-circle-left"></i></a>
                <img src="php/images/<?php echo $row['image'] ?>" alt="">
                    <div class="details">
                    <span><?php echo $row["firstName"]  . " " . $row["lastName"] ?></span>
                    <p><?php echo $row['user_status'] ?></p>
                    </div>
            </header>
            <div class="chat-box">
            <!--
                <div class="chat outgoing">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat incoming">
                    <img src="img/profile_1.jpg" alt="">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat outgoing">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat incoming">
                    <img src="img/profile_1.jpg" alt="">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat outgoing">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat incoming">
                    <img src="img/profile_1.jpg" alt="">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat outgoing">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="chat incoming">
                    <img src="img/profile_1.jpg" alt="">
                    <div class="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div> -->
            </div> 
            <form action="#"  class="typing-area" autocomplete="off" >
                <!--message sender-->
                <input name="outgoing_id" type="text" value="<?php echo $_SESSION['unique_id']; ?>" hidden>
                <!--message receiver-->
                <input name="incoming_id" type="text" value="<?php echo $user_id; ?>" hidden>
                <input name="message" class= "input-field" type="text" placeholder="Type message here..." >
                <button><i class="fas fa-paper-plane"></i></button>
            </form>
        </section>
    </div>
    
<script src="js/chat.js"></script>
</body>
</html>
