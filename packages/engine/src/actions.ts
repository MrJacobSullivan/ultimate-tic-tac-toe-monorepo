import { initialState } from './lib/constants';
import { CoordinatePair, State, History } from './types';
import { determineGameState } from './lib/determineGameState';

export const place = ({
  state,
  move
}: {
  state: State;
  move: CoordinatePair;
}): State => {
  const cachedState = { ...state };
  try {
    state = determineGameState({ state, move });
  } catch ({ message }) {
    state = cachedState;
    if (typeof message === 'string') {
      state.error = message;
    }
  }
  return state;
};

export const set = ({
  state,
  history
}: {
  state: State;
  history: History;
}): State => {
  const cachedState = { ...state };
  state = initialState;
  try {
    state = history.reduce((currentState, move) => {
      return { ...determineGameState({ state: currentState, move }) };
    }, {} as State);
  } catch ({ message }) {
    state = cachedState;
    if (typeof message === 'string') {
      state.error = message;
    }
  }
  return state;
};

export const validateState = ({
  previousState,
  newState
}: {
  previousState: State;
  newState: State;
}): boolean => {
  const combinedHistory = [
    ...(previousState.history as CoordinatePair[]),
    newState.recent as CoordinatePair
  ];

  if (newState.recent === undefined) return false;

  const expectedState = set({
    state: initialState,
    history: combinedHistory
  });

  expectedState.history.forEach((move, i) => {
    if (newState.history[i] !== move) return false;
  });

  return true;
};
