import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import GameContainer from '../components/Game/GameContainer';
import styles from './Home.module.scss';

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <GameContainer />
      {/* <button onClick={() => navigate('/play')}>Play</button>
      <button onClick={() => navigate('/practice')}>Practice</button>
      <button onClick={() => navigate('/learn')}>Learn</button> */}
    </div>
  );
};

export default Home;
