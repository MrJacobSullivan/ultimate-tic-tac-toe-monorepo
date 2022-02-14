import { State } from '../types';
import { constructBoard } from './constructBoard';

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const initialState: State = {
  board: constructBoard(),
  mark: 'X',
  history: [],
  recent: null,
  winner: false,
  error: null
};
