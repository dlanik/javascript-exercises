const reverseString = function (input) {
  let splitInput = input.split('');
  splitInput.reverse();
  return splitInput.join('');
};

// Do not edit below this line
module.exports = reverseString;
