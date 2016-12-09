<?php
require_once 'configbd.php';

if(isset($_GET['idProfession']) && !empty($_GET['idProfession'])){
	$idProfession = $_GET['idProfession'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select s.idService "idService", s.nomService "nomService"
from proposer pr, service s
where pr.idProfession = :idProfession
and s.idService = pr.idService;
SQL
	);
	$stmt->bindValue(":idProfession", $idProfession);
	$stmt->execute();
	$rep = Array();
	$rep['code'] = 200;
	$i = 0;
	while(($ligne = $stmt->fetch()) !== false){
		$rep['services'][] = array("idService" => $ligne["idService"], 
			"nomService" => $ligne["nomService"] );
		$i++;
	}
	$rep['count'] = $i;
	echo json_encode($rep);		
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametre invalide : id profession manquant";
	echo json_encode($rep);
}

