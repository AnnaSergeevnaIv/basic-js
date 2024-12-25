const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let index = 0;
      console.log('element', arr[j])
      if (arr[j] === -1) continue;
      while (arr[j + 1 + index] === -1) {
        console.log('index', index)
        index += 1;
      }
      if (arr[j + 1 + index] < arr[j]) {
        console.log('compare', arr[j + 1 + index], arr[j])
        let temp = arr[j]
        arr[j] = arr[j + 1 + index]
        arr[j + 1 + index] = temp
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
