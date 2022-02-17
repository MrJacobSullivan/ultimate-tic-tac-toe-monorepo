import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Ultimate Tic-Tac-Toe</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
      </nav>
    </header>
  );
};

export default Header;
