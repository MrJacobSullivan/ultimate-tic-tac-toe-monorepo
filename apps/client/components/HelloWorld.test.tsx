import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('tests', () => {
  test('it should', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Boop')).toBeInTheDocument();
  });
});
