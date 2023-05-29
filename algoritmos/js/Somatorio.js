var n = Math.trunc(Math.random() * 10);
console.log("numero de casos:", n);

var numero;
var soma = 0;
var i = 0;

while (i < n) {
	numero = Math.trunc(Math.random() * 10);
	console.log(numero);
	soma = soma + numero;
	i = i + 1;
}

console.log("A soma dos " + n + " números é " + soma);
