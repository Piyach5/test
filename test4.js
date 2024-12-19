function findPlusFifty(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 50) {
        return true;
      }
    }
  }
  return false;
}

console.log(findPlusFifty([1, 25, 15, 9, 42, 35]));
