//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php include_once "header.php";?>
<!--Session is set when a user logs in or signs up, if not set then user is redirected to login page-->
<?php 
    session_start();
    if(!isset($_SESSION['unique_id'])){
        header("location: login.php");
    }
?>
<body>

    <div class="wrapper">
        <section class="users">
            <header>

			<?php
			include_once "php/config.php";
			//select all data of logged in user using session
			$query = mysqli_query($conn, "SELECT * FROM users WHERE unique_id ={$_SESSION['unique_id']}");
			//turn the static the users.php data dynamic
			if(mysqli_num_rows($query) > 0 ){
				$row = mysqli_fetch_assoc($query);
			}
			?>
            <div class="content">
               <!-- <img src='img/profile_1.jpg' alt=""> -->
               <img src="php/images/<?php echo $row['image'] ?>" alt="">
                <div class="details">
                  <span><?php echo $row["firstName"]  . " " . $row["lastName"] ?></span>
                 <!-- <p>Active</p> -->
                 <p><?php echo $row['user_status'] ?></p>
                </div>
            </div>
                <a href="php/sign-out.php?logout_id=<?php echo $row['unique_id'] ?>" class="logout">Sign Out</a>
             </header>

            <div class="search">
                <span class="text">Select a user to start chatting</span>
                <input type="text" placeholder="Enter name to start search...">
                <button><i class="fas fa-search"></i></button>
            </div>

            <div class="users-list">
                
            </div>
         </section>
     </div>
<script src="js/users.js"></script>
</body>
</html>
