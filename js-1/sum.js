function add(num) {
  let i = 0;
  let r = 0;
  while (i <= num) {
    r = i + r;
    i++;
  }
  return r;
}

console.log("result is: " + add(4));
console.log("result is: " + add(10));
console.log("result is: " + add(15));
