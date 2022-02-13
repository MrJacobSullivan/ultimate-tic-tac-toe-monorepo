import * as React from 'react';
import logger from 'use-reducer-logger';
import Engine, { CoordinatePair, History } from 'engine';
import { GameReducerActions, GameReducerActionType } from '../types';

export const useGameStateReducer = (
  initial: Engine
): {
  engine: Engine;
  handlePlace: (move: CoordinatePair) => void;
  handleSet: (history: History) => void;
  handleReset: () => void;
} => {
  const [engine, dispatch] = React.useReducer(
    logger((engine: Engine, action: GameReducerActionType) => {
      switch (action.type) {
        case GameReducerActions.PLACE:
          engine.place(action.move);
          return engine;
        case GameReducerActions.SET:
          engine.set(action.history);
          return engine;
        case GameReducerActions.RESET:
          engine.reset();
          return engine;
      }
    }),
    initial
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

  return { engine, handlePlace, handleSet, handleReset };
};
