import * as React from 'react';
import { initialState } from 'engine';
import GameBoard from '../GameBoard';
// import History from '../History';
// import ChatContainer from '../../Chat/ChatContainer';
import GameContextProvider from '../../../providers/GameContextProvider';

import styles from './GameContainer.module.scss';

const GameContainer = ({ socketsEnabled }: { socketsEnabled?: boolean }) => {
  return (
    <GameContextProvider initialState={initialState}>
      <div className={styles.gameContainer}>
        <div className={styles.gameArea}>
          <GameBoard />

          {/* <div className={styles.sidebar}>
          <History />
          <ChatContainer />
        </div> */}
        </div>
      </div>
    </GameContextProvider>
  );
};

export default GameContainer;
