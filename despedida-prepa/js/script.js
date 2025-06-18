function mostrarSeccion(id) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('oculto'));

  // Muestra la sección seleccionada
  const activa = document.getElementById(id);
  if (activa) activa.classList.remove('oculto');
}

// Asegurar que el script se ejecuta solo cuando la página ha cargado
window.onload = function () {
  mostrarSeccion('primero'); // Mostrar por defecto el primer año

  // Activar el modal en las imágenes
  const imagenes = document.querySelectorAll('.seccion img');
  imagenes.forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-img');
      modal.style.display = 'flex';
      modalImg.src = this.src;
    });
  });
};

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
function mostrarSeccion(id) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('oculto'));

  // Mostrar la sección seleccionada
  const activa = document.getElementById(id);
  if (activa) activa.classList.remove('oculto');
}

// Ejecutar cuando la página haya cargado
document.addEventListener("DOMContentLoaded", function () {
  mostrarSeccion('primero'); // Mostrar por defecto el primer año

  // Activar el modal en las imágenes
  const imagenes = document.querySelectorAll('.seccion img');
  imagenes.forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-img');
      modal.style.display = 'flex';
      modalImg.src = this.src;
    });
  });
});

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}