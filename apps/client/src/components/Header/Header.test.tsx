import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

test('loads and displays title', async () => {
  render(<Header />);

  expect(screen.getByRole('heading')).toHaveTextContent(
    /ultimate tic-tac-toe/i
  );
});
