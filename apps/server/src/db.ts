import { State } from 'engine';

// TODO: store these values in Redis

export const socketIdToClientIds: Record<string, string> = {};
export const clientIdsToRoomIds: Record<string, string> = {};
export const roomIdsToGameStates: Record<
  string,
  {
    state: State;
    players: {
      X: string | null;
      O: string | null;
    };
    active: boolean;
  }
> = {};
