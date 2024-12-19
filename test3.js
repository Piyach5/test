function findDuplicate(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i].includes(array2[j])) {
        result.push(array1[i]);
      }
    }
  }
  return result;
}

const array1 = ["mike", "bell", "ball", "ronaldo", "jack"];
const array2 = ["bell", "nut", "bee", "beem", "messi"];

console.log(findDuplicate(array1, array2));
