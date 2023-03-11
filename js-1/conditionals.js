function calcularColor(num) {
  let color = "color";
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "white";
  } else if (num === 3) {
    color = "red";
  } else {
    color = "green";
  }
  return "Color is: " + color;
}

console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));
