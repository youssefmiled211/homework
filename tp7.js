function verif()
{
    i=document.getElementById("destination").selectedIndex;
    texte=destination=document.getElementById("destination").options[i].text;
   destination=document.getElementById("destination");
    texte=destination.options[i].text;
    prix=document.getElementById("destination").value;
    alert(texte+prix);
}
function ajout()
{
    ville=document.getElementById("ville").value;
    prix=document.getElementById("prix").value;
    i=document.getElementById("destination").length;
    alert(i);
    d=new Option(ville, prix)
    document.getElementById("destination").options[i]=d;


}