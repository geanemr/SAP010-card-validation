const validator = (ccNumber) => {
    const length = ccNumber.length;
    let count = 0;

    if(length % 2 == 0)
    {
        /** Percorre todo o número d CC.
         *  Depois começa a dobrar a partir do primeiro número.
        */
        for(let i = 0; i < length; i++)
        {
            let currentDigit = parseInt(ccNumber[i]);
            if (i % 2 == 0) // Começa a dobrar número sim e número não, a começar pelo penúltimo.
            {
                if ((currentDigit *= 2) > 9)
                {
                    // Separa os números acima de 9 em 2 componentes e soma os dois
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                    // soma os dois números do resultado (ex: 1+0 = 1)
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            
            count += currentDigit;
        }
    }
    else {
        /** Percorre todo o número d CC.
         *  Depois começa a dobrar a partir do primeiro número. Esse é o caso de CC de 15 dígitos.
        */
        for(let i = length - 1 ; i >= 0; i--)
        {
            let currentDigit = parseInt(ccNumber[i]);
            if ((i - 1) % 2 == 0) // Começa a dobrar número sim e número não, a começar pelo penúltimo.
            {
                if ((currentDigit *= 2) > 9)
                {
                    // Separa os números acima de 9 em 2 componentes e soma os dois
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                    // soma os dois números do resultado (ex: 1+0 = 1)
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            
            count += currentDigit;
        }
    }

    return (count % 10) === 0;
}

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

validator.mastify
};