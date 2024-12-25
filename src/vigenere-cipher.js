const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.direct = value === false ? false : true;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    let index = 0;
    let result = '';
    for (let letter of message) {
      key[index] ? null : index = 0;
      if (letter.codePointAt(0) >= 65 && letter.codePointAt(0) <= 90) {
        let dif = key.codePointAt(index) - 65;
        dif = letter.codePointAt(0) + dif > 90 ? letter.codePointAt(0) + dif - 90 + 64 : letter.codePointAt(0) + dif
        result += String.fromCodePoint(dif)
        index++;
      } else result += letter;
    } 
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    let index = 0;
    let result = '';
    for (let letter of encryptedMessage) {
      key[index] ? null : index = 0;
      if (letter.codePointAt(0) >= 65 && letter.codePointAt(0) <= 90) {
        let dif = key.codePointAt(index) - 65;
        dif = letter.codePointAt(0) - dif < 65 ? letter.codePointAt(0) - 64 - dif + 90 : letter.codePointAt(0) - dif
        result += String.fromCodePoint(dif)
        index++;
      } else result += letter;
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
