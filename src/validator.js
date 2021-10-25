/* eslint-disable no-console */
const validator = {
  isvalid: (NumeroDeTarjeta) => {
    
    let ObtNumTarjeta = NumeroDeTarjeta; // Obtenemos el número de la tarjeta
    // eslint-disable-next-line no-console
    console.log(ObtNumTarjeta);

    let stringNumeroDeTarjeta = ObtNumTarjeta.split(""); // Obtnemos el número en una cadena y en reversa
    console.log(stringNumeroDeTarjeta);

    // eslint-disable-next-line no-unused-vars
    let reverseNumeroDeTarjeta = stringNumeroDeTarjeta.reverse(); // Obtenemos el número en reversa
    console.log(reverseNumeroDeTarjeta);

    let parNumero = [];
    let doubleNumero = [];
    let finalNumero = [];

    let sumNumero = 0;

    if ((ObtNumTarjeta.length === 18) || (ObtNumTarjeta.length === 16) || (ObtNumTarjeta.length === 14)) {
      for (let i = stringNumeroDeTarjeta.length-1; i >= 0; i--) {
        if (i % 2 !== 0) {
          parNumero.push(stringNumeroDeTarjeta[i]);
        }else {
          doubleNumero.push((stringNumeroDeTarjeta[i] *2).toString());
        }
      }
    } else if ((ObtNumTarjeta.length <= 19) || (ObtNumTarjeta.length === 17) (ObtNumTarjeta.length === 15) || (ObtNumTarjeta.length === 13)) {
      for (let i = stringNumeroDeTarjeta.length-1; i >= 0; i--) {
        if (i % 2 === 0) {
          parNumero.push(stringNumeroDeTarjeta[i]);
        }else {
          doubleNumero.push((stringNumeroDeTarjeta[i]*2).toString());
        }
      }
    }

    doubleNumero = doubleNumero.join("").split("");
    finalNumero = doubleNumero.concat(parNumero);

    for (let index = 0; index < finalNumero.length; index++) {
      sumNumero += parseInt(finalNumero[index], 10);
    }

    console.log(sumNumero);

    if (sumNumero % 10 === 0) {
      return true;
    }else{
      return false;
    }

    // eslint-disable-next-line no-unreachable
    console.log(parNumero);
  },

  maskify: (NumeroDeTarjeta) => {

    let mask = "";

    for (let i = 0; i < NumeroDeTarjeta.length; i++) {

      if (i <= NumeroDeTarjeta.length -5) {
        mask += "#";
      }else{
        mask += NumeroDeTarjeta[i];
      }
    }
    console.log(mask);
    return mask;
  }
};

export default validator;

