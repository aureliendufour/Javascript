
  $("#start").click(function(){//Action au click du bouton
    var hex= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var couleur = [];
    var rgb = [];

    $('#text').empty();//Vide le champ text rgb

    couleur.push($('#r').val(),$('#b').val(),$('#v').val());//Récupération des valeurs

    for(i=0;i < couleur.length; i++){
        quotient = Math.floor(couleur[i]/16);
        reste= Math.floor(couleur[i]%16);
        rgb.push(hex[quotient]+hex[reste]);
    }

    $('#text').append("#"+rgb[0]+rgb[1]+rgb[2]);//Affichage de la valeur dans la zone text




    // ___________________________________________________________________________________
    var rbv =$('#t').val().toUpperCase();
    var calcule = 0;
    var indice = 1;
    var decimale = [];
    var partage = 0;

    rbv = rbv.split("",6);

    for (p=0;p < rbv.length; p++){
        for(l=0;l < hex.length; l++){
          if (rbv[p] == hex[l]){
              calcule +=hex.indexOf(hex[l])*Math.pow(16,indice);
              indice -=1;
              partage +=1;
          }
        }

        if (partage == 2) {
          decimale.push(calcule);
          partage = 0;
          indice = 1;
          calcule = 0;
        }
    }
    $('#text1').empty();//Vide le champ text rgb
    $('#text1').append(decimale[0]+","+decimale[1]+","+decimale[2]);//Affichage de la valeur dans la zone text
});
