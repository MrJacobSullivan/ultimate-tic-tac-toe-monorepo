import { CoordinatePair } from 'engine';

const letters = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
];
const numbers = [
  ['9', '8', '7'],
  ['6', '5', '4'],
  ['3', '2', '1']
];

export const calculateAlphanumericCoordinate = ({ i, j }: CoordinatePair) => {
  const h = i % 3;
  const v = Math.floor(i / 3);

  const x = letters[h][h];
  const y = numbers[v][v];

  return { x, y };
};

export const calculateNumericCoordinate = ({
  i,
  k
}: {
  i: number;
  k: number;
}) => {
  return numbers[Math.floor(i / 4)][k];
};

export const calcuateAlphaCoordinate = ({ i, k }: { i: number; k: number }) => {
  return letters[(i % 4) - 1][k];
};
