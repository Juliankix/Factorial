// Se aplica optimización usando memoización.
// Guarda resultados ya calculados para no repetir operaciones.

const memo = {};

function factorial(n) {
  if (n <= 1) return 1;
  if (memo[n]) return memo[n];          // Usa el valor guardado si ya se calculó
  return memo[n] = n * factorial(n - 1); // Calcula y guarda el resultado
}

let n = parseInt(prompt("Número:"));
if (isNaN(n) || n < 0) {
  console.log("Número inválido");
} else {
  console.log("Resultado:", factorial(n));
}
