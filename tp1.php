TP1.php
<?php
//afficher le chaine Bonjour
echo "Bonjour";
//affecter la chaine TEZEGHDENTI à la variable nom
$nom="TEZEGHDENTI";
$prenom="Oussama";
//concaténation de la variable nom, la chaine espace et la variable prenom
echo $nom." ".$prenom;
$n=-2;
/*si(n>0) alors echire ("OK") sinon ecrire ("KO") fin si en php */
if($n>0)
{
    echo "OK";
}
else
{
    echo "KO";
}
echo "<br>";
/* Boucle pour en PHP :pour i de 0 à 4 faire ecrire(i) */
for($i=0;$i<5;$i++)
{
    echo $i;
    echo "<br>";
}
$i=0;
while($i<5)
{
    echo $i;
    ?>
    <br>
    <?php

    $i++;
}
?>
<table border="1">
<tr><th>i</th><th> i+1</th></tr>
<?php
for($i=0;$i<15;$i++)
{
    ?>
    <tr><td>Oussama</td><td> TEZEGHDENTI</td></tr>
    <?php
}

?>
</table>
<?php
$a=3;
$b=4;
$res=$a.$b;
echo $res;
?>