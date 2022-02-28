import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <button onClick={() => navigate('/play')} className={styles.button}>
          Play
        </button>
        <button onClick={() => navigate('/practice')} className={styles.button}>
          Practice
        </button>
        {/* <button onClick={() => navigate('/learn')} className={styles.button}>
          Learn
        </button> */}
      </div>
    </div>
  );
};

export default Home;
