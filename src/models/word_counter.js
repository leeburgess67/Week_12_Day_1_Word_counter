const PubSub = require('../helpers/pub_sub.js')

const WordCounter = function () {

};

//CREATE A BINDEVENTS FUNCTION TO SUBSCRIBE TO THE DATA PUBLISHED FROM INPUT

WordCounter.prototype.bindEvents = function () {

  //Use subscribe function to pick up the channel name of the data sent
  PubSub.subscribe('InputView:text-inputted', (evt) => {

    // define the input text as the detail from the event
    const inputtedText = evt.detail;

    // Call the countwords function and assign the result to the result variable
    const result = this.countWords(inputtedText);

    // Publish the result as the data with the tag WordCounter:result which will be picked up by the result view subscription to display the data.
    PubSub.publish('WordCounter:result', result)

  })
};

WordCounter.prototype.countWords = function (string) {
  return string.split(" ").length;
};

module.exports = WordCounter;
