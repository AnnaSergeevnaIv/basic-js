const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-next': i += 1; break;
      case '--discard-prev': arr[i - 1] === result[result.length - 1] ? result.pop() : null; break;
      case '--double-next': arr[i + 1] ? result.push(arr[i + 1]) : null; break;
      case '--double-prev': arr[i - 1] === result[result.length - 1] && arr[i - 1] ? result.push(arr[i - 1]): null; break;
      default: result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
