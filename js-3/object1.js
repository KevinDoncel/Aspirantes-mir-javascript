let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

console.log(pedro.edad);
pedro.altura = 1.8;
delete pedro.activo;

for (const key in pedro) {
  console.log(key, ": ", pedro[key]);
}

pedro.saluda = function () {
  return "Hola, me llamo " + this.nombre;
};

console.log(pedro.saluda());
