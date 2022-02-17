import { set } from '../../actions';
import { initialState } from '../../lib/constants';
import { expectedState, moves } from '../../helpers';

describe('localBoardDraw', () => {
  let state = initialState;

  test('handles local board draw', () => {
    state = set({ state, history: moves.localBoardDraw });

    expect(state).toMatchObject(expectedState.localBoardDraw);
  });
});
