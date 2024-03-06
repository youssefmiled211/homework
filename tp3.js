
var a;
var op;
function un ()
{
    ch=document.getElementById("ecran").value;
    ch=ch+"1";
    document.getElementById("ecran").value=ch;

}
function deux ()
{
    document.getElementById("ecran").value=document.getElementById("ecran").value+"2";
}
function plus()
{
    a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="+";
    op="+";
}
function moins()
{
    a=Number(document.getElementById("ecran").value);
    document.getElementById("ecran").value="-";
    op="-";
}
function egale()
{
    let b=Number(document.getElementById("ecran").value);
    if(op=="+")
    {
        res=a+b;
    }else
    {
        if(op=="-")
        {
            res=a-b;
        }
    }
    document.getElementById("ecran").value=res.toString();

}