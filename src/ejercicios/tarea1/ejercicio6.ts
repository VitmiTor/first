import { generarDecimalAleatorio } from "../../utilities/randomUtilities";

const imc = (peso: number, altura: number) => {
  return peso / Math.pow(altura, 2);
};

const imprimirMensaje = (peso: number, altura: number, IMC: number): void => {
  console.log(
    `El peso de ${peso.toFixed(2)} con la altura de 
    ${altura.toFixed(2)} tiene el imc de ${IMC.toFixed(2)}`
  );
};

const minPeso = 45;
const maxPeso = 100;

const minAltura = 1;
const maxAltura = 2;

const peso = generarDecimalAleatorio(minPeso, maxPeso);
const altura = generarDecimalAleatorio(minAltura, maxAltura);
const imcCalculado = imc(peso, altura);
imprimirMensaje(peso, altura, imcCalculado);
