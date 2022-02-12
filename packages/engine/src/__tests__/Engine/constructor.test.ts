import Engine from '../../Engine';
import { expectedInitialState } from '../../helpers/gameState';

describe('GameState constructor', () => {
  const engine = new Engine();

  test('GameState begins with the correct values', () => {
    expect(engine.gameState).toMatchObject(expectedInitialState);
    expect(engine.board).toMatchObject(expectedInitialState.board);
    expect(engine.mark).toBe(expectedInitialState.mark);
    expect(engine.history).toMatchObject(expectedInitialState.history);
    expect(engine.winner).toBe(expectedInitialState.winner);
    expect(engine.recent).toBe(null);
  });
});
