function max(arr) {
  if (arr.length === []) return undefined;

  let MAX = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (MAX < arr[i]) MAX = arr[i];
  }
  return MAX;
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
