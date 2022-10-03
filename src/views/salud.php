<?php
namespace Luis\Petslife\views;
use Luis\Petslife\views\layouts\Head;
use Luis\Petslife\views\layouts\Foot;

use Luis\Petslife\controllers\Home;

$head = new Head;
echo $head->index();

    $home = new Home;
    echo $home->addItem('<div class="execute" id="execute">');

        include("src/views/bodys/salud.inc.php");

    $home = new Home;
    echo $home->addItemAndHome("</div>");

    include("src/views/components/apps.php");

$foot = new Foot;
echo $foot->index();