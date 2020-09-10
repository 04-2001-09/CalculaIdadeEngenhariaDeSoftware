<?php
header("Content-Type: application/json");

$dataNascimento = $_POST['idade'];
$nome = $_POST['nome'];
$date = new DateTime($dataNascimento);
$interval = $date->diff(new DateTime(date('Y/m/d')));
echo $interval->format("{$nome}, sua idade é %Y anos");
