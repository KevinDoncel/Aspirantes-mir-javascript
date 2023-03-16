let persona = {
  nombre: "Kevin Doncel",
  edad: 28,
  ciudad: "Palmira",
  Profesion: "Ingeniero",
};

console.log(persona);

persona.presentacion = function () {
  return this.nombre + this.edad + this.ciudad + this.Profesion;
};

const mensaje = persona.presentacion();
console.log(mensaje);

persona.hobbies = ["programar", "leer", "ver tutoriales y videos"];
console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}
