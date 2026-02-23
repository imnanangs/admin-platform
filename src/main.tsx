import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { HeroUIProvider } from "@heroui/react";
import App from "@/App";
import "./index.css";

const queryClient = new QueryClient();

function Providers() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate}>
      <App />
    </HeroUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Providers />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
