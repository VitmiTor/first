import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { arrayAleatorio } from "../../utilities/arrayUtiliites";

const calcularMediaArmonica = (arrayNumber: number[]): number => {
  let resultado = 0;
  arrayNumber.forEach((element) => {
    resultado += Math.pow(element, -1);
  });
  return arrayNumber.length / resultado;
};

const imprimirMensaje = (cantidadN: number, resultado: number): void => {
  console.log(
    `La cantidad de numeros ${cantidadN} tiene como media armonica ${resultado}`
  );
};

const cantidadN = generarEnteroAleatorio(1, 10);
const arrayNumber = arrayAleatorio(cantidadN, 100, 999);
const resultado = calcularMediaArmonica(arrayNumber);

imprimirMensaje(cantidadN, resultado);
