<?php
require_once 'configbd.php';
myPDO::setConfiguration('mysql:host=localhost;dbname=TyrellBoutiques;charset=utf8','tyrell','tyrell') ;
	
$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select * 
from Boutique
SQL
);
$stmt->execute();

$rep = Array();
$rep['code'] = 200;
$i = 0;

while(($ligne = $stmt->fetch()) !== false){	
	$rep['boutiques'] = Array();
	$rep['boutiques']['nomBoutique'] = $ligne['nomBoutique'];
	$rep['boutiques']['urlBoutique'] = $ligne['urlBoutique'];		
	$rep['boutiques']['latitude'] = $ligne['latitude'];
	$rep['boutiques']['longitude'] = $ligne['longitude'];	
	$i++;	
}
$rep['count'] = $i;

echo json_encode($rep);
