import * as React from 'react';
import Cross from './Cross';
import Circle from './Circle';
import { Mark as EngineMark } from 'engine';
import styles from './Mark.module.scss';

const Mark = ({
  value,
  global = false
}: {
  value: EngineMark;
  global?: boolean;
}) => {
  if (value === 'X') return <Cross large={global} className={styles.mark} />;
  return <Circle large={global} className={styles.mark} />;
};

export default Mark;
