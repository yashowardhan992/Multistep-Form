import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
  </StrictMode>
);
