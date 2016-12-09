<?php
require_once 'configbd.php';

if(isset($_GET['nomProfession']) && !empty($_GET['nomProfession'])){
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
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametre invalide : nom profession manquant";
	echo json_encode($rep);
}

