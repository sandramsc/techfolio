/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
<?php
if(!empty($_GET['tid'] && !empty($_GET['product']))) {
    $GET = filter_var_array($_GET, FILTER_SANITIZE_STRING);

    $tid =$GET['tid'];
    $product =$GET['product'];
    }else{
        header('Location: index.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <title>Thank you for your purchase!</title>

    <style>
        .container{
            font-family: 'Pathway Gothic One', sans-serif;
            font-size: 18px;
            font-weight: 400;
            text-align:center;
            background-color:#e7eab5bb;
            padding:10px 5px 5px 10px;
            margin-top: 10px;

        }

        .button {
            display: inline-block;
            padding: 0.4em 1.4em;
            margin: 0.6em 0.3em 0.3em 0;
            border-radius: 0.9em;
            box-sizing: border-box;
            text-decoration: none;
            font-weight: 400;
            color: #a80f69;
            background-color: #33ffa0;
            box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
                    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
                    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
            text-align: center;
            position: relative;
            outline: none;
        }
        a:hover {
        border-bottom:none;
        background: #c7eca9;
        }

        a.button:active{
            box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
        }
        @media all and (max-width:30em){
        a.button{
        display:block;
        margin:0.4em auto;
        }
    }
    </style>
    
</head>
<body>
    <div class="container mt-4">
        <div class="kermit">
            <h2> Thank you for purchasing a <?php echo $product; ?> (ˆ⌣ˆ)</h2>
            <hr>
            <p>🆔 Your transaction ID is: <?php echo $tid; ?></p>
            <p>📧 For more info please check your email</p>
            <a href="index.php" class="button"><strong>↩</strong> Return</a>
        </div>
    </div>
</body>
</html>
