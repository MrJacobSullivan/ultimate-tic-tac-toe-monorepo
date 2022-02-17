import * as React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>Ultimate Tic-Tac-Toe</h1>

      {/* <nav className={styles.}>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
      </nav> */}
    </header>
  );
};

export default Header;
