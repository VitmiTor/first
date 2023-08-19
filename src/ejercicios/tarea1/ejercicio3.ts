
import {
  generarDecimalAleatorio,
  generarEnteroAleatorio,
} from "../../utilities/randomUtilities";

const calcularPerimetro = (lado) => {
  return 3 * lado;
};

const calcularArea = (lado) => {
  return (Math.sqrt(3) / 4) * Math.pow(lado, 2);
};

const imprimirMensaje = (lado, perimetro, area) => {
  console.log(`el area del triangulo con lado ${lado} es ${area.toFixed(4)}`);
  console.log(`el perimetro del triangulo con lado ${lado} es ${perimetro}`);
};

const min = 1;
const max = 100;

const lado = generarEnteroAleatorio(min, max);

const area = calcularArea(lado);
const perimetro = calcularPerimetro(lado);

imprimirMensaje(lado, perimetro, area);
