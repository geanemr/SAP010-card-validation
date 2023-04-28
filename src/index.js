import validator from "./validator.js";

const btn = document.getElementById("btn"); /* Aqui estamos puxando o id do botão do index.html */
btn.addEventListener("click", start); /* Aqui estamos querendo chamando o evento de clicar em um botão */

function start() {
  const numC = document.getElementById("ccNumber").value;
  const alert = document.getElementById("result");

  const res = validator.isValid(numC);
  const mask = validator.maskify(numC);

  console.log(mask)
  if (numC === "") {
    alert.innerHTML = "Insira um valor";
  } else if (res === true) {
    alert.innerText = "Cartão Válido!";
  } else {
    alert.innerText = "Cartão inválido.";
  }
}

