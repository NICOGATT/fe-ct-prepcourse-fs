function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let A = 0;
  for (let i = 1; i <= n; i++) {
    A += i;
  };
  return A;
}

module.exports = sumarHastaN;
