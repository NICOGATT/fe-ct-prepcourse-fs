function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let resultados = []; 
  for (let i = 0; i <= 10; i++) {
    let resultadoMultiplicacion = i * 6; 
    resultados.push(resultadoMultiplicacion)
  }
  return resultados; 
}

module.exports = tablaDelSeis;
