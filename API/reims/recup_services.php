<?php
require_once 'configbd.php';

	
$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select s1.idService "idService", s1.nomService "nomService", s2.idService "idPere", s2.nomService "nomPere"
from service s1
left join service s2
on s1.pere = s2.idService;

SQL
);
$stmt->execute();
$rep = Array();
$rep['code'] = 200;
$i = 0;
$rep['services'] = Array();
while(($ligne = $stmt->fetch()) !== false){
	$array = Array();
	$array['idService'] = $ligne['idService'];
	$array['nomService'] = $ligne['nomService'];
	$array['idPere'] = $ligne['idPere'];
	$array['nomPere'] = $ligne['nomPere'];
	
	$rep['services'][] = $array;
	$i++;
}
$rep['count'] = $i;
echo json_encode($rep);
