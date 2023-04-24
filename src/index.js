const validateCC = () => {
    const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    let message = "";

    // Chama o algoritmo de Luhn.
    if( validator(elCCNumber.value) )
        message = "Cartão de Crédito Válido!";
    else
        message = "Cartão de Crédito Inválido.";
    
    // Caixa de texto com conteúdo
    elCCValidation.textContent = message;
    // Limpa o campo de cartão de crédito
    elCCNumber.value = null;
}