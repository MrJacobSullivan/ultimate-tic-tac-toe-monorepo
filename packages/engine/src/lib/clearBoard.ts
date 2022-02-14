import { ActionInput } from '../types';
import { initialState } from './constants';

export const clearLocalBoard = ({ state, move }: ActionInput) => {
  let board = [...state.board];
  board[move.i] = initialState.board[0];
  return { ...state, board };
};
export const clearGlobalBoard = ({ state }: ActionInput) => {
  return { ...state, board: initialState.board };
};
