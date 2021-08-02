import('./pkg/').then((lib) => {
    console.log(`fibonacci of 14 is ${lib.fibonacci(14)}`)
  })