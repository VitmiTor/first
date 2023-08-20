import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { arrayAleatorio } from "../../utilities/arrayUtiliites";

const promedioPonderado = (
  arrayNumbers: number[],
  arrayPesos: number[]
): number => {
  let sumatoria = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    sumatoria += arrayNumbers[i] * arrayPesos[i];
  }
  return sumatoria / arrayNumbers.length;
};

const imprimirMensaje = (
  arrayNumbers: number[],
  arrayPesos: number[],
  promedio: number
): void => {
  console.log(
    `el array de numeros es ${arrayNumbers} y el array de Pesos ${arrayPesos} y su promedio ponderado es ${promedio}`
  );
};

const cantidadN = generarEnteroAleatorio(1, 50);
const arrayNumbers = arrayAleatorio(cantidadN, 100, 1000);
const arrayPesos = arrayAleatorio(cantidadN, 1, 50);

const resultado = promedioPonderado(arrayNumbers, arrayPesos);
imprimirMensaje(arrayNumbers, arrayPesos, resultado);
