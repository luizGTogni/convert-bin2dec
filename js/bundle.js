(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const titleElement = document.querySelector('#title');

const labelConvertElement = document.querySelector('#label-convert');
const labelResultElement = document.querySelector('#label-result');

const inputNumberElement = document.querySelector('#number-input');

function buildConverter(state) {
  let title = 'Convert Binary to Decimal'
  let labelConvert = 'Binary';
  let labelResult = 'Decimal';
  let placeholder = 'Enter a binary number here (0\'s and 1\'s)';

  if (!state) {
    title = 'Convert Decimal to Binary'
    labelConvert = 'Decimal';
    labelResult = 'Binary';
    placeholder = 'Enter a decimal number here';
  }

  titleElement.textContent = title;
  labelConvertElement.textContent = labelConvert;
  labelResultElement.textContent = labelResult;
  inputNumberElement.setAttribute('placeholder', placeholder);
}

module.exports = buildConverter;
},{}],2:[function(require,module,exports){
function checkEnterDigitInvalid(element) {
  const valueCurrent = element.value.split('')[element.textLength-1];

  if (valueCurrent !== '0' && valueCurrent !== '1') {
    const newValue = element.value.slice(0, -1);
    element.value = newValue;
    return true;
  }
  
  return false
}
 
module.exports = checkEnterDigitInvalid;

},{}],3:[function(require,module,exports){
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
},{"./invertString":5}],4:[function(require,module,exports){
const invalidFeedback = document.querySelector('.invalid-feedback');

function displayErrorInvalidValue(text) {
  invalidFeedback.style.display = 'block';
  invalidFeedback.textContent = text;
}

module.exports = displayErrorInvalidValue;
},{}],5:[function(require,module,exports){
function invertString(str) {
  let newStr = '';

  for (let i=str.length-1; i >= 0; i--) {
    newStr = newStr + '' + str[i];
  }

  return newStr;
}

module.exports = invertString;
},{}],6:[function(require,module,exports){
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
},{"./buildConverter.js":1,"./checkEnterDigitInvalid.js":2,"./converter.js":3,"./error/invalidValue.js":4,"./resetInput":7,"./resetInvalidFeedback.js":8}],7:[function(require,module,exports){
function resetInput(elementInput, elementOutput) {
  elementInput.value = null;
  elementOutput.value = null;
}

module.exports = resetInput;
},{}],8:[function(require,module,exports){
const invalidFeedback = document.querySelector('.invalid-feedback');

function resetInvalidFeedback() {
  invalidFeedback.style.display = 'none';
  invalidFeedback.textContent = '';
}

module.exports = resetInvalidFeedback;
},{}]},{},[6]);
