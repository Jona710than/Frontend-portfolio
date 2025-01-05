<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="dataone";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

//checking connection

if (!$conn) {
    die("Connection Failed" . mysqli_connect_error());

}
if (isset($_POST['save'])) {
    $first_name=$_POST['first_name'];
    $last_name=$_POST['last_name'];
    $email=$_POST['email'];
    $country=$_POST['country'];

    $sql_query = "INSERT INTO entry_detail(first_name,last_name,email,country)
    VALUES ('$first_name','$last_name','$email','$country')";

    if (mysqli_query($conn, $sql_query))  {
        echo "<div class='one'> New Details Entry inserted successfully ! </div>";
    }
    else {
        echo "Error: " .$sql."".mysqli_error($conn);
    }
    mysqli_close($conn);

    // if (  $first_name=''$last_name=''$email=''$country='')
    //  {
    //     $sql_query = "INSERT INTO entry_detail(first_name,last_name,email,country)
    // VALUES ('')";  
    // }
    
} 



?>