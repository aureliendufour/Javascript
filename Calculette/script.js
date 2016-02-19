setInterval(function(){
	if($("#display div").css("color") == "rgb(255, 255, 0)")
		$("#display div").css("color", "black")
	else
		$("#display div").css("color", "yellow")
},500);

var chaine = [];
var resultat = "";

$("#pad button").on('click',
	function(){

		if($("#display div").text() == "0"){
			$("#display div").text("");
		}
		
		$("#display div").append($(this).text());//Affiche le texte
		chaine.push($(this).text());//sauvegarde notre calcule
		//Permet de ne pas garder le égale


		if($(this).text() == "="){
			i=0;

			while (chaine[i] != "=") {
				if (chaine[i] == ",") {
					 chaine[i] = ".";
				}
				resultat += chaine[i];
				i+=1;
			}

			resultat = eval(resultat);//Fait le calcule
			$("#display div").text(resultat);//Affiche le résultat

			chaine = [];//Réinitialise les valeurs
			resultat = "";
		}

		if($(this).text() == "+" || $(this).text() == "/" ||
			 $(this).text() == "*" || $(this).text() == "-" ){

			$("#display div").empty();//Vide le champs après chaque opérateur
		}
});
