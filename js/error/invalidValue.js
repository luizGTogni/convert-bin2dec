const invalidFeedback = document.querySelector('.invalid-feedback');

function displayErrorInvalidValue(text) {
  invalidFeedback.style.display = 'block';
  invalidFeedback.textContent = text;
}

module.exports = displayErrorInvalidValue;