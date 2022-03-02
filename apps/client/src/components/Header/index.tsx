import * as React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>Ultimate Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
