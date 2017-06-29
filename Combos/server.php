<?php
$cursos = array(
    array('id' => 1, 'nombre' => 'Javascript'),
    array('id' => 2, 'nombre' => 'PHP'),
    array('id' => 3, 'nombre' => 'CSS'),
    array('id' => 4, 'nombre' => 'Wordpress'),
);


$controlador = $_GET['controller'];
switch ($controlador) {
    case 'inicio':
        echo json_encode($cursos);
        break;
    default:
        # code...
        break;
}


 ?>
