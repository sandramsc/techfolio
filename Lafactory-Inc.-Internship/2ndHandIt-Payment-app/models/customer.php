//Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
<?php

class Customer {
    //private property called db
    private $db;

    public function __construct() {
        $this->db = new Database;
    }

    public function addCustomer($data){
        //prepare query
        $this->db->query('INSERT INTO customers (id, fname, lname, email, phone) 
                            VALUES(:id, :fname, :lname, :email, :phone)');
        
        //bind values
        $this->db->bind(':id', $data['id']);
        $this->db->bind(':fname', $data['fname']);
        $this->db->bind(':lname', $data['lname']);
        $this->db->bind(':email', $data['email']);
        $this->db->bind(':phone', $data['phone']);

        //execute i.e add to the db
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
        }

        public function getCustomers(){
            $this->db->query('SELECT * FROM customers ORDER BY created_at DESC');

            $results = $this->db->resultset();

            return $results;


        }
}

?>
