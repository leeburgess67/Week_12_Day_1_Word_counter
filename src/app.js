const InputView = require('./views/input_view.js')
const PrimeChecker = require('./models/word_counter.js')
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const inputView = new InputView();
  inputView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
  const form = document.querySelector('#wordcounter-form')
  form.reset();

});
