import { helloWorld } from '../lib/helloWorld';

describe('sanity test', () => {
  test('it should return true', () => {
    expect(helloWorld()).toBe('hello, world');
  });
});
