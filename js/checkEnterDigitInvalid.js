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
