import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./About";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Login from "./pages/login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Dashboard from "./pages/dashboard";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Analytics />
  </React.StrictMode>
);
