import Engine from '../../Engine';
import { expectedInitialState } from '../../helpers/gameState';

describe('GameState reset method', () => {
  const engine = new Engine();

  beforeEach(() => {
    engine.place({ i: 0, j: 0 });
  });

  test('GameState begins with the correct values', () => {
    engine.reset();
    expect(engine.gameState).toMatchObject(expectedInitialState);
  });

  // TODO: more tests
});
