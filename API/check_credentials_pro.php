<?php
require_once 'configBdd.php';

header('Access-Control-Allow-Origin: *');

if(isset($_GET['login']) && !empty($_GET['login']) &&
	isset($_GET['mdp']) && !empty($_GET['mdp'])){
	$login = $_GET['login'];
	$mdp = $_GET['mdp'];

	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select count(idProfessionnel) "nb"
from professionnel
where login=:login
SQL
	);
	$stmt->bindValue(":login", $login);
	$stmt->execute();

	$rep = Array();
	$rep['code'] = 200;
	$rep['result'] = 0;
	if(($ligne = $stmt->fetch()) !== false && $ligne['nb'] == 1){

		$rep['result'] = 2;

		$pdo = myPDO::getInstance();
		$stmt2 = $pdo->prepare(<<<SQL
select count(idProfessionnel) "nb"
from professionnel
where login=:login
and mdp=:mdp
SQL
		);
		$stmt2->bindValue(":login", $login);
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
	$rep['msg'] = "parametres invalides : login et sha1(mdp) requis";
	echo json_encode($rep);
}
