/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css"></link>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./css/base.css" data-rel-css="" />
        <link rel="stylesheet" type="text/css" href="./css/style.css" data-rel-css="" />
        <title>Payment app</title>

    <style>
        .container h2 {
        text-align:center;
        font-size: 54px;
        color: #0d0628;
        padding-bottom: 8px;
        display: flex;
            }
    </style>
    
    </head>
    <body>
        <div class="container">
        <h2 class="text">2ndHandIt</h2>
            <div class="sesame elmo froggy" id="big-bird">
                <form action="./charge.php" method="post" id="payment-form">
                    <div class="form-row">
                        <fieldset >
                            <legend class="card-only">
                                Pay with card
                            </legend>
                                
                                <div class="form-row">
                                <label for="card-element" >First Name</label>
                                <input name="fname" id="froggy-name"  class="mb-2 StripeElement" type="text" placeholder="May" autocomplete="name">
                                </div>

                                <div class="form-row">
                                <label for="card-element" >Last Name</label>
                                <input name="lname" id="froggy-name"  class="mb-2 StripeElement" type="text" placeholder="Smith" autocomplete="name">
                                </div>

                                <div class="form-row">
                                <label for="card-element">Email</label>
                                <input name="email" id="froggy-email" class="mb-2 StripeElement" type="email" placeholder="name@gmail.com" autocomplete="email">
                                </div>

                                <div class="form-row">
                                <label for="card-element" >Phone</label>
                                <input name="phone" id="froggy-phone" class="mb-2 StripeElement"  type="tel" placeholder="(+1) 555-0123" autocomplete="tel">
                                </div>
                                        
                                <div class="form-row my-4">
                                <div id="card-element" class="form-control"></div>
                                <div class="card-errors" role="alert"> </div>    
                                </div>

                                <div class="card-errors" role="alert"> </div>
                                <button type="submit">Submit Payment</button>    
                        </fieldset>
                    </div>  
                </form>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src="https://js.stripe.com/v3/"></script>
            <script src="./js/charge.js"></script>
    </body>
</html>
