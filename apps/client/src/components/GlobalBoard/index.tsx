import * as React from 'react';
import { Coordinate } from 'engine';
import GlobalSquare from '../GlobalSquare';
import CoordinateCell from '../Cells/CoordinateCell';
import EmptyCell from '../Cells/EmptyCell';
import { range } from '../../utils/range';
import {
  calcuateAlphaCoordinate,
  calculateNumericCoordinate
} from '../../utils/coordinate';
import type { CoordinateCellValue } from '../Cells/CoordinateCellValue';
import styles from './GlobalBoard.module.scss';

const GlobalBoard = () => {
  return (
    <div className={styles.globalBoard}>
      {range(16).map((i: number) => {
        if (i === 12) {
          return <EmptyCell key={i} className={styles.emptyCell} />;
        }

        if (i >= 13) {
          return (
            <div key={i} className={styles.horizontalCoordinateContainer}>
              {range(3).map((k: number) => {
                const value = calcuateAlphaCoordinate({ i, k });
                return (
                  <CoordinateCell
                    key={k}
                    value={value as CoordinateCellValue}
                    className={styles.horizontalCoordinate}
                  />
                );
              })}
            </div>
          );
        }

        if (i % 4 === 0) {
          return (
            <div key={i} className={styles.verticalCoordinateContainer}>
              {range(3).map((k: number) => {
                const value = calculateNumericCoordinate({ i, k });
                return (
                  <CoordinateCell
                    key={k}
                    value={value as CoordinateCellValue}
                    className={styles.verticalCoordinate}
                  />
                );
              })}
            </div>
          );
        }

        const value = () => {
          if (i <= 4) return i - 1;
          if (i <= 7) return i - 2;
          return i - 3;
        };
        return <GlobalSquare key={i} i={value() as Coordinate} />;
      })}
    </div>
  );
};

export default GlobalBoard;
