<?php
	class BaseDatos extends SQLite3{
		function __construct(){
			$this->open('bi.db');
		}
	}
	$db = new BaseDatos();
	if($db){
		echo "<p>La base de datos abrio correctamente";
	}
	else{
		echo "<p>Error al abrir la base de datos";
	}
?>
