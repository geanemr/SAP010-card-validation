const validator = {
  isValid(value) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray.push(parseInt(value[i], 10));
    }
    const reversedArray = newArray.reverse();

    for (let i = 0; i < reversedArray.length; i++) {
      if ((i + 1) % 2 === 0) {
        reversedArray[i] = reversedArray[i] * 2;
        if (reversedArray[i] > 9) {
          reversedArray[i] -= 9;
        }
      }
    }

    let totalSum = 0;
    for (let i = 0; i < reversedArray.length; i++) {
      totalSum += reversedArray[i];
    }

    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(value) {
    const maskedValue = [];
    for (let i = 0; i < value.length; i++) {
      if (i < value.length - 4) {
        maskedValue.push("#");
      } else {
        maskedValue.push(value[i]);
      }
    }

    const masked = maskedValue.join("");
    return masked;
  },
};

export default validator;
