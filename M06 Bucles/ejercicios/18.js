function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    [a, b] = [b, a];
  }
  let producto = 1;
  for (let i = a; i <= b; i++) {
      producto *= i;
  }
  return Object.is(producto, -0) ? 0 : producto; 
}

module.exports = productoEntreNúmeros;