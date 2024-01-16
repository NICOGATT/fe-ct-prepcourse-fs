function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosUnicos = new Set(); 
  for (let numero of numeros) {
    if (elementosUnicos.has(numero)) {
      return numero;
    }
    elementosUnicos.add(numero)
  } 
}

module.exports = encontrarElementoRepetido;