let animal =["Leão","Gato","Cachorro","Elefante","Formiga","Abelha","Rato","Peixe","Aranha","Tubarão"];
let lista = document.getElementById("lista");
console.log(lista);


for(i= 0; i < animal.length; i++){
	
	if(i > 0 && (i % 2) == 0) {
	
	lista.innerHTML += "<li>" + animal[i] + "</li>"
	}
}


	


