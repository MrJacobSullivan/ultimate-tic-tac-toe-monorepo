import * as React from 'react';
import logger from 'use-reducer-logger';
import {
  place,
  set,
  initialState as defaultState,
  State,
  CoordinatePair
} from 'engine';
import {
  ApplicationReducerActions,
  ApplicationReducerActionType
} from '../types';
import { Socket } from 'socket.io-client';

export const useApplicationContextReducer = (
  initialState: State
): {
  state: State;
  socket?: Socket;
  setSocket: (socket: Socket) => void;
  handlePlace: (move: CoordinatePair) => void;
  handleSet: (history: History) => void;
  handleReset: () => void;
} => {
  const [socket, setSocket] = React.useState<Socket>();

  const [state, dispatch] = React.useReducer(
    logger((state: State, action: ApplicationReducerActionType) => {
      switch (action.type) {
        case ApplicationReducerActions.PLACE:
          return place({ state, move: action.move });
        case ApplicationReducerActions.SET:
          return set({ state, history: action.history });
        case ApplicationReducerActions.RESET:
          return defaultState;
      }
    }),
    initialState
  );

  const handlePlace = React.useCallback(async (move: CoordinatePair) => {
    dispatch({
      type: ApplicationReducerActions.PLACE,
      move
    });

    try {
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSet = React.useCallback((history: History) => {
    dispatch({
      type: ApplicationReducerActions.SET,
      history
    });
  }, []);

  const handleReset = React.useCallback(() => {
    dispatch({
      type: ApplicationReducerActions.RESET
    });
  }, []);

  return { state, socket, setSocket, handlePlace, handleSet, handleReset };
};