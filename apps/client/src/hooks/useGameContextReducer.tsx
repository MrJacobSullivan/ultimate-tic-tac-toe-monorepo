import * as React from 'react';
import logger from 'use-reducer-logger';
import { initialState as defaultState, State } from 'engine';
import {
  GameContextReducerActions,
  GameContextReducerActionType
} from '../types';

export const useGameContextReducer = (
  initialState: State
): {
  state: State;
  setState: (state: State, callback?: (success: boolean) => void) => void;
  resetState: (callback?: (success: boolean) => void) => void;
} => {
  const [state, dispatch] = React.useReducer(
    (state: State, action: GameContextReducerActionType) => {
      switch (action.type) {
        case GameContextReducerActions.SET_STATE:
          return { ...state, ...action.state };
        case GameContextReducerActions.RESET:
          return defaultState;
      }
    },
    initialState
  );

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const setState = React.useCallback((state: State) => {
    dispatch({ type: GameContextReducerActions.SET_STATE, state });
  }, []);

  const resetState = React.useCallback(() => {
    dispatch({
      type: GameContextReducerActions.RESET
    });
  }, []);

  return { state, setState, resetState };
};
