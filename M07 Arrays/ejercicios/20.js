function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0) {
      nuevoArray.push(numero)
    } else {
      continue;
    }
  } 
  return nuevoArray.length; 
}

module.exports = contarParesConContinue;
