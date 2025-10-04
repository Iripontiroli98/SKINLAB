import './style.css'

  document.addEventListener('DOMContentLoaded', () => {
  const hamburguesa = document.querySelector('.hamburguesa');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.hero');

  hamburguesa.addEventListener('click', () => {
    navbar.classList.toggle('mostrar');
    header.classList.toggle('header-activo'); // 👈 activa el fondo del navbar-top
  });
});


const cards = document.querySelectorAll('.card');


cards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.classList.add('card-hovered');
  });


  card.addEventListener('mouseleave', () => {

    card.classList.remove('card-hovered');
  });
});