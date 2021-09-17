import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import "./fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
