const add = require('./calculator');

test('returns the calculated values', () => {
    expect(add(2,2)).toEqual(4);
});