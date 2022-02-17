import * as React from 'react';
import { State } from 'engine';
import { ApplicationContext } from '../contexts/ApplicationContext';
import { useApplicationContextReducer } from '../hooks/useApplicationContextReducer';

const ApplicationContextProvider: React.FC<{
  initialState: State;
}> = ({ initialState, children }) => {
  const reducerValue = useApplicationContextReducer(initialState);

  return (
    <ApplicationContext.Provider value={reducerValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
