import { CoordinatePair, State, Errors } from '../types';

export const validateMove = ({
  state,
  move
}: {
  state: State;
  move: CoordinatePair;
}) => {
  if (state.winner) {
    throw new Error(Errors.GameOver);
  } else if (
    state.recent &&
    state.recent.j !== move.i &&
    state.board[state.recent.j].length !== 1
  ) {
    throw new Error(Errors.IllegalMove);
  } else if (state.board[move.i].length === 1) {
    throw new Error(Errors.GlobalCellOccupied);
  } else if (state.board[move.i][move.j] !== null) {
    throw new Error(Errors.LocalCellOccupied);
  }
};
