const invalidFeedback = document.querySelector('.invalid-feedback');

function resetInvalidFeedback() {
  invalidFeedback.style.display = 'none';
  invalidFeedback.textContent = '';
}

module.exports = resetInvalidFeedback;