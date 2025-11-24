const slides = [
  { src: "images/main.png", caption: "Главная страница" },
  { src: "images/2.png", caption: "Список публикаций" },
  { src: "images/screenshot3.png", caption: "Добавление публикации" }
];

let currentIndex = 0;

const imgEl = document.getElementById("slide-image");
const captionEl = document.getElementById("slide-caption");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function showSlide(index) {
  // Плавно скрываем старую картинку
  imgEl.classList.add("fade-out");

  // Через 300 мс меняем картинку и подпись
  setTimeout(() => {
    imgEl.src = slides[index].src;
    captionEl.textContent = slides[index].caption;

    // Плавно показываем новую картинку
    imgEl.classList.remove("fade-out");
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
