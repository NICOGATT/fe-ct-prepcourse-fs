function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      return array[i]; 
    }
  }
}

module.exports = devolverUltimoElemento;
