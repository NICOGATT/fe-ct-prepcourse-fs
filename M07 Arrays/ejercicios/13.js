function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaNotas = 0; 
  for (let i = 0; i < resultadosTest.length; i++) {
    sumaNotas += resultadosTest[i];
  }
  let promedioDeNotas = sumaNotas / resultadosTest.length;
  return promedioDeNotas; 
}

module.exports = promedioResultadosTest;
