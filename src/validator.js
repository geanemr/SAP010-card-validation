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
                    // Separate the number into component parts and then add them together.
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                    // Se o resultado for maior que 10, soma os dois números do resultado (ex: 1+0 = 1)
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            
            count += currentDigit;
        }
    }
    else {
        /** Traverse the whole credit card number.
         *  Starts at the end of the number and begins doubling from the second-to-last number. This fixes the case for odd-numbered length credit card numbers, like AMEX cards.
        */
        for(let i = length - 1 ; i >= 0; i--)
        {
            let currentDigit = parseInt(ccNumber[i]);
            if ((i - 1) % 2 == 0) // I only want to double every other number, starts doubling with the second-to-last number. I don't want to double the last number.
            {
                if ((currentDigit *= 2) > 9)
                {
                    // Separate the number into component parts and then add them together.
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                    // If currentDigit was 18 then currentDigit is now 9.
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

    // Calls the Luhn algorithm. Fails if the Luhn algorithm returns false.
    if( validator(elCCNumber.value) )
        message = "Cartão de Crédito Válido!";
    else
        message = "Cartão de Crédito Inválido.";
    
    // Initialize the display textbox with content.
    elCCValidation.textContent = message;
    // Clear the credit card field.
    elCCNumber.value = null;

validator.mastify
};