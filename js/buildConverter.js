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