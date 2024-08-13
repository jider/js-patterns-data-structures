const userInput = document.getElementById('userInput')!;
const defaultResult = document.getElementById('default')!;
const debounceResult = document.getElementById('debounce')!;


const updateDebounce = debounce((text: string) => {
  debounceResult.textContent = text;
}, 500);

userInput.addEventListener('input', e => {
  const target = e.target as HTMLInputElement;
  defaultResult.textContent = target.value;
  updateDebounce(target.value);
});

function debounce(cb: (...args: any[]) => void, delay = 1000) {
  let timeout: number;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay)
  }
}
