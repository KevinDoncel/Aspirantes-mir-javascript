let receta = {};
receta.nombre = "sandwich";
receta.ingredientes = [];
receta.ingredientes.push({
  nombre: "pan",
  cantidad: 2,
});
receta.ingredientes.push({
  nombre: "queso",
  cantidad: 1,
});
// console.log(receta);
console.log(receta.ingredientes[0].nombre);

let result = 0;

for (let i = 0; i < receta.ingredientes.length; i++) {
  for (const key in receta.ingredientes[i])
    if (key === "cantidad") {
      sumaCantidad = sumaCantidad + receta.ingredientes[i][key];
    }
}

console.log("suma cantidad ingredientes: ", sumaCantidad);
