const capitalizeFirstLetter = require('../code/capitalizeFirstLetter');

test('returns the first letter capitalized', () => {
  expect(capitalizeFirstLetter('john')).toBe('John');
});