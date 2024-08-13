const mouseX = document.getElementById('mouseX');
const mouseY = document.getElementById('mouseY');
const defaultResult = document.getElementById('default');
const throttleResult = document.getElementById('throttle');


const updateThrottle = throttle(() => {
  updateCounter(throttleResult)
}, 500);

document.addEventListener('mousemove', e => {
  mouseX.textContent = e.pageX;
  mouseY.textContent = e.pageY;
  updateCounter(defaultResult);
  updateThrottle();
});

function updateCounter(element) {
  return element.textContent = (parseInt(element.textContent) || 0) + 1;
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFn = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFn, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFn, delay);
  }
}

// Easiest implementation
function throttleFunction(func, delay = 1000) {
  let shouldWait = null;
  return (...args) => {
    if (!shouldWait) {
      func(...args);

      shouldWait = setTimeout(() => {
        shouldWait = null;
      }, delay);
    }
  };
}
