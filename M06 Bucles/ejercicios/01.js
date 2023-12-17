function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  let parametro1Negativo = a < 0;
  let parametro2Negativo = b < 0;
  let iguales = a === b;
  let igualesYNegativos = parametro1Negativo && parametro2Negativo && iguales    
  if (igualesYNegativos) {
      return true;
  } else {
      return false;
  }
}

module.exports = esIgualYNegativo;
