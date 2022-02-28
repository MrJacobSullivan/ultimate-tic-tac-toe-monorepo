import { State } from 'engine';
import { Message, Player, Players } from './types/data';

// TODO: store these values in Redis

export const adminUser: Player = {
  id: 'admin',
  games: ['*']
};

export const players: Record<string, Player> = {};

export const games: Record<
  string,
  {
    open: boolean;
    state: State;
    players: Players;
    messages: Message;
  }
> = {};
