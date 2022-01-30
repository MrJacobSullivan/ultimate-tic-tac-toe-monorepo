import { range } from '../utils';

describe('range', () => {
  test('it should return the correct range', () => {
    const expected = [0, 1, 2, 3];
    expect(range(4)).toMatchObject(expected);
  });
});
