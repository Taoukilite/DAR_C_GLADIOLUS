<?php
require_once 'configbd.php';

if(isset($_GET['mail']) && !empty($_GET['mail']) && 
	isset($_GET['mdp']) && !empty($_GET['mdp'])){
	$mail = $_GET['mail'];
	$mdp = $_GET['mdp'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select count(idClient) "nb"
from client
where mail=:mail
and mdp=:mdp
SQL
	);
	$stmt->bindValue(":mail", $mail);
	$stmt->bindValue(":mdp", $mdp);
	$stmt->execute();
	if(($ligne = $stmt->fetch()) !== false){
		$rep = Array();
		$rep['code'] = 200;
		$rep['result'] = $ligne["nb"];
		echo json_encode($rep);
	}
		
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : mail et sha1(mdp) requis";
	echo json_encode($rep);
}

