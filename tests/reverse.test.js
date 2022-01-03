const reverse = require('../code/reverse');

test('returns the reversed string', () => {
  expect(reverse('john')).toBe('nhoj');
});