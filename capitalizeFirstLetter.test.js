const capitalizeFirstLetter = require('./capitalizeFirstLetter');

test('returns the first letter capitalized', () => {
  expect(capitalizeFirstLetter('john')).toBe('John');
});