// const sliderElement = document.querySelector('.slider__list');
// const prevButtonElement = document.querySelector('.slider__button--prev');
// const nextButtonElement = document.querySelector('.slider__button--next');
// const slidesElements = Array.from(sliderElement.querySelectorAll('.slider__item'));
// const slideCount = slidesElements.length;
// let slideIndex = 0;

// // Функция для обновления отображения слайдера
// const updateSlider = () => {
//   slidesElements.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.display = 'flex';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// };

// // Функция для показа предыдущего слайда
// const showPreviousSlide = () => {
//   if (slideIndex !== 0) {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
//   } else {
//     prevButtonElement.disabled = true;
//     return slideIndex;
//   }
// };

// // Функция для показа следующего слайда
// const showNextSlide = () => {
//   if (slideIndex !== slidesElements.length - 1) {
//     slideIndex = (slideIndex + 1) % slideCount;
//   } else {
//     nextButtonElement.disabled = true;
//   }
// };

// prevButtonElement.addEventListener('click', showPreviousSlide);
// nextButtonElement.addEventListener('click', showNextSlide);

// updateSlider();


const sliderElement = document.querySelector('.slider__list');
const slidesElements = Array.from(sliderElement.querySelectorAll('.slider__item'));
const prevButtonElement = document.querySelector('.slider__button--prev');
const nextButtonElement = document.querySelector('.slider__button--next');
let slideIndex = 0;

// const showImage = (index) => {
//   slidesElements[slideIndex].style.display = 'none';
//   slidesElements[index].style.display = 'flex';
//   slideIndex = index;
// };

const updateSlider = () => {
  slidesElements.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
};

// document.querySelector('.slider__button-container').addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('slider__button--prev') && slideIndex !== 0) {
//     let index = slideIndex - 1;
//     if (index < 0) {
//       index = slidesElements.length - 1;
//     }
//     showImage(index);
//   } else if (evt.target.classList.contains('slider__button--next') && slideIndex !== slidesElements.length - 1) {
//     let index = slideIndex + 1;
//     if (index >= slidesElements.length) {
//       index = 0;
//     }
//     showImage(index);
//   }
// });

// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    prevButtonElement.ariaDisabled = true;
    slideIndex = 0;
  }
  updateSlider(slideIndex);
};

// Функция для показа следующего слайда
const showNextSlide = () => {
  if (slideIndex < slidesElements.length - 1) {
    slideIndex++;
  } else {
    nextButtonElement.ariaDisabled = true;
    slideIndex = slidesElements.length - 1;
  }
  updateSlider(slideIndex);
};

prevButtonElement.addEventListener('click', showPreviousSlide);
nextButtonElement.addEventListener('click', showNextSlide);

updateSlider(slideIndex);
