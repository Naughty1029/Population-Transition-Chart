import React, { createContext, ReactChild, useReducer } from "react";
import { Action, State } from "@src/types/index";
import { reducer } from "@src/reducer/reducer";
import { initialState } from "@src/reducer/initialState";

export const AppContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

export const AppContextProvider = ({ children }: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
