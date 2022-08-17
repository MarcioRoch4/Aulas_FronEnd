let marca1 = "vw"
let marca2 = "GM"
let marca3 = "fiat"

console.log(marca1, marca2, marca3);

let marcas = ["VW","GM","FIAT"]

console.log(marcas);
console.log(marcas[2]);

let vw = ["GOL","GOLF","POLO","JETTA","SAVEIRO"];
let gm = ["ONIX","CRUZE","SPIN","RANGER","S10"];
let fiat = ["UNO","TORO","SIENA","BRAVO","ARGO"];


console.log(vw);
console.log(gm);
console.log(fiat);
console.log(vw.length);

if(vw[3]== "JETTA"){
	console.log("Meu carro é um " +vw[3])

}else{
	console.log("Liso, não tem dinheiro para isso")
}

if(gm[0]== "SPIN"){
	console.log("Meu carro é um " +gm[0])

}else{
	console.log("Liso, não tem dinheiro para isso")
}


if(fiat[0]== "UNO"){
	console.log("Meu carro é um " +fiat[0])

}else{
	console.log("Liso, não tem dinheiro para isso")
}

for (i = 0; i < vw.length; i++){
	if(vw[i] == "SAVEIRO"){
		console.log("Achei meu carro na posição " + i, vw[i]);
}else{
	console.log("Esse não é meu carro " + vw[i]);
}
}

let fruta =["maça","banana","manga","caju","morango","mamão","limão","goiaba","caja","mangaba"];

for (i = 0; i < fruta.length; i++){
	if(fruta[i] == "manga"){
		console.log("achei a fruta que queria " +  fruta[i] + " na posição " + i);
}else{
	console.log("esse não é a fruta que procuro " + fruta[i]);
}
}