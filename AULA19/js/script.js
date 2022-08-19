function adicionarPrato() {
	
	let pedido = document.getElementById("numero-prato");
	let total = document.getElementById("total");
	let saldoAnterior = 0;
	
switch(pedido.value){

	case "1":
		saldoAnterior = total.innerText;
		total.innerHTML = parseFloat(saldoAnterior) +10;
		break;
	case "2":
		saldoAnterior = total.innerText;
		total.innerHTML = parseFloat(saldoAnterior) +10;
		break;
	case "3":
		saldoAnterior = total.innerText;
		total.innerHTML = parseFloat(saldoAnterior) +8;
		break;
	case "4":
		saldoAnterior = total.innerText;
		total.innerHTML = parseFloat(saldoAnterior) +15;
		break;
	default:
		alert("O valor digitado não corresponde a um prato");
		break;
	}	
}