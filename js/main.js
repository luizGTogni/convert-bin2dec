const checkEnterDigitInvalid = require('./checkEnterDigitInvalid.js');
const resetInvalidFeedback = require('./resetInvalidFeedback.js');
const displayErrorInvalidValue = require('./error/invalidValue.js');
const buildConverter = require('./buildConverter.js');
const resetInput = require('./resetInput');

const { binaryToDecimal, decimalToDecimal } = require('./converter.js');

const inputNumberElement = document.querySelector('#number-input');
const inputNumberConvert = document.querySelector('#number-convert');
const buttonChangeElement = document.querySelector('#btn-change');

let bin2Dec = true;

function binToDec() {
  const isInvalidDigit = checkEnterDigitInvalid(inputNumberElement);

  if (isInvalidDigit && inputNumberElement.textLength > 0) {
    displayErrorInvalidValue('Oops, please enter a valid value');
  }
}

const checkInput = () => {
  resetInvalidFeedback();

  bin2Dec && binToDec();

  if (inputNumberElement.textLength > 0) {
    const valueCurrent = inputNumberElement.value;

    const result = bin2Dec ? binaryToDecimal(valueCurrent) : decimalToDecimal(valueCurrent);

    inputNumberConvert.value = result;
  }
}

buttonChangeElement.addEventListener('click', (event) => {
  event.preventDefault();
  
  bin2Dec = !bin2Dec;
  
  buildConverter(bin2Dec);
  resetInput(inputNumberElement, inputNumberConvert);
});

inputNumberElement.addEventListener('input', checkInput);