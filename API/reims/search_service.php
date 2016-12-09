<?php
require_once 'configbd.php';

if(isset($_GET['nomService']) && !empty($_GET['nomService'])){
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
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametre invalide : nom service manquant";
	echo json_encode($rep);
}

