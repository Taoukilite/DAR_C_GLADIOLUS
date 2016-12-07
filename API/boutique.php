<?php
require_once 'configbd.php';
myPDO::setConfiguration('mysql:host=localhost;dbname=TyrellBoutiques;charset=utf8','tyrell','tyrell') ;

function haversineGreatCircleDistance(
  $latitudeFrom, $longitudeFrom, $latitudeTo, $longitudeTo, $earthRadius = 6371000)
{
  // convert from degrees to radians
  $latFrom = deg2rad($latitudeFrom);
  $lonFrom = deg2rad($longitudeFrom);
  $latTo = deg2rad($latitudeTo);
  $lonTo = deg2rad($longitudeTo);

  $latDelta = $latTo - $latFrom;
  $lonDelta = $lonTo - $lonFrom;

  $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
    cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
  return $angle * $earthRadius;
}


if(isset($_GET['latitude']) && !empty($_GET['latitude'])
	&& isset($_GET['longitude']) && !empty($_GET['longitude'])
	&& isset($_GET['perimetre']) && !empty($_GET['perimetre'])
){
	$latitude = $_GET['latitude'];
	$longitude = $_GET['longitude'];
	$perimetre = $_GET['perimetre'];
	
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
		$latitudeBoutique = $ligne['latitude'];
		$longitudeBoutique = $ligne['longitude'];
		
		$distance = haversineGreatCircleDistance($latitude, $longitude, $latitudeBoutique, $longitudeBoutique);
		
		if($distance <= $perimetre){		
			$rep['boutiques'] = Array();
			$rep['boutiques']['nomBoutique'] = $ligne['nomBoutique'];
			$rep['boutiques']['urlBoutique'] = $ligne['urlBoutique'];		
			$i++;	
		}
	}
	$rep['count'] = $i;
	
	echo json_encode($rep);
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : latitude + longitude + perimetre en metres";
	echo json_encode($rep);
}
