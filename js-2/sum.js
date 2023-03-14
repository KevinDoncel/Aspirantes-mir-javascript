function sum(arr) {
  if (arr.length === 0) return 0;

  let r = 0;
  for (let i = 0; i < arr.length; i++) {
    r = r + arr[i];
  }
  return r;
}
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
