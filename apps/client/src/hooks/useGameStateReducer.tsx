import * as React from 'react';
import logger from 'use-reducer-logger';
import {
  place,
  set,
  initialState as defaultState,
  State,
  CoordinatePair
} from 'engine';
import { GameReducerActions, GameReducerActionType } from '../types';

export const useGameStateReducer = (
  initialState: State
): {
  state: State;
  handlePlace: (move: CoordinatePair) => void;
  handleSet: (history: History) => void;
  handleReset: () => void;
} => {
  const [state, dispatch] = React.useReducer(
    logger((state: State, action: GameReducerActionType) => {
      switch (action.type) {
        case GameReducerActions.PLACE:
          return place({ state, move: action.move });
        case GameReducerActions.SET:
          return set({ state, history: action.history });
        case GameReducerActions.RESET:
          return defaultState;
      }
    }),
    initialState
  );

  const handlePlace = React.useCallback((move: CoordinatePair) => {
    dispatch({
      type: GameReducerActions.PLACE,
      move
    });
  }, []);

  const handleSet = React.useCallback((history: History) => {
    dispatch({
      type: GameReducerActions.SET,
      history
    });
  }, []);

  const handleReset = React.useCallback(() => {
    dispatch({
      type: GameReducerActions.RESET
    });
  }, []);

  return { state, handlePlace, handleSet, handleReset };
};
