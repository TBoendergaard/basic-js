const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstString = s1.split("").sort(),
    secondString = s2.split("").sort();

  let counter = 0;
  firstString.forEach((char, index) => {
    if (secondString.includes(char)) {
      secondString.splice(index - 1, 1);
      counter++;
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
