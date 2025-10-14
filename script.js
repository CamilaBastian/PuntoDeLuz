// Efecto del header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Efecto fade-in en las secciones
const faders = document.querySelectorAll('.fade-in');

const aparecer = new IntersectionObserver((entradas, observador) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target); // Deja de observar cuando ya apareció
    }
  });
}, {
  threshold: 0.2 // aparece cuando el 20% del elemento es visible
});

faders.forEach(fader => {
  aparecer.observe(fader);
});
