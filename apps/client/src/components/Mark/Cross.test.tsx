import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Cross from './Cross';

test('displays Cross in the document', async () => {
  render(<Cross />);
  expect(screen.getByTestId('cross')).toBeInTheDocument();
});
