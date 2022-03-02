import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Circle from './Circle';

test('displays GameBoard in the document', async () => {
  render(<Circle />);
  expect(screen.getByTestId('circle')).toBeInTheDocument();
});
