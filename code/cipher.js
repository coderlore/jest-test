function caesarCipher(string, shift) {
    let arrayOfAlphaIndex = [];
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i) + shift;
        while (code > 122) {
            code = (code - 122) + 96
        }
        arrayOfAlphaIndex.push(String.fromCharCode(code))
    }
    return arrayOfAlphaIndex.join('');
  }
  module.exports = caesarCipher;