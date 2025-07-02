const { add, sub } = require('./calcule');

test('addition de 2 et 3', () => {
  expect(add(2, 3)).toBe(5);
});

test('soustraction de 5 et 2', () => {
  expect(sub(5, 2)).toBe(3);
});