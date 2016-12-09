<?php
require_once 'configbd.php';

if(isset($_GET['mail']) && !empty($_GET['mail'])){
	$mail = $_GET['mail'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select nom, prenom, mail, adresse, perimetre
from client
where mail=:mail
SQL
	);
	$stmt->bindValue(":mail", $mail);
	$stmt->execute();
	
	$rep = Array();
	$rep['code'] = 200;
	$rep['result'] = 0;
	if(($ligne = $stmt->fetch()) !== false){	
		$rep['result'] = 1;
		$rep['infos'] = Array();
		$rep['infos']['nom'] = $ligne['nom'];
		$rep['infos']['prenom'] = $ligne['prenom'];
		$rep['infos']['mail'] = $ligne['mail'];
		$rep['infos']['adresse'] = $ligne['adresse'];
		$rep['infos']['perimetre'] = intval($ligne['perimetre']);		
	}
	echo json_encode($rep);
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : email requis";
	echo json_encode($rep);
}
