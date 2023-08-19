const hola = "hola";

const aloha = "aloha";

const computadora = "computadora";

const concat = (a: string, b: string, c: string) => {
  return a + " " + b + " " + c + " " + "fin";
};

const imprimirMensaje = (mensaje) => {
  console.log(mensaje);
};

const message = concat(hola, aloha, computadora);
imprimirMensaje(message);
