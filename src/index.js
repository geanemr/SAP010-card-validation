import validator from "./validator.js";

const btn = document.getElementById("btn"); /* Aqui estamos puxando o id do botão do index.html. */
btn.addEventListener("click", start); /* Aqui estamos chamando o evento de clicar em um botão. */

function start(event) { /* Estamos definindo a função mencionada acima (start). */
  event.preventDefault() /* O event.preventDefault() impede que a página atualize a cada clique. */
  const numC = document.getElementById("ccNumber").value; /* Aqui estamos puxando o id do input do usuário no index.html. */
  const alert = document.getElementById("result"); /* Aqui estamos puxando o parágrafo abaixo do botão, onde sairá o resultado. */

  const res = validator.isValid(numC); /* Aqui estamos puxando a função isValid, impostada do validator.js. */
  const mask = validator.maskify(numC); /* Aqui estamos puxando a função maskify, impostada do validator.js. */

  if (numC === "") {
    alert.innerHTML = "Insira o número do cartão"; /* Mensagem que aparecerá na tela caso o usuário clicar no botão sem inserir o número do cartão. */
  } else if (res === true) {
    alert.innerText = `O número do cartão ${mask} é Válido!`; /* Template strings são envolvidas por (` `) em vez de aspas simples ou duplas. Template strings podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves (${expression}). As expressões nos placeholders, bem como o texto em volta delas são passados a uma função. A função padrão apenas concatena as partes em uma string única.*/ 
  } else {
    alert.innerText = "Cartão inválido."; /* Mensagem que aparecerá na tela caso o usuário inserir um cartão inválido e clicar. */
  }
}

