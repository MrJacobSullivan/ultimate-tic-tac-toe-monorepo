import * as React from 'react';
import styles from '../styles/Button.module.scss';

export const Button = ({ ...rest }) => {
  return (
    <button className={styles.container} {...rest}>
      Boop
    </button>
  );
};
