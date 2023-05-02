const validator = {
  // Primeiro, recebe os dados informados no input:
  isValid(ccNumber) {
    const newArray = []; /*O array vazio receberá os dados informados pelo usuário */
    for (let i = 0;i < ccNumber.length; i++) { /* aqui percorre todo o número do CC*/ 
      const numCard = parseInt(ccNumber[i]); /* A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN*/
      newArray.push(numCard);} /* O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.*/

    // Depois, inverte a ordem dos números:
    const ccReversed = newArray.reverse(); /*a nova variável receberá a string que será revertida. */

    /*Agora precisamos encontrar os números nas posições pares, somá-los e, se der um resultado maior
    que 9, devemos separar os dígitos e subtrair 9. Ex = 6 x 2 = 12; 1+2 = 3 (este é o resultado que queremos);
    logo, faremos 12 - 9, que chegará no resultado esperado, 3 (soma dos dígitos). */

    for (let i = 0; i < ccReversed.length; i++) {
      if ((i + 1) % 2 === 0) { /*começar a multiplicar por dois a partir do segundo dígito */ 
        ccReversed[i] = ccReversed[i] * 2; } /*aqui começa a multiplicação*/
      
      if (ccReversed[i] >= 10) {
        ccReversed[i] = ccReversed[i] - 9; }/*aqui é feita a subtração de 9, caso a soma dos dígitos seja 10 ou maior conforme informado acima */  
    }

    // O próximo passo será somar todos os números do resultado final e verificar se essa soma resulta em um múltiplo de 10 (o que gera um cartão válido)
    let totalSum = 0;
    for (let i = 0;i < ccReversed.length; i++) {/*aqui estamos chamando os números já invertidos. */ 
      totalSum = totalSum + ccReversed[i]; } /*somamos todos os números informados pelo usuário */
    
    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(ccNumber) {
    const maskCCNumber = []; /* Este array vazio irá receber os dados informados */
    for (let i = 0; i < ccNumber.length;i++) { /* Percorre todo o número do CC*/ 
      if (i < ccNumber.length - 4) { /*os 4 último dígitos informados pelo usuário serão isolados */
        maskCCNumber.push("#") /* os dígitos serão substituídos por "#" */
      } else {
        maskCCNumber.push(ccNumber[i]); /*mantém os demais números sem "#" */
      }  
    }

    const masked =
    maskCCNumber.join(""); // O método join() junta todos os elementos de um array em uma string e retorna esta string. Aqui juntamos os 4 mascarados novamente pra sequência de dígitos.
    return masked; 
  },
};

export default validator;
