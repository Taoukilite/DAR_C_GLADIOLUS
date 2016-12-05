<?php
require_once 'configbd.php';
header('Access-Control-Allow-Origin: *');
if(isset($_GET['nom']) && !empty($_GET['nom'])
	&& isset($_GET['prenom']) && !empty($_GET['prenom'])
	&& isset($_GET['mail']) && !empty($_GET['mail'])
	&& isset($_GET['mdp']) && !empty($_GET['mdp'])
	&& isset($_GET['adresse']) && !empty($_GET['adresse'])
){
	$prenom = $_GET['prenom'];
	$nom = $_GET['nom'];
	$mail = $_GET['mail'];
	$mdp = $_GET['mdp'];
	$adresse = $_GET['adresse'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
INSERT INTO `client` (`idClient`, `nom`, `prenom`, `adresse`, `mail`, `mdp`) 
VALUES (NULL, :nom, :prenom, :adresse, :mail, :mdp);
SQL
	);
	$stmt->bindValue(":nom", $nom);
	$stmt->bindValue(":prenom", $prenom);
	$stmt->bindValue(":mail", $mail);
	$stmt->bindValue(":mdp", $mdp);
	$stmt->bindValue(":adresse", $adresse);
	$stmt->execute();
	
	$rep = Array();
	$rep['code'] = 200;
	if($stmt->rowCount() == 1 ){
		$rep['id'] = $pdo->lastInsertId();
	}else{
		$rep['code'] = 500;
		$rep['msg'] = "Erreur durant la creation de l'utiliateur";
	}
		
	
	echo json_encode($rep);		
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : nom + prenom + mail + mdp + adresse";
	echo json_encode($rep);
}

