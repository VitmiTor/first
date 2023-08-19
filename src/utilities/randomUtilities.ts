export const generarEnteroAleatorio = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generarDecimalAleatorio = (min: number, max: number): number => {
  return Math.random() * (max - min + 1) + min;
};
