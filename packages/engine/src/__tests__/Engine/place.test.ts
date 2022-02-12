import Engine from '../../Engine';
import { expectedInitialState } from '../../helpers/gameState';
import { CoordinatePair } from '../../types';

describe('Engine place() method', () => {
  let engine: Engine;

  const expectedState = {
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
    winner: false
  };

  beforeEach(() => {
    engine = new Engine();
  });

  afterEach(() => {
    engine.reset();
  });

  test('updates state on place', () => {
    engine.place({ i: 0, j: 0 });

    expect(engine.board).toMatchObject(expectedState.board);
    expect(engine.mark).toBe(expectedState.mark);
    expect(engine.history).toMatchObject(expectedState.history);
    expect(engine.winner).toBe(expectedState.winner);
  });

  test('ignores when trying to place in an occupied cell', () => {
    engine.place({ i: 0, j: 0 });
    engine.place({ i: 0, j: 0 });

    expect(engine.board).toMatchObject(expectedState.board);
    expect(engine.mark).toBe(expectedState.mark);
    expect(engine.history).toMatchObject(expectedState.history);
    expect(engine.winner).toBe(expectedState.winner);
  });

  test('correctly adds move to history', () => {
    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 0, j: 1 },
      { i: 1, j: 1 }
    ];

    moves.forEach((move) => engine.place(move));

    expect(engine.history).toMatchObject(moves);
  });

  test('enforces playable local boards rule', () => {
    engine.place({ i: 0, j: 0 });
    engine.place({ i: 4, j: 4 });

    expect(engine.board).toMatchObject(expectedState.board);
    expect(engine.mark).toBe(expectedState.mark);
    expect(engine.history).toMatchObject(expectedState.history);
    expect(engine.winner).toBe(expectedState.winner);
  });

  test('handles a localboard win', () => {
    const moves: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 0, j: 1 },
      { i: 1, j: 1 },
      { i: 1, j: 0 },
      { i: 0, j: 3 },
      { i: 3, j: 0 },
      { i: 0, j: 6 }
    ];

    moves.forEach((move) => engine.place(move));

    expect(engine.board[0]).toBe('X');
  });

  test('handles localboard draw', () => {
    const moves: CoordinatePair[] = [
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
    ];

    const expectedBoard = [
      [null, null, null, null, null, null, null, null, null],
      ['O', 'X', null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['O', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, null, null],
      ['X', null, null, null, null, null, null, 'O', null],
      [null, null, null, null, null, null, null, null, null]
    ];

    moves.forEach((move) => engine.place(move));

    expect(engine.board[0]).toMatchObject(expectedInitialState.board[0]);
    expect(engine.board).toMatchObject(expectedBoard);
    expect(engine.mark).toBe('X');
  });
});
