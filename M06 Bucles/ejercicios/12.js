function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let divisiblePor3 = num % 3 === 0;
  let divisiblePor5 = num % 5 === 0;
  let divisiblePorAmbos = divisiblePor3 && divisiblePor5;
  if (divisiblePorAmbos) {
    return "fizzbuzz";
  } else if (divisiblePor3){
    return "fizz";
  } else if (divisiblePor5){
    return "buzz";
  } else {
    return false; 
  }
}

module.exports = fizzBuzz;
