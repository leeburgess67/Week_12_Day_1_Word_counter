const PubSub = require('../helpers/pub_sub.js')

const InputView = function () {

};

//Make bindEvents function which will be called in the app.js
InputView.prototype.bindEvents = function () {

//Declare the input as the text inputted - id  'text' on input form
const input = document.querySelector('#text')
const button = document.querySelector('#button')

//add event listener, when there is an input do something (event)...
// input.addEventListener('input', (evt) => {
button.addEventListener('click', (evt) => {
evt.preventDefault();
  // declare the inputted text to be the event targetted above
  const inputtedText = evt.target.value

  // publish the inputted text with this name which will be picked up.
  PubSub.publish('InputView:text-inputted', inputtedText)
  
});
};

module.exports = InputView;
