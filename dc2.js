function time()
{
    d=new Date();
    ch="";
    ch+=d.getDate().toString()+"/"+(d.getMonth()+1).toString()+"/"+d.getFullYear().toString();

    document.getElementById("horloge").value=ch;
}
function verif()
{
      i=document.getElementById("depart").selectedIndex;
      j=document.getElementById("arrive").selectedIndex;
      busniess=document.getElementById("business").checked;
      economique=document.getElementById("economique").checked;
      nbenfant=document.getElementById("nbenfant").value;
      poids=document.getElementById("poids").value;
      adultes=document.getElementById("adultes").value;
      if((i==0)||(j==0)||(!busniess && !economique))
      {
        alert("Veuillez choisir un depart,une arrivee et une classe ");
      }else if((poids=="")||(nbenfant=="")||(adultes=="")||isNaN(poids)||isNaN(nbenfant)||(isNaN(adultes)))
      {
        alert("Verifiez les champs Poids,Nombre d'adultes ainsi que le nombre d'enfants");
      }else if(Number(nbenfant)>Number(adultes))
        {
            alert("Le nombre d'enfants doit êtres inférieur au nombre d'adultes");
        }else
        {
            poids=Number(poids);
            adultes=Number(adultes);
            nbenfant=Number(nbenfant);
            prix_voyage=Number(document.getElementById("depart").value)+Number(document.getElementById("arrive").value);
            baguage_auth=23;
            if(busniess)
            {
                baguage_auth=70;
                prix_voyage*=1.8;
            }
            baguage_auth*=(nbenfant+adultes);
            exces=poids-baguage_auth;
            if(exces<0)
            {
                exces=0;
            }
            prix_tot=prix_voyage*(adultes+(nbenfant*0.5))+exces*20;
           
            remise=(1+Math.floor(Math.random()*3))/100;
           
            if(prix_tot>5000)
            {
                //prix_tot=prix_tot-(prix_tot*remise);
                prix_tot-=(prix_tot*remise);
            }
            document.getElementById("prix_tot").value=prix_tot;
            document.getElementById("exces").value=exces;
           

        }
}