<form action="" name="" method="POST">
<select name="" id="" size="5">

<?php
require("../config.php");
$conn=mysqli_connect($serveur,$username,$password,$db);
$sql="select nom,prenom,email from users ;";
$res=mysqli_query($conn,$sql);
$nb=mysqli_num_rows($res);
for ($i=0;$i<$nb;$i++)
{
    $enreg=mysqli_fetch_array($res);
?>
    <option value="<?php echo $enreg['email']; ?>"><?php echo $enreg['prenom']." ".$enreg['nom']; ?></option>
<?php

}

?>
</select>
<input type="button" value="Supprimer" onclick="supprimer()">
<input type="button" value="Trouver adresse" onclick="adresse()">

</form>