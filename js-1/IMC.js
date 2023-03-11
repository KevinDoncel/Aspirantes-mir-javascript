function bmi(weight, height) {
  if (weight <= 0 || height <= 0) return 0;
  return weight / height ** 2;
}

console.log("your BMI is: " + bmi(65, 1.8));
console.log("your BMI is: " + bmi(72, 1.6));
console.log("your BMI is: " + bmi(52, 1.75));
console.log("your BMI is: " + bmi(0, 1.9));
console.log("your BMI is: " + bmi(80, 0));
console.log("your BMI is: " + bmi(65, -1.6));
