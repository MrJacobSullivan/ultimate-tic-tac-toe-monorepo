import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '.';

test('loads and displays children content', async () => {
  const testId = 'child-component';
  const ChildComponent = () => <div data-testid={testId} />;

  render(
    <Page>
      <ChildComponent />
    </Page>
  );

  expect(screen.getByTestId(testId)).toBeInTheDocument();
});
