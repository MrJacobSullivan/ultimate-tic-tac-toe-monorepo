import add from '../lib/add';

describe('add', () => {
  test('it should add correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
