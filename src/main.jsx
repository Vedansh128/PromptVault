import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { PromptProvider } from "./context/PromptContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ThemeProvider>
    <PromptProvider>
      <App />
    </PromptProvider>
    </ThemeProvider>
  </React.StrictMode>
);
