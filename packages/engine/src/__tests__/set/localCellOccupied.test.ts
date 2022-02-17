import { set } from '../../actions';
import { initialState } from '../../lib/constants';
import { CoordinatePair, Errors } from '../../types';

describe('set localCellOccupied', () => {
  let state = initialState;

  test('enforces only empty cell rule', () => {
    const expectedState = {
      ...initialState,
      error: Errors.LocalCellOccupied
    };

    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 0, j: 0 }
    ];

    state = set({ state, history: moves });

    expect(state).toMatchObject(expectedState);
  });
});
