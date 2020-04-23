import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BoggleHeader from "./component/BoggleHeader";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <BoggleHeader />
  </React.StrictMode>,
  document.getElementById("root")
);
