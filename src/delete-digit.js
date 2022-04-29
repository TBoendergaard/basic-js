const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitsArray = String(n).split('');

  let numbers = digitsArray.map((e, index, array) => {
    copy = array.slice(0);
    copy.splice(index, 1);
    return Number(copy.join(''));
  });

  return Math.max(...numbers);
}



module.exports = {
  deleteDigit
};
