const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = n.split('-');
  if (array.length < 6) return false;
    for (letters of array) {
      if (letters[0] > 'F' || letters[0] < 0 || letters[0] > 9 && letters[0] < 'A') return false;
      if (letters[1] > 'F' || letters[1] < 0 || letters[1] > 9 && letters[1] < 'A') return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
