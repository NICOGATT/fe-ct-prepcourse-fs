function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  let numeroPar = a % 2 === 0;
  let divisiblePor3 = a % 3 === 0;
  if (numeroPar && divisiblePor3) {
    return true;
  } else {
    return false;
  }
}

module.exports = esParYDivisiblePorTres;