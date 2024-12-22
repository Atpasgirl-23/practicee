const carouselBody = document.querySelector(".carousel__body");
const carouselItems = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector(".carousel__btn--prev");
const nextButton = document.querySelector(".carousel__btn--next");

let currentIndex = 0;

function updateCarousel() {
  const totalItems = carouselItems.length;
  const offset = -currentIndex * 100; // Сдвиг в процентах
  carouselBody.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

// Автоматическая прокрутка (опционально)
setInterval(() => {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
}, 5000); // Каждые 5 секунд
