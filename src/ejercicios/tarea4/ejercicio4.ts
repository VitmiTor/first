import numbersJson from "../../files/numbersString.json";

const rellenarArrays = (
  arrayJson: string[],
  array1: number[],
  array2: number[]
): void => {
  for (let i = 0; i < arrayJson.length; i++) {
    const arrayTemp = arrayJson[i].split(";");
    array1.push(Number(arrayTemp[0]));
    array2.push(Number(arrayTemp[1]));
  }
};

const sumArrays = (array1: number[], array2: number[]): number[] => {
  const arrayresuelto = [];
  for (let i = 0; i < array1.length; i++) {
    arrayresuelto.push(array1[i] + array2[i]);
  }
  return arrayresuelto;
};

const restaArrays = (array1: number[], array2: number[]): number[] => {
  const resultado = [];
  for (let i = 0; i < array1.length; i++) {
    resultado.push(array1[i] - array2[i]);
  }
  return resultado;
};

const multiplyArrays = (array1: number[], array2: number[]): number[] => {
  const multiplication = [];
  for (let i = 0; i < array1.length; i++) {
    multiplication.push(array1[i] * array2[i]);
  }
  return multiplication;
};

const divisionArrays = (array1: number[], array2: number[]): number[] => {
  const division = [];
  for (let i = 0; i < array1.length; i++) {
    division.push(array1[i] / array2[i]);
  }
  return division;
};

const array1 = [];
const array2 = [];
rellenarArrays(numbersJson, array1, array2);

console.log(restaArrays(array1, array2));
console.log(sumArrays(array1, array2));
console.log(multiplyArrays(array1, array2));
console.log(divisionArrays(array1, array2));
