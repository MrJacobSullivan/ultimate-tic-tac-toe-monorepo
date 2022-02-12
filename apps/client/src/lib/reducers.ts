import { GameState } from 'engine';
import * as Engine from 'engine';

enum Actions {
  PLACE,
  SET,
  RESET
}

export const reducer = ({
  state,
  action
}: {
  state: GameState;
  action: Actions;
}) => {
  switch (action) {
    case Actions.PLACE:
      return;
    case Actions.SET:
      return;
    case Actions.RESET:
      return;
  }
};
