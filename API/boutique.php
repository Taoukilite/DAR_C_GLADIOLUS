<?php
require_once 'configbd.php';


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
){
	$latitude = $_GET['latitude'];
	$longitude = $_GET['longitude'];

	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select *
from Boutique
SQL
	);
	$stmt->execute();

	$rep = Array();
	$rep['code'] = 200;

	$boutique = Array();
	$distanceMin = -1;

	while(($ligne = $stmt->fetch()) !== false){
		$latitudeBoutique = $ligne['latitude'];
		$longitudeBoutique = $ligne['longitude'];

		$distance = haversineGreatCircleDistance($latitude, $longitude, $latitudeBoutique, $longitudeBoutique);

		if($distanceMin == -1 || $distance <= $distanceMin){
			$boutique['nomBoutique'] = $ligne['nomBoutique'];
			$boutique['urlBoutique'] = $ligne['urlBoutique'];
			$distanceMin = $distance;
		}
	}

	$rep['boutique'] = $boutique;

	echo json_encode($rep);

}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : latitude + longitude + perimetre en metres";
	echo json_encode($rep);
}
