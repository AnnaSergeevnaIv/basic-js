const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let addition = String(value) ? `( ${String(value)} )` : `(  )`;
    if (this.chain.length !== 0) addition = '~~' + addition;
    this.chain += addition;
    console.log('chain', this.chain)
    return chainMaker;
  },
  removeLink(position) {
    let array = this.chain.split('~~');
    if (!Number.isInteger(position) || position - 1 >= array.length || position - 1 < 0) {
      this.finishChain()
      throw new Error("You can't remove incorrect link!")
    } else {
      array.splice(position - 1, 1)
      this.chain = array.join('~~')
      console.log(this.chain)
      return chainMaker;
    }
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~')
    console.log('reversed chain', this.chain)
    return chainMaker;
  },
  finishChain() {
    let result = this.chain;
    this.chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
