// import validator from './validator.js';

// console.log(validator);




// Obtenga el elemento con id = "defaultOpen" y haga clic en él
document.getElementById("defaultOpen").click();


const Tarjeta = document.querySelector('#Tarjeta'),
  abrirFormulario = document.querySelector('#AbrirFormulario'),
  formulario = document.querySelector('#Formulario');

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
