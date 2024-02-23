//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php 
session_start();
if(isset($_SESSION['unique_id'])){
    header("location: users.php");
}
?>
<?php include_once "header.php"; ?>
<body>
        <div class="wrapper">
         <section class="form login">
             <header>U A'ight Chat App</header>
             <form action="#">
                 <div class="error-txt"></div><br>
                     <div class="field input">
                         <label>Email Address</label>
                         <input type="text" name="email" placeholder="Enter your email address">
                     </div>
                     <div class="field input">
                         <label>Password</label>
                         <input type="password" name="password" placeholder="Enter your password">
                         <i class="fa fa-eye" aria-hidden="true"></i>
                        </div>
                     <div class="field button">
                         <input type="submit" value="Enter Chat Platform">
                     </div>
             </form>
                <div class="link">New To U A'ight?<a href="#"> Sign Up Here</a></div>
         </section>
     </div>
     <script src="js/password-show-hide.js"></script>
	 <script src="js/login.js"></script>
</body>
</html>
