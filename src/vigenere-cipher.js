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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.square = new Array();
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      this.square[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
    }
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    this.generateSquare();
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    let result = new Array();
    let keyIndex = 0;

    result = message.map(char => {
      if (!this.alphabet.includes(char)) {
        return char;
      }

      const row = this.alphabet.indexOf(char);
      const col = this.alphabet.indexOf(key[keyIndex % key.length]);
      keyIndex++;
      return this.square[row][col];
    })

    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    this.generateSquare();
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    let result = new Array();
    let keyIndex = 0;

    result = message.map(char => {
      if (!this.alphabet.includes(char)) {
        return char;
      }

      const row = this.alphabet.indexOf(key[keyIndex % key.length]);
      const col = this.square[row].indexOf(char);
      keyIndex++;
      return this.alphabet[col];
    })

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
