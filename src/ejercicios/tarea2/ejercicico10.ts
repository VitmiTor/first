import {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} from "../../utilities/randomUtilities";

const calcularInversa = (numero: number) => {
  let residuo = 0;
  let inverso = 0;
  let aux = numero;

  while (aux != 0) {
    residuo = aux % 10;
    inverso = inverso * 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  return inverso;
};

const verificarCapicua = (numero: number, inversa: number): boolean => {
  if (numero === inversa) {
    return true;
  } else {
    return false;
  }
};

const imprimirMensaje = (
  numero: number,
  inverso: number,
  capicua: boolean
): void => {
  console.log(
    `el numero ${numero} y su inverso es ${inverso} por lo tanto es capicua? ${capicua}`
  );
};

const number = 12321;
const inversa = calcularInversa(number);
const pregunta = verificarCapicua(number, inversa);
imprimirMensaje(number, inversa, pregunta);
