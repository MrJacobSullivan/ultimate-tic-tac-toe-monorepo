import * as React from 'react';
import Cross from './Cross';
import Circle from './Circle';
import { Mark as EngineMark } from 'engine';
import styles from './Mark.module.scss';

const Mark = ({
  value,
  small = false,
  global = false
}: {
  value: EngineMark;
  small?: boolean;
  global?: boolean;
}) => {
  if (value === 'X') {
    return <Cross large={global} small={small} className={styles.mark} />;
  }
  return <Circle large={global} small={small} className={styles.mark} />;
};

export default Mark;
