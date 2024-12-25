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
  if (!str) return '';
  let letter = str[0];
  let result = '';
  let count = 0;
  for (curr of str) {
    if (curr === letter) {
      count += 1;
    } else {
      count === 1 ? result += letter : result += count + letter;
      count = 1;
      letter = curr;
    }
  }
  result += (count === 1 ? letter : count + letter)
  return result;
}

module.exports = {
  encodeLine
};
