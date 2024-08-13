const mouseX = document.getElementById('mouseX')!;
const mouseY = document.getElementById('mouseY')!;
const defaultResult = document.getElementById('default')!;
const throttleResult = document.getElementById('throttle')!;


const updateThrottle = throttle(() => {
  updateCounter(throttleResult)
}, 500);

document.addEventListener('mousemove', e => {
  mouseX.textContent = e.pageX.toString();
  mouseY.textContent = e.pageY.toString();
  updateCounter(defaultResult);
  updateThrottle();
});

function updateCounter(element: HTMLElement) {
  return element.textContent = ((parseInt(element.textContent!) || 0) + 1).toString();
}

function throttle(cb: (...args: any[]) => void, delay = 1000) {
  let shouldWait = false;
  let waitingArgs: any[] | null;
  const timeoutFn = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFn, delay);
    }
  };

  return (...args: any[]) => {
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
// function throttleFunction(func: (...args: any[]) => void, delay = 1000) {
//   let shouldWait: number | null = null;
//   return (...args: any[]) => {
//     if (!shouldWait) {
//       func(...args);
//
//       shouldWait = setTimeout(() => {
//         shouldWait = null;
//       }, delay);
//     }
//   };
// }
