import add from '../lib/add';

describe('testing add', () => {
  test('it should add correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
