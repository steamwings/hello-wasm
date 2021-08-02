let rust = null;

function fib2 (n) {
  if (n < 0) {
    console.error('Cannot compute');
    return '?';
  }
  switch (n) {
    case 0: return 0;
    case 1: return 1;
    default: return fib2(n - 1) + fib2(n - 2);
  }
}

function checkInput () {
  let currentVal = Number(document.getElementById('fibInput').value);
  if (!isNaN(currentVal) && currentVal != checkInput.lastVal) {
    checkInput.lastVal = currentVal;
    document.getElementById('fibInput').disabled = true;
    document.getElementById('result1').innerHTML = 'Wasm Result: Working...';
    document.getElementById('result2').innerHTML = 'JS Result: Working...';
    start = Date.now();
    setTimeout(() => {
      (async () => rust.fibonacci(currentVal))().then(v => {
        document.getElementById('result1').innerHTML = 'Wasm Result: ' + v + '\r\n(Elapsed: ' + (Date.now() - start) + 'ms)';
        document.getElementById('fibInput').disabled = false;
      });
      (async () => fib2(currentVal))().then(v => {
        document.getElementById('result2').innerHTML = 'JS Result: ' + v + '\r\n(Elapsed: ' + (Date.now() - start) + 'ms)';
      });
    }, 0)
  }
}

import('./pkg/').then((loaded_pkg) => {
    rust = loaded_pkg;
    console.log(`fibonacci of 14 is ${loaded_pkg.fibonacci(14)}`)

    const delayMs = 1000;
    checkInput.lastVal = null;
    setInterval(checkInput, delayMs);
  })
  .catch(console.error)