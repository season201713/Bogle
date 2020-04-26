import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { addTime } from "./action";
import { Provider } from "react-redux";
import store from "./store.js";
import { initTimer, getLetter } from "./middleware.js";

store.dispatch(initTimer());
store.dispatch(getLetter());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
