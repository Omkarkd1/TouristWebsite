<?php

    $hotel=$_POST['Hotel'];
    $Room=$_POST['room'];
    $From_date=$_POST['sdate'];
    $to_date=$_POST['ldate'];
    $Nop=$_POST['Nop'];
    class personolInfo
    {
        private $fname;
        private $lname;
        private $mno;
        private $emailid;
        private $adrno;

        function __construct($fname,$lname,$mno,$emailid,$adrno)         
        {
            $this->fname=$fname;
            $this->lname=$lname;
            $this->mno=$mno;
            $this->emailid=$emailid;
            $this->adrno=$adrno;
        }

        function store_Data()
        {
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "tourwebsite";
            $conn=new mysqli($servername,$username,$password,$dbname);

            if ($conn->connect_error) {
              die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO customer(first_name,last_name,mobile_no,email_id,adhhar_no) VALUES ('$this->fname', '$this->lname', '$this->mno','$this->emailid','$this->adrno')";

            if ($conn->query($sql) === TRUE) {
              echo "New record created successfully";
            } else {
              echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
        }
    }

    $customer=new personolInfo($_POST['fname'],$_POST['lname'],$_POST['mno'],$_POST['emailid'],$_POST['adrno']);
    $customer->store_Data();
?>