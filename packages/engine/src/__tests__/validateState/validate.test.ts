import { validateState } from '../../actions';
import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { State } from '../../types';

describe('validate', () => {
  let state = initialState;

  test('returns true if valid state change', () => {
    const previousState = place({ state, move: { i: 0, j: 0 } });
    const newState = place({ state: previousState, move: { i: 0, j: 1 } });

    const actual = validateState({ previousState, newState });

    expect(actual).toBe(true);
  });

  test('returns false if invalid state change', () => {
    const previousState = place({ state, move: { i: 0, j: 0 } });
    const newState: State = {
      board: [
        'X',
        ['O', 'X', null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        ['O', null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
      ],
      mark: 'O',
      history: [
        { i: 0, j: 0 },
        { i: 0, j: 1 },
        { i: 1, j: 1 },
        { i: 1, j: 0 },
        { i: 0, j: 3 },
        { i: 3, j: 0 },
        { i: 0, j: 6 }
      ],
      recent: { i: 0, j: 6 },
      winner: false,
      error: null
    };

    const actual = validateState({ previousState, newState });

    expect(actual).toBe(false);
  });
});
