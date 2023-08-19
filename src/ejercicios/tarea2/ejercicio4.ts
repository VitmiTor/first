
import { generarEnteroAleatorio } from "../../utilities/randomUtilities";

const calcularMediaArmonica = (n: number): number => {
  let sumaInversas = 0;

  for (let i = 0; i < n; i++) {
    const numeroX = generarEnteroAleatorio(10, 20);
    sumaInversas += Math.pow(numeroX, -1);
  }
  return n / sumaInversas;
};

const imprimirMensaje = (cantidadN: number, resultado: number): void => {
  console.log(`${resultado.toFixed(5)} es el resultado de la media armonica
                ${cantidadN} es el valor de N`);
};

const cantidadN = generarEnteroAleatorio(1, 10);

const mediaArmonica = calcularMediaArmonica(cantidadN);

imprimirMensaje(cantidadN, mediaArmonica);
