// const validator = {
//   isValid: function(InputNumero){
//     const ReversaInputNumero = InputNumero.toString().split('').reverse().map(Number);
//     console.log(ReversaInputNumero);

//     // Alert para que no dejen el input vacío
//     if(ReversaInputNumero.length === 0){
//       alert('Para ayudarte debes llenar este campo.');
//       return 0;
//     }
//     // Operación a las posiciones pares 
//     let ArregloPosicionPar = ReversaInputNumero.map((num, i) => {
//       if (i % 2 === 1){
//         const Doble = (num * 2);
//         const x = Doble.toString().split('').reduce(function(a,b){
//           if ( Doble >= 10) {
//             return a + parseInt(b);
//           } else {
//             return Doble;
//           }
//         }, 0);
//         return x;
//       } else {
//         return num;
//       }
//     });
//     //console.log(ArregloPosicionPar);
    
//     // Sumar todos los números del arreglo
//     ArregloPosicionPar = ArregloPosicionPar.reduce((previus, next) => {
//       const  suma = previus + next;
//       return suma;
//     }, 0);
//     //console.log(ArregloPosicionPar); 

//     if(ArregloPosicionPar % 10 === 0){
//       return true;
//     } else {
//       return false;
//     }
//   },

// maskify: function(InputNumero){
//   let value = InputNumero.toString();
//   //Números que estarán ocultos
//   let ReemplazablesNumeros = value.slice (0, -4);
//   //Números que serán visibles
//   let NoReemplazablesNumeros = value.slice(-4);
//   //Nuevo arreglo para ocultar números
//   let ArregloOcultar = ReemplazablesNumeros.split('').map(function() {
//     return '#';
//   });
//   ArregloOcultar = ArregloOcultar.join('');
//   return ArregloOcultar.concat(NoReemplazablesNumeros);
// }
// }

// export default validator;

