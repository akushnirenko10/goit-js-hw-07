const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputChange = event => {
  const normalizedNime = inputEl.value.trim() || 'Anonymous';
  outputEl.textContent = normalizedNime;
};

inputEl.addEventListener('input', onInputChange);
