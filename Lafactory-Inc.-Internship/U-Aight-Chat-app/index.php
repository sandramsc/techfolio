//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php 
session_start();
if(isset($_SESSION['unique_id'])){
    //if user is logged in
	header("location: users.php");
}
?>
<?php include_once "header.php"; ?>
<body>
        <div class="wrapper">
         <section class="form signup">
             <header>U A'ight Chat App</header>
			 <!--include enctype to enable users to upload/send through POST-->
             <form action="#" method="post" enctype="multipart/form-data" >
                 <div class="error-txt"></div><br>
                 
                 <div class="name-details">
                     <div class="field input ">
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" required>
                     </div>
                    
                     <div class="field input">
                         <label>Last Name</label>
                         <input type="text" name="lastName" placeholder="Last Name" required>
                     </div>
                  </div>

                     <div class="field input">
                         <label>Email Address</label>
                         <input type="text" name="email" placeholder="Enter email address" required>
                     </div>
                     <div class="field input">
                         <label>Location</label>
                         <input type="text" name="location" placeholder="Enter your current location" required>
                     </div>
                     <div class="field input">
                         <label>Password</label>
                         <input type="password" name="password" placeholder="Enter new password" required>
                         <i class="fa fa-eye" aria-hidden="true"></i>
                        </div>
                         <div class="field image">
                         <label>Select Image</label>
                         <input type="file" name="image" required>
                     </div>
                     <div class="field button">
                         <input type="submit" value="Enter Chat Platform">
                     </div>
             </form>
                <div class="link">Already Registered?<a href="#"> Simply Login</a></div>
         </section>
     </div>
     <script src="js/password-show-hide.js"></script>
     <script src="js/signup.js"></script>
</body>
</html>
