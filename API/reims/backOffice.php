<?php

require_once("configBdd.php");

switch($_GET['request']) {
	case login:
		login();
		break;
	case getServicesByName:
		getServicesByName();
		break;
	case getProfessionByName:
		getProfessionByName();
		break;
}

function login() {
	if(isset($_GET['mail']) && !empty($_GET['mail']) &&
		isset($_GET['mdp']) && !empty($_GET['mdp'])) {
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
	}
	else {
		http_response_code(403);
		$rep = Array();
		$rep['code'] = 403;
		$rep['msg'] = "parametres invalides : mail et sha1(mdp) requis";
		echo json_encode($rep);
	}
}

function getServicesByName() {
	if(isset($_GET['nomService']) && !empty($_GET['nomService'])) {
		$nomService = $_GET['nomService'];

		$pdo = myPDO::getInstance();
			$stmt = $pdo->prepare(<<<SQL
			select *
			from service
			where LOWER(nomService) LIKE LOWER(:nomService)
			SQL
		);
		$stmt->bindValue(":nomService", "%".$nomService."%");
		$stmt->execute();
		$rep = Array();
		$rep['code'] = 200;
		$i = 0;
		while(($ligne = $stmt->fetch()) !== false){
			$rep['services'][] = array("nomService" => $ligne["nomService"],
				"idService" => $ligne["idService"] );
			$i++;
		}
		$rep['count'] = $i;
		echo json_encode($rep);
	}
	else {
		http_response_code(403);
		$rep = Array();
		$rep['code'] = 403;
		$rep['msg'] = "parametre invalide : nom service manquant";
		echo json_encode($rep);
	}
}

function getProfessionByName() {
	if(isset($_GET['nomProfession']) && !empty($_GET['nomProfession'])) {
		$nomProfession = $_GET['nomProfession'];

		$pdo = myPDO::getInstance();
		$stmt = $pdo->prepare(<<<SQL
			select *
			from profession
			where LOWER(nomProfession) LIKE LOWER(:nomProfession)
			SQL
		);
		$stmt->bindValue(":nomProfession", "%".$nomProfession."%");
		$stmt->execute();
		$rep = Array();
		$rep['code'] = 200;
		$i = 0;
		while(($ligne = $stmt->fetch()) !== false){
			$rep['professions'][] = array("nomProfession" => $ligne["nomProfession"],
				"idProfession" => $ligne["idProfession"] );
			$i++;
		}
		$rep['count'] = $i;
		echo json_encode($rep);
	}
	else {
		http_response_code(403);
		$rep = Array();
		$rep['code'] = 403;
		$rep['msg'] = "parametre invalide : nom profession manquant";
		echo json_encode($rep);
	}
}

 ?>
