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

$router->get('/prueba.php', function() { 
    require_once 'src/views/prueba.php';
});

$router->run();