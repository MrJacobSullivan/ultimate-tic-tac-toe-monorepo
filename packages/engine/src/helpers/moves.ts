import { CoordinatePair } from '../types';

export const moves = {
  localBoardWin: [
    { i: 0, j: 0 },
    { i: 0, j: 1 },
    { i: 1, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: 3 },
    { i: 3, j: 0 },
    { i: 0, j: 6 }
  ] as CoordinatePair[],
  localBoardDraw: [
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
  ] as CoordinatePair[]
};
