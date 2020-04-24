import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { addTime } from "./action";
import { Provider } from "react-redux";
import store from "./store.js";
import { initTimer } from "./middleware.js";

store.dispatch(initTimer());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
