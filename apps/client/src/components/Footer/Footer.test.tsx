import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';
import { GITHUB_REPO } from '../../config';

test('loads and displays GitHub link', async () => {
  render(<Footer />);

  const link = screen.getByRole('link');

  expect(link).toHaveTextContent(/Source Code on GitHub/i);
  expect(link).toHaveAttribute('href', GITHUB_REPO);
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
