// Efecto del header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header'); // Obtiene el elemento header por su ID
  if (window.scrollY > 50) { // Si el scroll vertical es mayor a 50px
    header.classList.add('scrolled'); // Añade la clase 'scrolled' al header
  } else {
    header.classList.remove('scrolled'); // Remueve la clase 'scrolled' del header
  }
});

// Efecto fade-in en las secciones
const faders = document.querySelectorAll('.fade-in'); // Selecciona todos los elementos con la clase 'fade-in'

// Crea un observador de intersección para detectar cuando los elementos son visibles en la pantalla
const aparecer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => { // Itera sobre cada entrada observada
    if (entry.isIntersecting) { // Si el elemento está visible en la pantalla
      entry.target.classList.add('visible'); // Añade la clase 'visible' al elemento
      observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
    }
  });
}, {
  threshold: 0.2 // Umbral de visibilidad del 20% del elemento
});

// Comienza a observar cada elemento con la clase 'fade-in'
faders.forEach(fader => {
  aparecer.observe(fader);
});

// Lightbox para ampliar imágenes
// Lightbox con navegación
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
  lightbox.style.display = 'flex';
}

// Abrir imagen
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    showImage(index);
  });
});

// Cerrar
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Cerrar al hacer clic fuera
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Flechas
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    } else if (e.key === 'Escape') {
      lightbox.style.display = 'none';
    }
  }
});


