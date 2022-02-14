// import { Errors } from '../types';

export const expectedState = {
  updateState: {
    board: [
      ['X', null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null]
    ],
    mark: 'O',
    history: [{ i: 0, j: 0 }],
    recent: { i: 0, j: 0 },
    winner: false,
    error: null
  },
  localBoardWin: {
    board: [
      'X',
      ['O', 'X', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null]
    ],
    mark: 'O',
    history: [
      { i: 0, j: 0 },
      { i: 0, j: 1 },
      { i: 1, j: 1 },
      { i: 1, j: 0 },
      { i: 0, j: 3 },
      { i: 3, j: 0 },
      { i: 0, j: 6 }
    ],
    recent: { i: 0, j: 6 },
    winner: false,
    error: null
  },
  localBoardDraw: {
    board: [
      [null, null, null, null, null, null, null, null, null],
      ['O', 'X', null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, 'O', null],
      [null, null, null, null, null, null, null, null, null]
    ],
    mark: 'X',
    history: [
      { i: 0, j: 0 },
      { i: 0, j: 1 },
      { i: 1, j: 1 },
      { i: 1, j: 0 },
      { i: 0, j: 4 },
      { i: 4, j: 0 },
      { i: 0, j: 2 },
      { i: 2, j: 0 },
      { i: 0, j: 5 },
      { i: 5, j: 0 },
      { i: 0, j: 7 },
      { i: 7, j: 7 },
      { i: 7, j: 0 },
      { i: 0, j: 3 },
      { i: 3, j: 0 },
      { i: 0, j: 6 },
      { i: 6, j: 0 },
      { i: 0, j: 8 }
    ],
    recent: { i: 0, j: 8 },
    winner: false,
    error: null
  }
};
