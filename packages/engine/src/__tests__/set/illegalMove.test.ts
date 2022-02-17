import { set } from '../../actions';
import { initialState } from '../../lib/constants';
import { CoordinatePair, Errors } from '../../types';

describe('illegalMove', () => {
  let state = initialState;

  test('enforces playable next local board rule', () => {
    const expectedState = {
      ...initialState,
      error: Errors.IllegalMove
    };

    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 4, j: 0 }
    ];

    state = set({ state, history: moves });

    expect(state).toMatchObject(expectedState);
  });
});
