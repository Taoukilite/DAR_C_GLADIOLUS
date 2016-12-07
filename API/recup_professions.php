<?php
require_once 'configbd.php';

	
$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select * from profession;
SQL
);
$stmt->execute();
$rep = Array();
$rep['code'] = 200;
$i = 0;
$rep['professions'] = Array();
while(($ligne = $stmt->fetch()) !== false){
	$array = Array();
	$array['idProfession'] = $ligne['idProfession'];
	$array['nomProfession'] = $ligne['nomProfession'];
	$rep['professions'][] = $array;
	$i++;
}
$rep['count'] = $i;
echo json_encode($rep);
