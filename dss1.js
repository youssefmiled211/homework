function verifNum(ch)
{
    if(ch.length!=8)
    {
        tester=false;
    }
    else
    {
        i=0;
        tester=true;
        while( (i<ch.length) && (tester==true) )
        {
            if((ch.charAt(i)<"0") || (ch.charAt(i)>"9"))
            {
                tester=false;
            }
        i++;
    }
}
return(tester);
}
function verifNom(ch)
{
    ch=ch.toUpperCase();        
    i=0;
    tester=true;
    while( (i<ch.length) && (tester==true) )
    {
        if(((ch.charAt(i)<"A") || (ch.charAt(i)>"Z")) && (ch.charAt(i)!=" "))
        {
            tester=false;
        }
        i++;
    }
    return(tester);
}
function test()

{
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    cin=document.getElementById("cin").value;
    if(!verifNum(cin))
    {
        alert("verifier votre cin");
    }else if((!verifNom(nom)) ||(!verifNom(prenom)) )
            {
                alert("verifier votre nom ou prenom");
            }
            else
            {
                f1.submit();
            }
}