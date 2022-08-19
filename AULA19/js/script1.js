let valor = 5;

switch(valor) {
	case 0:
		console.log("O valor é",valor);
		break;
	case 1:
		console.log("O valor é",valor);
		break;
	case 2:
		console.log("O valor é",valor);
		break;
	case 3:
		console.log("O valor é",valor);
		break;
    default:
		console.log("O valor não foi encotrado nas condições");
		break;
	
	
}


let media = 6;
let media1 = 5;

switch(media >= 6){
	case true:
		console.log("Aprovado");
		break;
	default:
		console.log("Reprovado");
		break;
		
}

switch(media < 6){
	case true:
		console.log("Aprovado");
		break;
	default:
		console.log("Reprovado");
		break;
}

let indice = 10;

while(indice < 15) {
	console.log("O indice é menor que 15" ,indice);
	indice++;
}

do{
	console.log("O indice é menor que 15" ,indice);
	indice++;
}while(indice < 15);