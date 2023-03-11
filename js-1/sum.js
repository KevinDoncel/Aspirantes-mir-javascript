function sum(num) {
  let i = 0;
  let r = 0;
  while (i <= num) {
    r = i + r;
    i++;
  }
  return r;
}

console.log("el resultado es: " + sum(4));
console.log("el resultado es: " + sum(10));
console.log("el resultado es: " + sum(15));
