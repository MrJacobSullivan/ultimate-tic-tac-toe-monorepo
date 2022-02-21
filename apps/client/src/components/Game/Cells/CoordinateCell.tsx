import * as React from 'react';
import { CoordinateCellValue } from '../../../types';

const CoordinateCell = ({
  value,
  className
}: {
  value: CoordinateCellValue;
  className: string;
}) => {
  return <p className={className}>{String(value).toUpperCase()}</p>;
};

export default CoordinateCell;
