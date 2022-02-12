import * as React from 'react';
import * as ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
