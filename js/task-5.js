function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const colorFieldEl = document.querySelector('.color');

const onClickBtnChangeColor = () => {
  const bodyEl = document.querySelector('body');

  bodyEl.style.backgroundColor = getRandomHexColor();
  colorFieldEl.textContent = getRandomHexColor();
};

btnEl.addEventListener('click', onClickBtnChangeColor);
