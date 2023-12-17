function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  let positivo = Number.isInteger(num) > 0;
  let negativo = Number.isInteger(num) < 0; 
  let igualA0 = num === 0;
  let positivoNegativoOCero = positivo || igualA0 || negativo;
  if (positivoNegativoOCero) {
      return true;
  } else {
      return false; 
  }
}

module.exports = esEntero;
