import * as React from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config';
import { CoordinatePair } from 'engine';

export const useWebSocket = ({
  onConnected
}: {
  onConnected?: (socket: Socket) => void;
}) => {
  const ref = React.useRef<Socket>();
  const [histories, setHistories] = React.useState<CoordinatePair[][]>([]);
  const [rooms, setRooms] = React.useState<string[]>([]);

  const customEvent = (data: any) => {
    ref.current!.emit('custom_event', data);
  };

  const createGame = () => {
    ref.current!.emit('createGame');
  };

  const joinGame = (roomId: string) => {
    ref.current!.emit('joinGame', { roomId });
  };

  const placeMark = (history: CoordinatePair[]) => {
    ref.current!.emit('placeMark', {
      newHistory: history
    });
  };

  React.useEffect(() => {
    const socket = io(SOCKET_URL);

    // socket.emit('connection');

    // socket.emit('stateUpdate', (history: CoordinatePair[]) => {
    //   setHistories((prevState) => [...prevState, history]);
    // });

    // socket.on('rooms', ({ rooms }: { rooms: string[] }) => {
    //   setRooms(rooms);
    // });

    // socket.on('disconnecting', () => {
    //   console.log('disconnecting');
    // });

    socket.on('connect', () => {
      console.log('connected in hook');
      if (onConnected) onConnected(socket);
    });

    // socket.on('reconnect', () => {
    //   socket.emit('connection');
    // });

    ref.current = socket;

    return () => {
      socket.disconnect();
    };
  }, [onConnected]);

  return { customEvent };
};
