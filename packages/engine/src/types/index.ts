export type Coordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface CoordinatePair {
  i: Coordinate;
  j: Coordinate;
}

export type Mark = 'X' | 'O';

export type Winner = Mark | false;

export type History = CoordinatePair[];

export type Cell = Mark | null;

export type LocalBoard = Cell[] | Mark;
export type GlobalBoard = LocalBoard[];

export interface State {
  board: GlobalBoard;
  mark: Mark;
  history: History;
  winner: Winner;
}

export type Partial<T> = {
  [P in keyof T]?: T[P];
};
