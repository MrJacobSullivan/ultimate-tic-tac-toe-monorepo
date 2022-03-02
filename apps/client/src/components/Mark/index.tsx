import * as React from 'react';
import { Mark as EngineMark } from 'engine';
import Cross from './Cross';
import Circle from './Circle';
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
  if (small) {
    return value === 'X' ? (
      <Cross className={styles.mark} svgClassName={styles.svg__small} />
    ) : (
      <Circle className={styles.mark} svgClassName={styles.svg__small} />
    );
  }

  if (global) {
    return value === 'X' ? (
      <Cross className={styles.mark} svgClassName={styles.svg__large} />
    ) : (
      <Circle className={styles.mark} svgClassName={styles.svg__large} />
    );
  }

  return value === 'X' ? (
    <Cross className={styles.mark} svgClassName={styles.svg} />
  ) : (
    <Circle className={styles.mark} svgClassName={styles.svg} />
  );
};

export default Mark;
