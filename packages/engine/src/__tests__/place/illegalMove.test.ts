import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { CoordinatePair, Errors } from '../../types';

describe('illegalMove', () => {
  let state = initialState;

  test('enforces playable next local board rule', () => {
    const expectedState = {
      board: [
        ['X', null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
      ],
      mark: 'O',
      history: [{ i: 0, j: 0 }],
      recent: { i: 0, j: 0 },
      winner: false,
      error: Errors.IllegalMove
    };

    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 4, j: 0 }
    ];

    state = moves.reduce((acc, cur) => {
      return place({ state: acc, move: cur });
    }, state);

    expect(state).toMatchObject(expectedState);
  });
});
