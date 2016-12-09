<?php
require_once 'myPDO.include.php' ;
header('Access-Control-Allow-Origin: *');
myPDO::setConfiguration('mysql:host=localhost;dbname=TyrellReims;charset=utf8','tyrell','tyrell') ;
