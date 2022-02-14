import { ActionInput } from '../types';
import { WINNING_COMBINATIONS } from './constants';

const determineWinner = (cb: (index: number) => boolean) => {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => cb(index));
  });
};

export const determineLocalWinner = ({ state, move }: ActionInput): boolean => {
  return determineWinner((index) => {
    return state.board[move.i][index] === state.mark;
  });
};

export const determineGlobalWinner = ({ state }: ActionInput): boolean => {
  return determineWinner((index) => {
    return state.board[index] === state.mark;
  });
};
