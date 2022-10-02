<?php
namespace Luis\Petslife\lib;
use Luis\Petslife\controllers\Controller;

$router = new \Bramus\Router\Router();
session_start();

$router->get('/', function() { 
    $home = new Controller;
    $home->render("index");
});

$router->get('/index.php', function() { 
    $home = new Controller;
    $home->render("index");
});

$router->get('/nombre_de_la_mascota.php', function() { 
    $home = new Controller;
    $home->render("nombre_de_la_mascota");
});

$router->run();