const userInput = document.getElementById('userInput');
const defaultResult = document.getElementById('default');
const debounceResult = document.getElementById('debounce');


const updateDebounce = debounce(text => {
  debounceResult.textContent = text;
}, 500);

userInput.addEventListener('input', e => {
  defaultResult.textContent = e.target.value;
  updateDebounce(e.target.value);
});

function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay)
  }
}