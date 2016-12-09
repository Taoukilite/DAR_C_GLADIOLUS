<?php
require_once 'configbd.php';

if(
	isset($_GET['mail']) && !empty($_GET['mail'])
	&& isset($_GET['code']) && !empty($_GET['code'])
	&& isset($_GET['value']) && !empty($_GET['value'])
){
	$mail = $_GET['mail'];
	$code = $_GET['code'];
	$value = $_GET['value'];
	
	$column = "";
	switch($code){
		case 0:
			$column = "nom";
			break;
		case 1:
			$column = "prenom";
			break;
		case 2:
			$column = "adresse";
			break;
		case 3:
			$column = "mail";
			break;
		case 4:
			$column = "mdp";
			break;
	}
	
	$rep = Array();
	$rep['code'] = 200;
	$rep['result'] = -1;
	
	if($column != ""){	
		$rep['result'] = -1;
	
		$pdo = myPDO::getInstance();
		$stmt = $pdo->prepare("UPDATE client SET " . $column . " = :value WHERE client.mail = :mail");
		$stmt->bindValue(":mail", $mail);
		$stmt->bindValue(":value", $value);
		$stmt->execute();
			
		if($stmt->rowCount() == 1 ){
			$rep['result'] = 1;
		}
	}
	
	echo json_encode($rep);

}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : email requis + code modif + nouvelle valeure";
	echo json_encode($rep);
}
