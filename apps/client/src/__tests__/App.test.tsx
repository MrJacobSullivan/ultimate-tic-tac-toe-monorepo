import * as rtl from '@testing-library/react';
import * as user from '@testing-library/user-event';

import App from '../App';

test('Renders main page correctly', async () => {
  // setup
  rtl.render(<App />);
  const header = await rtl.screen.findByText('Home');

  // Pre Expecations
  // expect(buttonCount.innerHTML).toBe('count is: 0');
  // Instead of:
  // expect(codeCount).toBeNull();
  // expect(codeCount).not.toBeInTheDocument();

  // Init
  // user.click(buttonCount);
  // user.click(buttonCount);

  // post expectations
  expect(header).toBeInTheDocument();
});
