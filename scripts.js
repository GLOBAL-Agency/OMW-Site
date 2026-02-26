// Menú móvil interactivo
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animación simple del burger
        burger.classList.toggle('toggle');
    });
}

// Efecto de cambio de color en el navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.padding = '10px 10%';
    } else {
        navbar.style.background = 'rgba(10, 10, 11, 0.95)';
        navbar.style.padding = '20px 10%';
    }
});

navSlide();
