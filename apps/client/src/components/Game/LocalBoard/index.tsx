import * as React from 'react';
import { Coordinate } from 'engine';
import { range } from '../../../utils';
import styles from './LocalBoard.module.scss';

import LocalSquare from '../LocalSquare';

const LocalBoard = ({ i }: { i: Coordinate }) => {
  return (
    <div className={styles.localBoard}>
      {range(9).map((j: number) => (
        <LocalSquare key={j} i={i} j={j as Coordinate} />
      ))}
    </div>
  );
};

export default LocalBoard;
