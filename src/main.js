import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.hero'); // 👈 cambio aquí

    hamburguesa.addEventListener('click', () => {
        navbar.classList.toggle('mostrar');
        header.classList.toggle('header-activo'); // le vas a dar estilos a esto en CSS
    });
});