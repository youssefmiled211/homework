
var a;
var op;
function un ()
{
    document.getElementById("ecran").value+="1";

}
function deux ()
{
    document.getElementById("ecran").value+="2";
}
function trois ()
{
    document.getElementById("ecran").value+="3";
}
function quatre ()
{
    document.getElementById("ecran").value+="4";
}
function cinq ()
{
    document.getElementById("ecran").value+="5";
}
function six ()
{
    document.getElementById("ecran").value+="6";
}
function sept ()
{
    document.getElementById("ecran").value+="7";
}
function huit ()
{
    document.getElementById("ecran").value+="8";
}
function neuf ()
{
    document.getElementById("ecran").value+="9";
}
function zero ()
{
    document.getElementById("ecran").value+="0";
}
function plus()
{
     a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="";
    op="+";
}

function moins()
{
    a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="";
    op="-";
}
function fois()
{
    a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="";
    op="*";
}
function div()
{
    a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="";
    op="/";
}
function egale()
{  
    let b=Number(document.getElementById("ecran").value);
    switch(op)
    {
        case "+":res=a+b;break;
        case "*":res=a*b;break;
        case "-":res=a-b;break;
        case "/":if(b!=0){res=a/b}else{res="Erreur Division impossible par 0";};break;
    }
    if(op=="+")
    {
        res=a+b;
    }
    else
    if(op=="-")
     {
        res=a-b;
     }
     else
     if(op=="*")
     {
        res=a*b;
     }
     else
     if(op=="/")
     {
        if(b!=0)
        {
            res=a/b;
        }
        else
        {
            res="Erreur Division impossible par 0";
        }
     }
   
    document.getElementById("ecran").value=res;

}