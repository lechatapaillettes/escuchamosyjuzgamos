document.addEventListener("DOMContentLoaded", function () {
  const libros = document.querySelectorAll(".libro");
  const cards = document.querySelectorAll(".card");

  // Mostrar la primera card por defecto
  if (cards.length > 0) {
    cards[0].style.display = "block"; // Mostrar la primera card
    libros[0].classList.add("activo"); // Agregar clase de activo
  }

  libros.forEach((libro, index) => {
    libro.addEventListener("click", function () {
      // Ocultar todas las cards
      cards.forEach((card) => (card.style.display = "none"));
      // Remover clase activo de todas las imágenes
      libros.forEach((img) => img.classList.remove("activo"));

      // Mostrar la card correspondiente y marcar como activa
      if (cards[index]) {
        cards[index].style.display = "block";
        libro.classList.add("activo");
      }
    });
  });
});
