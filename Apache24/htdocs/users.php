<?php
	class BaseDatos extends SQLite3{
		function __construct(){
			$this->open('C:/projects/phpSqlLite3/sqllite3/bi.db');
		}
	}
	$db = new BaseDatos();
	$id = 1;
	if($db){
		echo "<p>La base de datos abrio correctamente</p>";
	}
	else{
		echo "<p>Error al abrir la base de datos";
	}
	
	$sql ='SELECT id, email, password from users';

	$ret = $db->query($sql);
	while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
		echo "id = ". $row['id'] . "\n";
		echo "email = ". $row['email'] ."\n";
		echo "password = ". $row['password'] ."\n";
   }
   echo "Operation done successfully\n";
   $db->close();

?>
