import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "@components/Layout/Layout";
import { AppContextProvider } from "@src/provider/AppContextProvider";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App: React.VFC = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Layout />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppContextProvider>
  );
};
export default App;
