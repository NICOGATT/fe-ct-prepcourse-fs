function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do {
    if (mes < 1 || mes > 12) {
      return 0;
    }
  } while (mes < 1 || mes > 12); 
  if (mes === 2){
    return 28;
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
    return 30;
  } else {
    return 31; 
  };
}

module.exports = diasEnMes;
