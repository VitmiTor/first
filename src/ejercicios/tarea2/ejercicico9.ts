import { generarEnteroAleatorio } from "../../utilities/randomUtilities";

const calcularFactorial = (numero: number): number => {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
};

const imprimirMensaje = (numero: number, resultado: number): void => {
  console.log(`el factorial del numero ${numero} es ${resultado}`);
};

const numero = generarEnteroAleatorio(1, 10);
const resultado = calcularFactorial(numero);

imprimirMensaje(numero, resultado);
