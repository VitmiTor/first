import { generarEnteroAleatorio } from "./randomUtilities";

export const arrayAleatorio = (
  n: number,
  min: number,
  max: number
): number[] => {
  const array: number[] = [];
  for (let i = 0; i < n; i++) {
    const numero = generarEnteroAleatorio(min, max);
    array.push(numero);
  }
  return array;
};
