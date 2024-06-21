const sliderElement = document.querySelector('.slider__list');
const slidesElements = Array.from(sliderElement.querySelectorAll('.slider__item'));
const prevButtonElement = document.querySelector('.slider__button--prev');
const nextButtonElement = document.querySelector('.slider__button--next');
let slideIndex = 0;

const updateSlider = () => {
  slidesElements.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
};

prevButtonElement.setAttribute('disabled', null);

// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
  if (slideIndex > 0) {
    slideIndex--;
    // prevButtonElement.removeAttribute('disabled');
  } else {
    prevButtonElement.ariaDisabled = true;
    prevButtonElement.setAttribute('disabled', null);
    slideIndex = 0;
  }
  updateSlider(slideIndex);
};

// Функция для показа следующего слайда
const showNextSlide = () => {
  if (slideIndex < slidesElements.length - 1) {
    slideIndex++;
    prevButtonElement.removeAttribute('disabled');
  } else {
    nextButtonElement.ariaDisabled = true;
    nextButtonElement.setAttribute('disabled', null);
    slideIndex = slidesElements.length - 1;
  }
  updateSlider(slideIndex);
};

prevButtonElement.addEventListener('click', showPreviousSlide);
nextButtonElement.addEventListener('click', showNextSlide);

updateSlider(slideIndex);
