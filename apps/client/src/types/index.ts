import { CoordinatePair, State } from 'engine';
import { useGameContextReducer } from '../hooks/useGameContextReducer';

export enum GameContextReducerActions {
  SET_STATE = 'set_state',
  RESET = 'reset'
}

export type GameContextReducerActionType =
  | { type: GameContextReducerActions.SET_STATE; state: State }
  | { type: GameContextReducerActions.RESET };

export type GameContextResult = ReturnType<typeof useGameContextReducer>;

export type CoordinateCellValue =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'h'
  | 'i'
  | 'j'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9;
