import { ActionInput, Cell } from '../types';

export const determineLocalDraw = ({ state, move }: ActionInput): boolean => {
  if (typeof state.board[move.i] !== 'string') {
    const board = state.board[move.i] as Cell[];
    if (board.length === 1) return false;
    return board.every((cell) => cell !== null);
  }
  return false;
};

export const determineGlobalDraw = ({ state }: ActionInput): boolean => {
  return state.board.every((cell) => cell.length === 1);
};
