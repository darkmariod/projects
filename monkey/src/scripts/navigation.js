// src/scripts/navigation.js
// Este script maneja la navegación entre secciones en la misma página (SPA).

// Comprueba si 'document' está definido (es decir, si estamos en el navegador)
if (typeof document !== 'undefined') {
  // Si estamos en el navegador, espera a que el DOM esté completamente cargado antes de ejecutar el script
  document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de navegación que tienen el atributo data-section
    // Busca dentro del header, en la navegación (nav), en la lista (ul), en el elemento de lista (li)
    // y en el enlace (a) que tenga el atributo data-section.
    const navLinks = document.querySelectorAll('.header nav ul li a[data-section]');

    // Selecciona todos los elementos de sección que están dentro del contenedor principal
    // Busca dentro del elemento con ID 'sections-container', todos los elementos con clase 'section'.
    const sections = document.querySelectorAll('#sections-container .section');

    // Función para mostrar una sección específica y ocultar todas las demás
    const showSection = (sectionId) => {
      sections.forEach(section => {
        // Oculta todas las secciones añadiendo la clase 'hidden'
        // La clase 'hidden' debe estar definida en tu CSS (display: none;)
        section.classList.add('hidden');
      });

      // Encuentra la sección objetivo por su ID (por ejemplo, 'servicios-section')
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        // Muestra la sección objetivo eliminando la clase 'hidden'
        targetSection.classList.remove('hidden');

        // Opcional: Desplazarse suavemente a la sección mostrada para una mejor experiencia de usuario
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Añade un event listener de clic a cada enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Previene el comportamiento por defecto del enlace (navegar a otra URL)
        event.preventDefault();

        // Obtiene el ID de la sección a mostrar desde el atributo 'data-section' del enlace
        const targetSectionId = link.getAttribute('data-section');

        // Llama a la función para mostrar la sección correspondiente
        showSection(targetSectionId);
      });
    });

    // Lógica para mostrar la sección inicial al cargar la página
    // Por defecto, muestra la sección 'inicio-section'.
    // Podrías modificar esto para leer un hash de la URL si quieres que los enlaces directos funcionen.
    const initialSectionId = 'inicio-section'; // Define la sección que se muestra al cargar
    showSection(initialSectionId); // Llama a showSection para mostrar la sección inicial
  });
}
