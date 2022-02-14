import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { expectedState, moves } from '../../helpers';

describe('localBoardWin', () => {
  let state = initialState;

  test('handles local board win', () => {
    state = moves.localBoardWin.reduce((acc, cur) => {
      return place({ state: acc, move: cur });
    }, state);

    expect(state).toMatchObject(expectedState.localBoardWin);
  });
});
