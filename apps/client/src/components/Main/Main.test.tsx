import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '.';

test('loads and displays children content', async () => {
  const testId = 'child-component';
  const ChildComponent = () => <div data-testid={testId} />;

  render(
    <Main>
      <ChildComponent />
    </Main>
  );

  expect(screen.getByTestId(testId)).toBeInTheDocument();
});
