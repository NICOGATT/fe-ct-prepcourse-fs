function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let vocal = letra.toLowerCase();
  let correcto = vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u";
  if (correcto) {
    return "Es vocal"; 
  } else {
    return "Dato incorrecto"
  }
}

module.exports = esVocal;
