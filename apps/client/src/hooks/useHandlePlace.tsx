import * as React from 'react';
import { ApplicationContext } from '../contexts/ApplicationContext';

export const useHandlePlace = () => {
  const { handlePlace } = React.useContext(ApplicationContext);
  return handlePlace;
};
