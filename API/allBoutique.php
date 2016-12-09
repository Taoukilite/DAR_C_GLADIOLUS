<?php
require_once 'configbd.php';


$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select *
from Boutique
SQL
);
$stmt->execute();

$rep = Array();
$rep['code'] = 200;

while(($ligne = $stmt->fetch()) !== false){
	$array = Array();
	$array['nomBoutique'] = $ligne['nomBoutique'];
	$array['urlBoutique'] = $ligne['urlBoutique'];
	$array['latitude'] = $ligne['latitude'];
	$array['longitude'] = $ligne['longitude'];

	$rep['boutiques'][]=$array;
}

echo json_encode($rep);
