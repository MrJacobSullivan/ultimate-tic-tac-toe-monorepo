import { initialState } from './lib/constants';
import { CoordinatePair, State } from './types';
import { determineGameState } from './lib/determineGameState';

export const place = (
  {
    state,
    move
  }: {
    state: State;
    move: CoordinatePair;
  },
  callback?: (success: boolean) => void
): State => {
  const cachedState = { ...state };
  try {
    state = determineGameState({ state, move });
    if (callback) callback(true);
  } catch ({ message }) {
    state = cachedState;
    if (typeof message === 'string') {
      state.error = message;
      if (callback) callback(false);
    }
  }
  return state;
};

export const set = ({
  state,
  history
}: {
  state: State;
  history: CoordinatePair[];
}): State => {
  const cachedState = { ...state };
  state = initialState;
  try {
    state = history.reduce((currentState, move) => {
      return determineGameState({ state: currentState, move });
    }, state);
  } catch ({ message }) {
    state = cachedState;
    if (typeof message === 'string') {
      state.error = message;
    }
  }
  return state;
};
