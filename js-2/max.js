function max(arr) {
  if (!arr.length) return undefined;

  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result < arr[i]) result = arr[i];
  }
  return result;
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
