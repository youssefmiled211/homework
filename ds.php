<?php
error_reporting(E_ERROR | E_PARSE);
//récupération des variabls depuis le formulaire à l'aide de la méthode post du formulaire
$cin=$_POST["cin"];
$nom=$_POST["nom"];
$prenom=$_POST["prenom"];
$ex1=(int)$_POST["ex1"];
$ex2=(int)$_POST["ex2"];
$etape1=(int)$_POST["etape1"];
$etape2=(int)$_POST["etape2"];
$etape4=(int)$_POST["etape4"];
//calcul de la note
$note=0;
$ex3=0;
if($etape1==1)
{
    $ex3=$ex3+4;
}
if($etape2==3)
{
    $ex3=$ex3+4;
}
if($etape4==2)
{
    $ex3=$ex3+4;
}
$note=$ex1+$ex2+$ex3;
//echo $ex1.$ex2.$ex3.$note;

// L' instruction require prend tout le texte/code/balisage qui existe dans le fichier spécifié et le copie dans le fichier qui utilise l'instruction include.
require("config.php");
//La fonction connect() / mysqli_connect() ouvre une nouvelle connexion au serveur MySQL.
$conn=mysqli_connect($server,$username,$password,$db) or die ("Probleme de connxion au serveur ou à la base de données");
// Construction de la requete
$sql="insert into  examen values('$cin','$nom','$prenom',$note);";
//echo $sql;
//execution de la requete
mysqli_query($conn,$sql);
if(mysqli_affected_rows($conn)>0)
{
    echo "examen enregistré par succées";
}
else
{
    echo "condidat  existant";
}
mysqli_close($conn);

?>