
function est_texte(ch)
{
ch=ch.toUpperCase();
valid=true;
i=0;
while( (i<ch.length) && (valid==true) )
{
if( ((ch.charAt(i)>"Z" ) || (ch.charAt(i)<"A") ) &&(ch.charAt(i)!=" ") )
{
valid=false;
}
i++;

}
return (valid);
}
function verif()
{
nom=document.getElementById("nom").value;
prenom=document.getElementById("prenom").value;
if( (est_texte(nom)==false)||(est_texte(prenom)==false))
{
alert("verifier le nom et le prenom");
}

}