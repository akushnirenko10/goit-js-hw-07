function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colorFieldEl = document.querySelector('.color');

const onClickBtnChangeColor = () => {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  colorFieldEl.textContent = randomColor;
};

btnEl.addEventListener('click', onClickBtnChangeColor);
