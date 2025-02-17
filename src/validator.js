const validator = {
  isValid(ccNumber) {
    const newArray = [];
    for (let i = 0; i < ccNumber.length; i++) {
      newArray.push(numCard);
    }
    const ccReversed = newArray.reverse();

    for (let i = 0; i < ccReversed.length; i++) {
      if ((i + 1) % 2 === 0) {
        ccReversed[i] = ccReversed[i] * 2;
      }

      if (ccReversed[i] >= 10) {
        ccReversed[i] = ccReversed[i] - 9;
      }
    }

    let totalSum = 0;
    for (let i = 0; i < ccReversed.length; i++) {
      totalSum = totalSum + ccReversed[i];
    }

    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(ccNumber) {
    const maskCCNumber = [];
    for (let i = 0; i < ccNumber.length; i++) {
      if (i < ccNumber.length - 4) {
        maskCCNumber.push("#");
      } else {
        maskCCNumber.push(ccNumber[i]);
      }
    }

    const masked = maskCCNumber.join("");
    return masked;
  },
};

export default validator;
