import { GlobalBoard, LocalBoard, State, CoordinatePair, Cell } from './types';

export default class GameState {
  private state: State;

  private WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  private constructBoard(): GlobalBoard {
    return [...(Array(9) as LocalBoard)].map(() => {
      return [...Array(9)].map(() => null);
    });
  }

  private initialState: State = {
    board: this.constructBoard(),
    mark: 'X',
    history: [],
    winner: false
  };

  constructor() {
    this.state = { ...this.initialState };
  }

  get initial() {
    return this.initialState;
  }

  get board() {
    return this.state.board;
  }

  get mark() {
    return this.state.mark;
  }

  get history() {
    return this.state.history;
  }

  get winner() {
    return this.state.winner;
  }

  get recent() {
    if (!this.history.length) return null;
    return this.history[this.history.length - 1];
  }

  get gameState() {
    return this.state;
  }

  get turnCount() {
    return this.history.length;
  }

  // WIP - set to private
  private get legalMoves(): CoordinatePair[] {
    if (this.recent) {
      const board = this.board[this.recent.i];
      if (typeof board === 'string') {
        // TODO: figure out efficient way to implement this function
      }
    }
    return [];
  }

  private validateMove(move: CoordinatePair) {
    if (this.recent === null) return;
    if (this.recent.j === move.i) {
      if (this.board[move.i][move.j] === null) return;
    }
    throw new Error();
  }

  private clearLocalBoard(move: CoordinatePair) {
    this.state.board[move.i] = this.initialState.board[move.i];
  }

  private clearGlobalBoard() {
    this.state.board = this.initialState.board;
  }

  private placeLocal(move: CoordinatePair) {
    let board = [...this.state.board];
    const localBoard = board[move.i];

    if (localBoard.length === 1) throw new Error();
    else if (localBoard[move.j] !== null) throw new Error('hello, world');
    else {
      this.state.board = board.map((globalCell, g) => {
        if (move.i !== g) return globalCell;
        if (typeof globalCell === 'string') {
          return globalCell;
        } else {
          return globalCell.map((localCell, l) => {
            if (move.j !== l) return localCell;
            return this.state.mark;
          });
        }
      });
    }
  }

  private placeGlobal(move: CoordinatePair) {
    let board = [...this.state.board];
    const localBoard = board[move.i];

    if (localBoard.length === 1) throw new Error();
    else {
      board[move.i] = this.state.mark;
      this.state.board = board;
    }
  }

  private determineWinner(cb: (index: number) => boolean) {
    return this.WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => cb(index));
    });
  }

  private determineLocalWinner(move: CoordinatePair) {
    return this.determineWinner((index) => {
      return this.board[move.i][index] === this.mark;
    });
  }

  private determineGlobalWinner() {
    return this.determineWinner((index) => {
      return this.board[index] === this.mark;
    });
  }

  private determineLocalDraw(move: CoordinatePair) {
    if (typeof this.board[move.i] !== 'string') {
      const board = this.board[move.i] as Cell[];
      if (board.length === 1) return false;
      return board.every((cell) => cell !== null);
    }
    return false;
  }

  private determineGlobalDraw() {
    return this.board.every((cell) => cell.length === 1);
  }

  private determineGameState(move: CoordinatePair) {
    this.placeLocal(move);

    const localWinner = this.determineLocalWinner(move);
    if (localWinner) this.placeGlobal(move);

    const localDraw = this.determineLocalDraw(move);
    if (localDraw) this.clearLocalBoard(move);

    const globalWinner = this.determineGlobalWinner();
    if (globalWinner) this.state.winner = this.mark;

    const globalDraw = this.determineGlobalDraw();
    if (globalDraw) this.clearGlobalBoard();

    this.state.mark = this.mark === 'X' ? 'O' : 'X';
    this.state.history = [...this.state.history, move];
  }

  public reset() {
    this.state = { ...this.initialState };
  }

  public place(move: CoordinatePair) {
    const cachedState = { ...this.state };
    if (this.winner) throw new Error();

    try {
      this.validateMove(move);
      this.determineGameState(move);
    } catch (err) {
      this.state = { ...cachedState };
    }
  }

  public set(history: CoordinatePair[]) {
    const cachedState = { ...this.state };
    this.reset();
    try {
      history.forEach((move) => {
        this.validateMove(move);
        this.determineGameState(move);
      });
    } catch (err) {
      this.state = { ...cachedState };
    }
  }
}
