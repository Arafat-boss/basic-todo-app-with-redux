import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ThemeProvider } from "./Providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
