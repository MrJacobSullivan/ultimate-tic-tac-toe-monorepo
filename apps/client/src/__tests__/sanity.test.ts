import { add } from '../lib/add';

describe('sanity', () => {
  test('should return true', () => {
    expect(add(1, 1)).toBe(2);
  });
});
