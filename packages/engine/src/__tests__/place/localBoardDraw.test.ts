import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { expectedState, moves } from '../../helpers';

describe('localBoardDraw', () => {
  let state = initialState;

  test('handles local board draw', () => {
    state = moves.localBoardDraw.reduce((acc, cur) => {
      return place({ state: acc, move: cur });
    }, state);

    expect(state).toMatchObject(expectedState.localBoardDraw);
  });
});
