import { set } from '../../actions';
import { initialState } from '../../lib/constants';
import { expectedState, moves } from '../../helpers';

describe('localBoardWin', () => {
  let state = initialState;

  test('handles local board win', () => {
    state = set({ state, history: moves.localBoardWin });

    expect(state).toMatchObject(expectedState.localBoardWin);
  });
});
