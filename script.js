
// Gallery carousel
const handleImageChange = (offset)=>{
  const activeSlide = document.querySelector("[data-active]")
  const slides = [...document.querySelectorAll(".slide")]

  const currentIndex = slides.indexOf(activeSlide)
  let newIndex = currentIndex + offset;

  if(newIndex < 0) newIndex = slides.length - 1
  if(newIndex >= slides.length) newIndex = 0
  slides[newIndex].dataset.active = true;
  delete activeSlide.dataset.active
}

const onNext = ()=> handleImageChange(1)
const onPrev = ()=> handleImageChange(-1)

// Calculator
const SQUARE_PRICE = 8;

// Utilities
function getElm(id) {
  return document.getElementById(id);
}

function showElm(id) {
  getElm(id).style.display = 'block';
}

function hideElm(id) {
  getElm(id).style.display = 'none';
}

function coerceFieldValueToInt(e) {
  e.currentTarget.value = parseInt(e.currentTarget.value);
}

// Main programm
function calculate() {
  const height = getElm('height').value;
  const width = getElm('width').value;
  const price = SQUARE_PRICE * (height * width);

  hideElm('message')
  getElm('price').textContent = price.toFixed(2);
  showElm('result');
}

// Initialisation
window.onload = () => {
  const btnElm = document.getElementById('calculate-btn');
  btnElm.addEventListener('click', calculate);

  const heightElm = document.getElementById('height');
  heightElm.addEventListener('input', coerceFieldValueToInt);

  const widthElm = document.getElementById('width');
  widthElm.addEventListener('input', coerceFieldValueToInt);
};
