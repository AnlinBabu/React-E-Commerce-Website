import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "./store.ts";
import { Provider } from "react-redux";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} /> */}

      <App />
      {/* </QueryClientProvider> */}
    </Provider>
  </React.StrictMode>
);
