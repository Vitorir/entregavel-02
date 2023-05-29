const n = parseInt(prompt("Digite o valor de n:"));

let valor1 = 0;
let valor2 = 1;
let valor3;

console.log(valor1);
console.log(valor2);

for (let i = 3; i <= n; i++) {
    valor3 = valor1 + valor2;
    console.log(valor3);
    valor1 = valor2;
    valor2 = valor3;
}
