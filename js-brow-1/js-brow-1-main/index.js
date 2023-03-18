const input = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");
const btnMayus = document.querySelector("#btn");

input.addEventListener("input", function () {
  const texto = input.value.toUpperCase();
  resultado.textContent = texto;
});
btnMayus.addEventListener("click", function () {
  const texto = input.value.toUpperCase();
  resultadobtn.textContent = texto;
});
