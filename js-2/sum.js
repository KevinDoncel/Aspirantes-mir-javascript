function sum(arr) {
  if (!arr.length) return 0;

  let acum = 0;
  for (let i = 0; i < arr.length; i++) {
    acum = acum + arr[i];
  }
  return acum;
}
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
