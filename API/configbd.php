<?php
require_once 'myPDO.include.php' ;
header('Access-Control-Allow-Origin: *');
myPDO::setConfiguration('mysql:host=localhost;dbname=TyrellBoutiques;charset=utf8','tyrell','tyrell') ;
