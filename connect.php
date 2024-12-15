<?php
    $registerclienteName = $_POST['registerclienteName'];
    $registerclienteEmail = $_POST['registerclienteEmail'];
    $registerclientePassword = $_POST['registerclientePassword'];
    $registerprodutorName = $_POST['registerprodutorName'];
    $inputNegocio = $_POST['inputNegocio'];
    $registerprodutorEmail = $_POST['registerprodutorEmail'];
    $registerprodutorPassword = $_POST['registerclienteName'];
    $tipoconta = $_POST['userType'];
    
    $conn = new mysqli('localhost','root','','testedoçaria');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connection_error);
    }else{
        $stmt = $conn->prepare("Insert into users(email,name,pass,tipo)
            values(?,?,?,?)");
        $stmt->bind_param("ssss",$registerclienteEmail,$registerclienteName,$registerclientePassword,$tipoconta);
        $stmt->execute();
        echo "registration sucessfully";
        $stmt->close();
        $conn->close();
    }
?>