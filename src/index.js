
// Obtenga el elemento con id = "defaultOpen" y haga clic en él
document.getElementById("defaultOpen").click();

//Declaramos variables para la Tarjeta y Formulario
const Tarjeta = document.querySelector('#Tarjeta'),
  abrirFormulario = document.querySelector('#AbrirFormulario'),
  formulario = document.querySelector('#Formulario'),
  numeroTarjeta = document.querySelector('#numero'),
  nombreTarjeta = document.querySelector('#nombre'),
  TipoMarca = document.querySelector('#Tipo-Marca'),
  Firma = document.querySelector('#Tarjeta .firma p'),
  ExpiraMes = document.querySelector('#Tarjeta .mes'),
  ExpiraAnio = document.querySelector('#Tarjeta .anio'),
  CCV = document.querySelector('#Tarjeta .ccv'),
  formularioBloquear = document.querySelector('#FormularioBloquear');


// Voltear la Tarjeta para mostrarse adelante de forma automática
const mostrarAdelante = () => {
  if(Tarjeta.classList.contains('active')){
    Tarjeta.classList.remove('active');
  }
}
// Rotación de la Tarjeta
Tarjeta.addEventListener('click', () => {
  Tarjeta.classList.toggle('active');
});

// Botón abrir Formulario
abrirFormulario.addEventListener('click', () => {
  abrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});

// Lista de Selección Mes 
for(let i = 1; i <=12; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.SeleccionarMes.appendChild(opcion);
}

// Lista de Selección Año
const AnioActual = new Date().getFullYear();
for(let i = AnioActual; i <= AnioActual + 11; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.SeleccionarAnio.appendChild(opcion);
}

//Input del Numero de Tarjeta para la página Validar

formulario.InputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario. InputNumero.value = valorInput
  .replace(/\s/g, '') // Eliminamos espacios en blanco
  .replace(/\D/g, '') // Eliminar las letras
  .replace(/([0-9]{4})/g, '$1 ') // Ponemos espacio cada cuatro numeros
  .trim(); // Elimina el ultimo espaciado

  numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		TipoMarca.innerHTML = '';
	}

  // Reconocer si es Visa, MasterCard, AmericanExpress
	if(valorInput[0] == 4){
		TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/Visa.png';
		TipoMarca.appendChild(imagen);
    
  } if(valorInput[0] == 3 && valorInput[1] == 4 || valorInput[0] == 3 && valorInput[1] == 7 ){
    TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/AmericanEx.png';
		TipoMarca.appendChild(imagen);
  
  } if(valorInput[0] == 3 && valorInput[1] == 6){
    TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/DinersClub.png';
		TipoMarca.appendChild(imagen);
  
  } else if(valorInput[0] == 5){
		TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/MasterCard.png';
		TipoMarca.appendChild(imagen);
	}
  mostrarAdelante();
});

// Input nombre de Tarjeta
formulario.InputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.InputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	Firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Mario Diaz';
	}

  if(valorInput == ''){
		Firma.textContent = 'Mario Diaz';
	}

	mostrarAdelante();
});

// Select Mes 
formulario.SeleccionarMes.addEventListener('change', (e) => {
  ExpiraMes.textContent = e.target.value;
	mostrarAdelante();
});

// Select Año
formulario.SeleccionarAnio.addEventListener('change', (e) => {
  ExpiraAnio.textContent = e.target.value.slice(2);
	mostrarAdelante();
});

// * CCV
formulario.InputCCV.addEventListener('keyup', () => {
	if(!Tarjeta.classList.contains('active')){
		Tarjeta.classList.toggle('active');
	}

  formulario.InputCCV.value = formulario.InputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	CCV.textContent = formulario.InputCCV.value;
});

// VALIDAR TARJETA 

// import validator from './validator.js';

// console.log(validator);

// function ObtenerNumero() {
//   const InputNumero = document.getElementById('InputNumero').value;
//   const totalValidator = validator.isValid(InputNumero);

//   // Botón de nueva validación 
//   Verificar.style.display = 'none';
//   NuevaVerificacion.style.display = 'block';

//   // Alert que indica la validez de la tarjeta

//   for (let i = 0; i < alertContainer.length; i++) {
//     if (totalValidator === true) {
//       alertContainer[i].style.display = 'block';
//       noValid[i].style.display = 'none';
//       valid[i].style.display = 'block';
//     } else {
//       alertContainer[i].style.display = 'block';
//       noValid[i].style.display = 'block';
//       valid[i].style.display = 'none';  
//     }
//   },
// }
// document.getElementById('Verificar').addEventListener('click',ObtenerNumero);


//Input del Numero de Tarjeta para la página Bloquear

formularioBloquear.InputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formularioBloquear. InputNumero.value = valorInput
  .replace(/\s/g, '') // Eliminamos espacios en blanco
  .replace(/\D/g, '') // Eliminar las letras
  .replace(/([0-9]{4})/g, '$1 ') // Ponemos espacio cada cuatro numeros
  .trim(); // Elimina el ultimo espaciado
});

// Input nombre de Tarjeta
formularioBloquear.InputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formularioBloquear.InputNombre.value = valorInput.replace(/[0-9]/g, '');
});