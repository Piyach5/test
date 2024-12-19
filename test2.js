function flowDigitalPrinting() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push("FLOWDIGITAL");
    } else if (i % 3 === 0) {
      numbers.push("FLOW");
    } else if (i % 5 === 0) {
      numbers.push("DIGITAL");
    } else {
      numbers.push(i);
    }
  }

  return numbers;
}

console.log(flowDigitalPrinting());
