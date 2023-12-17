function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  let igualA10 = num === 10;
  let igualA5 = num === 5
  if (igualA10 || igualA5){
    return true;
  } else {
    return false;
  }
}

module.exports = esDiezOCinco;
