import personasJson from "../../files/personas.json";

const estaAprobado = (nota: number): boolean => {
  return nota >= 11;
};

const imprimirMensaje = (): void => {
  personasJson.forEach((element) => {
    console.log(
      element.nombre +
        ` y la nota es ` +
        element.nota +
        ` ` +
        estaAprobado(element.nota)
    );
  });
};

imprimirMensaje();
