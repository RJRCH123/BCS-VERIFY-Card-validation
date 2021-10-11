// import validator from './validator.js';

// console.log(validator);

// Función para girar al dar click 
const   Tarjeta = document.querySelector('#Tarjeta'),
        abrirFormulario = document.querySelector('#AbrirFormulario'),
        formulario = document.querySelector('#Formulario');

Tarjeta.addEventListener('click', () => {
    Tarjeta.classList.toggle('active');
});

abrirFormulario.addEventListener('click', () => {
    abrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});