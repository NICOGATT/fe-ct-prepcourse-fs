function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  const arrayOrdenado = array.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return String(a).localeCompare(String(b))
    }
  })
  return arrayOrdenado; 
}

module.exports = ordenarArray;
