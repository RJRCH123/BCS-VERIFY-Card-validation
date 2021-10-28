/* eslint-disable no-console */
const validator = {
  isValid: (NumeroDeTarjeta) => {
  // esperado string de números[1,2,3,4,....]
    let arrayNumeroDeTarjeta = Array.from(NumeroDeTarjeta).map( i => Number(i) );

  //algoritmo de luhn
    // array con elementos en orden invertido
    arrayNumeroDeTarjeta = arrayNumeroDeTarjeta.reverse(); 

    let sum = 0;

    for(let i = 0; i < arrayNumeroDeTarjeta.length; i++){
      
      if(i%2 === 1){
        
        //posición par
        if((arrayNumeroDeTarjeta[i] * 2) >= 10){
          arrayNumeroDeTarjeta[i] = arrayNumeroDeTarjeta[i] * 2-9;
        }else{
          arrayNumeroDeTarjeta[i] = arrayNumeroDeTarjeta[i] * 2;
        }
      } else{  
        //posición impar
        arrayNumeroDeTarjeta[i];
      }
      //Suma de dígitos hallados
      sum = sum + arrayNumeroDeTarjeta[i];
    }

    //Si la suma es multiplo de 10 es True
    return sum % 10 === 0;
  },

  maskify: (NumeroDeTarjeta) => {

    let mask = "";

    for (let i = 0; i < NumeroDeTarjeta.length; i++) {

      if (i <= NumeroDeTarjeta.length -5) {
        mask += "•";
      }else{
        mask += NumeroDeTarjeta[i];
      }
    }
    console.log(mask);
    return mask;
  }
};

export default validator;

