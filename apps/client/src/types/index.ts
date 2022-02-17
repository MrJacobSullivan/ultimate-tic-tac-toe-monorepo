import { CoordinatePair, History } from 'engine';
import { useApplicationContextReducer } from '../hooks/useApplicationContextReducer';

export enum ApplicationReducerActions {
  PLACE = 'place',
  SET = 'set',
  RESET = 'reset'
}

export type ApplicationReducerActionType =
  | { type: ApplicationReducerActions.PLACE; move: CoordinatePair }
  | { type: ApplicationReducerActions.SET; history: History }
  | { type: ApplicationReducerActions.RESET };

export type ApplicationContextResult = ReturnType<
  typeof useApplicationContextReducer
>;
