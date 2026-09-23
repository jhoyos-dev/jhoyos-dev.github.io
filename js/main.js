// Menú desplegable para celulares
const boton = document.querySelector('.barra__boton');
const menu = document.getElementById('menu');

boton.addEventListener('click', () => {
  const abierto = boton.getAttribute('aria-expanded') === 'true';
  boton.setAttribute('aria-expanded', String(!abierto));
  boton.setAttribute('aria-label', abierto ? 'Abrir menú' : 'Cerrar menú');
  menu.classList.toggle('abierto');
});

// Cierra el menú al elegir una sección
menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
  });
});
