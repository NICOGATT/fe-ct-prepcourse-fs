function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  let par = num % 2 === 0
  if (par) {
    return true;
  } else {
    return false; 
  }; 
}

module.exports = esPar;
