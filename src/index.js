// import validator from './validator.js';

// console.log(validator);

// Función para que al dar click te permita girar a la parte reversa
const Tarjeta = document.querySelector('#Tarjeta');

Tarjeta.addEventListener('click', () => {
    Tarjeta.classList.toggle('active');
});