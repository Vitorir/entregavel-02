const n = [1, 2, 3, 4, 5];
// Gera uma lista de numeros aleatorios baseados no vetor n
const randomList = n.map(() => Math.random() * 10);

// trunca um numero aleatorios de elementos
for (let index = 0; index < randomList.length; index++) {
	if (randomList[index] > Math.trunc(Math.random() * 10)) {
		randomList[index] = Math.trunc(randomList[index]);
	}
}

console.log(randomList);

// logica pra contar o numero de primos
var contador = 0;
for (let index = 0; index < randomList.length; index++) {
	if (randomList[index] % 1 == 0) {
		console.log(randomList[index]);
		contador++;
	}
}

document.getElementById('output').innerHTML = "A quantidade de numeros inteiros eh: " + contador; 
document.write("A quantidade de numeros inteiros eh: " + contador);
console.log("A quantidade de numeros inteiros eh: " + contador);