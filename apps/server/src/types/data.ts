export interface Player {
  id: string;
  games: string[];
}

export interface Players {
  X: string | null;
  O: string | null;
}

export interface MessageType {
  id: string;
  player: Player;
  value: string;
}

export type Message = Set<MessageType>;
