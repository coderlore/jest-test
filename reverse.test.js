const reverse = require('./reverse');

test('returns the reversed string', () => {
  expect(reverse('john')).toBe('nhoj');
});