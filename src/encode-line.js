const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }

  const encoded = str.match(/(.)\1*/g).map(item => {
    return `${item.length === 1 ? '' : item.length}` + item[0];
  })

  return encoded.join('');
}

module.exports = {
  encodeLine
};
