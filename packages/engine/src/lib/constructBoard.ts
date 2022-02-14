import { GlobalBoard } from '../types';

export const constructBoard = (): GlobalBoard => {
  return [...Array(9)].map(() => {
    return [...Array(9)].map(() => null);
  });
};
