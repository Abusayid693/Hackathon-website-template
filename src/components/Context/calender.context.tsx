import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useMemo
} from 'react';
import {calenderReducer, initialState} from '../reducers/calender.reducer';

export const calenderContext = createContext(initialState);

// @ts-ignore
export const CalenderContextProvider = ({children}) => {
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
