var N = Math.trunc(Math.random() * 10);
var X;
var contador;

for (var i = 0; i < N; i++) {
    contador = 0;
    X = Math.trunc(Math.random() * 10);
    for (var j = 2; j < X; j++) {
        if (X % j == 0) {
            contador = contador + 1;
        }
    }
    if (contador == 0) {
        console.log(X + " eh primo");
    } else {
        console.log(X + " nao eh primo");
    }
}