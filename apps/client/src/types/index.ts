import { CoordinatePair, History } from 'engine';
import { useGameStateReducer } from 'src/hooks/useGameStateReducer';

export enum GameReducerActions {
  PLACE = 'place',
  SET = 'set',
  RESET = 'reset'
}

export type GameReducerActionType =
  | { type: GameReducerActions.PLACE; move: CoordinatePair }
  | { type: GameReducerActions.SET; history: History }
  | { type: GameReducerActions.RESET };

export type GameContextResult = ReturnType<typeof useGameStateReducer>;
