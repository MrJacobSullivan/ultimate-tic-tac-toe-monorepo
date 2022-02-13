import Engine from 'engine';

describe('sanity', () => {
  test('should return true', () => {
    expect(new Engine().board).toBeTruthy();
  });
});
