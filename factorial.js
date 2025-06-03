// Se crea una función para definir el proceso de cálculo.
// Mejora la organización del código y su reutilización.

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

let n = parseInt(prompt("Número:"));
if (isNaN(n) || n < 0) {
  console.log("Número inválido");
} else {
  console.log(factorial(n));
}
