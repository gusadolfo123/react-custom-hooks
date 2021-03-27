export const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {
      console.log(`Iteracion ${index}`);
    }
    return `${iteraciones} iteraciones realizadas`;
  }