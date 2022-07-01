import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "@components/Layout/Layout";
import { AppContextProvider } from "@src/provider/context";

const queryClient = new QueryClient();

const App: React.VFC = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </AppContextProvider>
  );
};
export default App;
