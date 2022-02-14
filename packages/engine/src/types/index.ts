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

export enum Errors {
  GameOver = 'Game Over',
  IllegalMove = 'Illegal Move',
  GlobalCellOccupied = 'Global Cell Occupied',
  LocalCellOccupied = 'Local Cell Occupied'
}

export interface State {
  board: GlobalBoard;
  mark: Mark;
  history: History;
  recent: CoordinatePair | null;
  winner: Winner;
  error: string | null;
}

export interface ActionInput {
  state: State;
  move: CoordinatePair;
}
