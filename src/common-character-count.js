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
  let s1Sorted = s1.split('').sort();
  let s2Sorted = s2.split('').sort().reverse();
  let count = 0;
  for (let i = 0; i < s1Sorted.length; i += 1) {
    let lastIndex = s2Sorted.length - 1;
    if (s2Sorted.includes(s1Sorted[i])) {
      if (s1Sorted[i] > s2Sorted[lastIndex]) {
        while(s1Sorted[i] > s2Sorted[lastIndex]) {
          s2Sorted.pop();
          lastIndex -= 1;
        }
      }
      if (s1Sorted[i] === s2Sorted[lastIndex]) {
        count += 1;
        s2Sorted.pop();
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
