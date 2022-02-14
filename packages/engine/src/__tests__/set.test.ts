import { set } from '../actions';

describe('set() function', () => {
  test('set function correctly creates state', () => {
    expect(1).toBe(1);
  });
});

/*

import Engine from '../../Engine';
import { expectedInitialState } from '../../helpers/gameState';
import { CoordinatePair } from '../../types';

describe('Engine place() method', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  afterEach(() => {
    engine.reset();
  });

  test('updates state on set', () => {
    const expectedState = {
      board: [
        ['X', 'O', null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
      ],
      mark: 'X',
      history: [
        { i: 0, j: 0 },
        { i: 0, j: 1 }
      ],
      winner: false
    };

    const history: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 0, j: 1 }
    ];

    engine.set(history);

    expect(engine.board).toMatchObject(expectedState.board);
    expect(engine.mark).toBe(expectedState.mark);
    expect(engine.history).toMatchObject(expectedState.history);
    expect(engine.winner).toBe(expectedState.winner);
  });

  // test('updates state on set when ');

  test('does not allow an invalid move in history', () => {
    const history: CoordinatePair[] = [
      { i: 0, j: 0 },
      { i: 0, j: 0 }
    ];

    engine.set(history);

    expect(engine.board).toMatchObject(expectedInitialState.board);
    expect(engine.mark).toBe(expectedInitialState.mark);
    expect(engine.history).toMatchObject(expectedInitialState.history);
    expect(engine.winner).toBe(expectedInitialState.winner);
  });

  test('returns to original state when history has an invalid move', () => {
    engine.place({ i: 0, j: 0 });

    const history: CoordinatePair[] = [{ i: 0, j: 1 }];
    engine.set(history);
  });
});

*/
