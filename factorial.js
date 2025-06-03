// El programa no tiene validación ni estructura.
// Simplemente calcula el factorial del número ingresado.

let n = prompt("Número:");
let f = 1;
for (let i = 1; i <= n; i++) f *= i;
console.log(f);
