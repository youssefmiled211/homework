function test()
{
    login=document.getElementById("login").value;
    passwd=document.getElementById("passwd").value;
    if((login=="")||(passwd.length==0))
    {
        alert("vérifier login ou mot de passe");
        return(false);
    }
   
}