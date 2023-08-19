import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { arrayAleatorio } from "../../utilities/arrayUtiliites";
import { esCapicua } from "../../utilities/algorithmsUtilities";

const poblarArrays = (
  arrayNuevo: number[],
  arrayCapicua: number[],
  arrayNotCapicua: number[]
): void => {
  arrayNuevo.forEach((element) => {
    if (esCapicua(element)) {
      arrayCapicua.push(element);
    } else {
      arrayNotCapicua.push(element);
    }
  });
};

const imprimirMensaje = (
  arrayCapicuas: number[],
  arrayNotCapicuas: number[]
): void => {
  console.log(arrayCapicuas);
  console.log(arrayNotCapicuas);
  console.log(
    `el array original tiene de numeros capicuas ${arrayCapicuas.length}`
  );
  console.log(`el array original tiene no capicuas ${arrayNotCapicuas}`);
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 100, 10000);
const arrayCapicua = [];
const arrayNotCapicua = [];
poblarArrays(arrayNuevo, arrayCapicua, arrayNotCapicua);
imprimirMensaje(arrayCapicua, arrayNotCapicua);
