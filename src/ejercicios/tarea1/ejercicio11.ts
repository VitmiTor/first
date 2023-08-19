

import { generarEnteroAleatorio } from "../../utilities/randomUtilities";

const area = (radio: number): number => {
  return Math.PI * Math.pow(radio, 2);
};

const perimetro = (radio: number): number => {
  return Math.PI * radio * 2;
};

const imprimirMensaje = (
  area: number,
  perimetro: number,
  radio: number
): void => {
  console.log(
    `el radio de ${radio} tiene un perimetro de ${perimetro.toFixed(2)}
    el area del radio de ${radio} es de ${area.toFixed(2)}`
  );
};

const min = 1;
const max = 100;

const radio = generarEnteroAleatorio(min, max);
const areaCirculo = area(radio);
const perimetroCalculado = perimetro(radio);
imprimirMensaje(areaCirculo, perimetroCalculado, radio);
