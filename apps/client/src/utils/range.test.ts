import { range } from './range';

test('should generate an array of increasing numbers', () => {
  const result = range(9);
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  expect(result).toMatchObject(expected);
});
