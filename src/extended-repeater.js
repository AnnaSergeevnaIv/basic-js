const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';
  options.separator = options.separator ?? '+';
  options.additionSeparator = options.additionSeparator ?? '|';
  options.repeatTimes = options.repeatTimes ?? 1;

  if (!options.additionRepeatTimes && addition) {
    options.additionRepeatTimes = 1;
  }
console.log(addition)
  for (let i = 0; i < options.repeatTimes; i += 1) {
    let string = str;
    for (let j = 0; j < options.additionRepeatTimes; j += 1) {
      console.log('gg')
      j === options.additionRepeatTimes - 1
        ? string += addition
        : string += addition + options.additionSeparator;
    }

    i === options.repeatTimes - 1
      ? result += string
      : result += string + options.separator;
  }
  return result;
}

module.exports = {
  repeater
};
