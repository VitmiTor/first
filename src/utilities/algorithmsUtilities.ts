export const esPrimo = (number: number): boolean => {
  let i = 2;
  while (i < number) {
    if (i % number != 0) {
      i++;
    } else {
      return false;
    }
  }
  return true;
};

export const esCapicua = (number: number): boolean => {
  let inversa = 0;
  let aux = number;

  while (aux != 0) {
    const residuo = aux % 10;
    inversa *= 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  return number === inversa;
};
