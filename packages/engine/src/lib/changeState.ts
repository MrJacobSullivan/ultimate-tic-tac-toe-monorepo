import { ActionInput, State } from '../types';

export const declareWinner = ({ state, move }: ActionInput) => {
  return { ...state, winner: state.mark };
};

export const updateRecent = ({ state, move }: ActionInput) => {
  return { ...state, recent: move };
};

export const toggleMark = ({ state }: ActionInput): State => {
  return { ...state, mark: state.mark === 'X' ? 'O' : 'X' };
};

export const appendHistory = ({ state, move }: ActionInput) => {
  return { ...state, history: [...state.history, move] };
};

export const resetError = ({ state }: ActionInput) => {
  return { ...state, error: null };
};
