//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php
require_once('vendor/autoload.php');
require_once('config/db.php');
require_once('lib/pdo_db.php');
require_once('models/customer.php');
require_once('models/transaction.php');

//Secret key
\Stripe\Stripe::setApiKey('...insert your stripe secret key here...');

//sanatize POST array just incase user inputs harmful content
$POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
//form values
$fname = $POST['fname'];
$lname = $POST['lname'];
$email = $POST['email'];
$phone = $POST['phone'];
//checks validity ofinputed credit card credentials
$token = $POST['stripeToken'];

//create customer in stripe
$customer = \Stripe\Customer::create(array(
    "email" => $email,
    "source" => $token
));

//charge the customer 
$charge = \Stripe\Charge::create(array(
    "amount" => 5000,
    "currency" => "EUR",
    "description" => "2ndHandIt product",
    "customer" => $customer->id
));

//customer data
$customerData = [
    'id' => $charge->customer,
    //comes from the form
    'fname' => $fname,
    'lname' => $lname,
    'email' => $email,
    'phone' => $phone,
];

//instantiate customer
$customer = new Customer();

//add customer to db
$customer->addCustomer($customerData);

//transaction data
$transactionData = [
    'id' => $charge->id,
    'customer_id' => $charge->customer,
    //in the db product is called description and comes from 'charge'
    'product' => $charge->description,
    'amount' => $charge->amount,
    'currency' => $charge->currency,
    'status' => $charge->status,
];

//instantiate transaction
$transaction = new Transaction();

//add transaction to db
$transaction->addTransaction($transactionData);

//Redirect to success page
header('Location: success.php?tid='.$charge->id.'&product='.$charge->description);
?>
