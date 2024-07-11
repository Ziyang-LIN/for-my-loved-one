let currentSlide = 0;

function moveSlides(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => moveSlides(-1));
document.querySelector('.next').addEventListener('click', () => moveSlides(1));