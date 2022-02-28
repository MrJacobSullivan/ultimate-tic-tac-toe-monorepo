import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.title}>
        Ultimate Tic-Tac-Toe
      </Link>

      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/play" className={styles.link}>
          Play
        </Link>
      </nav>
    </header>
  );
};

export default Header;
