import * as React from 'react';
import { ApplicationContext } from '../contexts/ApplicationContext';

export const useHandleSet = () => {
  const { handleSet } = React.useContext(ApplicationContext);
  return handleSet;
};
