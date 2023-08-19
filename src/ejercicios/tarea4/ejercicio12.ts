import listaJson from "../../files/listaPosiblesCapicua.json";

const poblarArrays = (
  listaJson: number[],
  arrayCapicuas: number[],
  arrayNoCapicuas: number[]
): void => {
  for (let i = 0; i < listaJson.length; i++) {
    let aux = listaJson[i];
    let inverso = 0;
    while (aux != 0) {
      const residuo = aux % 10;
      inverso = inverso * 10 + residuo;
      aux = Math.trunc(aux / 10);
    }
    if (inverso === listaJson[i]) {
      arrayCapicuas.push(listaJson[i]);
    } else {
      arrayNoCapicuas.push(listaJson[i]);
    }
  }
  console.log("Array capicuas " + arrayCapicuas);
  console.log("Array No capicuas " + arrayNoCapicuas);
};

const arrayCapicuas = [];
const arrayNoCapicuas = [];
poblarArrays(listaJson, arrayCapicuas, arrayNoCapicuas);
