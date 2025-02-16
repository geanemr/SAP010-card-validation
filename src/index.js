import validator from "./validator.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", start);

function start(event) {
  event.preventDefault();
  const numC = document.getElementById("ccNumber").value;
  const alert = document.getElementById("result");

  const res = validator.isValid(numC);
  const mask = validator.maskify(numC);

  if (numC === "") {
    alert.innerHTML = "Insira o número do cartão";
  } else if (res === true) {
    alert.innerText = `O número do cartão ${mask} é Válido!`;
  } else {
    alert.innerText = "Cartão inválido.";
  }
}
