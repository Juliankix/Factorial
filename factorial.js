// Se mide el tiempo de ejecución y se cuenta la cantidad de pasos realizados.
// Esto permite hacer análisis cuantitativos del proceso.

function factorial(n) {
  let f = 1, pasos = 0;
  for (let i = 1; i <= n; i++) {
    f *= i;
    pasos++;
  }
  return { f, pasos };
}

let n = parseInt(prompt("Número:"));
if (isNaN(n) || n < 0) {
  console.log("Número inválido");
} else {
  let inicio = performance.now(); // Marca el tiempo inicial
  let res = factorial(n);
  let fin = performance.now();    // Marca el tiempo final

  console.log("Resultado:", res.f);
  console.log("Pasos:", res.pasos);
  console.log("Tiempo:", (fin - inicio).toFixed(2), "ms");
}
