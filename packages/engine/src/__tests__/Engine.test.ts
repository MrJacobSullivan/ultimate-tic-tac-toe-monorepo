import Engine from '../Engine';
import { Player } from '../types';

describe('Engine', () => {
  test('it should initialize with the correct state', () => {
    const engine = new Engine();
    const expected = {
      board: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
      ],
      playable: null,
      history: [],
      recent: null,
      winner: false,
      mark: Player.X
    };
    expect(engine.state).toMatchObject(expected);
  });
});
