import { place } from '../../actions';
import { initialState } from '../../lib/constants';
import { expectedState } from '../../helpers/expectedState';

describe('updateState', () => {
  let state = initialState;

  test('updates state when called once', () => {
    state = place({ state, move: { i: 0, j: 0 } });
    expect(state).toMatchObject(expectedState.updateState);
  });
});
