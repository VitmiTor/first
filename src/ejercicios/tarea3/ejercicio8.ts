import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { arrayAleatorio } from "../../utilities/arrayUtiliites";
import { esPrimo } from "../../utilities/algorithmsUtilities";

const poblarArrays = (
  listaNumbers: number[],
  listaPrimos: number[],
  listaCompuestos: number[]
): void => {
  listaNumbers.forEach((value) => {
    if (esPrimo(value)) {
      listaPrimos.push(value);
    } else {
      listaCompuestos.push(value);
    }
  });
};

const imprimirMensaje = (
  listaPrimos: number[],
  listaCompuestos: number[]
): void => {
  console.log(listaPrimos);
  console.log(listaCompuestos);
  console.log(` el array original tiene esta cantidad de numeros primos ${listaPrimos.length}
                el array original tiene esta cantidad de numeros compuestos ${listaCompuestos.length}`);
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 10, 100);
const arrayPrimos = [];
const arrayCompuestos = [];

poblarArrays(arrayNuevo, arrayPrimos, arrayCompuestos);
console.log(arrayNuevo);
imprimirMensaje(arrayPrimos, arrayCompuestos);
