import {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} from "../../utilities/randomUtilities";

const calcularInversa = (numero: number) => {
  let inverso = 0;
  let aux = numero;

  while (aux != 0) {
    const residuo = aux % 10;
    inverso = inverso * 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  return inverso;
};

const verificarCapicua = (numero: number, inversa: number): boolean => {
  return numero === inversa;
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
