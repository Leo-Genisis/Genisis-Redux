<?php

  require_once "../actions/db_connection.php";

  $sql=  "SELECT * FROM servicos;";
  $result= $conn -> query( $sql );
  $servico = [];

  while($row = mysqli_fetch_assoc($result)){
      $servico[] = $row;
  }
  header("Access-Control-Allow-Origin:*");
  //header("Content-type: application/json");

  echo json_encode($servico);

?>