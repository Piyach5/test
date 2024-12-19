function fibonacci(n) {
  if (n < 0) return "Invalid input";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}

console.log(fibonacci(10));

//normally 0 is not included as first position, so the answer is 55 instead of 34.
