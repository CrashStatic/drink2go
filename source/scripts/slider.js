const sliderElement = document.querySelector('.slider__list');
const slidesElements = Array.from(sliderElement.querySelectorAll('.slider__item'));
const prevButtonElement = document.querySelector('.slider__button--prev');
const nextButtonElement = document.querySelector('.slider__button--next');
let slideIndex = 0;

prevButtonElement.setAttribute('disabled', null);

const updateSlider = () => {
  slidesElements.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
};

// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
  if (slideIndex > 1) {
    slideIndex--;
    nextButtonElement.removeAttribute('disabled');
  } else {
    prevButtonElement.setAttribute('disabled', null);
    slideIndex = 0;
  }
  updateSlider(slideIndex);
};

// Функция для показа следующего слайда
const showNextSlide = () => {
  if (slideIndex + 1 < slidesElements.length - 1) {
    slideIndex++;
    prevButtonElement.removeAttribute('disabled');
  } else {
    slideIndex = slidesElements.length - 1;
    nextButtonElement.setAttribute('disabled', null);
  }
  updateSlider(slideIndex);
};

prevButtonElement.addEventListener('click', showPreviousSlide);
nextButtonElement.addEventListener('click', showNextSlide);

updateSlider(slideIndex);
