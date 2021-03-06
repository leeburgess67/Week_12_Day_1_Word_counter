const PubSub = require('../helpers/pub_sub.js')
const ResultView = function () {
};

//CREATE A BINDEVENTS FUNCTION TO SUBSCRIBE TO THE WORDCOUNTER AND DISPLAY THE DATA

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result')
  if (result){
  resultElement.textContent = `There are ${result} words`
}
else {
  resultElement.textContent = `Please enter some words`
}
};

module.exports = ResultView;
