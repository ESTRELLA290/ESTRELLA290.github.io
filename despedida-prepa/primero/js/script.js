document.addEventListener("DOMContentLoaded", function () {
  const imagenes = document.querySelectorAll('.galeria img');
  imagenes.forEach(img => {
      img.addEventListener('click', function () {
    window.open(this.src, '_blank');
});
});
});