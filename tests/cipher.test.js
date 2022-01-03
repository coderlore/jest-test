const caesarCipher = require('../code/cipher');

test('returns each character shifted', () => {
    expect(caesarCipher("cab",1)).toBe("dbc");
});