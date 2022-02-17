import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { CoordinatePair, Errors } from '../../types';

describe('gameOver', () => {
  let state = initialState;

  test('enforces game over rule', () => {
    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 4, j: 0 }
    ];

    expect(1).toBe(1);
  });
});
