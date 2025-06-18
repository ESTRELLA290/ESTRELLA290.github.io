function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('oculto'));

  const activa = document.getElementById(id);
  if (activa) activa.classList.remove('oculto');
}

window.onload = function () {
  mostrarSeccion('primero');

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