<?php
require_once 'configbd.php';

$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select version from version;
SQL
);
$stmt->execute();
$rep = Array();
$rep['code'] = 200;
if(($ligne = $stmt->fetch()) !== false){
	$rep['version'] = $ligne['version'];
}
echo json_encode($rep);		

