function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  let menorQue50 = num < 50;
  let mayorQue20 = num > 20;
  if (menorQue50 && mayorQue20) {
    return true;
  } else {
    return false;
  }
}

module.exports = estaEnRango;
