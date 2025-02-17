import validator from "./validator.js";

const button = document.getElementById("btn");
button.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const creditCardValue = document.getElementById("credit-card-number").value;
  const alert = document.getElementById("result");

  const res = validator.isValid(creditCardValue);
  const mask = validator.maskify(creditCardValue);

  if (creditCardValue === "") {
    alert.innerHTML = "Insira o número do cartão";
  } else if (res === true) {
    alert.innerText = `O número do cartão ${mask} é válido!`;
  } else {
    alert.innerText = "Cartão inválido.";
  }
}
