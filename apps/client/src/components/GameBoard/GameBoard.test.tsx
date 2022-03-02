import * as React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from '.';

test('displays GameBoard in the document', async () => {
  render(<GameBoard />);
  expect(screen.getByTestId('gameBoard')).toBeInTheDocument();
});
