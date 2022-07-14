import React, {createContext, useMemo, useReducer} from 'react';
import {calenderReducer, initialState} from '../reducers/calender.reducer';

export const calenderContext = createContext(initialState);

export const CalenderContextProvider: React.FC = ({children}) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(calenderReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    // @ts-ignore
    <calenderContext.Provider value={value}>
      {children}
    </calenderContext.Provider>
  );
};
