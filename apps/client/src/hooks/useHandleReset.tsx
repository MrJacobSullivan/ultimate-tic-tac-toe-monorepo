import * as React from 'react';
import { ApplicationContext } from '../contexts/ApplicationContext';

export const useHandleReset = () => {
  const { handleReset } = React.useContext(ApplicationContext);
  return handleReset;
};
