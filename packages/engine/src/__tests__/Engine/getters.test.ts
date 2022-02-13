import Engine from '../../Engine';
import { expectedInitialState } from '../../helpers/gameState';

describe('GameState getter methods', () => {
  const engine = new Engine();

  test('getter methods return the correct values', () => {
    expect(engine.initial).toMatchObject(expectedInitialState);
    expect(engine.board).toMatchObject(expectedInitialState.board);
    expect(engine.mark).toBe(expectedInitialState.mark);
    expect(engine.history).toMatchObject(expectedInitialState.history);
    expect(engine.winner).toBe(expectedInitialState.winner);
    expect(engine.recent).toBe(null);
    expect(engine.gameState).toMatchObject(expectedInitialState);
    expect(engine.turnCount).toBe(0);
  });
});
