const validator = {
  // Na função isValid, será feita a validação dos números informados pelo usuário segundo algorítmo de Luhn:
  isValid(ccNumber) {
    const newArray = []; /* O array vazio receberá os dados informados pelo usuário. */
    for (let i = 0;i < ccNumber.length; i++) { /* Aqui percorre todo o número do CC informado.*/ 
      const numCard = parseInt(ccNumber[i]); /* A função parseInt converte seu primeiro argumento (neste caso, os números informados) para uma string, analisa, e retorna um inteiro ou NaN.*/
      newArray.push(numCard);} /* O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. (Aqui os números, que estávam separados no array, são reunidos novamente.*/

    // Depois, a ordem dos números será invertida:
    const ccReversed = newArray.reverse();

    /*Agora os números nas posições pares precisam ser encontrados, multiplicados por 2, e, se a multiplicação resultar em um número maior
    que 9, devemos subtrair 9 do resultado. Ex = 6 x 2 = 12; 1+2 = 3 (este é o resultado que queremos no array); logo, faremos 12 - 9, que chegará no resultado esperado, 3 (soma dos dígitos). */

    for (let i = 0; i < ccReversed.length; i++) {
      if ((i + 1) % 2 === 0) { /*Começa a multiplicar por dois a partir do segundo dígito. */ 
        ccReversed[i] = ccReversed[i] * 2; } /* Aqui começa a multiplicação por 2 dos números nas posições pares.*/
      
      if (ccReversed[i] >= 10) {
        ccReversed[i] = ccReversed[i] - 9; } /* Aqui é feita a subtração de 9, caso a soma dos dígitos seja 10 ou maior conforme informado acima. */  
    }

    // O próximo passo será somar todos os números do resultado final (pós multiplicações) e verificar se essa soma resulta em um múltiplo de 10 (o que gera um cartão válido).
    let totalSum = 0;
    for (let i = 0;i < ccReversed.length; i++) { /* Aqui estamos chamando os números já invertidos. */ 
      totalSum = totalSum + ccReversed[i]; } /* Somamos todos os números informados pelo usuário. */
    
    if (totalSum % 10 === 0) {  
      return true;
    } else {
      return false; /* Se a soma total for divisível por 10, retorna verdadeiro. Senão, retorna falso. */
    }
  },
  //Na função maskify, será feita a substituição dos 4 últimos números por "#":
  maskify(ccNumber) {
    const maskCCNumber = []; /* Este array vazio irá receber os dados informados. */
    for (let i = 0; i < ccNumber.length;i++) { /* Percorre todo o número do CC.*/ 
      if (i < ccNumber.length - 4) { /*os 4 últimos dígitos informados pelo usuário serão isolados. */
        maskCCNumber.push("#") /* os dígitos serão substituídos por "#". */
      } else {
        maskCCNumber.push(ccNumber[i]); /*mantém os demais números sem "#". */
      }  
    }

    const masked =
    maskCCNumber.join(""); // O método join() junta todos os elementos de um array em uma string e retorna esta string. Aqui juntamos os 4 mascarados novamente pra sequência de dígitos.
    return masked; 
  },
};

export default validator;
