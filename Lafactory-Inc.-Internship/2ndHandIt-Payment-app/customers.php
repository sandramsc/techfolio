//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php
require_once ('config/db.php');
require_once ('lib/pdo_db.php');
require_once ('models/customer.php');

//instantiate customer
$customer = new Customer();

//get customer
$customers = $customer->getCustomers();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap" rel="stylesheet">
    <title>View Customers</title>
    <style>
    .container {

        font-family: 'Pathway Gothic One', sans-serif;
        font-size: 18px;
        font-weight: 400;
        text-align:left;
        padding-bottom: 8px;
        background-color: #e7eab5bb;
        margin-top:10px;
    }

    h2 {
        text-align:center;
        margin-bottom:15px;
    }

    .button {
        display: inline-block;
        padding: 0.4em 1.4em;
        margin: 4.6em 0.3em 0.3em 0;
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

    }
    a:hover {
        border-bottom:none;
        background: #c7eca9;
    }
  

     .btn1,.btn2 {
        display: inline-block;
        padding: 0.4em 1.4em;
        margin: 1em 0.3em 0.3em 0;
        border-radius: 0.9em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 400;
        color: #ffff;
        box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
                    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
                    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
        text-align: center;
        position: relative;
    }

    .btn1{
        background-color:#FF6B6B;
    }
    .btn2 {
        background-color:#B61919;
    }
        a.btn1.btn2:active{
        top:0.1em;
    }
        @media all and (max-width:30em){
        a.btn1.btn2{
        display:block;
        margin:0.4em auto;
        }
    }

    table {
        border: 1.4px solid;
    }

    </style>
</head>
<body>

    <div class="container">
        <div class="btn-groupe" role="group">
            <a href="customers.php" class="btn1">Customers</a>
            <a href="transactions.php" class="btn2">Transactions</a>
        </div>
            <hr>
           <h2>Customers</h2>
           <table class="table table-striped">
               <thead>
               <tr>
                   <th>Customer ID</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Date</th>
               </tr>
               </thead>
               
               <tbody>
                    <?php foreach($customers as $c): ?>
                        <tr>
                            <td><?php echo $c->id; ?></td>
                            <td><?php echo $c->fname; ?> <?php echo $c->lname; ?></td>
                            <td><?php echo $c->email; ?></td>
                            <td><?php echo $c->created_at; ?></td>
                        </tr>
                    <?php endforeach; ?>
               </tbody>
           </table>
           <br>
           <a href="index.php" class="button"><strong>↩</strong> Payment page</a>
    </div>
</body>
</html>
