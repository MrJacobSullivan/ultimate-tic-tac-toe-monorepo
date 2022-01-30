import { Player } from './types/index';

interface Move {
  i: number;
  j: number;
}

interface GameState {
  board: (Player | null)[][];
  playable: null | Move;
  history: Move[];
  recent: null | Move;
  winner: Player | boolean;
  mark: Player;
}

export default class Engine {
  private dimensions = 9;

  private generateLocalBoard() {
    return [...Array(this.dimensions)].map(() => null);
  }

  private generateGlobalBoard() {
    return [...Array(this.dimensions)].map(() => this.generateLocalBoard());
  }

  private defaultState: GameState = {
    board: this.generateGlobalBoard(),
    playable: null,
    history: [],
    recent: null,
    winner: false,
    mark: Player.X
  };

  public state = this.defaultState;
  constructor(state?: GameState) {
    if (state) this.state = state;
  }

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

  public placeMark(i: number, j: number) {
    const board = this.state.board.map((globalBoard, g) => {
      if (i !== g) return globalBoard;
      return globalBoard.map((localBoard, l) => {
        if (j !== l) return localBoard;
        return this.state.mark;
      });
    });

    this.state.board = board as Player[][] | null[][];
    return board;
  }

  private determinWin(i: number) {
    return this.WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return this.state.board[i][index] === this.state.mark;
      });
    });
  }

  private determineDraw(i: number) {
    return this.state.board[i].every(
      (cell) => cell !== null && cell.length === 1
    );
  }

  private determinePlayable(i: number, j: number) {
    return this.state.board[i].length !== 1 ? j : null;
  }

  private determineGameBoard(i: number) {
    const localWinner = this.determinWin(i);
    const localDraw = this.determineDraw(i);

    if (localWinner) {
      const board = this.state.board.map((globalBoard, g) => {
        if (i !== g) return globalBoard;
        return this.state.mark;
      });
      this.state.board = board as Player[][] | null[][];
    }

    if (localDraw) {
      const board = this.state.board.map((globalBoard, g) => {
        if (i !== g) return globalBoard;
        return this.generateLocalBoard();
      });
      this.state.board = board as Player[][] | null[][];
    }

    return this.state.board;
  }

  private deriveGameState(state: GameState, move: Move) {
    const determinedBoard = this.determineGameBoard(move.i);

    const globalWinner = this.determinWin(move.i);
    const globalDraw = this.determineDraw(move.i);

    const derivedBoard = globalDraw
      ? this.generateGlobalBoard()
      : determinedBoard;

    const board = derivedBoard;
    const playable = move;
    const history = [...this.state.history, move];
    const winner = globalWinner ? this.state.mark : false;
    const mark = this.state.mark === Player.X ? Player.O : Player.X;

    this.state = { ...this.state, board, playable, history, winner, mark };
    return this.state;
  }

  public constructGameState(history: Move[]) {
    return history.reduce((state: GameState, current: Move): GameState => {
      return this.deriveGameState(state, current);
    }, this.defaultState);
  }
}
