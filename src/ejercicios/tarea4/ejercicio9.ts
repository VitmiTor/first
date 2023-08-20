import arrayNumbers from "../../files/numbersString.json";

const rellenarArrays = (arrayStrings, arrayNumero, arrayPeso) => {
  for (let i = 0; i < arrayStrings.length; i++) {
    const numero = arrayStrings[i].split(";");
    arrayNumero.push(Number(numero[0]));
    arrayPeso.push(Number(numero[1]));
  }
};

const PromedioPonderado = (
  arrayNumeros: number[],
  arrayPeso: number[]
): number => {
  let sumatoria = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    sumatoria += arrayNumeros[i] * arrayPeso[i];
  }
  return sumatoria / arrayNumeros.length;
};

const imprimirMensaje = (resultado: number): void => {
  console.log(`El promedio ponderado es ${resultado.toFixed(2)}`);
};

const arrayX: number[] = [];
const arrayPeso: number[] = [];
rellenarArrays(arrayNumbers, arrayX, arrayPeso);
const resultado = PromedioPonderado(arrayX, arrayPeso);
imprimirMensaje(resultado);
