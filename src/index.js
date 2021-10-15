// import validator from './validator.js';

// console.log(validator);




// Obtenga el elemento con id = "defaultOpen" y haga clic en él
document.getElementById("defaultOpen").click();


const Tarjeta = document.querySelector('#Tarjeta'),
  abrirFormulario = document.querySelector('#AbrirFormulario'),
  formulario = document.querySelector('#Formulario'),
  numeroTarjeta = document.querySelector('#numero'),
  nombreTarjeta = document.querySelector('#nombre'),
  TipoMarca = document.querySelector('#Tipo-Marca');

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
  formulario.SelecionarMes.appendChild(opcion);
}

// Lista de Selección Año
const AnioActual = new Date().getFullYear();
for(let i = AnioActual; i <= AnioActual + 11; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.SelecionarAnio.appendChild(opcion);
}

//Input del Numero de Tarjeta

formulario.InputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario. InputNumero.value = valorInput
  .replace(/\s/g, '')
  .replace(/\D/g, '')
  .replace(/([0-9]{4})/g, '$1 ')
  .trim();

  numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		TipoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/Visa.png';
		TipoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		TipoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/Tarjeta/MasterCard.png';
		TipoMarca.appendChild(imagen);
	}
});

