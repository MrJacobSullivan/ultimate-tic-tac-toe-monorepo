import * as React from 'react';
import { Coordinate } from 'engine';
import GlobalSquare from '../GlobalSquare';
import CoordinateCell from '../Cells/CoordinateCell';
import EmptyCell from '../Cells/EmptyCell';
import {
  range,
  calcuateAlphaCoordinate,
  calculateNumericCoordinate
} from '../../../utils';
import { CoordinateCellValue } from '../../../types';
import styles from './GlobalBoard.module.scss';

const GlobalBoard = () => {
  return (
    <div className={styles.globalBoard}>
      {range(16).map((i: number) => {
        if (i === 12) {
          return <EmptyCell className={styles.emptyCell} />;
        }

        if (i >= 13) {
          return (
            <div className={styles.horizontalCoordinateContainer}>
              {range(3).map((k: number) => {
                const value = calcuateAlphaCoordinate({ i, k });
                return (
                  <CoordinateCell
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
            <div className={styles.verticalCoordinateContainer}>
              {range(3).map((k: number) => {
                const value = calculateNumericCoordinate({ i, k });
                return (
                  <CoordinateCell
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
        return <GlobalSquare key={value()} i={value() as Coordinate} />;
      })}
    </div>
  );
};

export default GlobalBoard;
