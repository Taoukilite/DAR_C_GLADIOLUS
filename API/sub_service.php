<?php
require_once 'configbd.php';

if(isset($_GET['idService']) && !empty($_GET['idService'])){
	$idService = $_GET['idService'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select s2.idService "idService", s2.nomService "nomService"
from service s1, service s2
where s1.idService = :idService
and s1.idService = s2.pere

SQL
	);
	$stmt->bindValue(":idService", $idService);
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
	$rep['msg'] = "parametre invalide : id service manquant";
	echo json_encode($rep);
}
