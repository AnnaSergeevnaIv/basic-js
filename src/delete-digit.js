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
  let string = String(n);
  let array = [];
  for (let i = 0; i < string.length; i += 1) {
    array.push(+(string.slice(0 , i) + string.slice(i + 1)));
  }
  console.log(array.sort((a, b) => b - a))
  return array.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
