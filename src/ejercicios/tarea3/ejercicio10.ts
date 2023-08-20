import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { arrayAleatorio } from "../../utilities/arrayUtiliites";

const mayorNumero = (
  arrayNumbers: number[],
  mayor: number[],
  menor: number[]
): void => {
  arrayNumbers.forEach((element) => {
    if (element >= 50) {
      mayor.push(element);
    } else {
      menor.push(element);
    }
  });
};

const imprimirMensaje = (arrayMayor: number[], arrayMenor: number[]): void => {
  console.log(arrayMayor);
  console.log(arrayMenor);
  console.log(
    `el array original tiene ${arrayMayor.length} numeros mayores o iguales a 50`
  );
  console.log(
    `el array original tiene ${arrayMenor.length} numeros menores a 50`
  );
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 1, 100);
const arrayMayor: number[] = [];
const arrayMenor: number[] = [];
mayorNumero(arrayNuevo, arrayMayor, arrayMenor);
imprimirMensaje(arrayMayor, arrayMenor);
