// Simple script para resaltar el menú al hacer scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Validación básica de carga
console.log("Portfolio de Sebastian Acevedo cargado correctamente.");