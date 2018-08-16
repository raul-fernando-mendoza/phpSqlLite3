<?php
	class BaseDatos extends SQLite3{
		function __construct(){
			$this->open('C:/projects/phpSqlLite3/sqllite3/bi.db');
		}
	}
	$db = new BaseDatos();
	$id = 1;
	if($db){
		echo "<p>La base de datos abrio correctamente";
	}
	else{
		echo "<p>Error al abrir la base de datos";
	}
	
	$statement = $db->prepare('SELECT email FROM users WHERE id = :id;');
	$statement->bindValue(':id', $id);

	$result = $statement->execute();

	
	var_dump($result);
?>
