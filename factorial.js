// Se agrega validación básica: que sea número entero positivo

let n = parseInt(prompt("Número:"));
if (isNaN(n) || n < 0) {
  console.log("Número inválido");
} else {
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  console.log(f);
}
