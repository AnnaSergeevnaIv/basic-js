const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.max = 0;
  }
  calculateDepth(arr) {
    this.max += 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i])
      }
    }
    this.depth = Math.max(this.max, this.depth)
    this.max -= 1;
    if (this.max === 0) {
      let result = this.depth
      this.depth = 0
      this.max = 0
      return result
    }
  }
}

module.exports = {
  DepthCalculator
};
