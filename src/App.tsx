import React, { useReducer, createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/Layout/Layout";

type PrefTypes = {
  prefCode: number;
  prefName: string;
};

type State = {
  checkedPrefs: Array<PrefTypes>;
};

type Action = {
  type: "ADD_PREFS";
  payload: PrefTypes;
};

const queryClient = new QueryClient();

export const AppContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_PREFS":
      return {
        ...state,
        checkedPrefs: [...state.checkedPrefs, action.payload],
      };

    default:
      return state;
  }
};

const initialState = {
  checkedPrefs: [],
};

const App: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
export default App;
