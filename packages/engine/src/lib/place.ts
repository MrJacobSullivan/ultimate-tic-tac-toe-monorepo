import { State, ActionInput } from '../types';

export const placeLocal = ({ state, move }: ActionInput): State => {
  let board = [...state.board];

  board = board.map((globalCell, g) => {
    if (move.i !== g) return globalCell;
    if (typeof globalCell === 'string') return globalCell;
    else {
      return globalCell.map((localCell, l) => {
        if (move.j !== l) return localCell;
        return state.mark;
      });
    }
  });

  return { ...state, board };
};

export const placeGlobal = ({ state, move }: ActionInput): State => {
  let board = [...state.board];
  board[move.i] = state.mark;
  return { ...state, board };
};
