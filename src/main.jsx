import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { reset } from "./assets/reset.jsx";
import { global } from "./assets/global.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <App />
  </React.StrictMode>
);
