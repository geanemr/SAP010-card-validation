import validator from './validator.js';

const btn = document.getElementById("btn");
btn.addEventListener('click',start);

function start(){
  const numC = document.getElementById('ccNumber').value;
  const alert = document.getElementById ('result');

  const res = validator.isValid(numC);
  const mask = validator.maskify(numC);
    
  if (numC === ""){
    alert.innerHTML = "Insira um valor";
  }

  else if(res === true){
    alert.innerText = "Cartão Válido!"
  }

  else{
    alert.innerText = "Cartão inválido."
  }

}


