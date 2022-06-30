import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/Layout/Layout";

type State = {
  prefCode: number;
  prefName: string;
};

const queryClient = new QueryClient();

export const AppContext = createContext(
  {} as {
    checkedPrefs: Array<State>;
    setCheckedPrefs: React.Dispatch<React.SetStateAction<Array<State>>>;
  }
);

const App: React.VFC = () => {
  const [checkedPrefs, setCheckedPrefs] = useState([] as Array<State>);
  return (
    <AppContext.Provider value={{ checkedPrefs, setCheckedPrefs }}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
export default App;
