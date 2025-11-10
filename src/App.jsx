import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutesContent from "./Routes.jsx";
import { Store } from "./Store/Store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a single QueryClient instance for the entire app
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutesContent />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
