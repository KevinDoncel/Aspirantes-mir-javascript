function join(arr) {
  if (!arr.length) return "";

  let str = "";
  for (let word of arr) {
    str = str + word + " ";
  }
  return str;
}

console.log(join(["Hola", "Mundo"])); // "Hola Mundo"
console.log(join(["Make", "It", "Real"])); // "Make It Real"
console.log(join([])); // ""
