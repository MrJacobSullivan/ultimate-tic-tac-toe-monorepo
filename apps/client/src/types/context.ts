import { State } from 'engine';
import { useGameContextReducer } from '../hooks/useGameContextReducer';

export enum GameContextReducerActions {
  SET_STATE = 'set_state',
  RESET = 'reset'
}

export type GameContextReducerActionType =
  | { type: GameContextReducerActions.SET_STATE; state: State }
  | { type: GameContextReducerActions.RESET };

export type GameContextResult = ReturnType<typeof useGameContextReducer>;
