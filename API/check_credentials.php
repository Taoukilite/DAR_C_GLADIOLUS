<?php
require_once 'configbd.php';
header('Access-Control-Allow-Origin: *');

if(isset($_GET['mail']) && !empty($_GET['mail']) && 
	isset($_GET['mdp']) && !empty($_GET['mdp'])){
	$mail = $_GET['mail'];
	$mdp = $_GET['mdp'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select count(idClient) "nb"
from client
where mail=:mail
SQL
	);
	$stmt->bindValue(":mail", $mail);
	$stmt->execute();
	
	$rep = Array();
	$rep['code'] = 200;
	$rep['result'] = 0;
	if(($ligne = $stmt->fetch()) !== false && $ligne['nb'] == 1){
	
		$rep['result'] = 2;
	
		$pdo = myPDO::getInstance();
		$stmt2 = $pdo->prepare(<<<SQL
select count(idClient) "nb"
from client
where mail=:mail
and mdp=:mdp
SQL
		);
		$stmt2->bindValue(":mail", $mail);
		$stmt2->bindValue(":mdp", $mdp);
		$stmt2->execute();
		if(($ligne2 = $stmt2->fetch()) !== false && $ligne2['nb'] == 1){
			$rep['result'] = 1;
		}		
	}
	echo json_encode($rep);
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : mail et sha1(mdp) requis";
	echo json_encode($rep);
}

