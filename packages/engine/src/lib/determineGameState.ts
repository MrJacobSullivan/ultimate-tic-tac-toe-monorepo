import { State, ActionInput } from '../types';
import { validateMove } from './validateMove';
import { placeLocal, placeGlobal } from './place';
import { determineLocalWinner, determineGlobalWinner } from './determineWinner';
import { determineLocalDraw, determineGlobalDraw } from './determineDraw';
import { clearLocalBoard, clearGlobalBoard } from './clearBoard';
import {
  declareWinner,
  updateRecent,
  toggleMark,
  appendHistory,
  resetError
} from './changeState';

export const determineGameState = ({ state, move }: ActionInput): State => {
  validateMove({ state, move });
  state = placeLocal({ state, move });

  const localWinner = determineLocalWinner({ state, move });
  if (localWinner) {
    state = placeGlobal({ state, move });
  } else {
    const localDraw = determineLocalDraw({ state, move });
    if (localDraw) {
      state = clearLocalBoard({ state, move });
    }
  }

  const globalWinner = determineGlobalWinner({ state, move });
  if (globalWinner) state = declareWinner({ state, move });
  else {
    const globalDraw = determineGlobalDraw({ state, move });
    if (globalDraw) state = clearGlobalBoard({ state, move });
  }

  state = updateRecent({ state, move });
  state = toggleMark({ state, move });
  state = appendHistory({ state, move });

  state = resetError({ state, move });

  return state;
};
