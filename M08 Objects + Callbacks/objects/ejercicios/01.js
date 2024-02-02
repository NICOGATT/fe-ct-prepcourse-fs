const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  const propiedades = propiedad.split(".");
  for (let prop of propiedades) {
    if (objeto && objeto.hasOwnProperty(prop)) {
      objeto = objeto[prop];
    } else{
      return undefined;
    }
  }
  return objeto; 
};

module.exports = obtenerValorPropiedad;
