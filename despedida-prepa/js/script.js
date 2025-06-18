document.addEventListener("DOMContentLoaded", function () {
  mostrarSeccion('primero'); // Mostrar por defecto el primer año

  // Activar el modal en imágenes
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

function mostrarSeccion(id) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('oculto'));

  // Mostrar la sección seleccionada
  const activa = document.getElementById(id);
  if (activa) activa.classList.remove('oculto');
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}