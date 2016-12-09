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


if(isset($_GET['idService']) && !empty($_GET['idService'])
	&& isset($_GET['latitude']) && !empty($_GET['latitude'])
	&& isset($_GET['longitude']) && !empty($_GET['longitude'])
	&& isset($_GET['distanceMax']) && !empty($_GET['distanceMax'])
){
	$idService = $_GET['idService'];
	$latitude = $_GET['latitude'];
	$longitude = $_GET['longitude'];
	$distanceMax = $_GET['distanceMax'];
	
	$pdo = myPDO::getInstance();
$stmt = $pdo->prepare(<<<SQL
select  p.idProfessionnel "idProfessionnel", p.nom "nomProfessionnel",
	p.latitude "latitude", p.longitude "longitude"
from proposer pr, profession profes, exercer e, professionnel p
where pr.idService = :idService
and pr.idProfession = profes.idProfession
and profes.idProfession = e.idProfession
and e.idProfessionnel = p.idProfessionnel
SQL
	);
	$stmt->bindValue(":idService", $idService);
	$stmt->execute();
	$rep = Array();
	$rep['code'] = 200;
	$i = 0;
	while(($ligne = $stmt->fetch()) !== false){
		
		$latitudePro = $ligne["latitude"];
		$longitudePro = $ligne["longitude"];
		$distance = haversineGreatCircleDistance($latitude, $longitude, $latitudePro, $longitudePro);
		if($distance <= $distanceMax){
			$rep['professionnels'][] = array(
				"idProfessionnel" => $ligne["idProfessionnel"],
				"nomProfessionnel" => $ligne["nomProfessionnel"],
				"disance" => $distance				
			);
			$i++;
		}
	}
	$rep['count'] = $i;
	echo json_encode($rep);		
	
		
}else{
	http_response_code(403);
	$rep = Array();
	$rep['code'] = 403;
	$rep['msg'] = "parametres invalides : id service  + latitude + longitude + distanceMax (metres)";
	echo json_encode($rep);
}

