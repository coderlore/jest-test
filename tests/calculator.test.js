const calculator = require('../code/calculator');

test('returns the added values', () => {
    expect(calculator.add(2,2)).toEqual(4);
});

test('returns the subtracted values', () => {
    expect(calculator.subtract(3,2)).toEqual(1);
});

test('returns the multiplied values', () => {
    expect(calculator.multiply(3,2)).toEqual(6);
});

test('returns the divided values', () => {
    expect(calculator.divide(14,2)).toEqual(7);
});