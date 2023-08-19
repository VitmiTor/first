
import {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} from "../../utilities/randomUtilities";

const calcularDolares = (convertidor: string, ahorros: number) => {
  switch (convertidor) {
    case "s":
      return ahorros * 3.9;
    case "yu":
      return ahorros * 7.25;
    case "e":
      return ahorros * 0.99;
    case "ye":
      return ahorros * 145.66;
    case "r":
      return ahorros * 15637;
    default:
      console.log("No se encontro moneda");
      return -1;
  }
};

const imprimirMensaje = (ahorros: number, convertidor: string): void => {
  const resultado = calcularDolares(convertidor, ahorros);
  console.log(
    `El equivalente de ${ahorros.toFixed(2)} USD es ${resultado.toFixed(2)}`
  );
};

const min = 1;
const max = 3000;
const ahorros = generarDecimalAleatorio(min, max);
const moneda = "e";
imprimirMensaje(ahorros, moneda);
