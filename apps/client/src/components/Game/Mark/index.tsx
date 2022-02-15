import * as React from 'react';
import Cross from './Cross';
import Circle from './Circle';
import { Mark as EngineMark } from 'engine';

const Mark = ({
  value,
  global = false
}: {
  value: EngineMark;
  global?: boolean;
}) => {
  if (value === 'X') return <Cross large={global} className="mark" />;
  if (value === 'O') return <Circle large={global} className="mark" />;
  return null;
};

export default Mark;
