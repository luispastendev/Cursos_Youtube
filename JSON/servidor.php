 <?php
 $datos = array(
     array(
         'id' => 1,
         'nombre' => 'luis',
         'edad' => 25,
         'sexo' => 'Masculino'
     ),array(
         'id' => 2,
         'nombre' => 'Guillermo',
         'edad' => 20,
         'sexo' => 'Masculino'
     ),array(
         'id' => 3,
         'nombre' => 'Ana',
         'edad' => 18,
         'sexo' => 'Femenino'
     ),array(
         'id' => 4,
         'nombre' => 'Ruben',
         'edad' => 10,
         'sexo' => 'Masculino'
     ),
 );
 echo json_encode($datos);
  ?>
