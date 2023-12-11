function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  let impar = num % 2 !== 0;
  if (impar) {
    return true;
  } else {
    return false;
  };
}

module.exports = esImpar;