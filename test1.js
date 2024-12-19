const array = [7, -11, 9, 50, -20, 45, 15, 2];

function findMax() {
  const result = Math.max(...array);
  return result;
}

console.log(findMax(array));
