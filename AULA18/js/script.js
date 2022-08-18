let atribuicao = "atribuição";
console.log(atribuicao);

let x = 10;
let y = 2;
console.log("O operador de adição retorna", x+y);
console.log("O operador de multiplicação retorna", x*y);
console.log("O operador de subitração retorna", x-y);
console.log("O operador de divisão retorna", x/y);

let numero1 = 10;
let numero2 = 3;
console.log("O operador de exponenciação retorna", numero1**numero2);
console.log("O operador de modulo(resto de divisão) retorna", numero1%numero2);
console.log("Numero1 valia", numero1);
numero1++;
console.log("Agora vale", numero1);
console.log("Numero2 valia", numero2);
numero2--;
console.log("Agora vale", numero2);

console.log("--- Operadores de comparação ---");
let primeiroValor = 100;
let segundoValor = "100";

if(primeiroValor == segundoValor){
	console.log("Os valores são iguais", primeiroValor, segundoValor);
}

if(primeiroValor === segundoValor){
	console.log("Os valores são iguais", primeiroValor, segundoValor);
	
}else{
	console.log("Os valores são iguais mas os tipos são diferentes");
}

let terceiroValor = 200;
let quartoValor = "200";

if(terceiroValor != quartoValor){
	console.log("Os valores são diferentes")
}else{
	console.log("Os valores são iguais");
}

if(terceiroValor !== quartoValor){
	console.log("Os valores são diferentes")
}else{
	console.log("Os valores são iguais");
}


let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

if(v1 > v2){
	console.log(v1, "é maior que", v2);

}else if(v1 < v2){
	console.log(v1, "é menor que", v2);

}else{
	console.log(v2, "é maior que", v1);
}

if(v1 >= v2){
	console.log(v1, "é maior que ou igual a", v2);
}else if(v1 <= v2){
	console.log(v1, "é menor que ou igual a", v2);
}

// && operador lógico e

if(v4 > v3 && v2 > v1){
	console.log(v4, "é maior que" , v3, "e", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

if(v4 > v3 && v2 < v1){
	console.log(v4, "é maior que" , v3, "e", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

// || operador lógico ou 

if(v4 > v3 || v2 > v1){
	console.log(v4, "é maior que" , v3, "ou", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

// operador de negação

if(!(v3 > v4) ) {
	console.log(v3, "não é maior que", v4);
}


function modoNoturno(){
	let textoH1 = document.getElementById("titulo");
	let botão = document.getElementById("botao");
	
	if(textoH1.innerText == "Modo Diurno") {
		
	document.body.style.backgroundColor ="rgb(0,0,0)";
	textoH1.innerHTML = "Modo Noturno";
	textoH1.style.color = "rgb(255,255,255)";
	botao.style.backgroundColor ="rgb(255,255,255)";
	botao.style.color = "rgb(0,0,0)";
	botao.innerHTML = "Ativar modo diurno";
	
	}else{
	
	document.body.style.backgroundColor ="rgb(255,255,255)";
	textoH1.innerHTML = "Modo Diurno";
	textoH1.style.color = "rgb(0,0,0)";
	botao.style.backgroundColor ="rgb(0,0,0)";
	botao.style.color = "rgb(255,255,255)";
	botao.innerHTML = "Ativar modo noturno";

	}
		
	

}