import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
const thunkMiddleware = require("redux-thunk").default;

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
