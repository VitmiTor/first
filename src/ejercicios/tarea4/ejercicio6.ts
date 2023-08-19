import listNumbersJson from "../../files/listaNumbers.json";

const calcularPromedioSimple = (arrayEnteros: number[]): number => {
  let sumatoria = 0;
  for (let i = 0; i < arrayEnteros.length; i++) {
    sumatoria += arrayEnteros[i];
  }
  return sumatoria / arrayEnteros.length;
};

const imprimirMensaje = (resultado: number): void => {
  console.log(`Promedio simple es: ${resultado.toFixed(2)}`);
};

const resultado = calcularPromedioSimple(listNumbersJson);
imprimirMensaje(resultado);
