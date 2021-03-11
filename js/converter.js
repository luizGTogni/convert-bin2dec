const invertString = require('./invertString');

function binaryToDecimal(str) {
  let decimal = 0;
  let posBinary = str.length-1;

  for (data of str) {
    decimal += Number(data) * (2 ** posBinary);
    posBinary--;
  }

  return decimal;
}

function decimalToDecimal(str) {
  let binary = '';
  let result = 0;
  let value = Number(str);

  do {
    result = Math.floor(value / 2);
    const restDiv = value % 2;
    value = result;

    const bit = result === 1 ? `${restDiv}${result}` : restDiv;

    binary = `${binary}${bit}`;
  } while (result !== 1);

  return invertString(binary);
}

module.exports = {
  binaryToDecimal,
  decimalToDecimal,
}